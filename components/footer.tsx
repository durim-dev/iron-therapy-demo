export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-sans text-xl font-bold uppercase tracking-[0.2em] text-foreground">
                Iron Therapy
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] mt-1">
                Privatgym Hamburg
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {
                "Privates Gym f\u00fcr Personal Training und Strength Training in Hamburg-Eppendorf."
              }
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em]  mb-4 font-semibold">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              <a
                href="#angebot"
                className="text-sm  hover:text-primary transition-colors"
              >
                Angebot
              </a>
              <a
                href="#ueber-uns"
                className="text-sm hover:text-primary transition-colors"
              >
                {"\u00dcber Uns"}
              </a>
              <a
                href="#equipment"
                className="text-sm hover:text-primary transition-colors"
              >
                Equipment
              </a>
              <a
                href="#kontakt"
                className="text-sm hover:text-primary transition-colors"
              >
                Kontakt
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold">
              Kontakt
            </p>
            <div className="flex flex-col gap-2 text-sm ">
              <span>{"R\u00fcdiger Freutel"}</span>
              <span>{"Osterstra\u00dfe 45"}</span>
              <span>20259 Hamburg</span>
              <a
                href="mailto:info@iron-therapy.de"
                className="text-primary hover:underline"
              >
                info@iron-therapy.de
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs ">
            {"\u00a9 2026 Iron Therapy. Alle Rechte vorbehalten."}
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs hover:text-primary transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-xs hover:text-primary transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
