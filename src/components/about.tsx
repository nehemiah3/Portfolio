import { Badge } from "@/components/ui/badge"
import { about } from "@/data/portfolio"

export function About() {
  return (
    <section
      id="about"
      className="border-t bg-muted/30"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div className="space-y-4 text-muted-foreground md:col-span-2">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {about.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
