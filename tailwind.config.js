/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            primary: ["'Roboto', 'Arial', 'sans-serif'"],
        },

        extend: {
            screens: {
                tall: {
                    raw: '(min-width: 450px) and (min-height: 650px) and (max-width: 767px)',
                },
                long: {
                    raw: '(min-width: 320px) and (max-height: 450px) and (max-width: 767px)',
                },
                xs: '400px',
                '2xl': '1700px',
                '3xl': '2000px',
                mxs: { max: '400px' },
                msm: { max: '639px' },
                mmd: { max: '767px' },
                mlg: { max: '1023px' },
                mxl: { max: '1279px' },
                m2xl: { max: '1535px' },
            },

            colors: {
                primary: 'var(--color-primary)',
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
}
