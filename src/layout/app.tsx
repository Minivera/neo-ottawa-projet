import React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';
import { fontFace } from 'polished';

import { Game, GameContent } from '../game/game';
import { Character } from '../game/character';
import { GameBackground } from '../components/gameBackground';

import gabrielNeutral from '../assets/characters/02-gabriel/neutral.svg?w=350';
import gabrielJoy from '../assets/characters/02-gabriel/joy.svg?w=350';
import background from '../assets/backgrounds/parlement.jpg?w=1920&h=1024';
import { CharacterAnimation } from '../game/scene';

const testCharacter: Character = {
  id: '1',
  name: 'Test',
  images: {
    neutral: gabrielNeutral,
    joy: gabrielJoy,
  },
};

const testCharacter2: Character = {
  id: '2',
  name: 'Other test',
  images: {
    neutral: gabrielNeutral,
    joy: gabrielJoy,
  },
};

const gameContent: GameContent = {
  acts: [
    {
      id: '1',
      scenes: [
        {
          id: '1',
          background: background,
          characters: [testCharacter, testCharacter2],
          events: [
            {
              type: 'narration',
              id: 'n1',
              lineId: 'test_narration_1',
            },
            {
              type: 'dialog',
              id: 'd1',
              expression: 'joy',
              character: testCharacter,
              animation: CharacterAnimation.MOVE_UP,
              lineId: 'test_1',
            },
            {
              type: 'dialog',
              id: 'd2',
              expression: 'neutral',
              character: testCharacter2,
              animation: CharacterAnimation.FADE_IN,
              lineId: 'test_2',
            },
            {
              type: 'dialog',
              id: 'd3',
              expression: 'neutral',
              character: testCharacter,
              lineId: 'test_3',
            },
            {
              type: 'narration',
              id: 'n2',
              lineId: 'test_narration_2',
            },
            {
              type: 'narration',
              id: 'n13',
              lineId: 'test_narration_3',
              shouldHideAll: true,
            },
          ],
        },
      ],
    },
  ],
};

const Container = styled.main`
  font-size: 24px;
  font-family: VCR-OSD-MONO;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1920px) 1fr;
  grid-template-rows: 1fr minmax(auto, 1024px) 1fr;
  height: 100%;
  width: 100%;
`;

export const App: React.FunctionComponent = () => (
  <Container>
    <Global
      styles={css`
        ${fontFace({
          fontFamily: 'VCR-OSD-MONO',
          fontFilePath: '/fonts/VCR_OSD_MONO',
          fileFormats: ['ttf'],
        })}

        ${fontFace({
          fontFamily: 'Permanent Marker',
          fontFilePath: '/fonts/PermanentMarker-Regular',
          fileFormats: ['ttf'],
        })}
      `}
    />
    <GameBackground
      src="/videos/videoblocks-synthwave-noise-net-retro.mp4"
      autoPlay
      muted
      loop
    />
    <Game gameContent={gameContent} />
  </Container>
);
