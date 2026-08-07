import { Code2, ExternalLink } from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/portfolio"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-muted-foreground">
          A selection of things I&apos;ve built.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              {project.liveUrl && (
                <Button asChild size="sm" variant="outline">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink />
                    Live
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button asChild size="sm" variant="ghost">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Code2 />
                    Code
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
