import styled from '@emotion/styled';

export interface CharacterPortraitProps {
  active?: boolean;
}

export const CharacterPortrait = styled.div<CharacterPortraitProps>`
  padding: 0 1.5rem;
  max-height: 100%;
  display: flex;
  justify-content: center;
`;
