import React from 'react'
import { Twitter, Facebook } from 'react-feather'

const navLinks = [
  { title: 'Statement' },
  { title: 'Problem' },
  { title: 'How it works' },
  { title: 'Pricing' },
  { title: 'Contacts' },
]

const Footer = () => (
  <footer className="w-full py-8">
    <div className="max-w-5xl px-4 py-6 mx-auto divide-y-2 divide-gray-100">
      <div className="flex justify-between items-center pb-6">
        <span className="flex items-center space-x-3">
          <svg
            width="32"
            height="32"
            viewBox="0 0 350 350"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="350" height="350" rx="80" fill="black" />
            <path
              d="M155.319 62.1728C152.412 62.1721 149.533 62.7442 146.847 63.8565C144.161 64.9687 141.72 66.5993 139.664 68.6551C137.608 70.7109 135.978 73.1515 134.866 75.8376C133.753 78.5238 133.181 81.4027 133.182 84.31L133.182 90.3423L127.15 90.3423C121.278 90.3423 115.648 92.6746 111.496 96.8261C107.345 100.978 105.012 106.608 105.012 112.48C105.012 118.351 107.345 123.981 111.496 128.133C115.648 132.285 121.278 134.617 127.15 134.617L133.182 134.617L177.456 134.617L177.456 90.3423L177.456 84.31C177.457 81.4027 176.885 78.5238 175.773 75.8376C174.66 73.1515 173.03 70.7109 170.974 68.6551C168.918 66.5993 166.478 64.9687 163.792 63.8565C161.105 62.7442 158.226 62.1721 155.319 62.1728V62.1728Z"
              stroke="white"
              strokeWidth="17"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M199.572 62.1728C202.48 62.1721 205.359 62.7442 208.045 63.8565C210.731 64.9687 213.172 66.5993 215.227 68.6551C217.283 70.7109 218.914 73.1515 220.026 75.8376C221.138 78.5238 221.71 81.4027 221.71 84.31L221.71 90.3423L227.742 90.3423C233.613 90.3423 239.244 92.6746 243.395 96.8261C247.547 100.978 249.879 106.608 249.879 112.48C249.879 118.351 247.547 123.981 243.395 128.133C239.244 132.285 233.613 134.617 227.742 134.617L221.71 134.617L177.435 134.617L177.435 90.3423L177.435 84.31C177.434 81.4027 178.007 78.5238 179.119 75.8376C180.231 73.1515 181.862 70.7109 183.917 68.6551C185.973 66.5993 188.414 64.9687 191.1 63.8565C193.786 62.7442 196.665 62.1721 199.572 62.1728V62.1728Z"
              stroke="white"
              strokeWidth="17"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M111 119C97.7452 119 87 129.745 87 143V246C87 259.255 97.7452 270 111 270H245C258.255 270 269 259.255 269 246V143C269 129.745 258.255 119 245 119H111ZM184 161C184 156.582 180.418 153 176 153C171.582 153 168 156.582 168 161V214C168 218.418 171.582 222 176 222H206C210.418 222 214 218.418 214 214C214 209.582 210.418 206 206 206H184V161ZM238 164C238 170.627 232.627 176 226 176C219.373 176 214 170.627 214 164C214 157.373 219.373 152 226 152C232.627 152 238 157.373 238 164ZM129.546 176.169C136.174 176.169 141.546 170.797 141.546 164.169C141.546 157.542 136.174 152.169 129.546 152.169C122.919 152.169 117.546 157.542 117.546 164.169C117.546 170.797 122.919 176.169 129.546 176.169Z"
              fill="white"
            />
          </svg>
        </span>
        <nav className="hidden md:flex space-x-4 items-center">
          {navLinks.map(({ title }) => {
            return (
              <span key={title} className="cursor-pointer">
                {title}
              </span>
            )
          })}
        </nav>
        <div className="flex">
          <button className="p-2 text-gray-800 hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out">
            <Twitter size={16} stroke="none" fill="currentColor" />
          </button>
          <button className="p-2 text-gray-800 hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out">
            <Facebook
              size={16}
              stroke="none"
              fill="currentColor"
              className="text-gray-800 hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out"
            />
          </button>
          <a
            href="https://discord.gg/v5MDAhU8"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-gray-800 hover:text-blue-400 cursor-pointer transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="text-gray-800 hover:text-indigo-400 cursor-pointer transition duration-300 ease-in-out"
            >
              <g fill="currentColor">
                <path d="M9.328,10.068a1.337,1.337,0,0,0,0,2.664A1.278,1.278,0,0,0,10.552,11.4,1.271,1.271,0,0,0,9.328,10.068Zm4.38,0A1.337,1.337,0,1,0,14.932,11.4,1.278,1.278,0,0,0,13.708,10.068Z"></path>{' '}
                <path
                  d="M19.54,0H3.46A2.466,2.466,0,0,0,1,2.472V18.7a2.466,2.466,0,0,0,2.46,2.472H17.068l-.636-2.22,1.536,1.428L19.42,21.72,22,24V2.472A2.466,2.466,0,0,0,19.54,0ZM14.908,15.672s-.432-.516-.792-.972a3.787,3.787,0,0,0,2.172-1.428,6.867,6.867,0,0,1-1.38.708,7.9,7.9,0,0,1-1.74.516,8.406,8.406,0,0,1-3.108-.012A10.073,10.073,0,0,1,8.3,13.968a6.846,6.846,0,0,1-1.368-.708,3.732,3.732,0,0,0,2.1,1.416c-.36.456-.8,1-.8,1a4.351,4.351,0,0,1-3.66-1.824,16.07,16.07,0,0,1,1.728-7,5.934,5.934,0,0,1,3.372-1.26l.12.144A8.1,8.1,0,0,0,6.628,7.308s.264-.144.708-.348A9.012,9.012,0,0,1,10.06,6.2a1.182,1.182,0,0,1,.2-.024,10.153,10.153,0,0,1,2.424-.024A9.782,9.782,0,0,1,16.3,7.308a7.986,7.986,0,0,0-2.988-1.524l.168-.192a5.934,5.934,0,0,1,3.372,1.26,16.07,16.07,0,0,1,1.728,7A4.386,4.386,0,0,1,14.908,15.672Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center pt-6">
        <span>Copyright © 2021 or just... forget it</span>
        <div className="flex space-x-4">
          <span className="underline">Confidentiality</span>
          <span className="underline">Terms of Use</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
