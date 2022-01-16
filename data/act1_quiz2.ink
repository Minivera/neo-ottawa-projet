===act_1_quiz_2===

=quiz_2
~ demarrer_quiz(QUIZ_2, 7)
~afficher_document(ABOUT_ESRB)
~afficher_document(LISTE_ANCIENS_EMPLOYES)
~jouer_musique(theme_quiz)

-> question_1

= question_1
1- Qu’est-ce que cet acronyme "ESRB" peut bien signifier ?  # question index=1

+   (1_a) [{1_a: VISITE--}Electronic Software Rating Board] Electronic Software Rating Board
+   (1_b) [BON--{1_b: VISITE--}Entertainment Software Rating Board] Entertainment Software Rating Board
    Correct # retroaction
  -> question_2
+   (1_c) [{1_c: VISITE--}Entertainment Software Rating Business] Entertainment Software Rating Business
+   (1_d) [{1_d: VISITE--}Aucune de ces propositions] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> question_1

= question_2
 2- Quel était le rôle de l'ESRB ? # question index=2

 +   (2_a) [BON--{(2_a % 2 == 1):ACTIF--}Informer les consommateurs sur le contenu des jeux vidéo.] Informer les consommateurs sur le contenu des jeux vidéo.
+   (2_b) [BON--{(2_b % 2 == 1):ACTIF--}Évaluer les jeux vidéo et leur attribuer une classification.] Évaluer les jeux vidéo et leur attribuer une classification.
+   (2_c) [{(2_c % 2 == 1):ACTIF--}Tester les jeux vidéo et fournir une évaluation de leur qualité.] Tester les jeux vidéo et fournir une évaluation de leur qualité.
+   (2_d) [{(2_d % 2 == 1):ACTIF--}Recommander les meilleurs jeux aux parents.] Recommander les meilleurs jeux aux parents.
+   { 2_a || 2_b || 2_c || 2_d } CACHER--Continuer
    // % ici veut dire modulo. Si modulo 2 retourne 1, ça veut dire que le
    // nombre de sélections du choix est un nombre impaire 1, 3, 5, 7,...
    // donc logiquement, le choix est sélectionné (Ou reselectioner s'il a été
    // déselectionné.
	{ (2_a % 2 == 1 && 2_b % 2 == 1 && 2_c % 2 == 0 && 2_d % 2 == 0):
    	 L’objectif premier de l’ESRB est d’informer les consommateurs. Pour cela, l’ESRB teste et analyse une partie des jeux vidéo mis sur le marché chaque année. L’ESRB fournit plusieurs types d’informations aux consommateurs : l’âge recommandé pour les utilisateurs, une description de certains éléments de contenu du jeu (par exemple la présence de sang ou d’alcool) et enfin une description des éléments interactifs présents dans le jeu (par exemple la présence d’achats intégrés dans le jeu).  # retroaction
	-> question_3
    - else:
    	~ generer_mauvaise_reponse_retroaction()
        -> question_2
    }
- -> question_2

= question_3
3- Hum... Un organisme d’évaluation des jeux vidéo, intéressant, mais quelle était son origine ? # question index=3

+   (3_a) [{3_a: VISITE--}Entertainment Software Association - 1999] Entertainment Software Association - 1999
+   (3_b) [{3_b: VISITE--}Electronic Software Association - 1994] Electronic Software Association - 1994
+   (3_c) [BON--{3_c: VISITE--} Entertainment Software Association - 1994]  Entertainment Software Association - 1994
L’ESRB est une émanation de l’Entertainment Software Association (ESA). Cette association est un regroupement d’acteurs de l’industrie des Jeux vidéo parmi lesquels PlayStation, Ubisoft ou encore Epic Games. # retroaction
-> question_4
+   (4_d) [{4_d: VISITE--}Electronic Sport Association – 1994] Electronic Sport Association – 1994
- ~ generer_mauvaise_reponse_retroaction()
-> question_3

= question_4
4 - Il semblerait que plusieurs grands acteurs de l’industrie des jeux vidéo étaient associés à l'ESRB (par le biais de l’ESA). Cherchez l'intrus. # question index=4

 +   (4_a) [{4_a: VISITE--}Nintendo.] Nintendo.
