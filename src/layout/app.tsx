/** @jsx jsx */
import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { jsx, css, Global, ThemeProvider } from '@emotion/react';
import { fontFace } from 'polished';

import { Game, GameSave } from '../game/game';
import { PDATab } from '../game/pda';
import { GameBackground } from '../components/gameBackground';
import { theme } from '../theme';

import permanentMarkerFont from '../assets/fonts/PermanentMarker-Regular.ttf';
import vcrOsdMonoFont from '../assets/fonts/VCR_OSD_MONO.ttf';
import bgVideo from '../assets/videos/videoblocks-synthwave-noise-net-retro.mp4';
import { gameContent } from '../data/content/gameContent';
import { FredGallant } from '../data/characters';

const saveGame: GameSave = {
  currentScene: {
    index: '1_1',
    loadedCharacters: [],
    characterExpressions: {},
    currentEventIndex: 0,
    currentEvent: {
      type: 'dialog',
      id: '0',
      lineId: '1_1_1_0_dialog',
      expression: 'neutral',
      character: FredGallant,
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
      },
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

export const App: React.FunctionComponent = () => {
  const [videoRunning, setVideoRunning] = useState(true);
  const videoRef = useRef<HTMLVideoElement>();

  const handleStopVideo = () => {
    setVideoRunning(false);
    if (videoRef.current) {
      videoRef.current?.pause();
    }
  };

  return (
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
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          ref={videoRef}
          src={bgVideo}
          autoPlay={videoRunning}
          muted
          loop
        />
        <Game
          gameContent={gameContent}
          /* saveState={saveGame} */ stopVideo={handleStopVideo}
        />
      </Container>
    </ThemeProvider>
  );
};
