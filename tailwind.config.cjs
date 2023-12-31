/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Alegreya Sans", ...defaultTheme.fontFamily.sans],
				serif: ["Alegreya", ...defaultTheme.fontFamily.serif],
				oswald: ["Oswald", ...defaultTheme.fontFamily.sans]
			},
			colors: {
				"brand-white": "#FEFDF9",
				"brand-red": "#b70038",
				"pastel": "#f4f6f8"
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