/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react';
import { jsx, css, Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import html2canvas from 'html2canvas';
import { Howl } from 'howler';

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
import { musics } from '../data/assets/musics';

import bgVideo from '../assets/videos/videoblocks-synthwave-noise-net-retro.mp4';
import StartIcon from '../assets/ui/icons/PowerResist.svg?component';
import SettingsIcon from '../assets/ui/icons/Parametres.svg?component';
import SaveIcon from '../assets/ui/icons/Sauvegarder.svg?component';
import clickMetal from '../assets/sound/click-metal.mp3';
import clickShimmer from '../assets/sound/click-shimmer.mp3';
import pdaOpen from '../assets/sound/futuristic-login.mp3';

const clickSound = new Howl({
  src: [clickMetal],
});
const pdaTabChangeSound = new Howl({
  src: [clickShimmer],
});
const pdaLoginSound = new Howl({
  src: [pdaOpen],
});

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

  const handlePlaySoundEffect = (
    effect: 'pdaOpen' | 'pdaClose' | 'pdaTabChange' | 'click'
  ) => {
    clickSound.volume(settings.settings.soundEffectsVolume / 100);
    pdaLoginSound.volume(settings.settings.soundEffectsVolume / 100);
    pdaTabChangeSound.volume(settings.settings.soundEffectsVolume / 100);

    if (!settings.settings.soundEffectsEnabled) {
      return;
    }

    switch (effect) {
      case 'pdaOpen':
        pdaLoginSound.play();
        break;
      case 'pdaClose':
        pdaLoginSound.play();
        break;
      case 'click':
        clickSound.play();
        break;
      case 'pdaTabChange':
        pdaTabChangeSound.play();
        break;
    }
  };

  useEffect(() => {
    if (
      settings.settings.musicEnabled &&
      (gameState.state === GameState.Ready ||
        gameState.state === GameState.Loaded)
    ) {
      musics.theme_menu.volume(settings.settings.musicVolume / 100);
      musics.theme_menu.play();
      return () => {
        musics.theme_menu.stop();
      };
    }

    // eslint-disable-next-line no-useless-return
    return;
  }, [gameState.state]);

  const globalCSS = (
    <Global
      styles={css`
        html {
          font-size: ${settings.settings.fontSize}px;

          @media only screen and (max-width: 780px) {
            font-size: ${Math.floor(settings.settings.fontSize * 0.7)}px;
          }
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
                onClick={() => {
                  handlePlaySoundEffect('click');
                  dispatch({ type: 'start' });
                }}
                icon={<StartIcon />}
              >
                {t('start_game')}
              </BigButton>
              <BigButton
                onClick={() => {
                  handlePlaySoundEffect('click');
                  setSavingOpened(true);
                }}
                icon={<SaveIcon />}
              >
                {t('continue_game')}
              </BigButton>
              <BigButton
                onClick={() => {
                  handlePlaySoundEffect('click');
                  dispatchSettings({ type: 'open' });
                }}
                icon={<SettingsIcon />}
              >
                {t('start_settings')}
              </BigButton>
            </MenuContainer>
          </GameContainer>
          <Settings
            settings={settings}
            dispatch={dispatchSettings}
            playClickSound={() => handlePlaySoundEffect('click')}
          />
          <SaveSlots
            closeSaveSlots={() => setSavingOpened(false)}
            saveSlots={gameState.saveSlots}
            opened={savingOpened}
            loading
            onSaveClick={onLoad}
            playClickSound={() => handlePlaySoundEffect('click')}
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

        handlePlaySoundEffect('click');
        dispatch({ type: 'continue' });
      };

      const onChoiceSelected = (choice: Choice) => {
        handlePlaySoundEffect('click');
        dispatch({ type: 'continue', choiceId: choice.id });
      };

      const onPDAClosed = () => {
        sceneRef.current?.focus();
        setPDAOpened(false);
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
          <GameContainer animationSpeed={settings.settings.textAnimationSpeed}>
            <GameMenu
              showPDA={gameState.pda.enabled}
              onPDAClick={() => {
                handlePlaySoundEffect('click');
                handlePlaySoundEffect('pdaOpen');
                setPDAOpened(true);
              }}
              onSettingsClick={() => {
                handlePlaySoundEffect('click');
                dispatchSettings({ type: 'open' });
              }}
              onGameLogClick={() => {
                handlePlaySoundEffect('click');
                setGameLogOpened(true);
              }}
              onSaveClick={() => {
                handlePlaySoundEffect('click');
                setSavingOpened(true);
              }}
            />
            {settings.settings.textAnimationsEnabled ? (
              <SwitchTransition>
                <CSSTransition
                  timeout={settings.settings.textAnimationSpeed * 1000}
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
              onPDAClosed={onPDAClosed}
              onPDATabChanged={setSelectedPDATab}
              settings={settings.settings}
              skipAnimation={textLoading !== null && !textLoading}
              onContinue={onContinue}
              onTextLoadingStart={onTextLoadingStart}
              onTextLoadingEnd={onTextLoadingEnd}
              onChoiceSelected={onChoiceSelected}
              quiz={gameState.currentQuiz}
              playSoundEffect={handlePlaySoundEffect}
            />
            <Settings
              settings={settings}
              dispatch={dispatchSettings}
              playClickSound={() => handlePlaySoundEffect('click')}
            />
            <GameLog
              closeGameLog={() => setGameLogOpened(false)}
              gameLog={getGameLog(story)}
              opened={gameLogOpened}
              playClickSound={() => handlePlaySoundEffect('click')}
            />
            <SaveSlots
              closeSaveSlots={() => setSavingOpened(false)}
              saveSlots={gameState.saveSlots}
              opened={savingOpened}
              onSaveClick={onSave}
              playClickSound={() => handlePlaySoundEffect('click')}
            />
          </GameContainer>
        </React.Fragment>
      );
    }
  }

  return <GameContainer>Unknown state</GameContainer>;
};
