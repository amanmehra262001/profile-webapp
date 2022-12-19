/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/layouts/**/*.{js,ts,jsx,tsx}',
        './src/ui/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontSize: {
            sm: '0.8rem',
            base: '1rem',
            xl: '1.25rem',
            xxl: '1.563rem',
            xxxl: '1vw',
            xxxxl: '2vw',
            xxxxxl: '4vw',
            vxxxl: '6vw',
        },
        screens: {
            sm: { max: '767px' },
            // => @media (min-width: 640px and max-width: 767px) { ... }

            md: { min: '768px', max: '1023px' },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            lg: { min: '1024px', max: '1279px' },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            xl: { min: '1280px', max: '1440px' },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            '2xl': { min: '1440px', max: '1599px' },
            // => @media (min-width: 1536px) { ... }
            '4k': { min: '1600px' }
        },
        extend: {
            colors: {
                buttons: '#874DDC',
            },
            keyframes: {
                wiggle: {
                    '0%': {
                        transform: 'scaleY(1)',
                    },
                    '25%': {
                        transform: 'scaleY(0.5)',
                    },
                    '50%': {
                        transform: 'scaleY(1)',
                    },
                    '75%': {
                        transform: 'scaleY(1.7)',
                    },
                    '100%': {
                        transform: 'scaleY(1)',
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: '0.1',
                    },
                    '100%': {
                        opacity: '1',
                    },
                },
            },
            animation: {
                wiggle: 'wiggle 0.3s ease-in-out 1',
                fadeIn: 'fadeIn 1s ease-in-out 1',
            },
        },
    },
};