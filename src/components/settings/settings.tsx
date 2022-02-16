/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { Dispatch, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { useTranslation } from 'react-i18next';
import { Portal } from 'react-portal';

import { SettingsAction, SettingsState } from '../../hooks/useSettings';
import { SettingsModals } from './settingsModal';
import { SettingsSlider } from './settingsSlider';
import { SettingsCheckbox } from './settingsCheckbox';
import { AnimatedOpen } from '../animatedOpen';

const SettingsLabel = styled.label`
  text-transform: uppercase;
  font-style: italic;
  font-size: 1.4rem;
  margin-bottom: 1.3rem;
`;

const SettingsInput = styled.div`
  margin-bottom: 2rem;
`;

const SettingsInputGroup = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: stretch;
  align-items: center;

  & > div:nth-child(1) {
    margin-right: 0.5rem;
  }

  & > div:nth-child(2) {
    flex: 1;
  }
`;

export interface SettingsProps {
  settings: SettingsState;
  dispatch: Dispatch<SettingsAction>;
  playClickSound: () => void;
  onButtonHover: () => void;
}

export const Settings: React.FunctionComponent<SettingsProps> = ({
  settings,
  dispatch,
  playClickSound,
  onButtonHover,
}) => {
  const [t] = useTranslation();
  const focusRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (settings.opened && focusRef.current) {
      focusRef.current.focus();
    }
  }, [settings.opened]);

  const handleFontSizeChange = (newVal: number) =>
    dispatch({ type: 'setFontSize', fontSize: newVal });
  const handleAnimationToggle = () => {
    playClickSound();
    dispatch({
      type: 'setAnimationSpeed',
      enabled: !settings.settings.textAnimationsEnabled,
      speed: settings.settings.textAnimationSpeed,
    });
  };
  const handleAnimationSpeedChanged = (newVal: number) =>
    dispatch({
      type: 'setAnimationSpeed',
      enabled: settings.settings.textAnimationsEnabled,
      speed: newVal,
    });
  const handleSoundEffectsToggle = () => {
    playClickSound();
    dispatch({
      type: 'setSoundEffects',
      enabled: !settings.settings.soundEffectsEnabled,
      volume: settings.settings.soundEffectsVolume,
    });
  };
  const handleSoundEffectsVolumeChanged = (newVal: number) =>
    dispatch({
      type: 'setSoundEffects',
      enabled: settings.settings.textAnimationsEnabled,
      volume: newVal,
    });
  const handleMusicToggle = () => {
    playClickSound();
    dispatch({
      type: 'setMusic',
      enabled: !settings.settings.musicEnabled,
      volume: settings.settings.musicVolume,
    });
  };
  const handleMusicVolumeChanged = (newVal: number) =>
    dispatch({
      type: 'setMusic',
      enabled: settings.settings.musicEnabled,
      volume: newVal,
    });

  return (
    <Portal>
      <div
        css={theme => css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: ${settings.opened ? '7' : '-1'};
          transition: ${settings.opened
            ? 'unset'
            : 'z-index 0.1s 0.75s, visibility 0.1s 0.75s'};
          background: ${transparentize('0.3', theme.colors.darkGreen)};
          font-size: 20px;
          font-family: VCR-OSD-MONO;
          display: flex;
          justify-content: center;
          align-items: center;

          pointer-events: ${settings.opened ? 'all' : 'none'};
          visibility: ${settings.opened ? 'unset' : 'hidden'};

          animation-name: ${settings.opened ? 'zoomIn' : 'zoomOut'};
          animation-duration: 0.25s;
          animation-delay: ${settings.opened ? '0s' : '0.50s'};
          animation-fill-mode: both;
        `}
      >
        <AnimatedOpen open={settings.opened}>
          <SettingsModals
            onButtonHover={onButtonHover}
            onReturnClick={() => {
              playClickSound();
              dispatch({ type: 'close' });
            }}
          >
            <div
              ref={focusRef}
              css={css`
                padding: 2rem;
                display: flex;
                flex-direction: column;
                margin-bottom: -30px;
                margin-right: -30px;
              `}
            >
              <SettingsLabel htmlFor="font-size" id="font-size-label">
                {t('settings_font_size')}
              </SettingsLabel>
              <SettingsInput>
                <SettingsSlider
                  min={12}
                  max={22}
                  step={1}
                  ariaLabelledByForHandle="font-size-label"
                  ariaLabelForHandle="font-size"
                  onChange={handleFontSizeChange}
                  value={settings.settings.fontSize}
                />
              </SettingsInput>
              <SettingsLabel
                htmlFor="animation-speed"
                id="animation-speed-label"
              >
                {t('settings_animation_speed')}
              </SettingsLabel>
              <SettingsInputGroup>
                <SettingsCheckbox
                  id="animation-speed-check"
                  onChecked={handleAnimationToggle}
                  checked={settings.settings.textAnimationsEnabled}
                />
                <SettingsSlider
                  min={0.5}
                  max={1.0}
                  step={0.05}
                  ariaLabelForHandle="animation-speed"
                  ariaLabelledByForHandle="animation-speed-label"
                  onChange={handleAnimationSpeedChanged}
                  value={settings.settings.textAnimationSpeed}
                  disabled={!settings.settings.textAnimationsEnabled}
                />
              </SettingsInputGroup>
              <SettingsLabel htmlFor="music-volume" id="music-volume-label">
                {t('settings_music')}
              </SettingsLabel>
              <SettingsInputGroup>
                <SettingsCheckbox
                  id="music-volume-check"
                  onChecked={handleMusicToggle}
                  checked={settings.settings.musicEnabled}
                />
                <SettingsSlider
                  min={0}
                  max={100}
                  step={5}
                  ariaLabelForHandle="music-volume"
                  ariaLabelledByForHandle="music-volume-label"
                  onChange={handleMusicVolumeChanged}
                  value={settings.settings.musicVolume}
                  disabled={!settings.settings.musicEnabled}
                />
              </SettingsInputGroup>
              <SettingsLabel
                htmlFor="sound-effects-volume"
                id="sound-effects-volume-label"
              >
                {t('settings_sound_effects')}
              </SettingsLabel>
              <SettingsInputGroup>
                <SettingsCheckbox
                  id="sound-effects-check"
                  onChecked={handleSoundEffectsToggle}
                  checked={settings.settings.soundEffectsEnabled}
                />
                <SettingsSlider
                  min={0}
                  max={100}
                  step={5}
                  ariaLabelForHandle="sound-effects-volume"
                  ariaLabelledByForHandle="sound-effects-volume-label"
                  onChange={handleSoundEffectsVolumeChanged}
                  value={settings.settings.soundEffectsVolume}
                  disabled={!settings.settings.soundEffectsEnabled}
                />
              </SettingsInputGroup>
            </div>
          </SettingsModals>
        </AnimatedOpen>
      </div>
    </Portal>
  );
};
