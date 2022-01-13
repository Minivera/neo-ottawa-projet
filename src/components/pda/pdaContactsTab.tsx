/** @jsx jsx */
import React from 'react';
import { Trans } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import { darken } from 'polished';
import { useMediaQuery } from 'react-responsive';

import { PDA } from '../../game/pda';
import { PDATitle } from './pdaTitle';

import ContactIcon from '../../assets/ui/pda/PDA-Contacts.svg?component';
import PoliceContactIcon from '../../assets/ui/icons/ContactBrigade.svg?component';
import ResistanceContactIcon from '../../assets/ui/icons/ContactResist.svg?component';

export interface PDAContactsTabProps {
  pdaState: PDA;
}

export const PDAContactsTab: React.FunctionComponent<PDAContactsTabProps> = ({
  pdaState,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div
      css={css`
        width: calc(100% - 8rem);
        padding: 0 10rem;

        @media only screen and (max-width: 480px) {
          width: 100%;
          padding: 0 1rem;
        }
      `}
    >
      <div
        css={css`
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
            css={css`
              height: 100%;
              width: 100%;
              overflow-y: auto;
            `}
          >
            {isTabletOrMobile ? (
              <ul
                css={css`
                  margin: 0;
                  padding: 0;
                  overflow-y: auto;
                `}
              >
                {pdaState.contacts.map(contact => (
                  <li
                    key={contact.name}
                    css={theme => css`
                      border-bottom: 2px solid ${theme.colors.lightGray};

                      font-size: 1.8rem;
                      display: flex;
                      list-style: none;
                      align-items: center;
                      cursor: pointer;

                      &:hover {
                        background-color: ${theme.colors.secondary};
                        color: ${darken(0.2, theme.colors.yellow)};
                      }

                      &:last-of-type {
                        border-bottom: none;
                      }

                      @media only screen and (max-width: 768px) {
                        border-bottom: none;
                        border-top: 2px solid ${theme.colors.lightGray};
                      }
                    `}
                  >
                    <div
                      css={css`
                        display: flex;
                        align-items: center;
                        font-size: 1.5rem;
                        padding: 1rem 0;
                      `}
                    >
                      <div
                        css={theme => css`
                          & svg {
                            fill: ${theme.colors.secondary};
                            margin-right: 1rem;
                            height: 2.3rem;
                            width: 2.3rem;
                          }
                        `}
                      >
                        {contact.type === 'police' ? (
                          <PoliceContactIcon />
                        ) : (
                          <ResistanceContactIcon />
                        )}
                      </div>
                      <div>
                        <Trans i18nKey={contact.name} />
                        <div
                          css={css`
                            margin-top: 0.5rem;
                            font-style: italic;
                          `}
                        >
                          <Trans i18nKey={contact.description} />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
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
                          border-right: 2px solid ${theme.colors.lightGray};
                          border-bottom: 2px solid ${theme.colors.lightGray};
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
                          border-bottom: 2px solid ${theme.colors.lightGray};
                          padding: 1rem;
                        `}
                      >
                        <Trans i18nKey={contact.description} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ) : (
          <div>
            <Trans i18nKey="pda_none" />
          </div>
        )}
      </div>
    </div>
  );
};
