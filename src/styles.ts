import { createGlobalStyle } from 'styled-components';

export const colors = {
    white: '#eee',
    black: '#111111',
    gray: '#333',
    lightGray: '#A3A3A3',
    green: '#10ac84',
    transparent: ''
};

export const breakPoints = {
    desktop: '1024px',
    tablet: '768px'
};

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        color: ${colors.white};
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: ${colors.black};
        padding-top: 40px;
    }

    .Container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakPoints.desktop}) {
            max-width: 80%;
        }
    }
`;
