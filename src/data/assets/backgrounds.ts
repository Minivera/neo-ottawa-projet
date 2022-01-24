import artHouseCafe from '../../assets/backgrounds/art_house_cafe.png?w=1920&h=1024';
import bureauChefMiller from '../../assets/backgrounds/bureau_chef_miller.png?w=1920&h=1024';
import porteChefMiller from '../../assets/backgrounds/porte_chef_miller.png?w=1920&h=1024';
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
import corridorPostePolice from '../../assets/backgrounds/corridor_poste_police.png?w=1920&h=1024';
import ouvertureDossierKane from '../../assets/backgrounds/ouverture_dossier_kane.jpg?w=1920&h=1024';
import telephone from '../../assets/backgrounds/phone.png?w=1920&h=1024';
import rueMcLeod from '../../assets/backgrounds/rue_mcleod.jpg?w=1920&h=1024';
import siegeESRB from '../../assets/backgrounds/siege_esrb.png?w=1920&h=1024';
import siegeESRBInformatique from '../../assets/backgrounds/siege_esrb_informatique.png?w=1920&h=1024';
import ecranOrdinateurESRB from '../../assets/backgrounds/ecran_ordinateur_esrb.png?w=1920&h=1024';
import maisonOliviaExterieur from '../../assets/backgrounds/maison_olivia_exterieur.png?w=1920&h=1024';
import maisonOliviaInterieur from '../../assets/backgrounds/maison_olivia_interieur.png?w=1920&h=1024';
import maisonCarlWhite from '../../assets/backgrounds/maison_carl_white.jpg?w=1920&h=1024';
import grenier from '../../assets/backgrounds/grenier.jpg?w=1920&h=1024';
import ordinateurFred from '../../assets/backgrounds/ordinateur_fred.jpg?w=1920&h=1024';
import newsRoom from '../../assets/backgrounds/news_room.jpg?w=1920&h=1024';
import chapitre1Titre1 from '../../assets/backgrounds/chapitre_1_gros_titres_1.png?w=1920&h=1024';
import chapitre1Titre2 from '../../assets/backgrounds/chapitre_1_gros_titres_2.png?w=1920&h=1024';
import chapitre1Titre3 from '../../assets/backgrounds/chapitre_1_gros_titres_3.png?w=1920&h=1024';

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
  rue_mcleod: { type: 'image', asset: rueMcLeod },
  siege_esrb: { type: 'image', asset: siegeESRB },
  siege_esrb_informatique: { type: 'image', asset: siegeESRBInformatique },
  ecran_ordinateur_esrb: { type: 'image', asset: ecranOrdinateurESRB },
  maison_olivia_exterieur: { type: 'image', asset: maisonOliviaExterieur },
  maison_olivia_interieur: { type: 'image', asset: maisonOliviaInterieur },
  maison_carl_white: { type: 'image', asset: maisonCarlWhite },
  grenier: { type: 'image', asset: grenier },
  ordinateur_fred: { type: 'image', asset: ordinateurFred },
  news_room: { type: 'image', asset: newsRoom },
  chapitre_1_gros_titres_1: { type: 'image', asset: chapitre1Titre1 },
  chapitre_1_gros_titres_2: { type: 'image', asset: chapitre1Titre2 },
  chapitre_1_gros_titres_3: { type: 'image', asset: chapitre1Titre3 },
};
