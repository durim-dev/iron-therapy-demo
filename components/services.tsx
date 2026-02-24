import { ArrowRight } from "lucide-react"

const services = [
  {
    tag: "Individuell",
    title: "Personal Training f\u00fcr Dich",
    description:
      "Individuell, effektiv, erfolgreich. Du kennst deine Ziele \u2013 wir bringen dich hin. 1:1 Betreuung mit ma\u00dfgeschneidertem Trainingsplan in privatem Umfeld.",
    image: "/images/personal-training.jpg",
    cta: "Jetzt starten",
    href: "#kontakt",
    features: ["1:1 Betreuung", "Individuelle Trainingspl\u00e4ne", "Ern\u00e4hrungsberatung"],
  },
  {
    tag: "F\u00fcr Trainer",
    title: "Deine Fl\u00e4che als PT",
    description:
      "Professionelles Equipment, private Atmosph\u00e4re, eigenst\u00e4ndiger Zugang. Hebe dich von der Konkurrenz ab und biete deinen Kunden ein Premium-Erlebnis.",
    image: "/images/trainer-space.jpg",
    cta: "Mehr erfahren",
    href: "#kontakt",
    features: ["Eigenst\u00e4ndiger Zugang", "Voll ausgestattetes Gym", "Limitierte Mitglieder"],
  },
  {
    tag: "Hardcore",
    title: 'The "Real Deal"',
    description:
      "Kein Instagram, kein Schnickschnack. Profi-Equipment f\u00fcr ernsthaftes Training. Oldschool. Hart. Ehrlich. F\u00fcr alle, die wissen, warum sie hier sind.",
    image: "/images/solo-training.jpg",
    cta: "Auf geht\u2019s",
    href: "#kontakt",
    features: ["Profi-Equipment", "Privates Umfeld", "Keine Kompromisse"],
  },
]

export function Services() {
  return (
    <section id="angebot" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-primary text-xs uppercase tracking-[0.4em] font-semibold mb-4">
            Unser Angebot
          </p>
          <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground leading-[0.95] text-balance">
            Drei Wege.
            <br />
            <span className="text-muted-foreground">Ein Ziel.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border overflow-hidden flex flex-col hover:border-primary/50 transition-colors"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-bold">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <h3 className="font-sans text-2xl font-bold uppercase tracking-tight text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <div className="h-px w-4 bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
                >
                  {service.cta}
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
