import { useState } from "react"
import { CheckCircle2, Loader2, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { profile, socials } from "@/data/portfolio"

const FORM_NAME = "contact"

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&")
}

type Status = "idle" | "submitting" | "success" | "error"

export function Contact() {
  const [status, setStatus] = useState<Status>("idle")
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": FORM_NAME, ...form }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus("success")
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="mt-2 text-muted-foreground">
          Have a project in mind or just want to say hi? Send me a message.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <Mail className="size-4" />
            {profile.email}
          </a>
          <div className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-start justify-center gap-3 rounded-xl border bg-card p-6">
            <CheckCircle2 className="size-8 text-green-600" />
            <p className="font-medium">Thanks for reaching out!</p>
            <p className="text-sm text-muted-foreground">
              Your message has been sent. I&apos;ll get back to you soon.
            </p>
            <Button variant="outline" size="sm" onClick={() => setStatus("idle")}>
              Send another
            </Button>
          </div>
        ) : (
          <form
            name={FORM_NAME}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="jane@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again or email me directly.
              </p>
            )}

            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" && (
                <Loader2 className="animate-spin" />
              )}
              {status === "submitting" ? "Sending..." : "Send message"}
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
