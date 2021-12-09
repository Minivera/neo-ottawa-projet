/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css, Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';

import { Scene, SceneState } from './scene';
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
import { GameLog } from '../components/gameLog/gameLog';
import { getGameLog } from './gameLog';

import bgVideo from '../assets/videos/videoblocks-synthwave-noise-net-retro.mp4';
import StartIcon from '../assets/ui/pda/PowerResist.svg?component';
import SettingsIcon from '../assets/ui/pda/Parametres.svg?component';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

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
  const [loading, percentLoaded, story, gameState, dispatch] = useGame(
    settings.settings,
    storyContent,
    saveState
  );
  const [textLoading, setTextLoading] = useState<boolean | null>(null);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [gameLogOpened, setGameLogOpened] = useState<boolean>(false);

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
    case GameState.Ready:
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
                {gameState.state === GameState.Ready
                  ? t('start_game')
                  : t('continue_game')}
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
        if (transitioning) {
          return;
        }

        if (textLoading) {
          setTextLoading(false);
          return;
        }

        if (!gameState.canContinue) {
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
          <GameContainer animationSpeed={settings.settings.textAnimationSpeed}>
            <GameMenu
              showPDA={gameState.pda.enabled}
              onPDAClick={() => dispatch({ type: 'open_pda' })}
              onSettingsClick={() => dispatchSettings({ type: 'open' })}
              onGameLogClick={() => setGameLogOpened(true)}
              onSaveClick={() => dispatch({ type: 'save_game' })}
            />
            {settings.settings.textAnimationsEnabled ? (
              <SwitchTransition>
                <CSSTransition
                  timeout={{
                    appear: settings.settings.textAnimationSpeed,
                    enter: 0,
                    exit: 0,
                  }}
                  key={gameState.currentScene.background?.asset || ''}
                  classNames="fade"
                  onEnter={() => {
                    setTransitioning(true);
                  }}
                  addEndListener={(node, done) => {
                    setTransitioning(false);
                    node.addEventListener('transitionend', done, false);
                  }}
                >
                  <Scene
                    state={gameState.currentScene as SceneState}
                    settings={settings.settings}
                    skipAnimation={textLoading !== null && !textLoading}
                    onContinue={onContinue}
                    onTextLoadingStart={onTextLoadingStart}
                    onTextLoadingEnd={onTextLoadingEnd}
                    onChoiceSelected={onChoiceSelected}
                  />
                </CSSTransition>
              </SwitchTransition>
            ) : (
              <Scene
                state={gameState.currentScene as SceneState}
                settings={settings.settings}
                skipAnimation={textLoading !== null && !textLoading}
                onContinue={onContinue}
                onTextLoadingStart={onTextLoadingStart}
                onTextLoadingEnd={onTextLoadingEnd}
                onChoiceSelected={onChoiceSelected}
              />
            )}
            <PDAComponent
              story={story}
              pdaState={gameState.pda}
              onPDAClosed={() => dispatch({ type: 'close_pda' })}
              onPDATabChanged={tab => dispatch({ type: 'change_pda_tab', tab })}
              settings={settings.settings}
              skipAnimation={textLoading !== null && !textLoading}
              onContinue={onContinue}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
              onChoiceSelected={onChoiceSelected}
              quiz={gameState.currentQuiz}
            />
            <Settings settings={settings} dispatch={dispatchSettings} />
            <GameLog
              closeGameLog={() => setGameLogOpened(false)}
              gameLog={getGameLog(story)}
              opened={gameLogOpened}
            />
          </GameContainer>
        </React.Fragment>
      );
    }
  }

  return <GameContainer>Unknown state</GameContainer>;
};
