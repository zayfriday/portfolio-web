import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Qualifications from './components/Qualifications'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen 
         [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">

        </div>
      </div>

      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Qualifications />
        <Projects />

        <Contact />
      </div>

      <div className='py-4'>
        <Footer />
      </div>
    </div>
  )
}

export default App