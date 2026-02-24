export function About() {
  return (
    <section id="ueber-uns" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img
                src="/images/equipment.jpg"
                alt="Iron Therapy Equipment Nahaufnahme"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -right-2 md:right-6 bg-primary text-primary-foreground p-6">
              <span className="font-sans text-4xl font-bold block">4</span>
              <span className="text-xs uppercase tracking-[0.2em]">Power Racks</span>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.4em] font-semibold mb-4">
              {"\u00dcber Iron Therapy"}
            </p>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[0.95] mb-8 text-balance">
              Gebaut aus
              <br />
              Leidenschaft.
            </h2>
            <div className="flex flex-col gap-5 text-muted-foreground leading-relaxed">
              <p>
                {"Willkommen bei Iron Therapy. Gegr\u00fcndet von Rudi \u2013 Strength Coach mit Leidenschaft f\u00fcr echtes Training. Weil kein bestehendes Studio unseren Anspr\u00fcchen gerecht wurde, haben wir unser eigenes gebaut."}
              </p>
              <p>
                {"Iron Therapy ist ein privates Gym, speziell ausgerichtet auf Personal Training. Voll ausgestattet mit Profi-Equipment, das keine W\u00fcnsche offen l\u00e4sst. Anders als die gro\u00dfen Ketten deckeln wir die Anzahl unserer Mitglieder \u2013 f\u00fcr maximale Exklusivit\u00e4t."}
              </p>
              <p>
                {"Egal, ob du selbst Personal Trainer bist, Personal Training erleben m\u00f6chtest, oder dein Training auf eigene Faust durchziehst \u2013 bei uns bist du richtig."}
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              <div>
                <span className="font-sans text-3xl md:text-4xl font-bold text-primary block">17m</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Indoor-Rasen
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl md:text-4xl font-bold text-primary block">47.5</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  kg Kurzhantel max
                </span>
              </div>
              <div>
                <span className="font-sans text-3xl md:text-4xl font-bold text-primary block">24/7</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Zugang f. Trainer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
