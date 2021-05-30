import React, { useState } from 'react'
import { Package } from 'react-feather'
import ReactTooltip from 'react-tooltip'
import { useSpring, useTrail, animated, config } from '@react-spring/web'

const transX = (x, y, s) => `translate(${x}px, ${y}px) scale(${s})`

const features = [
  {
    icon: Package,
    title: 'AI-based Semantic Core',
    text: 'Create screens directly in Method or add your images from Sketch or Figma.',
  },
  {
    icon: Package,
    title: 'Relations that matters',
    text: 'Create screens directly in Method or add your images from Sketch or Figma.',
  },
  {
    icon: Package,
    title: 'Cutting-edge Note Editor',
    text: 'Create screens directly in Method or add your images from Sketch or Figma.',
  },
  {
    icon: Package,
    title: 'API Search to Research',
    text: 'Create screens directly in Method or add your images from Sketch or Figma.',
  },
  {
    icon: Package,
    title: 'Import your notes from Notion',
    text: 'Create screens directly in Method or add your images from Sketch or Figma.',
  },
  {
    icon: Package,
    title: 'Share your thoughts or Coop',
    text: 'Create screens directly in Method or add your images from Sketch or Figma.',
  },
]

const Feature = ({ icon, title, text }) => {
  const Icon = icon
  const [xys, set] = useState([0, 0, 1])
  const props = useSpring({ xys, config: config.gentle })

  return (
    <div
      data-for="note"
      data-tip
      onMouseLeave={() => set([0, 0, 1])}
      onMouseMove={(e) => {
        // const rect = ref.current.getBoundingClientRect()
        set([50, 50, 10])
      }}
      className="relative flex flex-col justify-between items-start w-full p-4 cursor-pointer rounded-2xl overflow-hidden"
    >
      <animated.div
        style={{ transform: props.xys.to(transX) }}
        className="absolute top-4 left-4 w-12 h-12 rounded-full bg-accent-indigo"
      />
      <div className="p-4 rounded-full mb-4 z-10">
        <Icon size={16} />
      </div>
      <div className="flex flex-col">
        <h6 className="text-xl font-medium mb-0.2 z-10">{title}</h6>
        <span className="text-sm text-inherit opacity-70">{text}</span>
      </div>
    </div>
  )
}

const Features = () => {
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

  const featuresTrail = useTrail(features.length, {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: showOnScroll ? 1 : 0, transform: showOnScroll ? 'scale(1)' : 'scale(0)' },
    config: config.gentle,
  })
  return (
    <section
      ref={(ref) => {
        setObserver(ref)
      }}
      className="w-full flex flex-col justify-center items-center py-16 md:py-0 md:h-screen bg-gray-50"
    >
      <div className="w-full flex flex-col justify-center items-center max-w-5xl px-4 mx-auto">
        <div className="w-full flex justify-between items-end mb-16">
          <h2 className="font-display font-medium text-5xl max-w-lg">
            Structure everything you get in mind
          </h2>
          <span className="text-gray-600 text-sm hidden md:block">hover to preview</span>
        </div>
        <div className="w-full grid grid-flow-row md:grid-cols-3 gap-6 py-4 max-w-full">
          {featuresTrail.map((props, index) => (
            <animated.div key={features[index].title} style={props}>
              <Feature
                key={features[index].title}
                icon={features[index].icon}
                title={features[index].title}
                text={features[index].text}
              />
            </animated.div>
          ))}
        </div>
      </div>
      <ReactTooltip id="note" delayShow={200} className="tooltip tooltip-xl">
        <div className="w-48">
          <span className="text-sm font-medium my-4">Create Note</span>
          <p className="text-xs font-normal text-gray-200 my-1">
            Core is an entity that contains semantic information about notes inside
          </p>
          <img
            src="https://source.unsplash.com/GXNo-OJynTQ/400x400"
            className="object-cover w-full h-24 mt-2 rounded-sm"
          />
        </div>
      </ReactTooltip>
    </section>
  )
}

export default Features
