import styled from '@emotion/styled';
import { prop } from 'styled-tools';

export interface PortraitsContainerProps {
  count: number;
}

export const PortraitsContainer = styled.div<PortraitsContainerProps>`
  grid-row: 1 / span 2;
  grid-column: 1;
  display: grid;
  grid-template-columns: repeat(${prop('count', 2)}, 1fr);
`;
