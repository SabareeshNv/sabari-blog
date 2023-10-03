/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Alegreya Sans", ...defaultTheme.fontFamily.sans],
				oswald: ["Oswald", "sans-serif"],
			},
			colors: {
				"brand-white": "#FEFDF9",
				"sand": {
					"light": "hsl(42, 35%, 90%)",
					"medium": "hsl(42, 35%, 85%)",
					"thick": "hsl(42, 35%, 40%)"
				}
			},
			typography: {
				DEFAULT: {
				  css: {
					maxWidth: '75ch', 
				  }
				}
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}