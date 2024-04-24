export default {
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        primary: "#DD5ED8",
				secondary: "#D2BDCB",
				accent: "#CA56C5",
				neutral: "#F5F1ED",
				"base-100": "#FAFAFA",
				"dark": "#02010F",
      },
			fontFamily: {
				montserrat: ["Montserrat", 'sans-serif'],
				poppins: ["Poppins", "sans-serif"]
			},
			boxShadow: {
				'navHover': '0px 0px 96px 38px rgba(221,94,216,1)'
			},
			screens: {
				'wide': '1900px'
			}
    },
  },
};
