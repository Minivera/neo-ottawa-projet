EXTERNAL play_sound(file)
=== function play_sound(file) ===
    ~ return ""

LIST Backgrounds = none, data_glitch, synthwave_noise, bureau_chef_miller, voiture_fred, glitch, rue_flemming, quartier, art_house_cafe, universite, brigade_outside, brigade, porte_chef_miller, bureau_fred, ouverture_dossier_kane, corridor_poste_police, telephone_kane, chambre_leigh_kane, rue_flemming_porte, telephone_fred, britannia_park
LIST Musics = theme_intro, theme_police, theme_fred, theme_narrateur, theme_enquete, theme_art_house_cafe, theme_choix_finaux
LIST Sound_effects = respiration, opening_door, sonnerie_telephone, cris, aboiements, composer_numero

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