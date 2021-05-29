import React, { useRef, useEffect, useState } from 'react'
import { HashRouter } from 'react-router-dom'
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

function App() {
  const containerElement = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(
    () => {
      const scrollbar = SmoothScrollbar.init(containerElement.current, {
        tabIndex: 0,
        damping: 0.2,
        plugins: { enable: true, damping: 0.3 },
      })
      SmoothScrollbar.use(OverscrollPlugin)

      scrollbar.addListener((status) => {
        setScrollPosition(scrollbar.offset.y)
      })
      return () => {
        scrollbar.removeListener((status) => {
          setScrollPosition(scrollbar.offset.y)
        })
      }
    },
    [],
    []
  )

  return (
    <>
      <Header />
      <div ref={containerElement} className="w-screen h-screen overflow-hidden">
        <Hero scrollPosition={scrollPosition} />
        <Features />
        <Automatization />
        <Articles />
        <CTA />
        <Footer />
      </div>
    </>
  )
}

export default App
