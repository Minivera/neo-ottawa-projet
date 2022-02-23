/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { FunctionComponent } from 'react';

import noiseBackground from '../../assets/backgrounds/noise.png';

export const PDAStaticTransition: FunctionComponent = ({ children }) => (
  <div
    css={css`
      display: flex;
      flex: 1;
    `}
  >
    <div
      className="noise-wrapper"
      css={css`
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;

        animation: fadeOut 0.25s, hide 0.25s;
        animation-delay: 0.5s;
        animation-fill-mode: both;

        @keyframes hide {
          0% {
            visibility: visible;
          }
          100% {
            visibility: hidden;
          }
        }

        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.75) 100%
          );
        }
      `}
    >
      <div
        className="noise"
        css={css`
          @keyframes noise {
            0% {
              transform: translateX(0px, 0px);
            }
            10% {
              transform: translate(-100px, 100px);
            }
            20% {
              transform: translate(150px, -100px);
            }
            30% {
              transform: translate(-100px, 100px);
            }
            40% {
              transform: translate(100px, -150px);
            }
            50% {
              transform: translate(-100px, 200px);
            }
            60% {
              transform: translate(-200px, -100px);
            }
            70% {
              transform: translateY(50px, 100px);
            }
            80% {
              transform: translate(100px, -150px);
            }
            90% {
              transform: translate(0px, 200px);
            }
            100% {
              transform: translate(-100px, 100px);
            }
          }

          position: absolute;
          top: -500px;
          right: -500px;
          bottom: -500px;
          left: -500px;
          background: transparent url(${noiseBackground}) 0 0;
          background-size: 320px 320px;
          opacity: 1;
          animation: noise 0.75s;
          animation-fill-mode: both;
        `}
      />
    </div>
    <div
      className="children-wrapper"
      css={css`
        display: flex;
        flex: 1;
        animation-name: fadeIn;
        animation-duration: 0.15s;
        animation-delay: 0.6s;
        animation-fill-mode: both;
      `}
    >
      {children}
    </div>
  </div>
);
