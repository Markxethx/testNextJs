/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, matchUtilities, theme }) {
      // add default utilies for border-spacing
      addUtilities({
        '.border-spacing-2': {
          'border-spacing': '0.5rem',
        },
        '.border-spacing-4': {
          'border-spacing': '1rem',
        },
      })

      // add dynamic match for arbitrary values, like border-spacing-[50px]
      matchUtilities(
        {
          'border-spacing': (value) => ({
            'border-spacing': value,
          }),
        },
        { values: theme('borderSpacing') }
      )
    }),
  ],
}
