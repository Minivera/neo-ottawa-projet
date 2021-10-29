import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { ifNotProp, ifProp, theme } from 'styled-tools';
import { darken } from 'polished';

export interface IconButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
}

export const IconButton = styled.a<IconButtonProps>`
  color: ${props =>
    ifProp(
      'disabled',
      darken(0.3, theme('colors.secondary')(props) as unknown as string),
      theme('colors.secondary')(props)
    )(props)};
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};
  display: flex;
  align-items: center;

  ${ifNotProp(
    'disabled',
    props => `
  &:hover {
    color: ${darken(
      0.2,
      theme('colors.secondary')(props) as unknown as string
    )};

    & svg {
      fill: ${darken(
        0.2,
        theme('colors.secondary')(props) as unknown as string
      )};
    }
  }
  `
  )}

  & svg {
    fill: ${props =>
      ifProp(
        'disabled',
        darken(0.3, theme('colors.secondary')(props) as unknown as string),
        theme('colors.secondary')(props)
      )(props)};
    margin-left: 1rem;
    margin-top: 0.4rem;
    height: 1.3rem;
  }
`;
