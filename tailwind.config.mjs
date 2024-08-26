/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				'border-light': '#d1d5db',
				'border-dark': '#4b5563', // Color para modo oscuro
			  },
			screens: {
				// Agregar breakpoint personalizado para pantallas de 400px o menos
				'xs': '300px',
			},
			keyframes: {
				moveline: {
				  '0%': { height: '0' },
				  '100%': { height: '100%' },
				},
			  },
			  animation: {
				moveline: 'moveline 6s linear forwards',
			  },
		},
	},
	plugins: [
		require('tailwind-scrollbar'),
	],
}
