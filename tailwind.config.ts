import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,ts,tsx,jsx}'],
  theme: {
    colors: {
      'deep-dark-blue': '#0D0541',
      'dark-blue': '#211075',
      'regular-purple': '#5648A4',
      'darken-regular-purple': '#42377e',
      'light-purple': '#AEADFF',
      'primary': '#E8EAFA',
      'secondary': '#828282',
      'btn-secondary': '#353535',
      'btn-secondary-focus': '#242424',
      'shadow': '#00000073',
      'dialog': '#000000d9',
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    extend: {
      backgroundImage: {
        'custom': "url('public/images/background.png')",
      }
    },
  },
  plugins: [],
} satisfies Config

