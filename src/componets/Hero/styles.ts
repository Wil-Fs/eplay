import { styled } from 'styled-components';

import { Cores } from '../../styles';
import { TagContainer } from '../Tag/styles';

export const Banner = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 480px;
    position: relative;
    padding-top: 16px;

    &::after {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.6);
        height: 100%;
        width: 100%;
        top: 0;
        right: 0;
        content: '';
    }

    ${TagContainer} {
        margin-right: 8px;
    }

    .Container {
        z-index: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
`;

export const Infos = styled.div`
    padding: 16px;
    background-color: ${Cores.preto};
    max-width: 290px;
    font-weight: bold;

    h2 {
        font-size: 32px;
    }

    p {
        font-size: 18px;
        margin: 16px 0;

        span {
            display: block;
            text-decoration: line-through;
        }
    }
`;
