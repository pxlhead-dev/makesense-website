import React from 'react'
import { Package } from 'react-feather'
import { useTrail, animated } from '@react-spring/web'

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

  return (
    <animated.div className="flex flex-col justify-between items-start w-full py-4 cursor-pointer">
      <div className="p-4 rounded-full bg-accent-indigo mb-4">
        <Icon size={16} />
      </div>
      <div className="flex flex-col">
        <h6 className="text-xl font-medium mb-0.2">{title}</h6>
        <span className="text-sm text-inherit opacity-70">{text}</span>
      </div>
    </animated.div>
  )
}

const Features = () => {
  const featuresTrail = useTrail(features.length, {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 250 },
  })
  return (
    <section className="w-full flex flex-col justify-center items-center h-screen bg-dark-100">
      <div className="w-full flex flex-col justify-center items-center max-w-5xl px-4 mx-auto">
        <div className="w-full flex justify-between items-end mb-16">
          <h2 className="font-display font-medium text-5xl max-w-lg">
            Structure everything you get in mind
          </h2>
          <span className="text-gray-600 text-sm">hover to preview</span>
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
    </section>
  )
}

export default Features
