import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-surface"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
