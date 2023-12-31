import styled from 'styled-components';
import { breakPoints, colors } from '../../styles';

type InputGroupProps = {
    maxWidth?: string;
};

type RowProps = {
    marginTop?: string;
};

type TabButtonProps = {
    isActive: boolean;
};

export const Row = styled.div<RowProps>`
    display: flex;
    column-gap: 24px;
    flex-wrap: wrap;
    margin-top: ${(props) => props.marginTop || '0'};
    align-items: flex-end;

    @media (max-width: ${breakPoints.tablet}) {
        display: block;
        margin-top: 16px;
    }
`;

export const InputGroup = styled.div<InputGroupProps>`
    flex: auto;
    max-width: ${(props) => props.maxWidth || 'auto'};

    label {
        font-size: 14px;
        margin-bottom: 8px;
        display: block;
    }

    input,
    select,
    option {
        background-color: ${colors.white};
        height: 32px;
        padding: 0 8px;
        border: 1px solid ${colors.white};
        width: 100%;
        display: block;
        color: ${colors.black};

        &.error {
            border: 1px solid red;
        }
    }

    p {
        font-size: 14px;
        line-height: 22px;
    }

    @media (max-width: ${breakPoints.tablet}) {
        margin-top: 16px;
    }
`;

export const TabButton = styled.button<TabButtonProps>`
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.white};
    background-color: ${(props) =>
        props.isActive ? colors.green : colors.black};
    height: 32px;
    border: none;
    margin-right: 16px;
    padding: 0 8px;
    cursor: pointer;

    img {
        margin-right: 8px;
    }

    @media (max-width: ${breakPoints.tablet}) {
        margin-top: 8px;
        width: 100%;
    }
`;
