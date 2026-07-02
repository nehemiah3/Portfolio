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
  title: "Web Developer & Communications Specialist",
  tagline:
    "Computer Science student building web apps and bots, with 2+ years of experience in communications, content, and operations for NGOs and digital platforms.",
  email: "nehemiahhosea12@gmail.com",
  location: "Addis Ababa, Ethiopia",
}

export const about = {
  paragraphs: [
    "I'm a Computer Science student at Unity University and a communications professional who enjoys building practical web applications and automation tools. I currently serve as Communications & Media Officer at Enderase Youth Association, where I also manage the organization's website and digital presence.",
    "I work with JavaScript, Node.js, and Tailwind CSS to build websites and Telegram bots, and I bring a strong background in content creation, SEO writing, and operations. I care about clean, reliable solutions that help teams and communities run more smoothly.",
  ],
  skills: [
    "JavaScript",
    "Node.js",
    "Tailwind CSS",
    "HTML & CSS",
    "Telegram Bot API",
    "WordPress",
    "SEO & Content Writing",
    "Git",
  ],
}

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/nehemiah3" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nehemiah-hosea-72060b209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  { label: "Email", href: "mailto:nehemiahhosea12@gmail.com" },
]

export const projects: Project[] = [
  {
    title: "Enderase Membership Bot",
    description:
      "A Telegram bot that automates membership registration and management for Enderase Youth Association, streamlining onboarding and member communications.",
    tags: ["Node.js", "JavaScript", "Telegram Bot API"],
    repoUrl: "https://github.com/nehemiah3/Enderase_Membership_Bot",
  },
  {
    title: "Enderase Youth Association Website",
    description:
      "The official website for Enderase Youth Association, built to showcase the organization's programs, events, and updates with a clean, responsive design.",
    tags: ["Node.js", "Tailwind CSS", "HTML"],
    liveUrl: "#",
    repoUrl: "#",
  },
]
