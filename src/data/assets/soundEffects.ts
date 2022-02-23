import { Howl } from 'howler';

import aboiements from '../../assets/sound/aboiements.mp3';
// import bigExhale from '../../assets/sound/big-exhale.mp3';
import clavierOrdinateur from '../../assets/sound/clavier-ordinateur.mp3';
import courrielRecu from '../../assets/sound/courriel-recu.mp3';
import crisLointains from '../../assets/sound/cris-lointains.mp3';
import dossierDeposeBureau from '../../assets/sound/dossier-depose-bureau.mp3';
// import longueExpiration from '../../assets/sound/longue-expiration.mp3';
// import numeroTappeTelephone from '../../assets/sound/numero-tappe-telephone.mp3';
import numerotationTelephone from '../../assets/sound/numerotation-telephne.mp3';
import porteClaque from '../../assets/sound/porte-claque.mp3';
import porteOuvre from '../../assets/sound/porte-ouvre.mp3';
import respirationFemme from '../../assets/sound/respiration-femme.mp3';
import respirationReveilleBrusque from '../../assets/sound/respiration-reveille-brusque.mp3';
import sonnerieTelephone from '../../assets/sound/sonnerie-telephone.mp3';
// import sonnerieTelephone01 from '../../assets/sound/sonnerie-telephone-01.mp3';
import sonnerieFuturiste from '../../assets/sound/sonnette-futuriste.mp3';
import telechargementComplet from '../../assets/sound/telechargement-complet.mp3';
import telephoneRaccroche from '../../assets/sound/telephone-raccroche.mp3';
import tocToc from '../../assets/sound/toc-toc.mp3';
import trappeOuvre from '../../assets/sound/trappe-ouvre.mp3';
import typewriter from '../../assets/sound/typewriter.mp3';

export const soundEffects: Record<string, Howl> = {
  respiration: new Howl({
    src: [respirationFemme]
  }),
  opening_door: new Howl({
    src: [porteOuvre]
  }),
  sonnerie_telephone: new Howl({
    src: [sonnerieTelephone]
  }),
  cris: new Howl({
    src: [crisLointains]
  }),
  aboiements: new Howl({
    src: [aboiements]
  }),
  composer_numero: new Howl({
    src: [numerotationTelephone]
  }),
  claquement_porte: new Howl({
    src: [porteClaque]
  }),
  cogner_porte: new Howl({
    src: [tocToc]
  }),
  dossier_depose_bureau: new Howl({
    src: [dossierDeposeBureau]
  }),
  reveille_brusque: new Howl({
    src: [respirationReveilleBrusque]
  }),
  raccrocher_telephone: new Howl({
    src: [telephoneRaccroche]
  }),
  son_erreur: new Howl({
    src: [telechargementComplet]
  }),
  son_demarrage_ordinateur: new Howl({
    src: [courrielRecu]
  }),
  sonnette_futuriste: new Howl({
    src: [sonnerieFuturiste]
  }),
  ouverture_trappe: new Howl({
    src: [trappeOuvre]
  }),
  clic_souris: new Howl({
    src: [clavierOrdinateur]
  }),
  typewriter: new Howl({
    src: [typewriter]
  }),
};
