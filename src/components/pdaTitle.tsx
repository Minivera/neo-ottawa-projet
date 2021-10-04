import styled from '@emotion/styled';
import { theme } from 'styled-tools';

export const PDATitle = styled.h1`
  color: ${theme('colors.yellow')};
  font-weight: normal;
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  font-style: italic;
  text-transform: uppercase;

  & svg {
    fill: ${theme('colors.yellow')};
  }

  & svg {
    margin-right: 1rem;
  }
`;
