import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { profile } from "@/data/portfolio"

export function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col items-start px-4 py-20 sm:px-6 md:py-28"
    >
      <p className="mb-3 text-sm font-medium text-muted-foreground">
        Hi, my name is
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {profile.name}
      </h1>
      <h2 className="mt-2 text-2xl font-semibold text-muted-foreground sm:text-3xl">
        {profile.title}
      </h2>
      <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href="#projects">
            View my work
            <ArrowRight />
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#contact">
            <Mail />
            Get in touch
          </a>
        </Button>
      </div>
    </section>
  )
}
