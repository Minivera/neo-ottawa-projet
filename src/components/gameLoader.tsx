/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';

export interface GameLoaderProps {
  percent?: number;
}

export const GameLoader: FunctionComponent<GameLoaderProps> = ({ percent }) => {
  const [t] = useTranslation();

  return (
    <div
      css={theme => css`
        position: relative;
        line-height: 1.15;
        margin: 0.5rem 3.5rem;
        color: ${theme.colors.white};
        padding: 1.3rem 2rem;
        min-width: 70vw;
        text-align: center;
        font-size: 22px;
        font-family: VCR-OSD-MONO;
        
        @media only screen and (max-width: 768px) {
          min-width: 90vw;
        }
      `}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        css={theme => css`
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0px;
          left: 0px;
          fill: ${theme.colors.black};
        `}
      >
        <defs>
          <clipPath id="hexagon">
            <path d="M5,7 L95,7 99,50 95,93 5,93 1,50z" />
          </clipPath>
        </defs>
        <path
          d="M5,7 L95,7 99,50 95,93 5,93 1,50z"
          vectorEffect="non-scaling-stroke"
          css={theme => css`
            stroke: ${theme.colors.primary};
            stroke-width: 3;
          `}
        />
        <rect
          x="0"
          y="0"
          width={percent + '%'}
          height="100%"
          clipPath="url(#hexagon)"
          css={theme => css`
            fill: ${theme.colors.primary};
          `}
        />
      </svg>
      <span
        css={css`
          position: relative;
        `}
      >
        {percent ? `${t('loading')} - ${percent.toFixed(0)}%` : t('preparing')}
      </span>
    </div>
  );
};
