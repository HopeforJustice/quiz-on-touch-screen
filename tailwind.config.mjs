/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				fk: ["fk-screamer"],
				apercu: ["apercu-reg"],
				"apercu-bold": ["apercu-bold"],
				"apercu-italic": ["apercu-italic"],
				sfadisplay: ["adobe-garamond-pro", "sans-serif"],
				sfabody: ["arial", "system-ui", "sans-serif"],
			},
			colors: {
				"sfa-orange": "#e9380f",
				"sfa-orange-600": "#ED5F3E",
				"sfa-orange-500": "#F2876F",
				"sfa-orange-400": "#F6AF9F",
				"sfa-orange-300": "#FBD7CF",
				"sfa-orange-200": "#FDEAE6",
				"sfa-orange-100": "#FFFAF9",
				"sfa-blue": "#142c3a",
				"sfa-blue-600": "#415560",
				"sfa-blue-500": "#728088",
				"sfa-blue-400": "#A1AAB0",
				"sfa-blue-300": "#D0D4D7",
				"sfa-blue-200": "#E7E9EB",
				"sfa-blue-100": "#F9FAFA",
			},
		},
	},
	plugins: [],
};
