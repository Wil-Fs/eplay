import styled from 'styled-components';
import { colors } from '../../styles';
import { TagContainer } from '../Tag/styles';
import { ButtonContainer } from '../Button/styles';
import iconClose from '../../assets/images/fechar.png';

export const Overlay = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
`;

export const CartContainer = styled.div`
    z-index: 1;
    position: fixed;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    display: none;
    justify-content: flex-end;

    &.isOpen {
        display: flex;
    }
`;

export const SideBar = styled.aside`
    background-color: ${colors.gray};
    z-index: 1;
    padding: 40px 16px 0 16px;
    max-width: 360px;
    width: 100%;

    ${ButtonContainer} {
        width: 100%;
        cursor: pointer;
    }
`;

export const ProducList = styled.ul``;

export const Prices = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${colors.white};
    margin-bottom: 24px;

    span {
        display: block;
        color: ${colors.lightGray};
        font-size: 12px;
    }
`;

export const Quantity = styled(Prices)`
    font-size: 16px;
    margin: 32px 0 16px;
`;

export const Item = styled.li`
    display: flex;
    border-bottom: 1px solid ${colors.lightGray};
    padding: 8px 0;
    position: relative;

    .game {
        height: 80px;
        width: 80px;
        object-fit: cover;
    }

    div {
        margin-left: 24px;
    }

    h3 {
        color: ${colors.white};
        font-weight: bold;
        font-size: 16px;
    }

    span {
        display: block;
        color: ${colors.white};
        font-weight: bold;
        font-size: 14px;
    }

    ${TagContainer} {
        margin: 8px 8px 16px 0;
    }

    button {
        background-image: url(${iconClose});
        width: 16px;
        height: 16px;
        margin-left: 30%;
        background-color: transparent;
        border: none;
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;
    }
`;
