/** @jsx jsx */
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css, Global, ThemeProvider } from '@emotion/react';
import { theme as polishedTheme } from 'styled-tools';
import { fontFace } from 'polished';
import { ErrorBoundary } from 'react-error-boundary';

import { Game } from '../game/game';
import { theme } from '../theme';

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

export const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
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
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div
            css={css`
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <div>
              <h1>Erreur!</h1>
              <h2>
                Une erreur à eu lieu dans le jeu, voici les détails à nous
                tansmettre
              </h2>
              <pre>
                {error.name}
                {error.message}
                {error.stack}
              </pre>
              <button
                onClick={() => {
                  resetErrorBoundary();
                }}
              >
                Redémarrer le jeu
              </button>
            </div>
          </div>
        )}
      >
        <Game storyContent={storyContent} />
      </ErrorBoundary>
    </Container>
  </ThemeProvider>
);
