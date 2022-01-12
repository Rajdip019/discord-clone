module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {

    extend: {

      backgroundImage: theme => ({
        'landing-bg': "url('/assets/homepagemain.svg')",
        'landing-left-bg': "url('/assets/homepage1.svg')",
        'landing-right-bg': "url('/assets/homepage2.svg')",
        
      }),

      textColor: {
        skin:{
          gray: 'var(--gray)',
          main: 'var(--main)',
        }
      },
      backgroundColor: {
        skin:{
          gray: 'var(--gray)',
          main: 'var(--main)',
        },
      },
      fontFamily: {
        Helvetica: "'Helvetica Neue', sans-serif",
      }
    },
  },
  variants: {
    extend: {},
  },

  plugins: [],
}
