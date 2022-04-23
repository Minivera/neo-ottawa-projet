/** @jsx jsx */
import { FunctionComponent, useEffect } from 'react';
import { jsx, css } from '@emotion/react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { usePlausible } from './plausibleTracking';

const InternalGameErrorBoundary: FunctionComponent<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  const { trackEvent } = usePlausible();

  useEffect(() => {
    trackEvent('Erreur critique dans le jeu');
  }, [error]);

  return (
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
  );
};

export const GameErrorBoundary: FunctionComponent = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={InternalGameErrorBoundary}>
      {children}
    </ErrorBoundary>
  );
};
