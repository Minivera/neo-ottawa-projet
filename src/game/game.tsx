/** @jsx jsx */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { jsx, css, Global } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import html2canvas from 'html2canvas';
import { Howl } from 'howler';
import { throttle } from 'throttle-debounce';

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
import { Credits } from '../components/credits';
import { usePlausible } from '../components/plausibleTracking';

import StartIcon from '../assets/ui/icons/PowerResist.svg?component';
import SettingsIcon from '../assets/ui/icons/Parametres.svg?component';
import SaveIcon from '../assets/ui/icons/Sauvegarder.svg?component';
import clickMetal from '../assets/sound/click-metal.mp3';
import clickShimmer from '../assets/sound/click-shimmer.mp3';
import pdaOpen from '../assets/sound/futuristic-login.mp3';
import buttonBeep from '../assets/sound/beep-single.mp3';
import typewriter from '../assets/sound/typewriter.mp3';
import { musics } from '../data/assets/musics';

const bgVideo = `${
  import.meta.env.BASE_URL
}videos/videoblocks-synthwave-noise-net-retro.mp4`;

const clickSound = new Howl({
  src: [clickMetal],
});
const clickHover = new Howl({
  src: [buttonBeep],
});
const pdaTabChangeSound = new Howl({
  src: [clickShimmer],
});
const pdaLoginSound = new Howl({
  src: [pdaOpen],
});
const transitionWriting = new Howl({
  src: [typewriter],
  loop: true,
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
  const [choiceClicked, setChoiceClicked] = useState<boolean | undefined>();
  const lastContinueDate = useRef<Date>(new Date());
  const [loading, percentLoaded, story, gameState, dispatch] = useGame(
    settings.settings,
    storyContent,
    () => setPDAOpened(true)
  );
  const { trackEvent } = usePlausible();

  const debouncedHover = useCallback<throttle<() => void>>(
    throttle(100, () => {
      clickHover.play();
    }),
    []
  );
  useEffect(() => {
    return () => debouncedHover.cancel();
  }, []);

  // reset the choice clicked on a scene changed
  useEffect(() => {
    if (choiceClicked) {
      setChoiceClicked(false);
    }
  }, [gameState.currentScene]);

  const handlePlaySoundEffect = (
    effect: 'pdaOpen' | 'pdaClose' | 'pdaTabChange' | 'click' | 'hover'
  ) => {
    clickSound.volume(settings.settings.soundEffectsVolume / 100);
    clickHover.volume((settings.settings.soundEffectsVolume * 0.25) / 100);
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
      case 'pdaTabChange':
        pdaTabChangeSound.play();
        break;
      case 'click':
        clickSound.play();
        break;
      case 'hover':
        debouncedHover();
        break;
    }
  };

  useEffect(() => {
    if (
      settings.settings.musicEnabled &&
      (loading ||
        gameState.state === GameState.Ready ||
        gameState.state === GameState.Loaded)
    ) {
      musics.theme_menu.volume(settings.settings.musicVolume / 100);
      musics.theme_menu.play();
      return () => {
        musics.theme_menu.stop();
      };
    }

    return () => {};
  }, [
    loading,
    gameState.state,
    settings.settings.musicEnabled,
    settings.settings.musicVolume,
  ]);

  useEffect(() => {
    if (
      textLoading &&
      settings.settings.soundEffectsEnabled &&
      gameState.currentScene?.isTransition
    ) {
      transitionWriting.volume(settings.settings.musicVolume / 100);
      transitionWriting.play();
      return () => {
        transitionWriting.stop();
      };
    } else {
      transitionWriting.stop();
    }

    return () => {};
  }, [
    textLoading,
    settings.settings.soundEffectsEnabled,
    settings.settings.soundEffectsVolume,
    gameState.currentScene?.isTransition,
  ]);

  const knotName =
    story.state.currentPointer.path &&
    story.state.currentPointer.path.length > 2
      ? story.state.currentPointer.path.head?.name +
        '.' +
        story.state.currentPointer.path.tail.head?.name
      : story.state.currentPointer.path?.head?.name;

  useEffect(() => {
    if (knotName) {
      trackEvent(`Atteint le noeud ${knotName}`);
    }
  }, [knotName]);

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
                onMouseEnter={() => handlePlaySoundEffect('hover')}
                onFocus={() => handlePlaySoundEffect('hover')}
                onClick={() => {
                  handlePlaySoundEffect('click');
                  dispatch({ type: 'start' });
                }}
                icon={<StartIcon />}
              >
                {t('start_game')}
              </BigButton>
              <BigButton
                onMouseEnter={() => handlePlaySoundEffect('hover')}
                onFocus={() => handlePlaySoundEffect('hover')}
                onClick={() => {
                  handlePlaySoundEffect('click');
                  setSavingOpened(true);
                }}
                icon={<SaveIcon />}
              >
                {t('continue_game')}
              </BigButton>
              <BigButton
                onMouseEnter={() => handlePlaySoundEffect('hover')}
                onFocus={() => handlePlaySoundEffect('hover')}
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
            onButtonHover={() => handlePlaySoundEffect('hover')}
            playClickSound={() => handlePlaySoundEffect('click')}
          />
          <SaveSlots
            closeSaveSlots={() => setSavingOpened(false)}
            saveSlots={gameState.saveSlots}
            opened={savingOpened}
            loading
            onSaveClick={onLoad}
            onButtonHover={() => handlePlaySoundEffect('hover')}
            playClickSound={() => handlePlaySoundEffect('click')}
          />
        </React.Fragment>
      );
    }
    case GameState.Ended:
      return (
        <React.Fragment>
          {globalCSS}
          <GameContainer>
            <Credits />
          </GameContainer>
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
        const now = new Date();
        // If transitioning or still waiting for the timeout
        if (
          transitioning ||
          now.getTime() - lastContinueDate.current.getTime() < 300
        ) {
          return;
        }

        if (textLoading) {
          setTextLoading(false);
          return;
        }

        if (!gameState.canContinue) {
          return;
        }

        // Clear the loading indicator, so we know to animate the next event.
        setTextLoading(null);

        lastContinueDate.current = now;
        handlePlaySoundEffect('click');
        dispatch({ type: 'continue' });
      };

      const onChoiceSelected = (choice: Choice) => {
        if (choiceClicked) {
          return;
        }

        handlePlaySoundEffect('click');
        setChoiceClicked(true);
        dispatch({ type: 'continue', choiceId: choice.id });
      };

      const onPDAClosed = () => {
        sceneRef.current?.focus();
        handlePlaySoundEffect('pdaClose');
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
              locationName={gameState.currentScene.location}
              showPDA={gameState.pda.enabled}
              onButtonHover={() => handlePlaySoundEffect('hover')}
              onPDAClick={() => {
                handlePlaySoundEffect('hover');
                handlePlaySoundEffect('pdaOpen');
                setPDAOpened(true);
              }}
              onSettingsClick={() => {
                handlePlaySoundEffect('hover');
                dispatchSettings({ type: 'open' });
              }}
              onGameLogClick={() => {
                handlePlaySoundEffect('hover');
                setGameLogOpened(true);
              }}
              onSaveClick={() => {
                handlePlaySoundEffect('hover');
                setSavingOpened(true);
              }}
              playClickSound={() => handlePlaySoundEffect('click')}
            />
            <SwitchTransition>
              <CSSTransition
                timeout={600}
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
              onButtonHover={() => handlePlaySoundEffect('hover')}
            />
            <GameLog
              closeGameLog={() => setGameLogOpened(false)}
              gameLog={getGameLog(story)}
              opened={gameLogOpened}
              playClickSound={() => handlePlaySoundEffect('click')}
              onButtonHover={() => handlePlaySoundEffect('hover')}
            />
            <SaveSlots
              closeSaveSlots={() => setSavingOpened(false)}
              saveSlots={gameState.saveSlots}
              opened={savingOpened}
              onSaveClick={onSave}
              playClickSound={() => handlePlaySoundEffect('click')}
              onButtonHover={() => handlePlaySoundEffect('hover')}
            />
          </GameContainer>
        </React.Fragment>
      );
    }
  }
};
