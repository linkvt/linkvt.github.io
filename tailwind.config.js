/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./layouts/**/*.html", "./content/**/*.md", "./data/**/*.yml"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"Lato",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					'"Segoe UI"',
					"Roboto",
					'"Helvetica Neue"',
					"Arial",
					'"Noto Sans"',
					"sans-serif",
					'"Apple Color Emoji"',
					'"Segoe UI Emoji"',
					'"Segoe UI Symbol"',
					'"Noto Color Emoji"',
				],
			},
		},
	},
	plugins: [],
};
