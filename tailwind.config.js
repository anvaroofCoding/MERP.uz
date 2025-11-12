module.exports = {
	darkMode: 'class', // <- bu MUHIM
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
}
