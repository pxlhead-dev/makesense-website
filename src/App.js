import React from 'react'
import SmoothScrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import Scrollbar from 'react-smooth-scrollbar'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Features from './components/Features'
import Articles from './components/Articles'
import Automatization from './components/Automatization'
import CTA from './components/CTA'

SmoothScrollbar.use(OverscrollPlugin)

function App() {
  return (
    <>
      <Header />
      <Scrollbar
        tabIndex={0}
        damping={0.2}
        plugins={{ enable: true, damping: 0.3 }}
        className="w-screen h-screen overflow-hidden"
      >
        <Hero />
        <Features />
        <Automatization />
        <Articles />
        <CTA />
        <Footer />
      </Scrollbar>
    </>
  )
}

export default App
