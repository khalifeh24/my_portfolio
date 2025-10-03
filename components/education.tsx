import { Card } from "@/components/ui/card"

const training = [
  { name: "ASP.NET", provider: "The Hope" },
  { name: "HTML Development", provider: "Orange" },
  { name: "CSS Development", provider: "Orange" },
  { name: "JavaScript Development", provider: "Orange" },
  { name: "React Native", provider: "Orange" },
  { name: "Python", provider: "Orange" },
]

export function Education() {
  return (
    <section id="education" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-primary mb-8 font-medium">Education & Training</h2>

        <div className="space-y-6">
          <Card className="p-8 bg-card border-border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Bachelor's Degree</h3>
                <p className="text-muted-foreground">Zarqa University</p>
              </div>
              <p className="text-muted-foreground font-mono text-sm">August 2018 – May 2023</p>
            </div>
          </Card>

          <Card className="p-8 bg-card border-border">
            <h3 className="text-xl font-bold mb-6">Professional Training</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {training.map((course) => (
                <div key={course.name} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-foreground">{course.name}</p>
                    <p className="text-sm">{course.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
