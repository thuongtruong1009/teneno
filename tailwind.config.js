/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                main: {
                    black: "#010F07",
                    blue: "#384CFF",
                    cyan: "#00A3FF",
                    red: "#FF0000",
                    white: "#FFFFFF",
                    milk: "#EEEEEE",
                    green: "#36FF00",
                    dark_grey: "#555555",
                    medium_grey: "#999999",
                    light_grey: "#AAAAAA",

                    //         grey: '#343E58',
                    //         blue: '07C6FD',
                    purple: '#7A56FE',
                    dark_purple: '#EAEAEA',
                    pink: '#fd65b7'
                },
                neutral: {
                    100: '#2a2846',
                    80: '#55536B',
                    65: '#7F7E90',
                    60: '#7A838C',
                    40: '#AAA9B5',
                    20: '#D4D4DA',
                    10: '#EAE9ED',
                    5: '#F4F4F6',
                    0: '#fff',
                },
                primary: {
                    100: '#7A66C7',
                    80: '#C5C2F3',
                    65: '#F9F9FF',
                    50: '#7a56fe',
                    40: '#5D5FEF',
                    30: '#a48bfe',
                    20: '#F2EEFF',
                },
                thirdth: {
                    70: '#689f38',
                    60: '#00d084',
                    50: '#7bdcb5',
                    40: '#fcb900',
                    30: '#ff6900',
                },
                danger: '#FE5D5D',
            },
            fontFamily: {
                primary: 'SF Pro Display'
            },
            aspectRatio: {
                '9/16': '9 / 16',
            },
            boxShadow: {
                nav: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            fontSize: {
                h1: '2.25rem',
                h2: '2rem',
                h3: '1.75rem',
                h4: '1.5rem',
                h5: '1.25rem',
                h6: '1rem',
                'button-1': '18px',
                'button-2': '16px',
                'caption': '14px',
                'small': '12px',
                'body-1': '24px',
                'body-2': '16px',
                'body-3': '14px',
            },
            lineHeight: {
                h1: '52px',
                h2: '42px',
                h3: '32px',
                h4: '26px',
                h5: '22px',
                h6: '16px',
                'button-1': '24px',
                'button-2': '24px',
                'caption': '18px',
                'small': '16px',
                'body-1': '32px',
                'body-2': '24px',
                'body-3': '18px',
            },
        },
    },
    plugins: [],
}