/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Alegreya Sans", ...defaultTheme.fontFamily.sans],
				oswald: ["Oswald", ...defaultTheme.fontFamily.sans]
			},
			colors: {
				"brand-white": "#FEFDF9",
			},
			typography: {
				DEFAULT: {
				  css: {
					maxWidth: '70ch', 
				  }
				}
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
}