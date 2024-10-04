/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        xl: '1440px'
      },
      colors: {
        purple: {
          DEFAULT: '#A729F5'
        },
        'dark-navy': {
          DEFAULT: '#313E51'
        },
        navy: {
          DEFAULT: '#3B4D66'
        },
        'grey-navy': {
          DEFAULT: '#626C7F'
        },
        'light-bluish': {
          DEFAULT: '#ABC1E1'
        },
        'light-grey': {
          DEFAULT: '#F4F6FA'
        },
        green: {
          DEFAULT: '#26D782'
        },
        red: {
          DEFAULT: '#EE5454'
        }
      }
    }
  },
  plugins: []
};
