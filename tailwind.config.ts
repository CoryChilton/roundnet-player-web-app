import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin')

const config: Config = {
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
      dropShadow: {
        glow: [
          "0 0px 10px rgba(255,255, 255, 0.35)",
          // "0 0px 25px rgba(255, 255,255, 0.2)"
        ]
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        glow: '0 0 10px var(--tw-shadow-color)'
      },
      keyframes: {
        fadeIn: {
          '100%': {opacity: '1'},
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.1s linear forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }:{matchUtilities:any, theme:any}) {
      matchUtilities(
        {
          'text-shadow': (value:any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
export default config
