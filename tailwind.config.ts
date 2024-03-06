export default {
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        primary: "#050133",
				secondary: "#060142",
				accent: "#DD5ED8",
				neutral: "#D4876A",
				"base-100": "#FAFAFA",
				"dark": "#02010F"
      },
			fontFamily: {
				montserrat: ["Montserrat", 'sans-serif']
			},
			boxShadow: {
				'navHover': '0px 0px 96px 38px rgba(221,94,216,1)'
			}
    },
  },
};
