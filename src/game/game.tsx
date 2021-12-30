/** @jsx jsx */
import React, { useRef, useState } from 'react';
import { jsx, css, Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import html2canvas from 'html2canvas';

import { Scene, SceneState } from './scene';
import { Choice } from './event';
import { GameState, useGame } from './gameState';
import { GameContainer } from '../components/gameContainer';
import { GameMenu } from '../components/gameMenu';
import { PDAComponent, PDATab } from './pda';
import { GameLoader } from '../components/gameLoader';
import { BigButton } from '../components/bigButton';
import { GameBackground } from '../components/gameBackground';
import { useSettings } from '../hooks/useSettings';
import { Settings } from '../components/settings/settings';
import { MenuContainer } from '../components/menuContainer';
import { GameLog } from '../components/gameLog/gameLog';
import { getGameLog } from './gameLog';
import { SaveSlot } from './saving';
import { SaveSlots } from '../components/saveSlots/saveSlots';

import bgVideo from '../assets/videos/videoblocks-synthwave-noise-net-retro.mp4';
import StartIcon from '../assets/ui/icons/PowerResist.svg?component';
import SettingsIcon from '../assets/ui/icons/Parametres.svg?component';
import SaveIcon from '../assets/ui/icons/Sauvegarder.svg?component';

export interface GameProps {
  storyContent: string;
  saveState?: string;
}

export const Game: React.FunctionComponent<GameProps> = ({ storyContent }) => {
  const [t] = useTranslation();
  const sceneRef = useRef<HTMLDivElement>(null);
  const [settings, dispatchSettings] = useSettings({});
  const [textLoading, setTextLoading] = useState<boolean | null>(null);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [gameLogOpened, setGameLogOpened] = useState<boolean | undefined>();
  const [savingOpened, setSavingOpened] = useState<boolean | undefined>();
  const [pdaOpened, setPDAOpened] = useState<boolean | undefined>();
  const [selectedPDATab, setSelectedPDATab] = useState<PDATab>(PDATab.HOME);
  const [loading, percentLoaded, story, gameState, dispatch] = useGame(
    settings.settings,
    storyContent,
    () => setPDAOpened(true)
  );

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
          <div
            css={css`
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <GameLoader percent={percentLoaded} />
          </div>
        </GameContainer>
      </React.Fragment>
    );
  }

  switch (gameState.state) {
    case GameState.Ready:
    case GameState.Loaded: {
      const onLoad = async (slot: SaveSlot) => {
        setSavingOpened(false);
        return dispatch({
          type: 'load_game',
          slot,
        });
      };

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
                onClick={() => setSavingOpened(true)}
                icon={<SaveIcon />}
              >
                {t('continue_game')}
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
          <SaveSlots
            closeSaveSlots={() => setSavingOpened(false)}
            saveSlots={gameState.saveSlots}
            opened={savingOpened}
            loading
            onSaveClick={onLoad}
          />
        </React.Fragment>
      );
    }
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

      const takeSceneScreenshot = async () => {
        if (!sceneRef.current) {
          return null;
        }

        const canvas = await html2canvas(sceneRef.current);
        return canvas.toDataURL();
      };

      const onSave = async (slot: SaveSlot) => {
        const screenshot = await takeSceneScreenshot();
        return dispatch({
          type: 'save_game',
          slot: {
            id: slot.id,
            save: story.state.ToJson(),
            image: screenshot,
          },
        });
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
              onPDAClick={() => setPDAOpened(true)}
              onSettingsClick={() => dispatchSettings({ type: 'open' })}
              onGameLogClick={() => setGameLogOpened(true)}
              onSaveClick={() => setSavingOpened(true)}
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
                    sceneRef={sceneRef}
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
                sceneRef={sceneRef}
              />
            )}
            <PDAComponent
              opened={pdaOpened}
              selectedTab={selectedPDATab}
              story={story}
              pdaState={gameState.pda}
              onPDAClosed={() => setPDAOpened(false)}
              onPDATabChanged={tab => setSelectedPDATab(tab)}
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
            <SaveSlots
              closeSaveSlots={() => setSavingOpened(false)}
              saveSlots={gameState.saveSlots}
              opened={savingOpened}
              onSaveClick={onSave}
            />
          </GameContainer>
        </React.Fragment>
      );
    }
  }

  return <GameContainer>Unknown state</GameContainer>;
};
