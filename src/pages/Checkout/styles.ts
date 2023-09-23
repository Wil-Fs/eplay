import styled from 'styled-components';
import { Cores } from '../../styles';
import { TagContainer } from '../../componets/Tag/styles';

type InputGroupProps = {
    maxWidth?: string;
};

type RowProps = {
    marginTop?: string;
};

type TabButtonProps = {
    isActive: boolean;
};

export const Form = styled.form`
    ${TagContainer} {
        cursor: pointer;
    }
`;

export const Row = styled.div<RowProps>`
    display: flex;
    column-gap: 24px;
    flex-wrap: wrap;
    margin-top: ${(props) => props.marginTop || '0'};
    align-items: flex-end;
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
        background-color: ${Cores.branca};
        height: 32px;
        padding: 0 8px;
        border: 1px solid ${Cores.branca};
        width: 100%;
        display: block;
        color: ${Cores.preto};
    }

    p {
        font-size: 14px;
        line-height: 22px;
    }
`;

export const TabButton = styled.button<TabButtonProps>`
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${Cores.branca};
    background-color: ${(props) =>
        props.isActive ? Cores.verde : Cores.preto};
    height: 32px;
    border: none;
    margin-right: 16px;
    padding: 0 8px;
    cursor: pointer;

    img {
        margin-right: 8px;
    }
`;
