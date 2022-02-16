/* @jsx jsx */
import React, { useEffect, useRef, useState } from 'react';
import { css, jsx } from '@emotion/react';
import { transparentize } from 'polished';
import { Portal } from 'react-portal';
import Loader from 'react-loader-spinner';
import { useTranslation } from 'react-i18next';

import { SaveSlotsModal } from './saveSlotsModal';
import { AnimatedOpen } from '../animatedOpen';
import { SaveSlot } from '../../game/saving';

export interface SaveSlotsProps {
  opened?: boolean;
  loading?: boolean;
  closeSaveSlots: () => void;
  saveSlots: SaveSlot[];
  onSaveClick: (slot: SaveSlot) => Promise<void>;
  playClickSound: () => void;
}

export const SaveSlots: React.FunctionComponent<SaveSlotsProps> = ({
  opened,
  loading,
  closeSaveSlots,
  saveSlots,
  onSaveClick,
  playClickSound,
}) => {
  const [t] = useTranslation();

  const focusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (opened && focusRef.current) {
      focusRef.current.focus();
    }
  }, [opened]);

  const [saving, setSaving] = useState<number | null>(null);

  const slots: [SaveSlot, () => Promise<void>][] = saveSlots.map(slot => [
    slot,
    async () => {
      setSaving(slot.id);

      playClickSound();
      await onSaveClick(slot);

      setSaving(null);
    },
  ]);
  for (let i = slots.length; i < 4; i++) {
    slots.push([
      {
        id: i,
        save: '{}',
        image: null,
      },
      async () => {
        setSaving(i);

        playClickSound();
        await onSaveClick({
          id: i,
          save: '{}',
          image: null,
        });

        setSaving(null);
      },
    ]);
  }

  return (
    <Portal>
      <div
        css={theme => css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: ${opened ? '7' : '-1'};
          transition: ${opened
            ? 'unset'
            : 'z-index 0.1s 0.75s, visibility 0.1s 0.75s'};
          width: 100%;
          height: 100%;
          background: ${transparentize('0.3', theme.colors.darkGreen)};
          font-size: 20px;
          font-family: VCR-OSD-MONO;
          display: flex;
          justify-content: center;
          align-items: center;

          pointer-events: ${opened ? 'all' : 'none'};
          visibility: ${opened ? 'unset' : 'hidden'};

          animation-name: ${opened ? 'zoomIn' : 'zoomOut'};
          animation-duration: 0.25s;
          animation-delay: ${opened ? '0s' : '0.50s'};
          animation-fill-mode: both;
        `}
      >
        <AnimatedOpen
          open={opened}
          css={css`
            height: 100%;
          `}
        >
          <SaveSlotsModal
            onReturnClick={() => {
              playClickSound();
              closeSaveSlots();
            }}
            ref={focusRef}
          >
            <div
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <p
                css={css`
                  margin: 2rem;
                  font-weight: normal;
                  font-size: 1.4rem;
                  flex: 1;
                  max-width: 1100px;
                  text-align: justify;

                  @media only screen and (max-width: 436px) {
                    margin: 1rem 0.5rem 0.5rem;
                  }
                `}
              >
                {t(
                  loading
                    ? 'save_slot_loading_instruction'
                    : 'save_slot_saving_instruction'
                )}
              </p>
              <ul
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-wrap: wrap;
                  padding: 0;
                  margin: 0;
                  flex: 1;

                  & li {
                    width: 50%;
                  }

                  @media only screen and (max-width: 780px) {
                    flex-direction: column;

                    & li {
                      width: 100%;
                    }
                  }

                  @media only screen and (max-width: 650px) {
                    & li > div {
                      padding: 20rem 2rem;
                    }
                  }
                `}
              >
                {slots.map(el => {
                  if (el[0].id === saving) {
                    return (
                      <li
                        css={css`
                          margin: 0;
                          padding: 0;
                          list-style: none;
                        `}
                        key={el[0].id}
                      >
                        <div
                          css={theme => css`
                            display: flex;
                            border: 2px solid ${theme.colors.primary};
                            margin: 1rem;
                            padding: 5.3rem 2rem;
                            cursor: pointer;
                            align-items: center;
                            justify-content: center;
                          `}
                        >
                          <Loader
                            type="Grid"
                            color="#cfd047"
                            height={80}
                            width={80}
                          />
                        </div>
                      </li>
                    );
                  }

                  if (!el[0].image && loading) {
                    return (
                      <li
                        css={css`
                          margin: 0;
                          padding: 0;
                          list-style: none;
                        `}
                        key={el[0].id}
                      >
                        <div
                          role="none"
                          tabIndex={-1}
                          css={theme => css`
                            display: grid;
                            border: 2px solid
                              ${transparentize(0.5, theme.colors.primary)};
                            margin: 1rem;
                            padding: 5rem 2rem;
                          `}
                        >
                          <div
                            css={css`
                              grid-column: 1;
                              grid-row: 1;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              text-transform: uppercase;
                              font-size: 2rem;
                              opacity: 0.3;
                            `}
                          >
                            {t('save_slot_name', { number: el[0].id + 1 })}
                          </div>
                          <div
                            css={css`
                              grid-column: 1;
                              grid-row: 1;
                              margin-top: 4rem;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              text-transform: uppercase;
                              font-size: 1.4rem;
                              opacity: 0.3;
                            `}
                          >
                            {t('empty_save_slot')}
                          </div>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li
                      css={css`
                        margin: 0;
                        padding: 0;
                        list-style: none;
                      `}
                      key={el[0].id}
                    >
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={el[1]}
                        onKeyPress={e => {
                          if (e.code === 'Enter') {
                            el[1]();
                          }
                        }}
                        css={theme => css`
                          position: relative;
                          display: grid;
                          border: 2px solid ${theme.colors.primary};
                          margin: 1rem;
                          padding: 5rem 2rem;
                          cursor: pointer;

                          &:hover {
                            filter: drop-shadow(
                              0 0 0.2rem ${theme.colors.yellow}
                            );
                          }
                        `}
                      >
                        <div
                          css={css`
                            grid-column: 1;
                            grid-row: 1;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            text-transform: uppercase;
                            font-size: 2rem;
                            opacity: 0.3;
                            ${el[0].image ? 'margin-bottom: 3.3rem;' : ''}
                          `}
                        >
                          {t('save_slot_name', { number: el[0].id + 1 })}
                        </div>
                        {el[0].image ? (
                          <img
                            css={css`
                              position: absolute;
                              height: 100%;
                              width: 100%;
                            `}
                            src={el[0].image || undefined}
                            alt={`save slot ${el[0].id}`}
                          />
                        ) : (
                          <div
                            css={css`
                              grid-column: 1;
                              grid-row: 1;
                              margin-top: 4rem;
                              display: flex;
                              justify-content: center;
                              align-items: center;
                              text-transform: uppercase;
                              font-size: 1.4rem;
                              opacity: 0.3;
                            `}
                          >
                            {t('empty_save_slot')}
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </SaveSlotsModal>
        </AnimatedOpen>
      </div>
    </Portal>
  );
};
