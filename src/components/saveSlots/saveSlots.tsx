/* @jsx jsx */
import React, { useState } from 'react';
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
  closeSaveSlots: () => void;
  saveSlots: SaveSlot[];
  onSaveClick: (slot: SaveSlot) => Promise<void>;
}

export const SaveSlots: React.FunctionComponent<SaveSlotsProps> = ({
  opened,
  closeSaveSlots,
  saveSlots,
  onSaveClick,
}) => {
  const [t] = useTranslation();
  const [saving, setSaving] = useState<number | null>(null);

  const slots: [SaveSlot, () => Promise<void>][] = saveSlots.map(slot => [
    slot,
    async () => {
      setSaving(slot.id);

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
      <AnimatedOpen
        open={opened}
        css={theme => css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 3;
          width: 100%;
          height: 100%;
          background: ${transparentize('0.3', theme.colors.darkGreen)};
          font-size: 20px;
          font-family: VCR-OSD-MONO;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <SaveSlotsModal onReturnClick={closeSaveSlots}>
          <p
            css={css`
              margin: 2rem;
              font-weight: normal;
              font-size: 1.4rem;
            `}
          >
            {t('save_slot_instruction')}
          </p>
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
              flex-wrap: wrap;
              max-width: 1100px;
            `}
          >
            {slots.map(el => (
              <div
                css={theme => css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  position: relative;
                  border: 0.2rem solid ${theme.colors.primary};
                  margin: 1rem;
                  height: calc(320px + 0.4rem);
                  width: calc(480px + 0.4rem);
                  cursor: pointer;

                  &:hover {
                    filter: drop-shadow(0 0 0.2rem ${theme.colors.yellow});
                  }
                `}
                key={el[0].id}
                onClick={el[1]}
              >
                {el[0].id === saving ? (
                  <Loader type="Grid" color="#cfd047" height={80} width={80} />
                ) : (
                  <React.Fragment>
                    <div
                      css={css`
                        position: absolute;
                        inset: 0;
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
                    {el[0].image ? (
                      <img
                        height={320}
                        width={480}
                        src={el[0].image || undefined}
                        alt={`save slot ${el[0].id}`}
                      />
                    ) : (
                      <div
                        css={css`
                          position: absolute;
                          inset: 0;
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
                  </React.Fragment>
                )}
              </div>
            ))}
          </div>
        </SaveSlotsModal>
      </AnimatedOpen>
    </Portal>
  );
};
