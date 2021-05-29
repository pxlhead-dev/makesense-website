import React from 'react'
import { Zap, MoreVertical, FileText } from 'react-feather'
import { useTrail, animated } from '@react-spring/web'

const notes = [
  {
    title: 'Transfers are instant',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
  {
    title: 'Transfers are instant',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
  {
    title: 'Transfers are instant',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
  {
    title: 'Transfers are instant',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
  {
    title: 'Transfers are instant',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas malesuada ex mauris',
  },
]

const Note = ({ title, text }) => {
  return (
    <div className="p-3 w-84 bg-white rounded-md space-y-2 border border-dark-200 shadow-sm">
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
    </div>
  )
}

const Articles = () => {
  const notesTrail = useTrail(notes.length, {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 250 },
  })
  return (
    <section className="w-full flex justify-between items-center h-screen bg-dotsWhite">
      <div className="w-full flex justify-between items-center max-w-5xl px-4 mx-auto">
        <div className="flex-1 max-w-md flex flex-col items-start z-10">
          <span className="font-display text-lg mb-6">Need more?</span>
          <h2 className="font-display font-medium text-5xl max-w-lg mb-6">
            Read our articles to understand how Mind Palace works
          </h2>
          <p className="mb-10">
            Create screens directly in Method or add your images from Sketch or Figma. You can even
            sync designs from your cloud storage!
          </p>
          <button className="flex space-x-2 items-center px-4 py-3.5 bg-primary-400 text-white rounded-xl cursor-pointer">
            <Zap size={16} />
            <span className="text-sm">Okey, let's rock!</span>
          </button>
        </div>
        <div className="flex-1 flex flex-col space-y-8 items-end z-10 h-full overflow-y-auto">
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