/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'styled-tools';
import { FunctionComponent } from 'react';
import { darken } from 'polished';

import NextIcon from '../assets/ui/pda/FlecheNEXT.svg?component';

const IconButton = styled.a`
  color: ${theme('colors.secondary')};
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    color: ${props => darken(0.2, theme('colors.secondary')(props) as unknown as string)};

    & svg {
      fill: ${props => darken(0.2, theme('colors.secondary')(props) as unknown as string)};
    }
  }
  
  & svg {
    fill: ${theme('colors.secondary')};
    margin-left: 1rem;
    margin-top: 0.4rem;
    height: 1.3rem;
  }
`;

export const NextButton: FunctionComponent = () => (
  <IconButton>
    Continuer
    <NextIcon />
  </IconButton>
);
