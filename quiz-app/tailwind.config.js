/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#81EDFF',
        background: '#EDEAE7',
        surface: '#FFFFFF',
        text: {
          primary: '#222222',
          secondary: '#666666',
          disabled: '#BDBDBD',
        },
        border: {
          light: '#DEDEDE',
          medium: '#CCCCCC',
          dark: '#999999',
        },
        hover: '#6BD9EC',
        overlay: 'rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'modal': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}