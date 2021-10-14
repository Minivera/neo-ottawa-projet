/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css, Global, ThemeProvider } from '@emotion/react';
import { theme as polishedTheme } from 'styled-tools';
import { fontFace } from 'polished';
import { Toaster } from 'react-hot-toast';

import { Game } from '../game/game';
import { theme } from '../theme';

import permanentMarkerFont from '../assets/fonts/PermanentMarker-Regular.ttf';
import vcrOsdMonoFont from '../assets/fonts/VCR_OSD_MONO.ttf';
import storyContent from '../../data/story.json?raw';

const Container = styled.main`
  background-color: ${polishedTheme('colors.black')};
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
      <Game
        storyContent={storyContent}
        /* saveState={saveGame} */
      />
      <Toaster />
    </Container>
  </ThemeProvider>
);
