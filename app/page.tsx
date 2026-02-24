import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Benefits } from "@/components/benefits"
import { Equipment } from "@/components/equipment"
import { CtaBand } from "@/components/cta-band"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Benefits />
      <Equipment />
      <CtaBand />
      <Contact />
      <Footer />
    </main>
  )
}
