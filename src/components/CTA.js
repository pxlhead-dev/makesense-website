import React from 'react'

import Button from './Button'

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative w-full flex justify-between items-end py-16 md:py-32 bg-accent-indigo bg-opacity-50 bg-circuit bg-animated"
    >
      <div className="w-full flex flex-col md:flex-row justify-between items-end max-w-5xl px-4 mx-auto">
        <div className="flex-1 flex flex-col space-y-16 items-start z-10">
          <h2 className="font-display font-medium text-5xl max-w-lg">
            Make Sense created by & for Community
          </h2>
          <Button icon="gitPull" text="Check Development Pipeline" />
        </div>
        <div className="flex-1 flex flex-col space-y-8 items-end z-10">
          <p className="text-right">
            Stay for more? Subsribe to our Community Servers! Discuss Mind Mapping, AR, AI, Web and
            Sci-Fi and get in touch with us!
          </p>
          <div className="flex space-x-3 justify-end">
            <a
              href="https://discord.gg/v5MDAhU8"
              target="_blank"
              rel="noreferrer"
              className="flex space-x-2 items-center px-4 py-3.5 bg-white shadow-sm rounded-xl cursor-pointer border-2 border-transparent hover:border-gray-600 transition duration-300 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <g fill="#000">
                  <path d="M9.328,10.068a1.337,1.337,0,0,0,0,2.664A1.278,1.278,0,0,0,10.552,11.4,1.271,1.271,0,0,0,9.328,10.068Zm4.38,0A1.337,1.337,0,1,0,14.932,11.4,1.278,1.278,0,0,0,13.708,10.068Z"></path>{' '}
                  <path
                    d="M19.54,0H3.46A2.466,2.466,0,0,0,1,2.472V18.7a2.466,2.466,0,0,0,2.46,2.472H17.068l-.636-2.22,1.536,1.428L19.42,21.72,22,24V2.472A2.466,2.466,0,0,0,19.54,0ZM14.908,15.672s-.432-.516-.792-.972a3.787,3.787,0,0,0,2.172-1.428,6.867,6.867,0,0,1-1.38.708,7.9,7.9,0,0,1-1.74.516,8.406,8.406,0,0,1-3.108-.012A10.073,10.073,0,0,1,8.3,13.968a6.846,6.846,0,0,1-1.368-.708,3.732,3.732,0,0,0,2.1,1.416c-.36.456-.8,1-.8,1a4.351,4.351,0,0,1-3.66-1.824,16.07,16.07,0,0,1,1.728-7,5.934,5.934,0,0,1,3.372-1.26l.12.144A8.1,8.1,0,0,0,6.628,7.308s.264-.144.708-.348A9.012,9.012,0,0,1,10.06,6.2a1.182,1.182,0,0,1,.2-.024,10.153,10.153,0,0,1,2.424-.024A9.782,9.782,0,0,1,16.3,7.308a7.986,7.986,0,0,0-2.988-1.524l.168-.192a5.934,5.934,0,0,1,3.372,1.26,16.07,16.07,0,0,1,1.728,7A4.386,4.386,0,0,1,14.908,15.672Z"
                    fill="#000"
                  ></path>
                </g>
              </svg>
              <span className="text-sm">Discord server</span>
            </a>
            <a
              href="https://t.me/MakeSensePlatform"
              target="_blank"
              rel="noreferrer"
              className="flex space-x-2 items-center px-4 py-3.5 bg-white shadow-sm rounded-xl cursor-pointer border-2 border-transparent hover:border-gray-600 transition duration-300 ease-in-out"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <g fill="#000">
                  <path
                    d="M23.953,2.527a.515.515,0,0,0-.349-.381,1.8,1.8,0,0,0-.945.067S1.63,9.772.429,10.609c-.258.18-.345.285-.388.408-.208.6.439.858.439.858L5.9,13.641a.59.59,0,0,0,.275-.016c1.232-.779,12.4-7.834,13.049-8.071.1-.03.177,0,.157.075-.258.905-9.909,9.478-9.962,9.53a.2.2,0,0,0-.072.177l-.506,5.292s-.212,1.647,1.435,0c1.168-1.169,2.289-2.137,2.849-2.608,1.864,1.287,3.869,2.71,4.734,3.455a1.506,1.506,0,0,0,1.1.423,1.236,1.236,0,0,0,1.051-.933S23.84,5.542,23.968,3.476c.013-.2.03-.332.032-.471A1.762,1.762,0,0,0,23.953,2.527Z"
                    fill="#000"
                  ></path>
                </g>
              </svg>
              <span className="text-sm">Telegram channel</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
