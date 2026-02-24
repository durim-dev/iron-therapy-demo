"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#angebot", label: "Angebot" },
  { href: "#ueber-uns", label: "Über Uns" },
  { href: "#equipment", label: "Equipment" },
  { href: "#kontakt", label: "Kontakt" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-sans text-xl font-bold uppercase tracking-[0.2em] text-foreground">
            Iron Therapy
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Privatgym Hamburg
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Jetzt starten
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold uppercase tracking-widest text-center hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Jetzt starten
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
