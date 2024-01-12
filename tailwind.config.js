/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'grid': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'grid': '300px minmax(1000px, 1fr)',
      },
      transitionProperty: {
        multiple: "width , height , backgroundColor , border-radius , left"
      },
    },
    colors:{
      'white': '#FFFFFF',
      'primary': '#C778DD',
      'gray': '#ABB2BF',
      'back': '#1E1E1E',
      'transparent': 'transparent'
    },
    fontSize: {
      'sml': '16px',
      'sm': [ '16px', {
        lineHeight: '20px',
        fontWeight: '700'

      }
        
      ],
      'l': [ '24px', {
        lineHeight: '31px',
        fontWeight: '700'

      }
        
      ],
      'smt': [ '16px', {
        lineHeight: '20px',
        fontWeight: '500'

      }
        
      ],
      'li': [ '32px',{
        lineHeight: '42px',
        fontWeight: '500'
      }
      ],
      '2li': [ '32px',{
        lineHeight: '42px',
        fontWeight: '600'
      }
      ],
      '2liMe': [ '28px',{
        lineHeight: '38px',
        fontWeight: '600'
      }
      ],
      't':[ '16px', {
        lineHeight: '21px',
        fontWeight:'400'
      }
      ],
      'title': [ '24px', {
        lineHeight: '31px',
        fontWeight: '500'
      }

      ],
      'medi': [ '24px',{
        lineHeight: '32px',
        fontWeight: '600'
      }
      ],
    },
    screens: {
      'sm': '176px',
      // => @media (min-width: 176px) { ... }
      'md': '790px',
      // => @media (min-width: 860px) { ... }
      'lg': '1000px',
      // => @media (min-width: 1000px) { ... }
      'xl': '1240px',
      // => @media (min-width: 1100px) { ... }
    },
  },
  plugins: [],
}
