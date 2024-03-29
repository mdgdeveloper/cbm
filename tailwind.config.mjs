/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				birthstone: ['Birthstone'],
				urbanist: ['Urbanist Variable'],
			},
			fontSize: {
				'10xl': '10rem',
				'11xl': '12rem',
				'12xl': '14rem',
			},

			colors: {
				'mdgpurple': "#AB5E92"
			}
		},
	},
	plugins: [],
}
