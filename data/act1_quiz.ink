=== act_1_quiz ===

= pre_quiz
Un quiz va etre lancé, le PDA devrait s'ouvrir avec le premier document qui inclus une liste de jeux interdits sur wikipédia.
-> quiz_1

= quiz_1
~ demarrer_quiz(QUIZ_1, 6)
-> question_1

= question_1
~ afficher_document(JEUX_INTERDITS_WIKIPEDIA)

Des jeux vidéo ont-ils déjà fait l'objet d'interdictions de commercialisation par le passé ? # question index=1

+   (1_a) [BON--{1_a: VISITE--}Vrai] Vrai
    Une très longue liste de jeux vidéo ont déjà fait l’objet d’interdictions à travers le monde. Plusieurs types de jeux vidéo sont représentés dans la liste : des jeux de tir à la première personne, des jeux de rôle ou encore des jeux d’aventure. # retroaction
    -> question_2
+   (1_b) [{1_b: VISITE--}Faux] Faux
+   (1_c) [{1_c: VISITE--}Impossible à déterminer] Impossible à déterminer
- ~ generer_mauvaise_reponse_retroaction()
-> question_1

= question_2
La liste des jeux ayant déjà été interdits est longue. Parmi les jeux vidéo suivants lesquels ont déjà fait l'objet d'une interdiction ? # question index=2

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
    	Une grande variété de jeux vidéo ont fait l’objet d’interdictions avant la loi Game Over. Pami eux, je ne suis pas surpris de voir des jeux vidéo réputés comme violents (par exemple des jeux de tir à la première personne comme Counter-Strike). Par contre la présence d’autres jeux est plus surprenante, par exemple comme Pokémon Go (un jeu recommandé pour les enfants) ou encore Football Manager (un jeu de gestion de club de soccer). # retroaction
    	-> question_3
    - else:
    	~ generer_mauvaise_reponse_retroaction()
        -> question_2
    }
- -> question_2

= question_3
On dirait bien que toutes mes destinations de vacances préférées ont déjà interdit au moyen un jeux vidéo… Cherchez l’intrus : # question index=3

+   (3_a) [{3_a: VISITE--}Japon] Japon
+   (3_b) [{3_b: VISITE--}Irlande] Irlande
+   (3_c) [{3_c: VISITE--}Émirats arabes unis] Émirats arabes unis
+   (3_d) [BON--{3_d: VISITE--}France] France
    La France est le seul pays parmi mes destinations de vacances préférées qui n’a jamais interdit la vente d’un jeu vidéo. # retroaction
    -> question_4
- ~ generer_mauvaise_reponse_retroaction()
-> question_3

= question_4
Pour quelles raisons les États auraient-ils décidé d’interdire les jeux vidéo par le passé ? C’est incensé.... Chercher l'intrus. # question index=4

+   (4_a) [{4_a: VISITE--}Ultraviolence] Ultraviolence
+   (4_b) [{4_b: VISITE--}Référence au nazisme] Référence au nazisme
+   (4_c) [{4_c: VISITE--}Atteinte à l’image d’un État] Atteinte à l’image d’un État
+   (4_d) [BON--{4_d: VISITE--}Difficulté extrême] Difficulté extrême bon_choix
    Les raisons invoquées par les États sont nombreuses et variées. La raison la plus souvent invoquée est l’ultraviolence. L’atteinte aux intérêts de l’État est aussi une raison invoquée. La difficulté extrême n’est jamais mentionnée comme une justification pour l’interdiction d’un jeu vidéo. # retroaction
    -> question_5
- ~ generer_mauvaise_reponse_retroaction()
-> question_4

= question_5
En tout cas, je suis certain que l’on peut conclure que seuls les régimes autoritaires interdisaient des jeux vidéo. # question index=5

*   (5_a) [{5_a: VISITE--}Vrai] Vrai
*   (5_b) [BON--{5_b: VISITE--}Faux] Faux
    Parmi les États ayant déjà interdit des jeux vidéo on peut trouver des régimes autoritaires, mais également plusieurs démocraties. On y trouve également le Japon qui est pays où sont produits de nombreux jeux vidéo. Cette liste est vraiment surprenante. # retroaction
    -> question_6
- ~ generer_mauvaise_reponse_retroaction()
-> question_5

= question_6
Et tant que j’y suis, est-ce que des jeux ont déjà été interdits au Canada ? # question index=6

*   (6_a) [{6_a: VISITE--}Oui] Oui
*   (6_b) [BON--{6_b: VISITE--}Non] Non
    Le Canada ne figure pas sur la liste des pays ayant déjà interdit un jeu vidéo... Mais ça c’était avant la loi Game Over. # retroaction   
    -> quiz_1_fin
- ~ generer_mauvaise_reponse_retroaction()
-> question_6

= quiz_1_fin

~ terminer_quiz()
-> fin