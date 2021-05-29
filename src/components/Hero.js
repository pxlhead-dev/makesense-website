import React, { useRef, useState } from 'react'
import { Zap, Package, BookOpen, Scissors } from 'react-feather'
import { useSpring, useTrail, animated, config } from '@react-spring/web'
import Typist from 'react-typist'

const calc = (x, y, rect) => [
  (x - rect.left - rect.width / 2) / 5,
  (y - rect.top - rect.height / 2) / 5,
  1.1,
]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const transX = (x, y, s) => `translate(${x}px, ${y}px) scale(${s})`

const templates = [
  {
    icon: Package,
    type: 'arch',
    isDisabled: false,
    title: 'Architector',
    text: 'mind pattern',
    handlerName: 'onMindCreate',
  },
  {
    icon: Scissors,
    type: 'gard',
    isDisabled: false,
    title: 'Gardener',
    text: 'mind pattern',
    handlerName: 'onMindCreate',
  },
  {
    icon: BookOpen,
    type: 'lib',
    isDisabled: false,
    title: 'Librarian',
    text: 'mind pattern',
    handlerName: 'onBackToMapClick',
  },
]

const Button = () => {
  const configList = Object.keys(config)
  const ref = useRef(null)
  const [xys, set] = useState([0, 0, 1])
  const { preset } = { value: 'wobbly', options: configList }
  const props = useSpring({ xys, config: config[preset] })

  return (
    <div ref={ref}>
      <animated.button
        style={{ transform: props.xys.to(transX) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect()
          set(calc(e.clientX, e.clientY, rect))
        }}
        className="group flex space-x-2 items-center px-4 py-3.5 bg-primary-400 text-white rounded-xl cursor-pointer mb-3 border-2 border-transparent hover:border-primary-800"
      >
        <Zap size={20} className="group-hover:text-yellow-200" />
        <span className="text-xl">I Want My Mind Palace</span>
      </animated.button>
    </div>
  )
}

const Card = ({ type, icon, imgSrc, title, text, onClick, isDisabled }) => {
  const Icon = icon
  const configList = Object.keys(config)
  const ref = useRef(null)
  const [xys, set] = useState([0, 0, 1])
  const { preset } = { value: 'default', options: configList }
  const props = useSpring({ xys, config: config[preset] })

  /* eslint-disable react/prop-types */

  return (
    <div ref={ref} className="w-full">
      <animated.div
        onClick={onClick}
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect()
          set(calc(e.clientX, e.clientY, rect))
        }}
        className={`${type === 'arch' && 'bg-accent-indigo bg-circuit'} ${
          type === 'gard' && 'bg-accent-pink bg-leafs'
        } ${
          type === 'lib' && 'bg-accent-yellow bg-library'
        } flex flex-col justify-between items-stretch w-full h-48 p-5 bg-opacity-50 hover:bg-opacity-100 rounded-2xl cursor-pointer`}
      >
        <div>
          {imgSrc ? (
            <img src={imgSrc} alt="" className="object-cover w-8 h-8 rounded-full" />
          ) : (
            <Icon size={16} />
          )}
        </div>
        <div className="flex flex-col">
          <h6 className="text-xl font-medium mb-0.5">{title}</h6>
          <span className="text-sm text-inherit opacity-70">{text}</span>
        </div>
      </animated.div>
    </div>
  )
}

