import { Story } from 'inkjs/engine/Story';

import { SceneState } from './scene';
import { Quiz } from './event';

interface GameVariables {
  history: string;
  // eslint-disable-next-line camelcase
  quiz_save_data: string;
}

export const getGameLog = (story: Story): SceneState[] =>
  JSON.parse((story.variablesState as unknown as GameVariables).history);

export const saveGameLog = (story: Story, scenes: SceneState[]): void => {
  (story.variablesState as unknown as GameVariables).history =
    JSON.stringify(scenes);
};

export const addSceneToGameLog = (story: Story, scene: SceneState): void => {
  const log = getGameLog(story);
  // Limit the number of scenes in the log to 50
  saveGameLog(story, log.concat(scene).slice(-50));
};

export const updateSceneFromGameLog = (
  story: Story,
  scene: SceneState,
  newScene: SceneState
): void => {
  const log = getGameLog(story);
  const sceneIndex = log.findIndex(
    element =>
      element.text === scene.text && element.dialogName === scene.dialogName
  );
  if (sceneIndex >= 0) {
    log[sceneIndex] = newScene;
    saveGameLog(story, log);
  }
};

export const getQuizHistory = (story: Story, quizID: string): Quiz | undefined => {
  const quizes = JSON.parse(
    (story.variablesState as unknown as GameVariables).quiz_save_data
  );

  return quizes[quizID];
};

export const saveQuizHistory = (story: Story, quiz: Quiz): void => {
  const quizes = JSON.parse(
    (story.variablesState as unknown as GameVariables).quiz_save_data
  );

  quizes[quiz.name] = quiz;

  (story.variablesState as unknown as GameVariables).quiz_save_data =
    JSON.stringify(quizes);
};
