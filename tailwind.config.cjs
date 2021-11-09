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
				DEFAULT: '#0f0e17'
			},
			gray: {
				dark: '#a7a9be',
				light: '#fffffe'
			},
			orange: {
				DEFAULT: "#ff8906"
			},
			white: {
				DEFAULT: '#FFFFFF',
			}

		},
		extend: { },
		darkMode: 'class'
	},
	plugins: [],

};

module.exports = config;
