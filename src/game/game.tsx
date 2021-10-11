/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css, Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import { Scene } from './scene';
import { Choice } from './event';
import { GameState, useGame } from './gameState';
import { GameContainer } from '../components/gameContainer';
import { GameMenu } from '../components/gameMenu';
import { PDAComponent } from './pda';
import { GameLoader } from '../components/gameLoader';
import { BigButton } from '../components/bigButton';
import { GameBackground } from '../components/gameBackground';
import { useSettings } from '../hooks/useSettings';
import { Settings } from '../components/settings/settings';
import { MenuContainer } from '../components/menuContainer';

import bgVideo from '../assets/videos/videoblocks-synthwave-noise-net-retro.mp4';
import StartIcon from '../assets/ui/pda/PowerResist.svg?component';
import SettingsIcon from '../assets/ui/pda/Parametres.svg?component';

export interface GameProps {
  storyContent: string;
  saveState?: string;
}

export const Game: React.FunctionComponent<GameProps> = ({
  storyContent,
  saveState,
}) => {
  const [t] = useTranslation();
  const [settings, dispatchSettings] = useSettings({});
  const [loading, percentLoaded, gameState, dispatch] = useGame(
    settings.settings,
    storyContent,
    saveState
  );
  const [textLoading, setTextLoading] = useState<boolean | null>(null);

  const globalCSS = (
    <Global
      styles={css`
        html {
          font-size: ${settings.settings.fontSize}px;
        }
      `}
    />
  );

  if (loading) {
    return (
      <React.Fragment>
        {globalCSS}
        <GameBackground
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-ignore
          src={bgVideo}
          autoPlay={true}
          muted
          loop
        />
        <GameContainer>
          <MenuContainer>
            <GameLoader percent={percentLoaded} />
          </MenuContainer>
        </GameContainer>
      </React.Fragment>
    );
  }

  switch (gameState.state) {
    case GameState.Loading:
      return (
        <React.Fragment>
          {globalCSS}
          <GameBackground
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            src={bgVideo}
            autoPlay={true}
            muted
            loop
          />
          <GameContainer>
            <MenuContainer>
              <GameLoader />
            </MenuContainer>
          </GameContainer>
        </React.Fragment>
      );
    case GameState.Loaded:
      return (
        <React.Fragment>
          {globalCSS}
          <GameBackground
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            src={bgVideo}
            autoPlay={true}
            muted
            loop
          />
          <GameContainer>
            <MenuContainer>
              <BigButton
                onClick={() => dispatch({ type: 'start' })}
                icon={<StartIcon />}
              >
                {t('start_game')}
              </BigButton>
              <BigButton
                onClick={() => dispatchSettings({ type: 'open' })}
                icon={<SettingsIcon />}
              >
                {t('start_settings')}
              </BigButton>
            </MenuContainer>
          </GameContainer>
          <Settings settings={settings} dispatch={dispatchSettings} />
        </React.Fragment>
      );
    case GameState.Started: {
      if (!gameState.currentScene) {
        return <GameContainer>Could not load scene</GameContainer>;
      }

      const onTextLoadingStart = () => {
        setTextLoading(true);
      };

      const onTextLoadingEnd = () => {
        setTextLoading(false);
      };

      const onContinue = () => {
        if (textLoading) {
          setTextLoading(false);
          return;
        }

        if (!gameState.story.canContinue) {
          return;
        }

        // Clear the loading indicator so we know to animate the next event.
        setTextLoading(null);

        dispatch({ type: 'continue' });
      };

      const onChoiceSelected = (choice: Choice) => {
        dispatch({ type: 'continue', choiceId: choice.id });
      };

      return (
        <React.Fragment>
          {globalCSS}
          {gameState.currentScene &&
            gameState.currentScene.background?.type === 'video' && (
              <GameBackground
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                // @ts-ignore
                src={gameState.currentScene.background.asset}
                autoPlay={true}
                muted
                loop
              />
            )}
          <GameContainer>
            <GameMenu
              showPDA={gameState.pda.enabled}
              onPDAClick={() => dispatch({ type: 'open_pda' })}
              onSettingsClick={() => dispatchSettings({ type: 'open' })}
            />
            <Scene
              state={gameState.currentScene}
              settings={settings.settings}
              skipAnimation={textLoading !== null && !textLoading}
              onContinue={onContinue}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
              onChoiceSelected={onChoiceSelected}
            />
            <PDAComponent
              pdaState={gameState.pda}
              onPDAClosed={() => dispatch({ type: 'close_pda' })}
              onPDATabChanged={tab => dispatch({ type: 'change_pda_tab', tab })}
            />
            <Settings settings={settings} dispatch={dispatchSettings} />
          </GameContainer>
        </React.Fragment>
      );
    }
  }

  return <GameContainer>Unknown state</GameContainer>;
};
