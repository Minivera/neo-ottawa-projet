import artHouseCafe from '../../assets/backgrounds/art_house_cafe.jpg?w=1920&h=1080';
import bureauChefMiller from '../../assets/backgrounds/bureau_chef_miller.jpg?w=1920&h=1080';
import porteChefMiller from '../../assets/backgrounds/porte_chef_miller.png?w=1920&h=1080';
import brigade from '../../assets/backgrounds/brigade.jpg?w=1920&h=1080';
import glitch from '../../assets/backgrounds/glitch.jpg?w=1920&h=1080';
import brigadeOutside from '../../assets/backgrounds/brigade_outside.jpg?w=1920&h=1080';
import quartier from '../../assets/backgrounds/quartier.jpg?w=1920&h=1080';
import rueFlemming from '../../assets/backgrounds/rue_flemming.jpg?w=1920&h=1080';
import rueFlemmingPorte from '../../assets/backgrounds/rue_flemming_porte.jpg?w=1920&h=1080';
import chambreLeighKane from '../../assets/backgrounds/chambre_leigh_kane.jpg?w=1920&h=1080';
import universite from '../../assets/backgrounds/universite.jpg?w=1920&h=1080';
import britanniaPark from '../../assets/backgrounds/britannia_park.jpg?w=1920&h=1080';
import bureauFred from '../../assets/backgrounds/bureau_fred.jpg?w=1920&h=1080';
import voitureFred from '../../assets/backgrounds/voiture_fred.jpg?w=1920&h=1080';
import corridorPostePolice from '../../assets/backgrounds/corridor_poste_police.jpg?w=1920&h=1080';
import ouvertureDossierKane from '../../assets/backgrounds/ouverture_dossier_kane.jpg?w=1920&h=1080';
import telephone from '../../assets/backgrounds/phone.png?w=1920&h=1080';
import rueMcLeod from '../../assets/backgrounds/rue_mcleod.jpg?w=1920&h=1080';
import siegeESRB from '../../assets/backgrounds/siege_esrb.jpg?w=1920&h=1080';
import siegeESRBInformatique from '../../assets/backgrounds/siege_esrb_informatique.jpg?w=1920&h=1080';
import ecranOrdinateurESRB from '../../assets/backgrounds/ecran_ordinateur_esrb.jpg?w=1920&h=1080';
import maisonOliviaExterieur from '../../assets/backgrounds/maison_olivia_exterieur.jpg?w=1920&h=1080';
import maisonOliviaInterieur from '../../assets/backgrounds/maison_olivia_interieur.jpg?w=1920&h=1080';
import maisonCarlWhite from '../../assets/backgrounds/maison_carl_white.jpg?w=1920&h=1080';
import grenier from '../../assets/backgrounds/grenier.jpg?w=1920&h=1080';
import ordinateurFred from '../../assets/backgrounds/ordinateur_fred.jpg?w=1920&h=1080';
import newsRoom from '../../assets/backgrounds/news_room.jpg?w=1920&h=1080';
import chambreCousingLeighKane from '../../assets/backgrounds/chambre_cousine_leigh_kane.jpg?w=1920&h=1080';
import centreRehabilitationCouloir from '../../assets/backgrounds/centre_rehabilitation_couloir.jpg?w=1920&h=1080';
import centreRehabilitationAutrePiece from '../../assets/backgrounds/centre_rehabilitation.jpg?w=1920&h=1080';
import transition from '../../assets/backgrounds/transition.png?w=1920&h=1080';
import maisonFred from '../../assets/backgrounds/apparement_fred.jpg?w=1920&h=1080';
import maisonJonathan from '../../assets/backgrounds/maison_jonathan.jpg?w=1920&h=1080';
import coinFlemmingArch from '../../assets/backgrounds/coin_flemming_arch.jpg?w=1920&h=1080';

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
  telephone_photo_john_randle: { type: 'image', asset: telephone },
  chambre_cousine_leigh_kane: { type: 'image', asset: chambreCousingLeighKane },
  centre_rehabilitation_couloir: { type: 'image', asset: centreRehabilitationCouloir },
  centre_rehabilitation_autre_piece: { type: 'image', asset: centreRehabilitationAutrePiece },
  maison_fred: { type: 'image', asset: maisonFred },
  transition: { type: 'image', asset: transition },
  maison_jonathan: { type: 'image', asset: maisonJonathan },
  ecran_ordinateur_fred: { type: 'image', asset: ordinateurFred },
  coin_flemming_arch: { type: 'image', asset: coinFlemmingArch },
};
