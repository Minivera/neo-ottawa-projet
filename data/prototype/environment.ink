EXTERNAL play_sound(file)
=== function play_sound(file) ===
    ~ return ""

LIST Backgrounds = none, data_glitch, synthwave_noise, police, bureau_chef_miller, bureaux_police, voiture_fred, scene_crime, glitch, rue_flemming, quartier, art_house_cafe, universite
LIST Musics = audioblocks_menace
LIST Sound_effects = big_exhale

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