import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'react-feather'

const navLinks = [
  { title: 'Statement', path: '/cta' },
  { title: 'Use Cases', path: '/cta' },
  { title: 'Features', path: '/cta' },
  { title: 'Structure', path: '/cta' },
  { title: 'Articles+', path: '/cta' },
]

const Header = () => (
  <header className="w-full fixed top-0 z-40">
    <div className="max-w-5xl px-4 py-6 flex justify-between items-center mx-auto bg-white">
      <Link className="flex items-center space-x-3" to="/home">
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
        <span>MakeSense</span>
      </Link>
      <nav className="space-x-5 items-center hidden md:flex">
        {navLinks.map(({ title, path }) => {
          return (
            <Link
              key={title}
              className="link relative cursor-pointer opacity-70 hover:opacity-100"
              to={path}
            >
              <span>{title}</span>
              <svg
                className="absolute top-full mt-1 pointer-events-none text-primary-500 line stroke-current"
                fill="none"
                width="100%"
                strokeWidth="2"
                viewBox="0 0 101 9"
              >
                <path
                  d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
                  pathLength="1"
                />
              </svg>
            </Link>
          )
        })}
      </nav>
      <a
        href="https://app.makesense.to"
        className="link relative flex items-center space-x-2 group"
        to="/home"
      >
        <span>Open your Mind</span>
        <ArrowRight
          size={20}
          className="transform translate-x-0 group-hover:translate-x-0.5 group-hover:text-primary-700 transition duration-300 ease-in-out"
        />
        <svg
          className="absolute top-full -left-2 mt-1 pointer-events-none text-primary-500 line stroke-current"
          fill="none"
          width="100%"
          strokeWidth="1.5"
          viewBox="0 0 101 9"
        >
          <path
            d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294"
            pathLength="1"
          />
        </svg>
      </a>
    </div>
  </header>
)

export default Header
