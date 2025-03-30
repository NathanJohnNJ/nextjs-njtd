/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./**/*.{js,jsx,svg}"],
  presets: [],
  theme: {
    extend: {
      animation: {
        'wiggler': 'wiggle 1.5s cubic-bezier(0.1, -0.6, 0.2, 0) infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(3deg)' },
          '50%': { transform: 'rotate(-3deg)' },
        }
      },
      fontFamily: {
        Poppins: [
          'Poppins'
        ],
        LeagueSpartan: [
          'League Spartan'
        ],
        GeoBlack: [
          'GeologicaBlack'
        ],
        GeoExtraBold: [
          'GeologicaExtraBold'
        ],
        GeoBold: [
          'GeologicaBold'
        ],
        GeoLight: [
          'GeologicaLight'
        ],
        GeoExtraLight: [
          'GeologicaExtraLight'
        ],
        GeoRegular: [
          'GeologicaRegular'
        ],
        GeoMedium: [
          'GeologicaMedium'
        ],
        GeoSemiBold: [
          'GeologicaSemiBold'
        ],
      },  
      colors: {
        'blackColor': 'var(--black-color)',
        'darkColor': 'var(--dark-color)',
        'lightColor': 'var(--light-color)',
        'whiteColor': 'var(--white-color)',
        'midColor': 'var(--mid-color)',
        'borderColor': 'var(--border-color)',
        'darkBorderColor': 'var(--darkBorder-color)',
        'highlightColor': 'var(--highlight-color)',
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};

export default config;

