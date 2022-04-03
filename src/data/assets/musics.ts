import { Howl } from 'howler';

import themeAudioblocksMenace from '../../assets/music/audioblocks-menace.mp3';
import themeChoixCruciaux from '../../assets/music/theme-choix-cruciaux.mp3';
import themeNarrateur from '../../assets/music/theme-narrateur.mp3';
import themeGeneral from '../../assets/music/theme-general.mp3';
import themeIntro from '../../assets/music/theme-intro.mp3';
import themeNews from '../../assets/music/theme-news.mp3';
import themeQuiz from '../../assets/music/theme-quiz.mp3';
import themeCredits from '../../assets/music/theme-credits.mp3';
import themeFin from '../../assets/music/theme-fin.mp3';

const howlThemeMenu = new Howl({
  src: [themeIntro],
  loop: true,
});
const howlThemeChoixCruciaux = new Howl({
  src: [themeChoixCruciaux],
  loop: true,
});
const howlThemeNarrateur = new Howl({
  src: [themeNarrateur],
  loop: true,
  onpause: soundId => {
    howlThemeNarrateur.stop(soundId);
  }
});
const howlThemeGeneral = new Howl({
  src: [themeGeneral],
  loop: true,
});
const howlThemeIntro = new Howl({
  src: [themeAudioblocksMenace],
  loop: true,
});
const howlThemeNews = new Howl({
  src: [themeNews],
  loop: true,
});
const howlThemeQuiz = new Howl({
  src: [themeQuiz],
  loop: true,
});
const howlThemeCredits = new Howl({
  src: [themeCredits],
  loop: true,
});
const howlThemeFin = new Howl({
  src: [themeFin],
  loop: true,
});

export const musics: Record<string, Howl> = {
  theme_menu: howlThemeMenu,
  theme_intro: howlThemeIntro,
  theme_police: howlThemeGeneral,
  theme_fred: howlThemeGeneral,
  theme_narrateur: howlThemeNarrateur,
  theme_enquete: howlThemeGeneral,
  theme_commissariat: howlThemeGeneral,
  theme_art_house_cafe: howlThemeGeneral,
  theme_choix_cruciaux: howlThemeChoixCruciaux,
  theme_quiz: howlThemeQuiz,
  theme_resistance: howlThemeGeneral,
  theme_news: howlThemeNews,
  theme_general: howlThemeGeneral,
  theme_credits: howlThemeCredits,
  theme_fin: howlThemeFin,
};
