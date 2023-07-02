import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Cores } from '../../styles';

export const ButtonContainer = styled.button`
    background-color: transparent;
    border: 2px solid ${Cores.branca};
    color: ${Cores.branca};
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
`;

export const ButtonLink = styled(Link)`
    background-color: transparent;
    border: 2px solid ${Cores.branca};
    color: ${Cores.branca};
    padding: 8px 16px;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
`;
