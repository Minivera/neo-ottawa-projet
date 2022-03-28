/** @jsx jsx */
import { FunctionComponent, useEffect, useRef } from 'react';
import { jsx, css } from '@emotion/react';
import animateScrollTo from 'animated-scroll-to';

import { Trans } from 'react-i18next';

export const Credits: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    animateScrollTo(containerRef.current.scrollHeight, {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      elementToScroll: containerRef.current.parentElement!,
      speed: 25000,
      maxDuration: 300000,
    });
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      css={css`
        margin: 10rem;
      `}
    >
      <div
        css={css`
          font-family: Permanent Marker;
          text-align: center;
          font-size: 17px;
          display: grid;
          grid-template-rows: 1fr 8em 2em 4em auto;
          grid-template-columns: auto;
          margin-bottom: 4em;

          @media only screen and (max-width: 436px) {
            font-size: 12px;
          }
        `}
      >
        <h1
          css={theme => css`
            grid-row: 2 / span 2;
            grid-column: 1;
            margin: 0;
            font-size: 10em;
            color: ${theme.colors.secondary};
            font-style: italic;
            text-shadow: 5px 5px 12px ${theme.colors.darkGray};

            @media only screen and (max-width: 436px) {
              font-size: 10em;
            }

            @media only screen and (max-width: 320px) {
              font-size: 8em;
            }
          `}
        >
          Reset
        </h1>
        <h2
          css={theme => css`
            grid-row: 3 / span 2;
            grid-column: 1;
            margin: 0;
            font-size: 6em;
            color: ${theme.colors.primary};
            font-style: italic;
            text-shadow: 5px 5px 12px ${theme.colors.darkGray};

            @media only screen and (max-width: 436px) {
              font-size: 7em;
            }

            @media only screen and (max-width: 320px) {
              font-size: 5em;
            }
          `}
        >
          2047
        </h2>
      </div>
      <div
        css={theme => css`
          font-family: VCR-OSD-MONO;
          border: 10px solid ${theme.colors.secondary};
          background: ${theme.colors.darkGreen};
          margin: 0 10rem;
          padding: 2rem;
          color: ${theme.colors.white};
          font-size: 13px;
        `}
      >
        <Trans
          i18nKey="credits"
          components={{
            h2: (
              <h2
                css={css`
                  font-size: 3rem;
                `}
              />
            ),
            h3: (
              <h3
                css={css`
                  font-size: 2rem;
                `}
              />
            ),
            p: (
              <p
                css={css`
                  font-size: 1.4rem;
                `}
              />
            ),
            hr: (
              <hr
                css={theme => css`
                  border-bottom: 1px solid ${theme.colors.secondary}; ;
                `}
              />
            ),
          }}
        />
      </div>
    </div>
  );
};
