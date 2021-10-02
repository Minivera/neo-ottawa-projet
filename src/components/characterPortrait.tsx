import styled from '@emotion/styled';
import { ifProp, theme } from 'styled-tools';

export interface CharacterPortraitProps {
  active?: boolean;
}

export const CharacterPortrait = styled.div<CharacterPortraitProps>`
  padding: 0 1.5rem;
  max-height: 100%;
  display: flex;
  justify-content: center;
  transition: transform 200ms ease-in-out;
  transform-origin: center;
  filter: drop-shadow(0 0 0.2rem ${theme('colors.yellow')});
  
  ${ifProp('active', '', `
    transform: scale(0.95);
    filter: grayscale(40%);
  `)}
`;
