import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Items = styled.ul`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`;

export const Action = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: 0.5s;
`;

export const Item = styled.li`
    position: relative;

    > img {
        border: 2px solid ${colors.white};
        border-radius: 8px;
        width: 150px;
        height: 150px;
        object-fit: cover;
    }

    &:hover {
        ${Action} {
            opacity: 100%;
            cursor: pointer;
            border-radius: 8px;
        }
    }
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.73);
    }
`;

export const ModalContent = styled.div`
    max-width: 960px;
    z-index: 1;
    position: relative;

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        h4 {
            font-size: 18px;
            font-weight: bold;
        }

        > img {
            cursor: pointer;
        }
    }

    > img {
        display: block;
        width: 100%;
        max-height: 420px;
    }

    iframe {
        display: block;
        width: 100%;
        height: 420px;
    }
`;
