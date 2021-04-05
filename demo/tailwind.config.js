module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#2165f5',
          darker: '#0a4bd7',
        },
      },
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.5rem',
      },
      boxShadow: {
        glow: '0px 5px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
