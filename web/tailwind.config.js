/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Zen_Dots: ["Zen_Dots", "Zen Dots"],
        Irongate: ["Irongate", "Irongate"],
      },
      backgroundImage: {
        "ipad": "url('/src/assets/images/iPad_Pro_12.9_-_Space_Gray_-_Landscape.png')",
        "chiraq": "url('https://cdn.discordapp.com/attachments/880143585423552574/1050054814706454568/bgybnfdsds.png')",
        "chiraq2": "url('https://cdn.discordapp.com/attachments/880143585423552574/1050051431345950823/lorispd.jpg')",
        "pass": "url('https://dunb17ur4ymx4.cloudfront.net/packages/images/1048e41bf060b9793fee13c69089328b5dd9dc4f.png')",
        "pass_premium": "url('https://dunb17ur4ymx4.cloudfront.net/packages/images/84416384685c0d2e6cee9544a75c97dd94984d85.png')",
      },
      height: {
        '2960': '970px',
        '6/6': '93%',
      },
      margin: {
        '100': '36rem',
        '177': '77rem',
      },
      width: {
        '2290': '1250px',
        '21': '21rem',
      },
      colors: {
        'primary': '#323c43',
        'secondary': '#252d33',
      },
      dropShadow: {
        '3xl': '0 0px 4px rgba(255, 255, 255, 1)',
        '4xl': '0 0px 7px rgba(183, 212, 237, 1)',
        '5xl': '0 0px 10px rgba(64, 159, 243, 1)',
      }
    },
  },
  plugins: [],
}
