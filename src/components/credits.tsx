/** @jsx jsx */
import { FunctionComponent, useRef } from 'react';
import { jsx, css } from '@emotion/react';

import { Trans } from 'react-i18next';
import { GameBackground } from './gameBackground';

export const Credits: FunctionComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      css={css`
        margin: 10rem;
      `}
    >
      <div
        css={css`
          visibility: hidden;
          position: absolute;
          inset: 0;
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
      <div css={css``}>
        <GameBackground
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          src={`${import.meta.env.BASE_URL}videos/credits.mp4`}
          autoPlay={true}
        />
      </div>
    </div>
  );
};
