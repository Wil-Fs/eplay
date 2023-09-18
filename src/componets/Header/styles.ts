import styled from 'styled-components';
import { Cores, breakPoints } from '../../styles';

export const HeaderBar = styled.header`
    background-color: ${Cores.cinza};
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
    }

    a {
        font-weight: bold;
    }

    @media (max-width: ${breakPoints.desktop}) {
        display: none;
    }
`;

export const Links = styled.ul`
    display: flex;
    margin-left: 40px;
`;

export const LinkItem = styled.li`
    margin-right: 16px;
`;

export const LinkCart = styled.a`
    display: flex;
    cursor: pointer;
    img {
        margin-left: 16px;
    }
`;
