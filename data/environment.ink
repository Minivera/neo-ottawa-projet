EXTERNAL play_sound(file)
=== function play_sound(file) ===
    ~ return ""

LIST Backgrounds = none, data_glitch, synthwave_noise, bureau_chef_miller, voiture_fred, glitch, rue_flemming, art_house_cafe, universite, brigade_outside, brigade, porte_chef_miller, bureau_fred, ouverture_dossier_kane, corridor_poste_police, telephone_kane, chambre_leigh_kane, rue_flemming_porte, telephone_fred, britannia_park, rue_mcleod, siege_esrb, siege_esrb_informatique, ecran_ordinateur_esrb, maison_olivia_exterieur, maison_olivia_interieur, maison_carl_white, grenier, ordinateur_fred, news_room, chapitre_1_gros_titres_1, chapitre_1_gros_titres_2, chapitre_1_gros_titres_3, telephone_photo_john_randle, chambre_cousine_leigh_kane, centre_rehabilitation_couloir, centre_rehabilitation_autre_piece, chapitre_2_gros_titres_1, chapitre_2_gros_titres_2, chapitre_2_gros_titres_3, chapitre_2_gros_titres_4, transition, maison_fred
LIST Musics = theme_intro, theme_police, theme_fred, theme_narrateur, theme_enquete, theme_commissariat, theme_art_house_cafe, theme_choix_cruciaux, theme_quiz, theme_resistance, theme_news, theme_general
LIST Sound_effects = respiration, opening_door, sonnerie_telephone, cris, aboiements, composer_numero, claquement_porte, cogner_porte, dossier_depose_bureau, reveille_brusque, raccrocher_telephone, son_erreur, son_demarrage_ordinateur, sonnette_futuriste, ouverture_trappe, clic_souris

VAR current_background = none
VAR current_music = none

=== function afficher_fond(image) ===
    ~ current_background = image

=== function cacher_fond() ===
    ~ current_background = none

=== function jouer_musique(musique) ===
    ~ current_music = musique

=== function arreter_musique() ===
    ~ current_music = none

=== function jouer_effet_sonore(son) ===
    ~ play_sound(son)
