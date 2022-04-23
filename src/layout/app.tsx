/** @jsx jsx */
import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { jsx, css, Global, ThemeProvider } from '@emotion/react';
import { theme as polishedTheme } from 'styled-tools';
import { fontFace } from 'polished';

import { Game } from '../game/game';
import { theme } from '../theme';
import { CharacterImageProvider } from '../hooks/useCharacterImageLoading';
import { PlausibleProvider } from '../components/plausibleTracking';
import { GameErrorBoundary } from '../components/gameError';

import permanentMarkerFont from '../assets/fonts/PermanentMarker-Regular.ttf';
import vcrOsdMonoFont from '../assets/fonts/VCR_OSD_MONO.ttf';
import storyContent from '../../data/story.json?raw';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'animate.css';

const Container = styled.main`
  background-color: ${polishedTheme('colors.black')};
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1920px) 1fr;
  grid-template-rows: 1fr minmax(auto, 1024px) 1fr;
  height: 100%;
  width: 100%;
`;

export const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <PlausibleProvider>
      <Container>
        <Global
          styles={theme => css`
            body {
              background: ${theme.colors.darkGray};
            }

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
        <GameErrorBoundary>
          <CharacterImageProvider>
            <Game storyContent={storyContent} />
          </CharacterImageProvider>
        </GameErrorBoundary>
      </Container>
    </PlausibleProvider>
  </ThemeProvider>
);
