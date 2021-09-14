/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css, Global, ThemeProvider } from '@emotion/react';
import { fontFace } from 'polished';

import { Game, GameContent } from '../game/game';
import { Character } from '../game/character';
import { GameBackground } from '../components/gameBackground';
import { CharacterAnimation } from '../game/event';
import { theme } from '../theme';

import gabrielNeutral from '../assets/characters/02-gabriel/neutral.svg?w=350';
import gabrielJoy from '../assets/characters/02-gabriel/joy.svg?w=350';
import background from '../assets/backgrounds/parlement.jpg?w=1920&h=1024';
import permanentMarkerFont from '../assets/fonts/PermanentMarker-Regular.ttf';
import vcrOsdMonoFont from '../assets/fonts/VCR_OSD_MONO.ttf';
import bgVideo from '../assets/videos/videoblocks-synthwave-noise-net-retro.mp4';
import audioblockMenace from '../assets/music/audioblocks-menace.mp3';
import bigExhale from '../assets/sound/big-exhale.mp3';

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
          characters: [],
          events: [
            {
              type: 'transition',
              id: 't1',
              fullscreen: true,
              hideEverything: true,
              soundEffect: bigExhale,
              action: {
                type: 'switch_scene',
                sceneId: '1_2',
              }
            },
          ],
        },
        {
          id: '2',
          background: background,
          bgm: audioblockMenace,
          characters: [testCharacter, testCharacter2],
          events: [
            {
              type: 'narration',
              id: 'nf1',
              lineId: 'test_fullscreen_narration_1',
              fullscreen: true,
            },
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
              id: 'nca1',
              lineId: 'test_narration_clear_all',
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
  <ThemeProvider theme={theme}>
    <Container>
      <Global
        styles={css`
          ${fontFace({
            fontFamily: 'VCR-OSD-MONO',
            fontFilePath: vcrOsdMonoFont.slice(0, -4),
            fileFormats: ['ttf'],
          })}
  
          ${fontFace({
            fontFamily: 'Permanent Marker',
            fontFilePath: permanentMarkerFont.slice(0, -4),
            fileFormats: ['ttf'],
          })}
        `}
      />
      <GameBackground
        src={bgVideo}
        autoPlay
        muted
        loop
      />
      <Game gameContent={gameContent} />
    </Container>
  </ThemeProvider>
);
