"use client"

import { MapPin, Mail, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="kontakt" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.4em] font-semibold mb-4">
              Kontakt
            </p>
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground leading-[0.95] mb-8 text-balance">
              {"Bereit f\u00fcr"}
              <br />
              <span className="text-primary">echtes Training?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg">
              {"Schreib uns eine Nachricht oder komm einfach vorbei. Wir zeigen dir gerne unser Gym und finden gemeinsam das passende Angebot f\u00fcr dich."}
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center border border-border text-primary shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Adresse
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {"Osterstra\u00dfe 45, 20259 Hamburg"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center border border-border text-primary shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    E-Mail
                  </p>
                  <a
                    href="mailto:info@iron-therapy.de"
                    className="text-sm text-primary hover:underline mt-1 block"
                  >
                    info@iron-therapy.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex items-center justify-center border border-border text-primary shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Trainingszeiten
                  </p>
                  <div className="text-sm text-muted-foreground mt-1 flex flex-col gap-1">
                    <span>Mo - Fr: 05:00 - 22:00 Uhr</span>
                    <span>Sa - So: 07:00 - 20:00 Uhr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Owner line */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {"Inhaber & Strength Coach"}
              </p>
              <p className="font-sans text-lg font-bold uppercase tracking-tight text-foreground mt-1">
                {"R\u00fcdiger Freutel"}
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-card border border-border p-8 md:p-10">
            <h3 className="font-sans text-xl font-bold uppercase tracking-tight text-foreground mb-2">
              Schreib uns
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              {"Wir melden uns innerhalb von 24 Stunden bei dir."}
            </p>

            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Dein Name"
                  className="bg-input border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  E-Mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="deine@email.de"
                  className="bg-input border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="interest"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Interesse
                </label>
                <select
                  id="interest"
                  className="bg-input border border-border text-foreground px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {"W\u00e4hle dein Interesse"}
                  </option>
                  <option value="pt-client">{"Personal Training f\u00fcr mich"}</option>
                  <option value="pt-trainer">{"Ich bin Personal Trainer"}</option>
                  <option value="solo">{"Training auf eigene Faust"}</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Deine Nachricht..."
                  className="bg-input border border-border text-foreground px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-opacity mt-2"
              >
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