+   (4_b) [{4_b: VISITE--}Riot Games. ] Riot Games.
+   (4_c) [{4_c: VISITE--}Tencent.] Tencent.
+   (4_d) [BON--{4_d: VISITE--}Steam.] Steam.
Steam n’était pas membre de l’ESA et n’était donc pas associé à l’ESRB. C’est surprenant dans la mesure où Steam était un acteur majeur en matière de distribution des jeux vidéo. Est-ce que cela voudrait dire que Steam ne respectait pas le système de classification élaboré par l’ESRB ? #retroaction
-> question_5
- ~ generer_mauvaise_reponse_retroaction()
-> question_4

= question_5
5 - Si je comprends bien, l’ESRB évaluait les jeux vidéo pour les consommateurs. Dans ce cas, quelles étaient les indications fournies par l'ESRB lors de la vente d'un jeu ? #question index=5

 +   (5_a) [BON--{(5_a % 2 == 1):ACTIF--}Recommandation en matière d’âge.] Recommandation en matière d’âge.
+   (5_b) [BON--{(5_b % 2 == 1):ACTIF--}Description du contenu du jeu.] Description du contenu du jeu.
+   (5_c) [BON--{(5_c % 2 == 1):ACTIF--} Description des éléments interactifs présents (achats intégrés, etc.)] Description des éléments interactifs présents (achats intégrés, etc.)
+   (5_d) [{(5_d % 2 == 1):ACTIF--}Évaluation environnementale du jeu.] Évaluation environnementale du jeu.
+   { 5_a || 5_b || 5_c || 5_d } CACHER--Continuer
    // % ici veut dire modulo. Si modulo 2 retourne 1, ça veut dire que le
    // nombre de sélections du choix est un nombre impaire 1, 3, 5, 7,...
    // donc logiquement, le choix est sélectionné (Ou reselectioner s'il a été
    // déselectionné.
	{ (5_a % 2 == 1 && 5_b % 2 == 1 && 5_c % 2 == 1 && 5_d % 2 == 0):
     L’ESRB fournit trois types d’informations aux consommateurs : une recommandation en ce qui concerne l’âge minimal approprié pour jouer au jeu, des informations sur certains éléments qui peuvent choquer les utilisateurs, et enfin des informations sur la présence ou non d’éléments interactifs dans le jeu. Il est important de noter que le système d’évaluation a évolué dans le temps et s’est complexifié. L’ESRB a pour cela suivi l’évolution des jeux vidéo et de leur contenu.  # retroaction
	-> question_6
    - else:
    	~ generer_mauvaise_reponse_retroaction()
        -> question_5
    }
- -> question_5

= question_6
6 - L’ESRB évaluait les jeux vidéo, c’est un élément intéressant, mais la commercialisation d’un jeux vidéo implique plusieurs choses. Est-ce que l’ESRB évaluait uniquement les jeux vidéo en tant que produit final ? #question index=6

*   (6_a) [{6_a: VISITE--}Vrai] Vrai
*   (6_b) [BON--{6_b: VISITE--}Faux] Faux
   L’ESRB n’évaluait pas uniquement les jeux vidéo, mais également les publicités des jeux vidéo. Il existait donc bien un système de protection des consommateurs. # retroaction
    -> question_7
- ~ generer_mauvaise_reponse_retroaction()
-> question_6

= question_7
7 - Comment est-ce que je pourrais résumer en un mot le système mis en place par l'ESRB ? # question index=7

+   (7_a) [BON--{7_a: VISITE--}Autorégulation.] Autorégulation.
Le système proposé par l’ESRB n’était pas obligatoire. Il s’agit plutôt d’un dispositif proposé par certains des acteurs du secteur des jeux vidéo. Les États ne sont pas impliqués dans cette initiative même si certains s’appuient sur le système de l’ESRB. Dès lors, j’ai bien l’impression qu’il s’agissait d’un système qui peut être résumé par le terme “autorégulation”. # retroaction
    -> quiz_2_fin
+   (7_b) [{7_b: VISITE--}Régulation étatique.] Régulation étatique.
+   (7_c) [{7_c: VISITE--}Obligatoire.] Obligatoire.
+   (7_d) [{7_d: VISITE--}Aucune de ces propositions] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> question_7

= quiz_2_fin
~ terminer_quiz()

-> chapitre_1.scene_7
