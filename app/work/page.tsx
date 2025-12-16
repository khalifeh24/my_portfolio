import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

const projects = [
  {
    title: "AutoHub Service Center",
    description:
      " Service Center platform built with React and Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "download.png",
    github: "#",
    live: "https://joautohub.com/en",
    featured: true,
  },
  {
    title: "Digital Feelings Marketing Agency",
    description:
      "drag-and-drop functionality, real-time updates, and team collaboration features.",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "\screencapture-dfeelings-en-2025-10-01-23_51_12.png",
    github: "#",
    live: "https://dfeelings.com/en",
    featured: true,
  },

  {
    title: "bekdash usa Online Store",
    description:
      "drag-and-drop f real-time updates, and team collaboration features.",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    image: "\screencapture-bekdash-us-2025-10-01-23_48_17.png",
    github: "#",
    live: "https://bekdash.us/?srsltid=AfmBOopnhXU5_PjefFD4E79n_7YCcGckPlqEy2oZs2057RRkoi89MprY",
    featured: true,
  },

  {
    title: "Portfolio ",
    description:
      "A creative portfolio website for a photographer, featuring smooth animations, image galleries, and a custom CMS for easy content management.",
    tags: ["Figma"],
    image: "WhatsApp Image 2025-12-16 at 18.20.36_7a73f424.JPG",
    github: "#",
    live: "https://www.figma.com/design/tViLQdIHmvOnqtMUlldqXi/Untitled?node-id=0-1&t=KgOmkQiWHXl0Fi9I-1",
    featured: false,
  },
  
  
 
]

export default function WorkPage() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <main className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            My <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            A collection of projects I've worked on, showcasing my skills in front-end development, UI/UX design, and
            modern web technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 glass-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.live}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* UI/UX Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 glass-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <a
                      href={project.live}
                      className="p-1.5 rounded-lg hover:bg-muted transition-colors flex-shrink-0"
                      aria-label="View project"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <h2 className="text-3xl md:text-4xl font-bold">Interested in working together?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <a
              href="mailto:abdullah_khalifchh@outlook.com"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              href="/"
              className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
