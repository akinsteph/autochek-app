/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      spacing: {
        'px': '1px',
        '6xs': '2px',
        '5xs': '4px',
        '5' : '5px',
        '4xs': '8px',
        '3xs': '10px',
        '2xs': '12px',
        'xs': '14px',
        '15': '15px',
        'sm': '16px',
        '18': '18px',
        'md': '20px',
        '22': '22px',
        'lg': '24px',
        'xl': '28px',
        '30': '30px',
        '2xl': '32px',
        '36' : '36px',
        '3xl': '40px',
        '4xl': '48px',
        '50': '50px',
        '5xl': '56px',
        '6xl': '64px',
        '7xl': '72px',
        '8xl': '80px',
        '100': '100px',
      },
      fontSize: theme => theme('spacing'),
      margin: theme => theme('spacing'),
      padding: theme => theme('spacing'),
      gap: theme => theme('spacing'),
      borderRadius: theme => theme('spacing'),
      borderWidth: theme => theme('spacing'),
      lineHeight: theme => theme('spacing'),
      minWidth: theme => theme('spacing'),
      maxWidth: theme => theme('spacing'),
      screens: {
        'xxs': '320px',
        'xs': '419px',
        '3xl': '1600px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      fontWeight: {
        thinner: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        DEFAULT: '#000000',
        site: '#0D0D0D',
        text_light: '#121212',
      },
      white: {
        DEFAULT: '#FFFFFF',
        site: '#ffffff80',
      },
      green: {
        light: '#61FF71',
        DEFAULT: '#8cc640',
      },
      gray: {
        light: '#F4F4F4',
        DEFAULT: '#c4c4c4',
        borders: '#D3D3D3',
        dark: '#CECECE',
        darker: '#4B4A4B',
        blank: '#D9D9D9',
      },
      blue: {
        light: '#f6f9fc',
        DEFAULT: '#373f50',
      },
      yellow: {
        DEFAULT: 'FFF961',
      },
      red: {
        DEFAULT: '#FF1C1C',
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}

