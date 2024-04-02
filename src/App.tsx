import { useState } from 'react'
import Hero from './sections/Hero'
import Footer from './sections/Footer'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Upsale from './sections/Upsale'
import CTA from './sections/CTA'
import FAQ from './sections/FAQ'

function App() {
  return (
    <main className="w-full h-full">
      <Hero />
      <Problem />
      <Solution />
      <Upsale />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  )
}

export default App
