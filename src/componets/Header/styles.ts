import styled from 'styled-components';
import { Cores, breakPoints } from '../../styles';

export const Links = styled.ul`
    display: flex;
    margin-left: 40px;

    @media (max-width: ${breakPoints.tablet}) {
        margin-left: 0;
        display: block;
    }
`;

export const HeaderBar = styled.header`
    background-color: ${Cores.cinza};
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 80px;

    a {
        font-weight: bold;
    }
`;

export const NavMobile = styled.div`
    display: none;
    transition: 05s;

    &.isOpen {
        display: block;
        transition: 05s;
    }
`;

export const LinkItem = styled.li`
    margin-right: 16px;

    @media (max-width: ${breakPoints.tablet}) {
        margin-left: 0;

        a {
            display: block;
            padding: 16px 0;
            text-align: center;
        }
    }
`;

export const HeaderRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;

        @media (max-width: ${breakPoints.tablet}) {
            flex: 1;
            justify-content: space-between;

            ${Links} {
                display: none;
            }
        }
    }
`;

export const LinkCart = styled.a`
    display: flex;
    cursor: pointer;
    img {
        margin-left: 16px;
    }

    @media (max-width: ${breakPoints.tablet}) {
        span {
            display: none;
        }
    }
`;

export const Hamburguer = styled.div`
    width: 32px;

    span {
        height: 2px;
        display: block;
        width: 100%;
        background-color: ${Cores.branca};
        margin-bottom: 4px;
    }

    @media (min-width: ${breakPoints.tablet}) {
        display: none;
    }
`;
