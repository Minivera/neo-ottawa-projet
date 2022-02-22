import { backgrounds } from '../../assets/backgrounds';

type addNameToObject<T> = {
    [K in keyof T as K extends string ? `${K}_name` : never]: string
}

export const backgroundNames: addNameToObject<typeof backgrounds> = {
    data_glitch_name: '',
    synthwave_noise_name: '',
    bureau_chef_miller_name: `Bureau du chef Miller`,
    bureau_chef_miller_reve_name: `Bureau du chef Miller?`,
    voiture_fred_name: `Voiture de fred`,
    glitch_name: `Glitch`,
    rue_flemming_name: `5567 Rue Flemming`,
    quartier_name: `Quartier d'Ottawa`,
    art_house_cafe_name: `Art house café`,
    universite_name: `Université d'Ottawa`,
    brigade_outside_name: `Brigade anti-jeu-vidéos`,
    brigade_name: `Brigade anti-jeu-vidéos - Intérieur`,
    porte_chef_miller_name: `Porte du bureau du chef Miller`,
    bureau_fred_name: `Bureau de fred`,
    ouverture_dossier_kane_name: `Ouverture du dossier de Leigh Kane`,
    corridor_poste_police_name: `Brigade anti-jeu-vidéos - Intérieur`,
    telephone_kane_name: `Téléphone Leigh Kane`,
    chambre_leigh_kane_name: `Chambre Leigh Kane`,
    rue_flemming_porte_name: `5567 Rue Flemming - Porte`,
    telephone_fred_name: `Téléphone de Fred`,
    britannia_park_name: `Britannia Park`,
    rue_mcleod_name: `530 Rue McLeod`,
    siege_esrb_name: `Siège de l'ESRB`,
    siege_esrb_informatique_name: `Siège de l'ESRB - Salle Informatique`,
    ecran_ordinateur_esrb_name: `Siège de l'ESRB - Ordinateur`,
    maison_olivia_exterieur_name: `Maison d'Olivia Paul`,
    maison_olivia_interieur_name: `Maison d'Olivia Paul - Intérieur`,
    maison_carl_white_name: `Maison de Carl White`,
    grenier_name: `Grenier`,
    ordinateur_fred_name: `Ordinateur de Fred`,
    telephone_photo_john_randle_name: `Photo de John Randle`,
    chambre_cousine_leigh_kane_name: `Chambre de la cousine de Leigh Kane`,
    centre_rehabilitation_couloir_name: `Centre de Rehabilitation`,
    centre_rehabilitation_autre_piece_name: `Centre de Rehabilitation - Pièce`,
    maison_fred_name: `Maison de Fred`,
    transition_name: '',
    maison_jonathan_name: `Maison de Jonathan`,
    ecran_ordinateur_fred_name: `Ordinateur de Fred`,
    coin_flemming_arch_name: `Coin rue Flemming et Arch`,
    appartement_christopher_name: `Appartement de Christopher`,
    // Fins
    news_room_name: `Salle des nouvelles`,
    news_room_1_name: `Salle des nouvelles`,
    news_room_2_name: `Salle des nouvelles`,
    news_room_3_name: `Salle des nouvelles`,
    news_room_4_name: `Salle des nouvelles`,
    news_room_5_name: `Salle des nouvelles`,
    news_room_6_name: `Salle des nouvelles`,
    news_room_7_name: `Salle des nouvelles`,
    news_room_8_name: `Salle des nouvelles`,
    news_room_9_name: `Salle des nouvelles`,
};
