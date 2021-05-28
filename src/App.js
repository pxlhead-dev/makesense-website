import React from 'react'
import { Route } from 'react-router-dom'
import Scrollbar from 'react-smooth-scrollbar'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Features from './components/Features'
import Articles from './components/Articles'
import CTA from './components/CTA'

function App() {
  return (
    <Route path="/">
      <Header />
      <Scrollbar tabIndex={0} damping={0.2} className="w-screen h-screen overflow-hidden">
        <Hero />
        <Features />
        <Articles />
        <CTA />
        <Footer />
      </Scrollbar>
    </Route>
  )
}

export default App
