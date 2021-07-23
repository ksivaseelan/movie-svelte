const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: {
				DEFAULT: '#0B0C10'
			},
			gray: {
				dark: '#1F2833',
				light: '#C5C6C7'
			},
			cyan: {
				dark: '#45A29E',
				light: '#66FCF1'
			}
		},
		extend: {},
	},
	plugins: [],
};

module.exports = config;
