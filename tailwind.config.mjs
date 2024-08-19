/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				// Agregar breakpoint personalizado para pantallas de 400px o menos
				'xs': '400px',
			},
		},
	},
	plugins: [],
}
