import { Dumbbell, Shield, Users, Clock, Target, Heart, Lock, Flame } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "1:1 Betreuung",
    description: "Individueller Trainingsplan, zugeschnitten auf deine Ziele und Bed\u00fcrfnisse.",
  },
  {
    icon: Shield,
    title: "Sicherheit & Technik",
    description: "Korrekte Aus\u00fchrung, Verletzungsprevention und maximale Effektivit\u00e4t.",
  },
  {
    icon: Target,
    title: "Effizienz & Analyse",
    description: "Zielorientierte Workouts mit Progressionsanalyse f\u00fcr kontinuierlichen Fortschritt.",
  },
  {
    icon: Dumbbell,
    title: "Wissen & Erfahrung",
    description: "Sportwissenschaft trifft Praxis. Theorie allein reicht nicht \u2013 Erfahrung macht den Unterschied.",
  },
  {
    icon: Heart,
    title: "Ern\u00e4hrungsberatung",
    description: "Gezielte Ern\u00e4hrung als Fundament: Das richtige Training beginnt in der K\u00fcche.",
  },
  {
    icon: Clock,
    title: "Flexibilit\u00e4t & Komfort",
    description: "Flexible Trainingszeiten, die sich nach deinen W\u00fcnschen richten.",
  },
  {
    icon: Lock,
    title: "Privatsph\u00e4re",
    description: "Kein Massenpublikum. Privates 1:1-Setting in vertrauter Umgebung.",
  },
  {
    icon: Flame,
    title: "Gegen den Schweinehund",
    description: "Wir spornen dich an, fordern dich und halten dich auf Kurs. Gemeinsam zum Erfolg.",
  },
]

export function Benefits() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="text-primary text-xs uppercase tracking-[0.4em] font-semibold mb-4">
            Warum Personal Training
          </p>
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[0.95] text-balance">
            8 Gr\u00fcnde, die
            <br />
            <span className="text-muted-foreground">\u00fcberzeugen.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="bg-background p-8 flex flex-col gap-4 group hover:bg-secondary transition-colors"
              >
                <div className="h-10 w-10 flex items-center justify-center border border-border group-hover:border-primary group-hover:text-primary transition-colors text-muted-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-lg font-bold uppercase tracking-tight text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
