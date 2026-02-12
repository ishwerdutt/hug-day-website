/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                ivory: '#FFF9F3',
                blush: '#F7D8D8',
                amber: '#FCE8C8',
                twilight: '#2B2735',
                gold: '#E6D4A3',
            },
            fontFamily: {
                heading: ['"Cormorant Garamond"', 'serif'],
                body: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
