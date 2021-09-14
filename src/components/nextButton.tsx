/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from 'styled-tools';
import { FunctionComponent } from 'react';
import { darken } from 'polished';
import { IoPlayForward } from 'react-icons/io5';

const IconButton = styled.a`
  color: ${theme('colors.secondary')};
  cursor: pointer;
  
  &:hover {
    color: ${props => darken(0.2, theme('colors.secondary')(props) as unknown as string)};
  }
`;

const Icon = styled(IoPlayForward)`
  margin-left: 1rem;
`;

export const NextButton: FunctionComponent = () => (
  <IconButton>
    Continuer
    <Icon />
  </IconButton>
);
