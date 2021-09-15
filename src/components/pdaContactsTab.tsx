/** @jsx jsx */
import React from 'react';
import { Trans } from 'react-i18next';
import { jsx, css } from '@emotion/react';
import { IoPersonSharp } from 'react-icons/io5';
import { darken } from 'polished';

import { PDA } from '../game/pda';

export interface PDAContactsTabProps {
  pdaState: PDA;
}

export const PDAContactsTab: React.FunctionComponent<PDAContactsTabProps> = ({
  pdaState,
}) => (
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

                &:last-of-type td {
                  border-bottom: none;
                }

                &:hover {
                  background-color: ${theme.colors.secondary};
                  color: ${darken(0.2, theme.colors.yellow)};
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
                <IoPersonSharp
                  css={css`
                    margin-right: 1rem;
                    font-size: 2.5rem;
                  `}
                />
                <Trans i18nKey={contact.name} />
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
  </div>
);
