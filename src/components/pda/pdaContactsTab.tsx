/** @jsx jsx */
import React from 'react';
import { Trans } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import { darken } from 'polished';

import { PDA } from '../../game/pda';
import { PDATitle } from './pdaTitle';

import ContactIcon from '../../assets/ui/pda/PDA-Contacts.svg?component';
import PoliceContactIcon from '../../assets/ui/pda/ContactBrigade.svg?component';
import ResistanceContactIcon from '../../assets/ui/pda/ContactResist.svg?component';
import pdaVideo from '../../assets/videos/videoblocks-hud-futuristic.mp4';

export interface PDAContactsTabProps {
  pdaState: PDA;
}

export const PDAContactsTab: React.FunctionComponent<PDAContactsTabProps> = ({
  pdaState,
}) => (
  <React.Fragment>
    <video
      /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
      // @ts-ignore
      src={pdaVideo}
      css={css`
        position: absolute;
        inset: 0;
        opacity: 0.3;
        z-index: -2;
      `}
    />
    <div
      css={css`
        height: calc(100% - 5rem);
        width: calc(100% - 8rem);
        margin: 4rem 4rem 1rem;
        padding: 0 10rem;
      `}
    >
      <div
        css={css`
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
        `}
      >
        <PDATitle>
          <ContactIcon />
          <Trans i18nKey="pda_contacts" />
        </PDATitle>
        {pdaState.contacts.length > 0 ? (
          <div
            css={theme => css`
              height: 100%;
              width: 100%;
              overflow-y: auto;

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
            `}
          >
            <table
              css={css`
                width: 100%;
                margin: 0;
                padding: 0;
              `}
            >
              <tbody>
                {pdaState.contacts.map(contact => (
                  <tr
                    key={contact.name}
                    css={theme => css`
                      padding: 1rem 0;
                      font-size: 1.8rem;
                      cursor: pointer;

                      & svg {
                        fill: ${theme.colors.secondary};
                      }

                      &:last-of-type td {
                        border-bottom: none;
                      }

                      &:hover {
                        background-color: ${theme.colors.secondary};
                        color: ${darken(0.2, theme.colors.yellow)};

                        & svg {
                          fill: ${darken(0.2, theme.colors.yellow)};
                        }
                      }
                    `}
                  >
                    <td
                      css={theme => css`
                        border-right: 0.1rem solid ${theme.colors.lightGray};
                        border-bottom: 0.1rem solid ${theme.colors.lightGray};
                        padding: 1rem;
                      `}
                    >
                      <div
                        css={css`
                          display: flex;
                          align-items: center;
                          font-size: 1.5rem;

                          & svg {
                            margin-right: 0.2rem;
                            height: 2.5rem;
                          }
                        `}
                      >
                        {contact.type === 'police' ? (
                          <PoliceContactIcon />
                        ) : (
                          <ResistanceContactIcon />
                        )}
                        <Trans i18nKey={contact.name} />
                      </div>
                    </td>
                    <td
                      css={theme => css`
                        border-bottom: 0.1rem solid ${theme.colors.lightGray};
                        padding: 1rem;
                      `}
                    >
                      <Trans i18nKey={contact.description} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
