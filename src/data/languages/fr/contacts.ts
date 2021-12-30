import {
  Gabriel,
  ChefMillerCigar,
  AgentLucas,
  AgentMoore,
  LeighKane,
  Enqueteur,
  Brighton,
  Teacher,
  BonnieV1,
  BonnieV2,
  ChristopherYoung,
  Narrateur,
} from '../../characters';
import { contacts } from '../../contacts';

export const contactDescriptions = {
  [contacts[Gabriel.id].description]: 'Un collègue',
  [contacts[ChefMillerCigar.id].description]: 'Chef de la brigade anti-jeux-vidéos',
  [contacts[AgentLucas.id].description]: 'Collègue dans la brigade anti-jeux-vidéos',
  [contacts[AgentMoore.id].description]: 'Collègue dans la brigade anti-jeux-vidéos',
  [contacts[LeighKane.id].description]: 'Joueur disparu',
  [contacts[Enqueteur.id].description]: 'Enquêteur du crime, très peu agréable',
  [contacts[Brighton.id].description]: `Assistant de l'enquêteur du crime`,
  [contacts[Teacher.id].description]: `Distributeur de jeux pour la résistance`,
  [contacts[BonnieV1.id].description]: `Jeune femme m'ayant abordé dans la rue`,
  [contacts[BonnieV2.id].description]: `Informatrice des activités de la résistance`,
  [contacts[ChristopherYoung.id].description]: `Contact avec la résistance pour l'achat de jeux-vidéos`,
  [contacts[Narrateur.id].description]: `???`,
};
