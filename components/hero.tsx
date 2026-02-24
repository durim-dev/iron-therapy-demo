import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-gym.jpg"
          alt="Iron Therapy Gym Interieur"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-24">
        <p className="text-primary text-sm uppercase tracking-[0.4em] font-semibold mb-6">
          Privatgym & Personal Training
        </p>

        <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-foreground leading-[0.9] text-balance">
          {"You Can't"}
          <br />
          <span className="text-primary">Fake</span> Strength
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
          Dein privates Gym in Hamburg. Professionelles Equipment, exklusives
          Umfeld, echtes Training. Keine Kompromisse.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#angebot"
            className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Entdecke dein Angebot
          </a>
          <a
            href="#ueber-uns"
            className="border border-border text-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
          >
            Gym Tour
          </a>
        </div>

        {/* Opening hours badge */}
        <div className="mt-16 inline-flex items-center gap-3 border border-border px-6 py-3 bg-background/50 backdrop-blur-sm">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Mo-Fr 05:00-22:00 &middot; Sa-So 07:00-20:00
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#angebot"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          aria-label="Nach unten scrollen"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
