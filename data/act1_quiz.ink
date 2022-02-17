=== act_1_quiz_1 ===


= quiz_1
<b>Christopher</b> donne à <b>Fred</b> une liste de jeux interdits selon les pays en 2021.La liste est disponible dans le PDA. 
~ demarrer_quiz(QUIZ_1, 6)
~jouer_musique(theme_quiz)
~ afficher_document(JEUX_INTERDITS_WIKIPEDIA)
-> question_1

= question_1
1- Des jeux vidéo ont-ils déjà fait l'objet d'interdictions de commercialisation par le passé ? # question index=1

+   (1_a) [BON--{1_a: VISITE--}Vrai] Vrai
    La liste est longue. De nombreux jeux vidéo ont déjà fait l’objet d’interdictions à travers le monde. Plusieurs types de jeux vidéo sont représentés dans la liste : des jeux de tir à la première personne, des jeux de rôle ou encore des jeux d’aventure.   # retroaction
    -> question_2
+   (1_b) [{1_b: VISITE--}Faux] Faux
+   (1_c) [{1_c: VISITE--}Impossible à déterminer] Impossible à déterminer
- ~ generer_mauvaise_reponse_retroaction()
-> question_1

= question_2
2- La liste des jeux ayant déjà été interdits est longue. Parmi les jeux vidéo suivants, lesquels ont déjà fait l'objet d'une interdiction ? # question index=2

+   (2_a) [BON--{(2_a % 2 == 1):ACTIF--}Counter-Strike] Counter-Strike
+   (2_b) [BON--{(2_b % 2 == 1):ACTIF--}Pokémon Go] Pokémon Go
+   (2_c) [BON--{(2_c % 2 == 1):ACTIF--}Football Manager] Football Manager
+   (2_d) [{(2_d % 2 == 1):ACTIF--}Mario Odyssey] Mario Odyssey
+   { 2_a || 2_b || 2_c || 2_d } CACHER--Continuer
    // % ici veut dire modulo. Si modulo 2 retourne 1, ça veut dire que le
    // nombre de sélections du choix est un nombre impaire 1, 3, 5, 7,...
    // donc logiquement, le choix est sélectionné (Ou reselectioner s'il a été
    // déselectionné.
	{ (2_a % 2 == 1 && 2_b % 2 == 1 && 2_c % 2 == 1 && 2_d % 2 == 0):
    	Une grande variété de jeux vidéo ont fait l’objet d’interdictions avant la Loi Game Over. Parmi eux, je ne suis pas surprise de voir des jeux vidéo réputés comme violents (par exemple des jeux de tir à la première personne comme Counter Strike). Par contre, la présence d’autres jeux est plus surprenante... Pokémon Go est un jeu recommandé pour les enfants et Football Manager est un jeu de gestion d’un club de soccer.  # retroaction
    	-> question_3
    - else:
    	~ generer_mauvaise_reponse_retroaction()
        -> question_2
    }
- -> question_2

= question_3
 3- On dirait bien que de nombreux pays ont déjà interdit au moins un jeu vidéo… Je me demande quel État n’a jamais interdit la vente d’un jeu vidéo ? # question index=3

+   (3_a) [{3_a: VISITE--}Japon] Japon
+   (3_b) [{3_b: VISITE--}Irlande] Irlande
+   (3_c) [{3_c: VISITE--}Émirats arabes unis] Émirats arabes unis
+   (3_d) [BON--{3_d: VISITE--}France] France
    La France n’a jamais interdit la vente d’un jeu vidéo.  # retroaction
    -> question_4
- ~ generer_mauvaise_reponse_retroaction()
-> question_3

= question_4
4- Tout cela paraît insensé… Mais pour quelles raisons les États auraient-ils décidé d’interdire les jeux vidéo par le passé ? # question index=4

+   (4_a) [BON--{(4_a % 2 == 1):ACTIF--}Ultraviolence] Ultraviolence
+   (4_b) [BON--{(4_b % 2 == 1):ACTIF--}Référence au nazisme] Référence au nazisme
+   (4_c) [BON--{(4_c % 2 == 1):ACTIF--}Atteinte à l’image d’un État] Atteinte à l’image d’un État
+   (4_d) [{(4_d % 2 == 1):ACTIF--}Difficulté extrême] Difficulté extrême
+   { 4_a || 4_b || 4_c || 4_d } CACHER--Continuer
    // % ici veut dire modulo. Si modulo 2 retourne 1, ça veut dire que le
    // nombre de sélections du choix est un nombre impaire 1, 3, 5, 7,...
    // donc logiquement, le choix est sélectionné (Ou reselectioner s'il a été
    // déselectionné.
	{ (4_a % 2 == 1 && 4_b % 2 == 1 && 4_c % 2 == 1 && 4_d % 2 == 0):
    	 Les raisons invoquées par les États sont nombreuses et variées. La raison la plus souvent invoquée est l’ultraviolence. L’atteinte aux intérêts de l’État est aussi une raison invoquée. La difficulté extrême n’est jamais mentionnée comme une justification pour l’interdiction d’un jeu vidéo. # retroaction
    	-> question_5
    - else:
    	~ generer_mauvaise_reponse_retroaction()
        -> question_4
        }
- -> question_4
= question_5
5- Je dois explorer si l’interdiction des jeux vidéo était une pratique propre aux régimes autoritaires... # question index=5
*   (5_a) [{5_a: VISITE--}Vrai] Vrai
*   (5_b) [BON--{5_b: VISITE--}Faux] Faux
    Parmi les États ayant déjà interdit des jeux vidéo on peut trouver des régimes autoritaires, mais également plusieurs démocraties. On y trouve également le Japon qui est pays où sont produits de nombreux jeux vidéo. Cette liste est vraiment surprenante. # retroaction
    -> question_6
- ~ generer_mauvaise_reponse_retroaction()
-> question_5

= question_6
6- Puisque j’y suis, est-ce que des jeux ont déjà été interdits au Canada ? # question index=6

*   (6_a) [{6_a: VISITE--}Oui] Oui
*   (6_b) [BON--{6_b: VISITE--}Non] Non
    Le Canada ne figure pas sur la liste des pays ayant déjà interdit un jeu vidéo... Mais ça c’était avant la <i>Loi Game Over</i>. # retroaction   
    -> quiz_1_fin
- ~ generer_mauvaise_reponse_retroaction()
-> question_6

= quiz_1_fin

~ terminer_quiz()

-> chapitre_1.scene_3_suite