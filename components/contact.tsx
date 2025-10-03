import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-primary mb-8 font-medium">Get In Touch</h2>

        <Card className="p-8 md:p-12 bg-card border-border">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-balance">Let's work together</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm currently available for freelance work and open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:abdullah_khalifchh@outlook.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">abdullah_khalifchh@outlook.com</p>
                </div>
              </a>

              <a
                href="tel:+962790578443"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+962 790 578 443</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Amman, Jordan</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Languages</p>
                  <p className="font-medium">Arabic (Native), English (B2)</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors bg-transparent"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors bg-transparent"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
