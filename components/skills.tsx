import { Badge } from "@/components/ui/badge"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "React Native",
  "Bootstrap",
  "Git",
  "Flutter (Dart)",
  "Python",
  "UI Design",
  "Frontend Implementation",
  "User Interface Design",
]

export function Skills() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-primary mb-8 font-medium">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
