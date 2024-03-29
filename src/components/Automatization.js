import React from 'react'
import { Zap } from 'react-feather'
import { useTrail, animated, config } from '@react-spring/web'

const tools = [Zap, Zap, Zap, Zap, Zap, Zap]

const Automatization = () => {
  // const styles = useSpring({
  //   loop: { reverse: true },
  //   from: { transform: 'scale(0.8)', opacity: 1 },
  //   to: { transform: 'scale(1)', opacity: 1 },
  //   config: config.slow,
  // })

  const toolsTrail = useTrail(tools.length, {
    loop: { reverse: true },
    from: { transform: 'scale(0.8)', opacity: 1 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: config.slow,
  })

  return (
    <section className="w-full flex justify-between items-center h-screen bg-dotsWhite">
      <div className="w-full flex flex-col max-w-4xl px-4 mx-auto">
        <div className="w-full flex justify-center items-center mb-16">
          <h2 className="font-display font-medium text-5xl max-w-lg text-center">
            Already use Note or Map Tools? Sync!
          </h2>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="relative flex flex-col justify-start w-1/5 space-y-28">
            {toolsTrail.map((props, index) => {
              return (
                index < 3 && (
                  <animated.div
                    key={index}
                    style={props}
                    className="p-6 self-start rounded-full bg-accent-red"
                  >
                    <Zap size={24} />
                  </animated.div>
                )
              )
            })}
            <svg
              width="280"
              height="200"
              viewBox="0 0 280 200"
              className="absolute -top-16 left-24"
              opacity="1"
            >
              <path
                d="M0,10C140,10,140,190,280,190"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="0.1 24"
              ></path>
              <path
                d="M0,10C140,10,140,190,280,190"
                stroke="#444"
                strokeOpacity="0.24"
                strokeWidth="24"
                fill="none"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col justify-center items-center">
            <animated.div className="flex-none p-8 rounded-full bg-accent-indigo">
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.6364 18.861C11.3487 18.861 11.0675 18.9461 10.8283 19.1055C10.5891 19.265 10.4026 19.4915 10.2925 19.7567C10.1824 20.0218 10.1536 20.3135 10.2098 20.5949C10.2659 20.8764 10.4044 21.1349 10.6078 21.3378C10.8113 21.5407 11.0704 21.6789 11.3526 21.7348C11.6347 21.7908 11.9272 21.7621 12.193 21.6523C12.4588 21.5425 12.6859 21.3565 12.8458 21.1179C13.0056 20.8793 13.0909 20.5988 13.0909 20.3119C13.0909 19.9271 12.9377 19.558 12.6649 19.286C12.3921 19.0139 12.0221 18.861 11.6364 18.861ZM1.45455 17.4102C1.06878 17.4102 0.698807 17.563 0.426026 17.8351C0.153246 18.1072 0 18.4762 0 18.861V21.7627C0 22.1475 0.153246 22.5165 0.426026 22.7886C0.698807 23.0607 1.06878 23.2136 1.45455 23.2136C1.84031 23.2136 2.21028 23.0607 2.48306 22.7886C2.75584 22.5165 2.90909 22.1475 2.90909 21.7627V18.861C2.90909 18.4762 2.75584 18.1072 2.48306 17.8351C2.21028 17.563 1.84031 17.4102 1.45455 17.4102ZM30.5455 17.4102C30.1597 17.4102 29.7897 17.563 29.5169 17.8351C29.2442 18.1072 29.0909 18.4762 29.0909 18.861V21.7627C29.0909 22.1475 29.2442 22.5165 29.5169 22.7886C29.7897 23.0607 30.1597 23.2136 30.5455 23.2136C30.9312 23.2136 31.3012 23.0607 31.574 22.7886C31.8468 22.5165 32 22.1475 32 21.7627V18.861C32 18.4762 31.8468 18.1072 31.574 17.8351C31.3012 17.563 30.9312 17.4102 30.5455 17.4102ZM23.2727 7.25424H17.4545V5.39715C17.8942 5.14396 18.2598 4.78041 18.515 4.34263C18.7702 3.90485 18.906 3.40808 18.9091 2.9017C18.9091 2.13212 18.6026 1.39406 18.057 0.849887C17.5115 0.305713 16.7715 0 16 0C15.2285 0 14.4885 0.305713 13.943 0.849887C13.3974 1.39406 13.0909 2.13212 13.0909 2.9017C13.094 3.40808 13.2298 3.90485 13.485 4.34263C13.7402 4.78041 14.1058 5.14396 14.5455 5.39715V7.25424H8.72727C7.56996 7.25424 6.46006 7.71281 5.64172 8.52907C4.82337 9.34533 4.36364 10.4524 4.36364 11.6068V24.6644C4.36364 25.8188 4.82337 26.9259 5.64172 27.7421C6.46006 28.5584 7.56996 29.0169 8.72727 29.0169H23.2727C24.43 29.0169 25.5399 28.5584 26.3583 27.7421C27.1766 26.9259 27.6364 25.8188 27.6364 24.6644V11.6068C27.6364 10.4524 27.1766 9.34533 26.3583 8.52907C25.5399 7.71281 24.43 7.25424 23.2727 7.25424ZM18.5018 10.1559L17.7745 13.0576H14.2255L13.4982 10.1559H18.5018ZM24.7273 24.6644C24.7273 25.0492 24.574 25.4182 24.3012 25.6903C24.0285 25.9624 23.6585 26.1153 23.2727 26.1153H8.72727C8.3415 26.1153 7.97153 25.9624 7.69875 25.6903C7.42597 25.4182 7.27273 25.0492 7.27273 24.6644V11.6068C7.27273 11.222 7.42597 10.853 7.69875 10.5809C7.97153 10.3088 8.3415 10.1559 8.72727 10.1559H10.5018L11.6364 14.8567C11.716 15.1786 11.9038 15.4636 12.1684 15.6642C12.4331 15.8648 12.7586 15.969 13.0909 15.9593H18.9091C19.2414 15.969 19.5669 15.8648 19.8316 15.6642C20.0962 15.4636 20.284 15.1786 20.3636 14.8567L21.4982 10.1559H23.2727C23.6585 10.1559 24.0285 10.3088 24.3012 10.5809C24.574 10.853 24.7273 11.222 24.7273 11.6068V24.6644ZM20.3636 18.861C20.076 18.861 19.7947 18.9461 19.5555 19.1055C19.3163 19.265 19.1299 19.4915 19.0198 19.7567C18.9097 20.0218 18.8809 20.3135 18.937 20.5949C18.9932 20.8764 19.1317 21.1349 19.3351 21.3378C19.5385 21.5407 19.7977 21.6789 20.0799 21.7348C20.362 21.7908 20.6545 21.7621 20.9203 21.6523C21.186 21.5425 21.4132 21.3565 21.573 21.1179C21.7329 20.8793 21.8182 20.5988 21.8182 20.3119C21.8182 19.9271 21.6649 19.558 21.3922 19.286C21.1194 19.0139 20.7494 18.861 20.3636 18.861Z"
                  fill="#201943"
                />
              </svg>
            </animated.div>
          </div>
          <div className="relative flex flex-col justify-end w-1/5 space-y-12">
            {toolsTrail.map((props, index) => {
              return (
                index > 2 && (
                  <animated.div
                    key={index}
                    style={props}
                    className="p-6 self-end rounded-full bg-accent-yellow"
                  >
                    <Zap size={24} />
                  </animated.div>
                )
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Automatization
