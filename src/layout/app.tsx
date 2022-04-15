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
import { CharacterImageProvider } from '../hooks/useCharacterImageLoading';

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
            css={theme => css`
              height: 100%;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              color: ${theme.colors.white};
              margin: 4rem;
            `}
          >
            <div>
              <h1>Erreur!</h1>
              <h2>
                Une erreur a eu lieu dans le jeu, voici les détails à nous
                transmettre.
              </h2>
              <p>
                Remplissez{' '}
                <a
                  css={theme => css`
                    color: ${theme.colors.white};
                  `}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScHC8I6KZLXTVLs5hMOsj7I_ySjAAUB9AxztwjFjDbeuI1RGQ/viewform"
                >
                  ce formulaire
                </a>{' '}
                pour signaler une erreur.
              </p>
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
        <CharacterImageProvider>
          <Game storyContent={storyContent} />
        </CharacterImageProvider>
      </ErrorBoundary>
    </Container>
  </ThemeProvider>
);
