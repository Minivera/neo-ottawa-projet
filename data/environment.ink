EXTERNAL play_sound(file)
=== function play_sound(file) ===
    ~ return ""

LIST Backgrounds = none, data_glitch, synthwave_noise, bureau_chef_miller, voiture_fred, glitch, rue_flemming, art_house_cafe, universite, brigade_outside, brigade, porte_chef_miller, bureau_fred, ouverture_dossier_kane, corridor_poste_police, chambre_leigh_kane, rue_flemming_porte, britannia_park, rue_mcleod, siege_esrb, siege_esrb_informatique, ecran_ordinateur_esrb, maison_olivia_exterieur, maison_olivia_interieur, maison_carl_white, grenier, ordinateur_fred, telephone_photo_john_randle, chambre_cousine_leigh_kane, centre_rehabilitation_couloir, centre_rehabilitation_autre_piece, transition_1, maison_fred, maison_jonathan, ecran_ordinateur_fred, coin_flemming_arch, appartement_christopher, bureau_chef_miller_reve, news_room_chapitre_1, news_room_chapitre_2, news_room_chapitre_3, news_room_chapitre_4, news_room_chapitre_5, news_room_chapitre_6, bureau_fred_ordinateur_kane, news_room_chapitre_7, maison_fred_telephone, news_room_chapitre_8, news_room_chapitre_9, maison_juge_abbott, rue_mcleod_liberte, rue_mcleod_raid, parlement_positif, parlement_negatif, porte_bleue_manette, porte_rose_manette, porte_bleue_manette_barre, discours_premier_ministre, transition_2, transition_3, transition_4, transition_5, transition_6, transition_7, transition_8, transition_9, transition_conclusion, grenier_foule, blackout
LIST Musics = theme_intro, theme_police, theme_fred, theme_narrateur, theme_enquete, theme_commissariat, theme_art_house_cafe, theme_choix_cruciaux, theme_quiz, theme_resistance, theme_news, theme_general, theme_fin
LIST Sound_effects = respiration, opening_door, sonnerie_telephone, cris, aboiements, composer_numero, claquement_porte, cogner_porte, dossier_depose_bureau, reveille_brusque, raccrocher_telephone, son_erreur, son_demarrage_ordinateur, ouverture_trappe, clic_souris, reception_courriel, vibration_telephone, encouragements, sirene_police, porte_enfoncee

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
