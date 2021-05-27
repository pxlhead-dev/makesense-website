const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      copy: 'copy',
    },
    boxShadow: {
      sm: '0 2px 12px 0 rgba(0, 0, 0, 0.04)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0px 7x 24px 0px rgba(0, 0, 0, 0.12)',
      '2xl': '0px 4px 20px 0px rgba(0, 0, 0, 0.08)',
      none: 'none',
    },
    extend: {
      fontFamily: {
        display: ['GT-Haptic', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        72: '18rem',
        84: '21rem',
        96: '24rem',
        80: '80vh',
        20: '20vw',
      },
      translate: {
        '35vh': '-35vh',
      },
      colors: {
        accent: {
          indigo: '#EBEAFB',
          yellow: '#FCEFDC',
          red: '#F5DCDC',
          pink: '#EDD7EF',
        },
        dark: {
          100: '#f8f8f9',
          200: '#f2f1f4',
          300: '#ebeaee',
          400: '#e4e3e8',
          500: '#dedde3',
        },
        light: {
          100: '#1e1e1e',
          200: '#2d2e32',
          300: '#333338',
          400: '#3d3e41',
          500: '#4C4D51',
        },
        primary: {
          100: '#cccbf5',
          200: '#a9a9ef',
          300: '#8686e8',
          400: '#6d69e2',
          500: '#564cda',
          600: '#5143cf',
          700: '#4837c2',
          800: '#412bb7',
          900: '#201943',
        },
        layout: {
          100: '#ffffff',
          200: '#f2f1f4',
        },
      },
      backgroundImage: (theme) => ({
        dotsWhite: "url('../images/dots-white.svg')",
        dotsDark: "url('../images/dots-dark.svg')",
      }),
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {
      backgroundImage: ['dark'],
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
}
