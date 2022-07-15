/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
	theme: {
		extend: {
			colors: {
				'light': '#f3ede8',
				'dark': '#2a0416',
				'bgc': '#fdc8bc',
				'accent': '#e6516d',

			},
		},
	},
	plugins: [],
};
