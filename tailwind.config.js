/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '1024px',
        md: '768px',
        xs: '375px',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
      },
      spacing: {
        'slide-small': '16px',
        'slide-large': '32px',
      },
      flex: {
        1: '0 0 100%',
        '1/2': '0 0 50%',
        '1/4': '0 0 25%',
      },
      colors: {
        white: '#FFFFFF',
        blue: {
          light: '#BCD4E9',
          normal: '#58A1F3',
          dark: '#6991F2',
        },
        error: '#bf2313',
      },
      fontSize: {
        lg: [
          '56px',
          {
            fontWeight: 300,
            lineHeight: '68px',
          },
        ],
        md: [
          '32px',
          {
            fontWeight: 400,
            lineHeight: 'normal',
          },
        ],
        'base-big': [
          '24px',
          {
            fontWeight: 500,
            lineHeight: '22px',
          },
        ],
        base: [
          '16px',
          {
            fontWeight: 500,
            lineHeight: '22px',
          },
        ],
        sm: [
          '14px',
          {
            fontWeight: 500,
            lineHeight: '21px',
          },
        ],
        xs: [
          '12px',
          {
            fontWeight: 500,
            lineHeight: '16px',
          },
        ],
      },
    },
  },
  plugins: [],
};