const Hero = () => {
  const templatesTrail = useTrail(templates.length, {
    from: { opacity: 0, transform: 'scale(0)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 250 },
  })
  return (
    <div className="max-w-5xl px-4 mx-auto">
      <section className="flex flex-col justify-center items-center mt-40 mb-8">
        <h1 className="font-display font-bold text-7xl text-center mb-8">
          Evolve into a{' '}
          <Typist avgTypingDelay={100} className="text-primary-400 inline-block">
            <span>Human</span>
            <Typist.Backspace count={5} delay={1000} />
            <span>Superhuman</span>
          </Typist>{' '}
          with your Mind Palace
        </h1>
        <p className="font-display text-2xl max-w-2xl text-center mb-8 text-opacity-70">
          Create or record notes, semantically organize, explore and search through your
          <span className="text-primary-400"> AI-powered digital mind!</span>
        </p>
        <Button />
        <span className="text-xs mb-16 opacity-60">
          Free 14 Days Trial - No credit card required
        </span>
        <div className="w-full h-auto rounded-xl overflow-hidden shadow-sm transform translate-y-0 hover:shadow-2xl hover:-translate-y-4 z-10 transition duration-300 ease-in-out cursor-pointer">
          <img
            src="https://cdn.dribbble.com/users/2001748/screenshots/15717849/media/403b275af92e9adee9ec917dac06557c.png?compress=1&resize=1600x1200"
            alt=""
            className="object-contain"
          />
        </div>
        <div className="absolute top-1/2 left-0 z-0">
          <svg
            width="377"
            height="425"
            viewBox="0 0 377 425"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M156.181 331.341C157.138 329.988 156.817 328.116 155.464 327.159L133.419 311.571C132.066 310.614 130.194 310.935 129.237 312.288C128.28 313.641 128.602 315.513 129.954 316.47L149.55 330.326L135.694 349.922C134.737 351.275 135.059 353.147 136.411 354.104C137.764 355.06 139.636 354.739 140.593 353.386L156.181 331.341ZM-20.5417 417.771C-21.2897 416.292 -23.0945 415.7 -24.5729 416.448C-26.0514 417.196 -26.6436 419.001 -25.8957 420.479L-20.5417 417.771ZM-23.2187 419.125L-25.8957 420.479L-23.9782 424.269L-21.0473 421.195L-23.2187 419.125ZM153.225 326.652L140.002 328.921L141.017 334.834L154.239 332.566L153.225 326.652ZM-20.5417 417.771V417.771L-25.8957 420.479V420.479L-20.5417 417.771ZM140.002 328.921C76.8315 339.759 18.835 370.664 -25.3901 417.055L-21.0473 421.195C22.2879 375.738 79.1173 345.454 141.017 334.834L140.002 328.921Z"
              fill="#201943"
              fill-opacity="0.12"
            />
            <path
              d="M-38 3.32747L-22.8692 4.45675C126.922 15.6363 267.736 80.1663 374 186.327V186.327"
              stroke="#201943"
              stroke-opacity="0.12"
              stroke-width="6"
              stroke-dasharray="14 14"
            />
          </svg>
        </div>
        <div className="absolute top-1/3 right-0 z-0">
          <svg
            width="297"
            height="506"
            viewBox="0 0 297 506"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.75341 253.074C3.09766 253.134 1.70624 251.841 1.64557 250.185L0.656914 223.204C0.596244 221.548 1.88931 220.156 3.54505 220.096C5.20079 220.035 6.59222 221.328 6.65289 222.984L7.53169 246.968L31.5156 246.089C33.1713 246.028 34.5628 247.321 34.6234 248.977C34.6841 250.633 33.391 252.024 31.7353 252.085L4.75341 253.074ZM429.305 4.89691C428.477 3.46203 428.969 1.62727 430.404 0.798835C431.838 -0.0295795 433.673 0.462034 434.502 1.89691L429.305 4.89691ZM431.904 3.39691L434.502 1.89691L436.625 5.57549L432.448 6.34702L431.904 3.39691ZM2.44598 248.033L25.1671 223.584L29.5622 227.668L6.84113 252.118L2.44598 248.033ZM429.305 4.89691V4.89691L434.502 1.89691V1.89691L429.305 4.89691ZM25.1671 223.584C133.062 107.481 275.498 29.2354 431.359 0.446816L432.448 6.34702C277.856 34.9013 136.58 112.51 29.5622 227.668L25.1671 223.584Z"
              fill="#201943"
              fill-opacity="0.12"
            />
            <path
              d="M590.114 473.868L575.539 478.085C431.25 519.833 276.773 508.449 140.163 446V446"
              stroke="#201943"
              stroke-opacity="0.12"
              stroke-width="6"
              stroke-dasharray="14 14"
            />
          </svg>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center py-16">
        <div className="w-full flex justify-between items-center space-x-8">
          {templatesTrail.map((props, index) => (
            <animated.div key={templates[index].title} style={props} className="w-full">
              <Card
                key={templates[index]}
                type={templates[index].type}
                imgSrc={templates[index].imgSrc}
                icon={templates[index].icon}
                title={templates[index].title}
                text={templates[index].text}
                isDisabled={templates[index].isDisabled}
              />
            </animated.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Hero
