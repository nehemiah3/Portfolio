export type Project = {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
}

export type SocialLink = {
  label: string
  href: string
}

export const profile = {
  name: "Nehemiah Hosea",
  title: "Full-Stack Developer",
  tagline:
    "I build fast, accessible web applications with modern tooling — from idea to production.",
  email: "nehemiahhosea12@gmail.com",
  location: "Remote",
}

export const about = {
  paragraphs: [
    "I'm a full-stack developer who enjoys turning complex problems into clean, intuitive products. I work primarily with React, TypeScript, and Node.js, and care deeply about performance, accessibility, and developer experience.",
    "When I'm not shipping features, I'm exploring new tools, contributing to side projects, and continuously sharpening my craft.",
  ],
  skills: [
    "TypeScript",
    "React",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Next.js",
    "Git",
    "REST APIs",
  ],
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/nehemiah3" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
]

export const projects: Project[] = [
  {
    title: "TaskFlow",
    description:
      "A collaborative task manager with real-time updates, drag-and-drop boards, and team workspaces.",
    tags: ["React", "TypeScript", "WebSockets", "PostgreSQL"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "DevNotes",
    description:
      "A markdown-first note-taking app for developers with code syntax highlighting and instant search.",
    tags: ["Next.js", "Tailwind CSS", "Prisma"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "WeatherWise",
    description:
      "A clean weather dashboard aggregating multiple forecast APIs with saved locations and charts.",
    tags: ["React", "Vite", "REST APIs", "Recharts"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "ShopKit",
    description:
      "A headless e-commerce starter with cart, checkout, and Stripe payments ready out of the box.",
    tags: ["Node.js", "Stripe", "TypeScript"],
    liveUrl: "#",
    repoUrl: "#",
  },
]
