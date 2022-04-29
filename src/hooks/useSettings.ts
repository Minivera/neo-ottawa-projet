import { Dispatch, useEffect, useReducer } from 'react';

import { musics } from '../data/assets/musics';

const settingsLocalStorageKey = 'settings';

export interface Settings {
  fontSize: number;
  textAnimationsEnabled: boolean;
  textAnimationSpeed: number;
  musicEnabled: boolean;
  musicVolume: number;
  soundEffectsEnabled: boolean;
  soundEffectsVolume: number;
}

export interface SettingsState {
  opened?: boolean;
  settings: Settings;
}

export type SettingsAction =
  | { type: 'open' }
  | { type: 'close' }
  | { type: 'setFontSize'; fontSize: number }
  | {
      type: 'setAnimationSpeed';
      enabled: boolean;
      speed: number;
    }
  | {
      type: 'setMusic';
      enabled: boolean;
      volume: number;
    }
  | {
      type: 'setSoundEffects';
      enabled: boolean;
      volume: number;
    };
type SettingsReducer = (
  state: SettingsState,
  action: SettingsAction
) => SettingsState;

const settingsReducer: SettingsReducer = (
  state: SettingsState,
  action: SettingsAction
) => {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        opened: true,
      };
    case 'close':
      return {
        ...state,
        opened: false,
      };
    case 'setFontSize':
      return {
        ...state,
        settings: {
          ...state.settings,
          fontSize: action.fontSize,
        },
      };
    case 'setAnimationSpeed':
      return {
        ...state,
        settings: {
          ...state.settings,
          textAnimationsEnabled: action.enabled,
          textAnimationSpeed: action.speed,
        },
      };
    case 'setMusic':
      Object.values(musics).forEach(music => {
        music.volume(action.volume / 100);
        if (!action.enabled) {
          music.stop();
        }
      });

      return {
        ...state,
        settings: {
          ...state.settings,
          musicEnabled: action.enabled,
          musicVolume: action.volume,
        },
      };
    case 'setSoundEffects':
      return {
        ...state,
        settings: {
          ...state.settings,
          soundEffectsEnabled: action.enabled,
          soundEffectsVolume: action.volume,
        },
      };
    default:
      return state;
  }
};

const defaultSettings: Settings = {
  fontSize: 17,
  textAnimationsEnabled: true,
  textAnimationSpeed: 0.75,
  musicEnabled: true,
  musicVolume: 50,
  soundEffectsEnabled: true,
  soundEffectsVolume: 50,
};

export const useSettings = (savedSettings: Partial<Settings>): [SettingsState, Dispatch<SettingsAction>] => {
  if (import.meta.env.SSR) {
    return [{ settings: defaultSettings }, () => {}];
  }

  const locallySavedSettings = localStorage.getItem(settingsLocalStorageKey);
  let localStorageSettings: Partial<Settings> = {};
  if (locallySavedSettings) {
    localStorageSettings = JSON.parse(locallySavedSettings);
  }

  const [state, dispatch] = useReducer<SettingsReducer>(settingsReducer, {
    settings: {
      ...defaultSettings,
      ...localStorageSettings,
      ...savedSettings,
    },
  });

  useEffect(() => {
    localStorage.setItem(settingsLocalStorageKey, JSON.stringify(state.settings));
  }, [state]);

  return [state, dispatch];
};
