import artHouseCafe from '../../assets/backgrounds/art_house_cafe.jpg?w=1920&h=1024';
import bureauChefMiller from '../../assets/backgrounds/bureau_chef_miller.jpg?w=1920&h=1024';
import bureauxPolice from '../../assets/backgrounds/bureaux_police.jpg?w=1920&h=1024';
import glitch from '../../assets/backgrounds/glitch.jpg?w=1920&h=1024';
import parlement from '../../assets/backgrounds/parlement.jpg?w=1920&h=1024';
import police from '../../assets/backgrounds/police.jpg?w=1920&h=1024';
import quartier from '../../assets/backgrounds/quartier.jpg?w=1920&h=1024';
import rueFlemming from '../../assets/backgrounds/rue_flemming.jpg?w=1920&h=1024';
import sceneCrime from '../../assets/backgrounds/scene_crime.jpg?w=1920&h=1024';
import universite from '../../assets/backgrounds/universite.jpg?w=1920&h=1024';
import voitureFred from '../../assets/backgrounds/voiture_fred.jpg?w=1920&h=1024';
import dataGlitch from '../../assets/videos/videoblocks-data-glitch.mp4';

export type Backgrounds = Record<string, { type: 'image' | 'video', asset: string }>

export const backgrounds: Backgrounds = {
  art_house_cafe: { type: 'image', asset: artHouseCafe },
  bureau_chef_miller: { type: 'image', asset: bureauChefMiller },
  bureaux_police: { type: 'image', asset: bureauxPolice },
  glitch: { type: 'image', asset: glitch },
  parlement: { type: 'image', asset: parlement },
  police: { type: 'image', asset: police },
  quartier: { type: 'image', asset: quartier },
  rue_flemming: { type: 'image', asset: rueFlemming },
  scene_crime: { type: 'image', asset: sceneCrime },
  universite: { type: 'image', asset: universite },
  voiture_fred: { type: 'image', asset: voitureFred },
  data_glitch: { type: 'video', asset: dataGlitch },
};
