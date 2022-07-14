/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/*.html'],
	theme: {
		extend: {
			colors: {
				"rose": {
					"50": "#FFFAFE",
					"100": "#FFF5FC",
					"200": "#FEE6F8",
					"300": "#FEDCF5",
					"400": "#FDCEF1",
					"500": "#FDC1ED",
					"600": "#FA6BD4",
					"700": "#F817BC",
					"800": "#AD0680",
					"900": "#590342"
				}
			}
		},
	},
	plugins: [],
};
