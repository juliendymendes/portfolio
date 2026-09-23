/* eslint-disable @typescript-eslint/no-require-imports */
export default {
	plugins: [require("daisyui")],
	theme: {
		extend: {
			colors: {
				primary: "#1F4A4D",
				secondary: "#D2BDCB",
				accent: "#C89B52",
				muted: "#777B76",
				neutral: "#F5F1ED",
				ink: "#1C1D1B",
				surface: "#FCFBF8",
				canvas: "#F6F4EF",
				border: "#DEDCD5",
			},
			screens: {
				wide: "1900px",
			},
		},
	},
};
