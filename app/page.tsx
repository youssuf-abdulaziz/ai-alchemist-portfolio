import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Work } from "@/components/sections/work"
import { Contact } from "@/components/sections/contact"

export default function Page() {
  return (
    <div className="grain">
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
