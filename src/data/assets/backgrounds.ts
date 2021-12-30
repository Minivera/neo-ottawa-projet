import artHouseCafe from '../../assets/backgrounds/art_house_cafe.png?w=1920&h=1024';
import bureauChefMiller from '../../assets/backgrounds/bureau_chef_miller.png?w=1920&h=1024';
import porteChefMiller from '../../assets/backgrounds/porte_chef_miller.jpg?w=1920&h=1024';
import brigade from '../../assets/backgrounds/brigade.png?w=1920&h=1024';
import glitch from '../../assets/backgrounds/glitch.jpg?w=1920&h=1024';
import brigadeOutside from '../../assets/backgrounds/brigade_outside.png?w=1920&h=1024';
import quartier from '../../assets/backgrounds/quartier.jpg?w=1920&h=1024';
import rueFlemming from '../../assets/backgrounds/rue_flemming.jpg?w=1920&h=1024';
import rueFlemmingPorte from '../../assets/backgrounds/rue_flemming_porte.png?w=1920&h=1024';
import chambreLeighKane from '../../assets/backgrounds/chambre_leigh_kane.png?w=1920&h=1024';
import universite from '../../assets/backgrounds/universite.jpg?w=1920&h=1024';
import britanniaPark from '../../assets/backgrounds/britannia_park.png?w=1920&h=1024';
import bureauFred from '../../assets/backgrounds/bureau_fred.jpg?w=1920&h=1024';
import voitureFred from '../../assets/backgrounds/voiture_fred.png?w=1920&h=1024';
import corridorPostePolice from '../../assets/backgrounds/corridor_poste_police.jpg?w=1920&h=1024';
import ouvertureDossierKane from '../../assets/backgrounds/ouverture_dossier_kane.jpg?w=1920&h=1024';
import telephone from '../../assets/backgrounds/phone.png?w=1920&h=1024';
import dataGlitch from '../../assets/videos/videoblocks-data-glitch.mp4';

export type Backgrounds = Record<string, { type: 'image' | 'video', asset: string }>

export const backgrounds: Backgrounds = {
  data_glitch: { type: 'video', asset: dataGlitch },
  synthwave_noise: { type: 'video', asset: '' },
  bureau_chef_miller: { type: 'image', asset: bureauChefMiller },
  voiture_fred: { type: 'image', asset: voitureFred },
  glitch: { type: 'video', asset: glitch },
  rue_flemming: { type: 'image', asset: rueFlemming },
  quartier: { type: 'image', asset: quartier },
  art_house_cafe: { type: 'image', asset: artHouseCafe },
  universite: { type: 'image', asset: universite },
  brigade_outside: { type: 'image', asset: brigadeOutside },
  brigade: { type: 'image', asset: brigade },
  porte_chef_miller: { type: 'image', asset: porteChefMiller },
  bureau_fred: { type: 'image', asset: bureauFred },
  ouverture_dossier_kane: { type: 'image', asset: ouvertureDossierKane },
  corridor_poste_police: { type: 'image', asset: corridorPostePolice },
  telephone_kane: { type: 'image', asset: telephone },
  chambre_leigh_kane: { type: 'image', asset: chambreLeighKane },
  rue_flemming_porte: { type: 'image', asset: rueFlemmingPorte },
  telephone_fred: { type: 'image', asset: telephone },
  britannia_park: { type: 'image', asset: britanniaPark },
};
