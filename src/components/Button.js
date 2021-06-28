import React, { useState } from 'react'
import { Zap, GitPullRequest } from 'react-feather'
import { useSpring, animated, config } from '@react-spring/web'

const icons = {
  zap: Zap,
  gitPull: GitPullRequest,
}

const calc = (x, y, rect) => [
  (x - rect.left - rect.width / 2) / 5,
  (y - rect.top - rect.height / 2) / 5,
  1.1,
]
const transX = (x, y, s) => `translate(${x}px, ${y}px) scale(${s})`

const Button = ({ icon, text, size, href }) => {
  const Icon = icons[icon]
  const configList = Object.keys(config)
  const [xys, set] = useState([0, 0, 1])
  const { preset } = { value: 'wobbly', options: configList }
  const props = useSpring({ xys, config: config[preset] })

  return (
    <div>
      <animated.a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ transform: props.xys.to(transX) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(event) => {
          const rect = event.target.getBoundingClientRect()
          set(calc(event.clientX, event.clientY, rect))
        }}
        className="group flex space-x-2 items-center px-4 py-3.5 bg-primary-400 text-white rounded-xl cursor-pointer border-2 border-transparent hover:border-primary-800 outline-none"
      >
        <Icon size={20} className="group-hover:text-yellow-200" />
        <span className={`${size === 'cta' ? 'text-base md:text-xl' : 'text-sm'}`}>{text}</span>
      </animated.a>
    </div>
  )
}

export default Button
