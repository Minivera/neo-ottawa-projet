/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css, Global, ThemeProvider } from '@emotion/react';
import { fontFace } from 'polished';

import { Game, GameContent, GameSave } from '../game/game';
import { PDATab } from '../game/pda';
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
  name: 'test_name_1',
  images: {
    neutral: gabrielNeutral,
    joy: gabrielJoy,
  },
};

const testCharacter2: Character = {
  id: '2',
  name: 'test_name_2',
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
              },
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
              id: 'nca1',
              lineId: 'test_narration_clear_all',
              shouldHideAll: true,
            },
            {
              type: 'multiple_choice',
              id: 'mc1',
              character: testCharacter,
              expression: 'joy',
              lineId: 'test_multiple_choice_1',
              choices: [
                {
                  lineId: 'test_multiple_choice_1_option_1',
                  action: {
                    type: 'switch_scene',
                    sceneId: '1_3',
                  },
                },
                {
                  lineId: 'test_multiple_choice_1_option_2',
                  action: {
                    type: 'switch_scene',
                    sceneId: '1_4',
                  },
                },
                {
                  lineId: 'test_multiple_choice_1_option_3',
                  action: {
                    type: 'switch_scene',
                    sceneId: '1_5',
                  },
                },
              ],
            },
          ],
        },
        {
          id: '3',
          characters: [],
          events: [
            {
              type: 'narration',
              id: 'n2',
              lineId: 'test_narration_2',
            },
          ],
        },
        {
          id: '4',
          characters: [],
          events: [
            {
              type: 'narration',
              id: 'n3',
              lineId: 'test_narration_3',
            },
          ],
        },
        {
          id: '5',
          characters: [],
          events: [
            {
              type: 'narration',
              id: 'n4',
              lineId: 'test_narration_4',
            },
          ],
        },
      ],
    },
  ],
};

const saveGame: GameSave = {
  currentScene: {
    index: '1_1',
    loadedCharacters: [],
    characterExpressions: {},
    currentEventIndex: 0,
    currentEvent: {
      type: 'transition',
      id: 't1',
      fullscreen: true,
      hideEverything: true,
      soundEffect: bigExhale,
      action: {
        type: 'switch_scene',
        sceneId: '1_2',
      },
    },
  },
  pda: {
    open: false,
    tab: PDATab.DOCUMENTS,
    documents: [
      {
        name: 'test_document_1',
      },
      {
        name: 'test_document_2',
      },
    ],
    contacts: [
      {
        name: 'test_name_1',
        description: 'test_contact_description_1',
        type: 'police',
      },
      {
        name: 'test_name_2',
        description: 'test_contact_description_2',
        type: 'resistance',
      },
    ],
    evidence: [
      {
        type: 'phone',
        name: 'test_evidence_name_1',
      },
      {
        type: 'computer',
        name: 'test_evidence_name_2',
      },
      {
        type: 'result',
        name: 'test_evidence_name_3',
      },
      {
        type: 'disk',
        name: 'test_evidence_name_4',
      }
    ],
  },
};

const Container = styled.main`
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
      <GameBackground src={bgVideo} autoPlay muted loop />
      <Game gameContent={gameContent} saveState={saveGame} />
    </Container>
  </ThemeProvider>
);
