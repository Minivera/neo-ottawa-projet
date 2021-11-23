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

import { PDA } from '../../game/pda';
import { PDATitle } from './pdaTitle';

import EvidenceIcon from '../../assets/ui/pda/PDA-Preuves.svg?component';
import pdaVideo from '../../assets/videos/videoblocks-hud-futuristic.mp4';

export interface EvidenceBlockProps {
  clickable?: boolean;
}

const EvidenceBlock: React.FunctionComponent<EvidenceBlockProps> = ({
  children,
  clickable,
  ...rest
}) => (
  <div
    {...rest}
    css={theme => css`
      padding: 2rem;
      font-size: 1.4rem;
      width: 32%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      ${clickable
        ? `
      cursor: pointer;

      &:hover {
        background-color: ${theme.colors.secondary};
        color: ${darken(0.2, theme.colors.yellow)};
      }
      `
        : ''}
    `}
  >
    {children}
  </div>
);

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
      <EvidenceBlock key={i}>
        <span
          css={css`
            opacity: 0.5;
          `}
        >
          <Trans i18nKey="pda_none" />
        </span>
      </EvidenceBlock>
    );
  }

  return (
    <React.Fragment>
      <div
        css={css`
          position: absolute;
          inset: 0;
          opacity: 0.3;
          z-index: -2;
          overflow: hidden;
        `}
      >
        <video
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          src={pdaVideo}
          css={css`
            position: relative;
            inset: 0;
          `}
        />
      </div>
      <div
        css={css`
          padding: 0 10rem;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <PDATitle>
            <EvidenceIcon />
            <Trans i18nKey="pda_evidence" />
          </PDATitle>
          {pdaState.evidence.length > 0 ? (
            <div
              css={theme => css`
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;

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
                let Icon: React.FunctionComponent<{ css: unknown }> | null;
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
                  <EvidenceBlock key={evidence.name} clickable>
                    <Icon
                      css={css`
                        margin-bottom: 1rem;
                        font-size: 8rem;
                      `}
                    />
                    <Trans i18nKey={evidence.name} />
                  </EvidenceBlock>
                );
              })}
              {missingSlots}
            </div>
          ) : (
            <div>
              <Trans i18nKey="pda_none" />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
