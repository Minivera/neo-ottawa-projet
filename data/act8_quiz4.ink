=== act_8_quiz_4 ===

= quiz_8_4
~ demarrer_quiz(QUIZ_8_4, 4)
~jouer_musique(theme_quiz)
~afficher_document(SYNDICALISATION_STREAMERS)
// Description du document: J’ai réussi à mettre la main sur des archives d’époques à propos des rapports entre les joueurs et les équipes. Voyons voir ce qu’il en était de l’équilibre de ces rapports et des discussions autour de la création de syndicats. 
-> quiz_8_4_question_1

= quiz_8_4_question_1
1- Selon les archives, les rapports entre les joueurs, les équipes et les ligues étaient  somme toute équilibrés. # question index=1
+   (1_a) [{1_a: VISITE--}Vrai] Vrai
+   (1_b) [BON--{1_b: VISITE--}Faux] Faux
   Des joueurs se sont plaints des contrats qu’ils ont signés avec leur équipe et des conditions notamment de partage des gains publicitaires ou en tournoi. Un joueur comme Turner « TFue » Tenney a critiqué par le passé des clauses abusives dans son contrat. On apprend également que les ligues et les éditeurs de jeux vidéo qui organisent des circuits professionnels sont très bien entourés, notamment d’avocats. Ce n’est pas nécessairement le cas pour les joueurs qui peuvent être très jeunes. # retroaction
    -> quiz_8_4_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_4_question_1

= quiz_8_4_question_2
2- Riot Games a été le premier studio à soutenir la création d’un syndicat des joueurs. # question index=2
+   (2_a) [{2_a: VISITE--}Vrai] Vrai
+   (2_b) [BON--{2_b: VISITE--}Faux] Faux
   Riot a seulement soutenu la création d’une association des joueurs. Ce n’est pas la même chose qu’un syndicat. Une association ne dispose pas des mêmes droits ni du même mandat qu’un syndicat. Par exemple, une association ne peut pas représenter les joueurs dans le cadre d’une négociation collective. L’association était un pas vers plus de pouvoir pour les joueurs. # retroaction
    -> quiz_8_4_question_3
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_4_question_2

= quiz_8_4_question_3
3- Il n’existait aucun exemple de syndicat de joueurs dans le milieu du sport électronique avant l’adoption de la <i>Loi Game Over</i>. # question index=3
+   (3_a) [{3_a: VISITE--}Vrai] Vrai
+   (3_b) [BON--{3_b: VISITE--}Faux] Faux
  Selon les archives, les joueurs professionnels du jeu Counter-Striker avaient réussi à former un syndicat : Association des joueurs professionnels de <i>Counter-Strike</i>. Ce syndicat représentait les joueurs dans leurs négociations collectives. # retroaction
    -> quiz_8_4_question_4
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_4_question_3

= quiz_8_4_question_4
4-Selon les archives, un syndicat était une solution efficace pour rééquilibrer les rapports entre les joueurs, les équipes et les ligues professionnelles. # question index=4
+   (4_a) [BON--{4_a: VISITE--}Vrai] Vrai
   Selon les avocats de l’époque, les syndicats pouvaient contribuer à rétablir un certain équilibre, en particulier compte tenu du fait que les jeunes professionnels étaient souvent très jeunes et peu familiers du droit, contrairement aux propriétaires des ligues et des équipes. # retroaction
    -> quiz_8_4_fin
+   (4_b) [{4_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_4_question_4

= quiz_8_4_fin
~terminer_quiz()
-> scene_4_suite

= scene_4_suite
<b>Fred</b> doit déterminer si elle recommande la création d'un syndicat.
~jouer_musique (theme_choix_cruciaux)
* Fred recommande la création d’un syndicat pour les joueurs afin de s’assurer du soutien des streamers.

* Fred ne recommande pas la création d’un syndicat pour les joueurs afin que la résistance garde un maximum de contrôle.

- -> chapitre_8.scene_5