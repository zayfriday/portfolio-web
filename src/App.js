import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Qualifications from './components/Qualifications'

function App() {
  return (
    <div className='overflow-x-hidden text-slate-400 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* <div className="absolute top-0 z-[-2] h-screen w-screen 
         [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full
           bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full
           bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Qualifications />
        <Contact />
      </div>

      <div className='flex flex-col'>
        <Footer />
      </div>
    </div>
  )
}

export default App