export function CtaBand() {
  return (
    <section className="relative bg-primary py-16 md:py-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(0,0,0,0.1) 40px, rgba(0,0,0,0.1) 42px)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary-foreground leading-[0.95] text-balance">
          {"Warte nicht. Trainiere."}
        </h2>
        <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
          {"Vereinbare jetzt deine Gym Tour oder dein erstes Probetraining."}
        </p>
        <a
          href="#kontakt"
          className="inline-block mt-8 bg-background text-foreground px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
        >
          Jetzt Kontakt aufnehmen
        </a>
      </div>
    </section>
  )
}
