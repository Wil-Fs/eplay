import { createGlobalStyle } from 'styled-components';

export const Cores = {
    branca: '#eee',
    preto: '#111111',
    cinza: '#333',
    cinzaClaro: '#A3A3A3',
    verde: '#10ac84',
    transparent: ''
};

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        color: ${Cores.branca};
        list-style: none;
        text-decoration: none;
    }

    body {
        background-color: ${Cores.preto};
        padding-top: 40px;
    }

    .Container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`;
