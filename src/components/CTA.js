import React from 'react'
import { Zap, Figma } from 'react-feather'

const CTA = () => {
  return (
    <section className="relative w-full flex justify-between items-end pt-32 pb-32 bg-accent-indigo">
      <div className="w-full flex justify-between items-end max-w-5xl px-4 mx-auto">
        <div className="flex-1 flex flex-col space-y-16 items-start z-10">
          <h2 className="font-display font-medium text-5xl max-w-lg">
            Never again forget anything!
          </h2>
          <button className="flex space-x-2 items-center px-4 py-3.5 bg-primary-400 text-white rounded-xl cursor-pointer">
            <Zap size={16} />
            <span className="text-sm">Okey, let's rock!</span>
          </button>
        </div>
        <div className="flex-1 flex flex-col space-y-8 items-end z-10">
          <p className="text-right">
            Stay for more? Subsribe to our Community Servers! Discuss Mind Mapping, AR, AI, Web and
            Sci-Fi and get in touch with us!
          </p>
          <div className="flex space-x-3 justify-end">
            <button className="flex space-x-2 items-center px-4 py-3.5 bg-primary-400 text-white rounded-xl cursor-pointer">
              <Figma size={16} />
              <span className="text-sm">Discord server</span>
            </button>
            <button className="flex space-x-2 items-center px-4 py-3.5 bg-primary-400 text-white rounded-xl cursor-pointer">
              <Figma size={16} />
              <span className="text-sm">Telegram channel</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
