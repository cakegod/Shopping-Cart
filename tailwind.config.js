/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				light: '#ffefeb',
				dark: '#2a0416',
				bgc: '#fdc8bc',
				accent: '#e6516d',
			},
		},
	},
	plugins: [],
};
