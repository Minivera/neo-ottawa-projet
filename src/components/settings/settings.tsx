import React, { Dispatch } from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { theme } from 'styled-tools';
import { useTranslation } from 'react-i18next';
import { Portal } from 'react-portal';

import { SettingsAction, SettingsState } from '../../hooks/useSettings';
import { SettingsModals } from './settingsModal';
import { SettingsSlider } from './settingsSlider';
import { SettingsCheckbox } from './settingsCheckbox';
import { AnimatedOpen } from '../animatedOpen';

const SettingsContainer = styled(AnimatedOpen)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background: ${props =>
    transparentize(
      '0.3',
      theme('colors.darkGreen')(props) as unknown as string
    )};
  font-size: 20px;
  font-family: VCR-OSD-MONO;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SettingsForm = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: -30px;
  margin-right: -30px;
`;

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
}

export const Settings: React.FunctionComponent<SettingsProps> = ({
  settings,
  dispatch,
}) => {
  const [t] = useTranslation();

  const handleFontSizeChange = (newVal: number) =>
    dispatch({ type: 'setFontSize', fontSize: newVal });
  const handleAnimationToggle = () =>
    dispatch({
      type: 'setAnimationSpeed',
      enabled: !settings.settings.textAnimationsEnabled,
      speed: settings.settings.textAnimationSpeed,
    });
  const handleAnimationSpeedChanged = (newVal: number) =>
    dispatch({
      type: 'setAnimationSpeed',
      enabled: settings.settings.textAnimationsEnabled,
      speed: newVal,
    });
  const handleSoundEffectsToggle = () =>
    dispatch({
      type: 'setSoundEffects',
      enabled: !settings.settings.soundEffectsEnabled,
      volume: settings.settings.soundEffectsVolume,
    });
  const handleSoundEffectsVolumeChanged = (newVal: number) =>
    dispatch({
      type: 'setSoundEffects',
      enabled: settings.settings.textAnimationsEnabled,
      volume: newVal,
    });
  const handleMusicToggle = () =>
    dispatch({
      type: 'setMusic',
      enabled: !settings.settings.musicEnabled,
      volume: settings.settings.musicVolume,
    });
  const handleMusicVolumeChanged = (newVal: number) =>
    dispatch({
      type: 'setMusic',
      enabled: settings.settings.musicEnabled,
      volume: newVal,
    });

  return (
    <Portal>
      <SettingsContainer open={settings.opened}>
        <SettingsModals onReturnClick={() => dispatch({ type: 'close' })}>
          <SettingsForm>
            <SettingsLabel htmlFor="font-size">
              {t('settings_font_size')}
            </SettingsLabel>
            <SettingsInput>
              <SettingsSlider
                min={12}
                max={22}
                step={1}
                ariaLabelForHandle="font-size"
                onChange={handleFontSizeChange}
                value={settings.settings.fontSize}
              />
            </SettingsInput>
            <SettingsLabel htmlFor="animation-speed">
              {t('settings_animation_speed')}
            </SettingsLabel>
            <SettingsInputGroup>
              <SettingsCheckbox
                onChecked={handleAnimationToggle}
                checked={settings.settings.textAnimationsEnabled}
              />
              <SettingsSlider
                min={0.5}
                max={1.0}
                step={0.05}
                ariaLabelForHandle="animation-speed"
                onChange={handleAnimationSpeedChanged}
                value={settings.settings.textAnimationSpeed}
                disabled={!settings.settings.textAnimationsEnabled}
              />
            </SettingsInputGroup>
            <SettingsLabel htmlFor="music-volume">
              {t('settings_music')}
            </SettingsLabel>
            <SettingsInputGroup>
              <SettingsCheckbox
                onChecked={handleMusicToggle}
                checked={settings.settings.musicEnabled}
              />
              <SettingsSlider
                min={0}
                max={100}
                step={5}
                ariaLabelForHandle="music-volume"
                onChange={handleMusicVolumeChanged}
                value={settings.settings.musicVolume}
                disabled={!settings.settings.musicEnabled}
              />
            </SettingsInputGroup>
            <SettingsLabel htmlFor="sound-effects-volume">
              {t('settings_sound_effects')}
            </SettingsLabel>
            <SettingsInputGroup>
              <SettingsCheckbox
                onChecked={handleSoundEffectsToggle}
                checked={settings.settings.soundEffectsEnabled}
              />
              <SettingsSlider
                min={0}
                max={100}
                step={5}
                ariaLabelForHandle="sound-effects-volume"
                onChange={handleSoundEffectsVolumeChanged}
                value={settings.settings.soundEffectsVolume}
                disabled={!settings.settings.soundEffectsEnabled}
              />
            </SettingsInputGroup>
          </SettingsForm>
        </SettingsModals>
      </SettingsContainer>
    </Portal>
  );
};
