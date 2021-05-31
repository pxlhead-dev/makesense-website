import React, { useState } from 'react'
import { Play, MoreVertical, FileText } from 'react-feather'
import { useTrail, animated, config, useSpring } from '@react-spring/web'

const notes = [
  {
    title: 'Transfers are instant1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
  {
    title: 'Transfers are instant2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
  {
    title: 'Transfers are instant3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
  {
    title: 'Transfers are instant4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
]

const Note = ({ title, text }) => {
  const [xys, set] = useState([0, 0, 1])
  const trans = (x, y, s) => `translateX(${x}%) translateY(${y}%) scale(${s})`

  const props = useSpring({
    xys,
    config: config.gentle,
  })
  return (
    <animated.div
      style={{
        transform: props.xys.to(trans),
      }}
      onMouseLeave={() => set([0, 0, 1])}
      onMouseMove={() => {
        set([-5, 0, 1.1])
      }}
      className="p-3 w-84 bg-white rounded-md space-y-2 border border-dark-200 shadow-sm cursor-pointer"
    >
      <div className="flex justify-between">
        <span className="flex items-center space-x-2">
          <FileText size={16} />
          <h4 className="font-medium text-lg">{title}</h4>
        </span>
        <button className="bg-transparent cursor-pointer p-0.5 ml-1 -mr-1 rounded hover:bg-gray-100">
          <MoreVertical size={16} className="dark:text-white" />
        </button>
      </div>
      <p className="mt-2 leading-6 opacity-75">{text}</p>
    </animated.div>
  )
}

const Articles = () => {
  const [showOnScroll, setShowOnScroll] = useState(false)

  const handleIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        setShowOnScroll(true)
      } else {
        setShowOnScroll(false)
      }
    })
  }

  const setObserver = (element) => {
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 })
    observer.observe(element)
  }
  const notesTrail = useTrail(notes.length, {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: showOnScroll ? 1 : 0, transform: showOnScroll ? 'scale(1)' : 'scale(0)' },
    config: config.gentle,
  })
  return (
    <section
      ref={(ref) => {
        setObserver(ref)
      }}
      className="w-full flex justify-between items-center py-16 md:py-0 md:h-screen bg-dotsWhite"
    >
      <div className="w-full flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between items-center max-w-5xl px-4 mx-auto">
        <div className="flex-1 max-w-md flex flex-col items-start z-10">
          <span className="font-display text-lg mb-6">Need more?</span>
          <h2 className="font-display font-medium text-5xl max-w-lg mb-6">
            Read our articles to understand how Mind Palace works
          </h2>
          <p className="mb-10">
            Create screens directly in Method or add your images from Sketch or Figma. You can even
            sync designs from your cloud storage!
          </p>
          <button className="flex space-x-3 items-center group">
            <span className="px-4 py-2 bg-primary-400 text-white rounded-full">
              <Play size="16" />
            </span>
            <span className="group-hover:underline">Open Knowledge Base</span>
          </button>
        </div>
        <div className="flex-1 flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-8 justify-start overflow-hidden items-end z-10 h-full overflow-y-auto">
          {notesTrail.map((props, index) => (
            <animated.div key={notes[index].title} style={props}>
              <Note key={notes[index].title} title={notes[index].title} text={notes[index].text} />
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
