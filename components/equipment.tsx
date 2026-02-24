const equipmentItems = [
  "4 Power Racks",
  "17m Indoor-Rasenfl\u00e4che",
  "Power Sled",
  "Seilz\u00fcge",
  "Diverse Kraftstationen",
  "Kurzhanteln 1\u201347,5 kg",
  "Athletik-Equipment",
  "Profi-Langhantelstangen",
]

export function Equipment() {
  return (
    <section id="equipment" className="bg-secondary py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.4em] font-semibold mb-4">
              Equipment
            </p>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[0.95] mb-8 text-balance">
              Kein Schnickschnack.
              <br />
              <span className="text-muted-foreground">Nur das Echte.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              {"Praxiserprobt. Oldschool. Equipment f\u00fcr hartes, schweres Training. Ausgew\u00e4hlt f\u00fcr ernsthafte Athleten, die wissen, was funktioniert."}
            </p>

            {/* Equipment list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {equipmentItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 py-3 border-b border-border"
                >
                  <div className="h-1 w-6 bg-primary shrink-0" />
                  <span className="text-sm text-foreground uppercase tracking-wider">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="inline-block mt-10 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Gym Tour anfragen
            </a>
          </div>

          {/* Image side */}
          <div className="relative">
            <img
              src="/images/hero-gym.jpg"
              alt="Iron Therapy Gym Equipment \u00dcbersicht"
              className="w-full h-[600px] object-cover"
            />
            {/* Overlay quote */}
            <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm p-6 md:p-8">
              <blockquote className="font-sans text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground">
                {'"The Real Deal"'}
              </blockquote>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                {"Equipment f\u00fcr ernsthaftes Training"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
