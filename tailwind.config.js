/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				light: '#ffefeb',
				dark: '#2a0416',
				bgc: '#fdc8bc',
				accent: '#e6516d',
			},
			screens: {
				'hover-hover': { raw: '(hover: hover)' },
			},
		},
	},
	plugins: [],
};
