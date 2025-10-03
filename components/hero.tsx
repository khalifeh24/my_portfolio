import { Mail, MapPin, Phone, ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-3 duration-500">
              Available for freelance work
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-balance animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              <br />
              <span className="gradient-text">ABDULLAH KHALIFAH</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium animate-in fade-in slide-in-from-bottom-5 duration-900">
              UI/UX Designer & Front-end Developer
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <a
              href="mailto:abdullah_khalifchh@outlook.com"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              abdullah_khalifchh@outlook.com
            </a>
            <a href="tel:+962790578443" className="flex items-center gap-2 hover:text-primary transition-colors group">
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              +962 790 578 443
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Amman, Jordan
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed pt-6 animate-in fade-in slide-in-from-bottom-7 duration-1100">
            I build accessible, pixel-perfect digital experiences for the web, crafting interactive user interfaces that
            blend thoughtful design with robust engineering.
          </p>

          <div className="flex flex-wrap gap-4 pt-8 animate-in fade-in slide-in-from-bottom-8 duration-1200">
            <Link
              href="/work"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              View My Work
              <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
    </section>
  )
}
