/** @jsx jsx */
import React from 'react';
import { Trans } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import {
  IoLaptopOutline,
  IoPhonePortraitOutline,
  IoSaveOutline,
  IoReceiptOutline,
  IoHelpCircleOutline,
} from 'react-icons/io5';
import { darken } from 'polished';

import { PDA } from '../game/pda';

export interface PDAEvidenceTabProps {
  pdaState: PDA;
}

export const PDAEvidenceTab: React.FunctionComponent<PDAEvidenceTabProps> = ({
  pdaState,
}) => {
  const missingSlots: React.ReactElement[] = [];
  let count = pdaState.evidence.length;
  for (; count >= 3; ) {
    count--;
  }

  for (let i = 0; i < count + 3; i++) {
    missingSlots.push(
      <div
        key={i}
        css={css`
          padding: 2rem;
          font-size: 1.4rem;
          width: 32%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <span
          css={css`
            opacity: 0.5;
          `}
        >
          <Trans i18nKey="pda_none" />
        </span>
      </div>
    );
  }

  return (
    <div
      css={css`
        height: calc(100% - 5rem);
        width: calc(100% - 8rem);
        margin: 4rem 4rem 1rem;
        padding: 4rem 10rem 0;
      `}
    >
      <div
        css={theme => css`
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow-y: auto;
          display: flex;
          flex-wrap: wrap;
          
          &::-webkit-scrollbar {
            width: 0.5rem;
          }

          &::-webkit-scrollbar-track {
            background: ${theme.colors.lightGray};
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            background-clip: padding-box;
          }

          &::-webkit-scrollbar-thumb {
            background-color: ${theme.colors.yellow};
          }

          & > div {
            border-bottom: 0.1rem solid ${theme.colors.lightGray};
            border-right: 0.1rem solid ${theme.colors.lightGray};
            min-height: 14rem;

            &:nth-of-type(3n) {
              border-right: none;
            }

            &:nth-last-of-type(1),
            &:nth-last-of-type(2),
            &:nth-last-of-type(3) {
              border-bottom: none;
            }
          }
        `}
      >
        {pdaState.evidence.map(evidence => {
          let Icon: React.FunctionComponent<{ css: unknown }> | null = null;
          switch (evidence.type) {
            case 'computer':
              Icon = IoLaptopOutline;
              break;
            case 'disk':
              Icon = IoSaveOutline;
              break;
            case 'phone':
              Icon = IoPhonePortraitOutline;
              break;
            case 'result':
              Icon = IoReceiptOutline;
              break;
            default:
              Icon = IoHelpCircleOutline;
              break;
          }

          return (
            <div
              key={evidence.name}
              css={theme => css`
                padding: 2rem;
                font-size: 1.4rem;
                cursor: pointer;
                width: 32%;
                display: flex;
                flex-direction: column;
                align-items: center;

                &:hover {
                  background-color: ${theme.colors.secondary};
                  color: ${darken(0.2, theme.colors.yellow)};
                }
              `}
            >
              <Icon
                css={css`
                  margin-bottom: 1rem;
                  font-size: 8rem;
                `}
              />
              <Trans i18nKey={evidence.name} />
            </div>
          );
        })}
        {missingSlots}
      </div>
    </div>
  );
};
