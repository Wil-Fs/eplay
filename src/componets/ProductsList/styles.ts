import styled from 'styled-components';
import { breakPoints } from '../../styles';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 40px;

    @media (max-width: ${breakPoints.desktop}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakPoints.tablet}) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
