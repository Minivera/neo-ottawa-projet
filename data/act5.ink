=== chapitre_5 ===

=scene_1
~ afficher_fond(transition)
<center><titre>Chapitre 5</titre></center><br/><center>À l'épreuve de la confiance</center> # transition
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)

<b>Fred</b> rend visite à <b>Vivian</b>. 
~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: Fred est en train de perdre la confiance de ses collaborateurs de tous les côtés. Elle va devoir arriver avec une bonne idée pour leur faire oublier les mauvaises… Rappelez-lui le jeu qu’elle a acheté à Christopher. Christopher avait mentionné qu’elle pouvait moder le jeu… Skyrim. Vous savez, ces modifications faites par des fans pour transformer un jeu existant? Les mods de jeu… c’est une clé, agent Gallant. Faites vos preuves maintenant! # character=NARRATEUR invisible
~arreter_musique()
<b>Fred</b> se réveille de sa torpeur.
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)

Fred, <i>à elle-même</i>: Les mods de jeux! Bien sûr! # character=FRED_GALLANT invisible

Fred, <i>à elle-même</i>: Il faudrait quand même que je pense à consulter sur ces moments d’absences… # character=FRED_GALLANT invisible

<b>Vivian</b> ouvre la porte. 
~afficher_personnage(VIVIAN, "slideInUp")

Vivian: Tu tombes mal, il n’y a personne ici ce soir. # character=VIVIAN expression=neutral

Fred: Où sont-ils tous? # character=FRED_GALLANT invisible

Vivian: Je ne sais pas. # character=VIVIAN expression=neutral

Fred: Tu ne sais pas, ou tu ne veux pas me le dire. # character=FRED_GALLANT invisible

Vivian: … # character=VIVIAN expression=sterness

Vivian: Tu voulais quoi? # character=VIVIAN expression=sterness

Fred: Je voulais vous parler du retour de la légalité des jeux. # character=FRED_GALLANT invisible

Vivian: Ah bon? Tu sais quoi à ce sujet? # character=VIVIAN expression=surprise

Fred: Très peu. Mais je sais que ça s’organise. # character=FRED_GALLANT invisible

Vivian: On se prépare. Tout le monde le sait. # character=VIVIAN expression=neutral

Fred: Oui, justement. # character=FRED_GALLANT invisible

Vivian: Alors? # character=VIVIAN expression=neutral

Fred: J’aurais une question à te poser. # character=FRED_GALLANT invisible

Vivian: Ce sont des réponses qu’on voulait. # character=VIVIAN expression=sterness

Fred: Je sais. J’ai quand même une info à te partager. # character=FRED_GALLANT invisible

Vivian [disdain]
Laquelle? # character=VIVIAN expression=disdain

Fred: Concernant l’événement. # character=FRED_GALLANT invisible

Vivian: Qu’est-ce que tu sais à propos de l’événement? # character=VIVIAN expression=alertness

*<b>Fred</b> décide de rester prudente sur ce qu’elle va répondre.

Fred: Je sais qu’ils planifient un événement pour convaincre le public que les jeux ne devraient pas rester illégaux. # character=FRED_GALLANT invisible

Vivian: D’accord, Sherlock. # character=VIVIAN expression=amusement

*Fred demeure très vague sur ce qu’elle sait. Elle se méfie.

 Fred: Rien, personne ne semble me faire confiance. # character=FRED_GALLANT invisible

Vivian: Il y a certainement une raison à cela. # character=VIVIAN expression=disdain

*Fred explique ce qu’elle sait.

Fred: Je sais qu’ils planifient un événement pour convaincre le public que les jeux ne devraient pas rester illégaux. # character=FRED_GALLANT invisible

Vivian: D’accord, Sherlock. # character=VIVIAN expression=amusement

Fred: Je ne blague pas. Je connais le jeu qui sera utilisé pour le lancement. # character=FRED_GALLANT invisible

- Vivian [sterness]
C’est quoi ta question au juste? # character=VIVIAN expression=sterness

Fred: Tu connais les mods de jeux? Est-ce que c’est bien ou pas? # character=FRED_GALLANT invisible

Vivian: Pourquoi tu veux savoir ça? # character=VIVIAN expression=sterness

Fred: Je veux savoir comment c’était avant. Je veux dire, quand c’était légal. Comment ça fonctionnait? Pourquoi les utilisateurs voulaient-ils changer le jeu? Je veux prévenir les risques de problèmes légaux à la sortie, il faut garder une image propre. Et il y a déjà des problèmes de propriété intellectuelle avant même que le jeu ne soit sorti. # character=FRED_GALLANT invisible

Vivian: Bah, c’était pour l’améliorer, pour diversifier l’expérience ou augmenter la longévité d’un jeu! Il y avait des concepteurs qui le prévoyaient et l’espéraient! Ça les aidait en fait. # character=VIVIAN expression=neutral

Fred: Comment? # character=FRED_GALLANT invisible

Vivian: Je te l’ai dit, ça améliorait le jeu. # character=VIVIAN expression=neutral

Fred: Oui, mais les droits d’auteurs? # character=FRED_GALLANT invisible

Vivian: Aucune idée. De ce que j’en sais, ça n’empêchait pas les joueurs de moder. # character=VIVIAN expression=alertness

Fred: On va devoir se préparer mieux que ça. J’aimerais trouver des réponses. # character=FRED_GALLANT invisible

Vivian: Occupe-toi de ça si ça te chante. On ne crachera pas sur une préparation qui aura l’air plus sérieuse. Quand le moment sera venu, ils vont nous poser des questions. Mais pourquoi perdrais-tu leur confiance? Tu as fait quoi? # character=VIVIAN expression=sterness

Fred: C’est quand le moment? # character=FRED_GALLANT invisible

Vivian: Tu aimerais bien savoir, hein? # character=VIVIAN expression=amusement

Fred: Pourquoi vous ne me faites plus confiance, vous? # character=FRED_GALLANT invisible

Vivian: Demande à Christopher. Tiens. Débrouille-toi avec ça. # character=VIVIAN expression=sterness

<b>Vivian</b> remet à <b>Fred</b> un document qui explique ce qu’étaient les mods de jeux. Elle lui remet également des documents sur l’histoire des mods.
~cacher_tout_personnages()
-> quiz_5_1

= quiz_5_1
~ demarrer_quiz(QUIZ_5_1, 17)
~ jouer_musique(theme_quiz)
~ajouter_document(DEFINITION_MOD) 
~afficher_document(LOI_DROIT_AUTEUR)
// Description du document: Cette loi incontournable dans le domaine du droit des jeux vidéo devrait me permettre de déterminer les droits dont disposaient les créateurs de jeux vidéo avant la <i>Loi Game Over</i> (en particulier aux pages 12-13 et 15-16).
-> quiz_5_1_question_1

= quiz_5_1_question_1
1- Un jeu vidéo est protégé durant toute la vie de son auteur. # question index=1 
+  (5_1_1_a) [BON--{5_1_1_a: VISITE--}Vrai] Vrai
Selon l’article 6 de la Loi sur le droit d’auteur, les droits d’un auteur étaient bien protégés durant toute la vie du créateur (sauf exceptions)! C’était donc très protecteur! # retroaction
-> quiz_5_1_question_2
+  (5_1_1_b) [{5_1_1_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_1


= quiz_5_1_question_2
2- Un jeu vidéo était protégé y compris après la mort de son auteur. # question index=2 
+  (5_1_2_a) [BON--{5_1_2_a: VISITE--}Vrai] Vrai
Comment ça? La protection des œuvres perdurait y compris après la vie des créateurs (article 6, loi sur le droit d’auteur)? Cela signifie donc que les ayants droits pouvaient continuer à exploiter les droits très longtemps… On peut donc imaginer des jeux qui pouvaient être protégés pendant plus de 70 ans, voire plus de 100 ans dans certains cas!  # retroaction
-> quiz_5_1_question_3
+  (5_1_2_b) [{5_1_2_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_2

= quiz_5_1_question_3
3- Mais alors, est-ce les jeux vidéo anonymes (œuvres anonymes) étaient protégés en droit canadien? # question index=3
+  (5_1_3_a) [{5_1_3_a: VISITE--}Oui] Oui
+  (5_1_3_b) [BON--{5_1_3_b: VISITE--}Non] Non
Les jeux vidéo dont on ne connaissait pas les auteurs étaient tout de même protégés durant 75 ans après leur création selon l’article 6.1. (1) de la Loi sur le droit d’auteur.  # retroaction
-> quiz_5_1_question_4
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_3

=quiz_5_1_question_4
4- Un détenteur de droit peut... # question index=4
+   (5_1_4_a) [{5_1_4_a: VISITE--}Exécuter une œuvre en public] Exécuter une œuvre en public
+   (5_1_4_b) [{5_1_4_b: VISITE--}Publier une traduction de l’œuvre] Publier une traduction de l’œuvre 
+   (5_1_4_c) [{5_1_4_c: VISITE--}Produire une œuvre sous une forme matérielle quelconque] Produire une œuvre sous une forme matérielle quelconque  
+   (5_1_4_d) [BON--{5_1_4_d: VISITE--}Toutes ces propositions] Toutes ces propositions
 Les droits des créateurs d’un jeu vidéo étaient très larges! Ils détenaient notamment le droit exclusif de produire le jeu vidéo ou l'œuvre sous n’importe quelle forme matérielle (selon l’article 3.(1) de la Loi sur le droit d’auteur)!  # retroaction
-> quiz_5_1_question_5
 +  (5_1_4_e) [{5_1_4_d: VISITE--}Aucune de ces propositions] Aucune de ces propositions
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_4

= quiz_5_1_question_5
5- Étant donné la portée de ces droits, les joueurs pouvaient-ils modifier un jeu sans le consentement du ou des auteurs? # question index=5
+  (5_1_5_a) [{5_1_5_a: VISITE--}Oui] Oui
+  (5_1_5_b) [BON--{5_1_5_b: VISITE--}Non] Non
Étant donné les droits très larges des créateurs de jeux vidéo, il est clair que selon la Loi sur le droit d’auteur, les joueurs n’avaient pas le droit de modifier un jeu sans le consentement du ou des auteurs. # retroaction
-> quiz_5_1_question_6
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_5

~afficher_document(LICENCE_JEU_VIDEO)
// Description du document: Une licence de jeu vidéo! Une véritable relique de l’époque. Voyons voir ce qu’elle peut nous apprendre sur un éventuel droit de modification d’un jeu vidéo par les joueurs.

= quiz_5_1_question_6
6- Selon la licence de Quantic Dream, les joueurs qui achetaient un jeu vidéo obtenaient des droits de propriété intellectuelle sur les éléments de ce jeu vidéo. # question index=6
+  (5_1_6_a) [{5_1_6_a: VISITE--}Oui] Oui
+  (5_1_6_b) [BON--{5_1_6_b: VISITE--}Non] Non
  La licence indique très clairement que les joueurs n’obtenaient aucun droit de propriété lors de l’achat d’un jeu vidéo commercialisé par Quantic Dream (voir l’article 3). Il est également précisé que tous les éléments d’un jeu vidéo (par exemple, les objets, les personnages, les noms de personnages, les quêtes, les dialogues, les phrases clés, etc.) restaient la propriété de Quantic Dream. Cela signifie que les joueurs ne pouvaient pas modifier ces éléments sans le consentement de leurs auteurs. # retroaction
-> quiz_5_1_question_7
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_6

= quiz_5_1_question_7
7- Selon la licence de Quantic Dream, les joueurs qui achètent un jeu vidéo peuvent accéder au code source et modifier librement le contenu du jeu. # question index=7
+  (5_1_7_a) [{5_1_7_a: VISITE--}Oui] Oui
+  (5_1_7_b) [BON--{5_1_7_b: VISITE--}Non] Non
    La licence est très détaillée et il était prévu que les joueurs se procurant un jeu vidéo commercialisé par Quantic Dream ne devaient pas « effectuer l’ingénierie inverse, dériver le code source, modifier, décompiler, désassembler, copier ou créer des travaux dérivés du Produit, en tout ou en partie » (selon l’article 4(fd)). # retroaction
-> quiz_5_1_question_8
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_7

~afficher_document(MOD_COUNTER_STRIKE)
// Description document: La créativité de certains joueurs était tout bonnement extraordinaire! Certains mods de jeu créés par des passionnés sont devenus des jeux à part entière…

= quiz_5_1_question_8
8- Est-ce que l’un de ces jeux était à l'origine un mod créé par des joueurs passionnés? # question index=8
+   (5_1_8_a) [{5_1_8_a: VISITE--}Counter-Strike] Counter-Strike
+   (5_1_8_b) [{5_1_8_b: VISITE--}Defense of the Ancients] Defense of the Ancients
+   (5_1_8_c) [BON--{5_1_8_c: VISITE--}Grand Theft Auto] Grand Theft Auto
  Selon les archives d’époque, les jeux Counter-Strike et Defense of the Ancients étaient des créations de moddeurs. Les joueurs ont donc utilisé les outils fournis avec le jeu leur permettant de le modifier pour créer du contenu original. Ces « mods » sont devenus des jeux vidéo très prisés des joueurs. # retroaction
-> quiz_5_1_question_9
 +  (5_1_4_d) [{5_1_4_d: VISITE--}Aucune de ces propositions] Aucune de ces propositions
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_8

= quiz_5_1_question_9
9- Certains mods de jeux vidéo sont devenus des jeux commerciaux. # question index=9
+  (5_1_9_a) [BON--{5_1_9_a: VISITE--}Vrai] Vrai
 Certains mods sont devenus des jeux vidéo très prisés des joueurs. C’est le cas par exemple de Counter-Strike. La société Valve a par ailleurs recruté les moddeurs à l’origine de Counter-Strike et a commercialisé plusieurs nouvelles versions de ce jeu. # retroaction
-> quiz_5_1_question_10
+  (5_1_9_b) [{5_1_9_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_9

~afficher_document(MOD_DOTA)
// Description document: Il y a donc eu plusieurs mods qui sont devenus des succès commerciaux. Mais cela n’a pas été sans parfois entraîner des tensions et des litiges juridiques comme avec Dota. Je devrais tirer cela au clair. 

= quiz_5_1_question_10
10- Le jeu original DOTA a été développé par : # question index=10
+   (5_1_10_a) [{5_1_10_a: VISITE--}Valve] Valve
+   (5_1_10_b) [{5_1_10_b: VISITE--}Blizzard] Blizzard
+   (5_1_10_c) [{5_1_10_c: VISITE--}Un joueur] Un joueur
 +  (5_1_10_d) [BON--{5_1_10_d: VISITE--}Un groupe de joueurs] Un groupe de joueurs
   Il s'agit de la bonne réponse # retroaction
   -> quiz_5_1_question_11
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_10

= quiz_5_1_question_11
11- DOTA a été cédé par des droits à des studios de jeux vidéo # question index=11
+  (5_1_11_a) [BON--{5_1_11_a: VISITE--}Vrai] Vrai
Il s'agit de la bonne réponse # retroaction
-> quiz_5_1_question_12
+  (5_1_11_b) [{5_1_11_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_11

= quiz_5_1_question_12
12- Le jeu DOTA a été centre d’une bataille juridique : # question index=12
+   (5_1_12_a) [{5_1_12_a: VISITE--}Un joueur et Valve] Un joueur et Valve
+   (5_1_12_b) [BON--{5_1_12_b: VISITE--}Valve et Blizzard] Valve et Blizzard
   Il s'agit de la bonne réponse # retroaction
   -> quiz_5_1_question_13
+   (5_1_12_c) [{5_1_12_c: VISITE--}Valve et Riot Games] Valve et Riot Games
 +  (5_1_12_d) [{5_1_12_d: VISITE--}Un joueur et Blizzard] Un joueur et Blizzard
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_12

~afficher_document(AVANTAGES_INCONVENIENTS_MOD)
//Description document: Quelle chance d’avoir retrouvé ces reliques d’avant l’interdiction des jeux vidéo! Je vais pouvoir déterminer l’attitude de ces acteurs du milieu des jeux vidéo vis-à-vis des mods créés par les fans.
= quiz_5_1_question_13
13- Les acteurs de l'industrie vidéoludique étaient-ils unanimes sur l'acceptation des mods de jeu? # question index=13
+  (5_1_13_a) [{5_1_13_a: VISITE--}Oui] Oui
+  (5_1_13_b) [BON--{5_1_13_b: VISITE--}Non] Non
 Selon les archives d’époque, les acteurs de l’industrie des jeux vidéo n’étaient pas unanimes à propos de l’acceptation des mods de jeu. Certains autorisaient et encourageaient la création de mods. D’autres les interdisaient tout simplement. # retroaction
-> quiz_5_1_question_14
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_13

= quiz_5_1_question_14
14- Quel éditeur permettait la modification de ses productions? # question index=14
+   (5_1_14_a) [BON--{(5_1_14_a % 2 == 1):ACTIF--}Blizzard] Blizzard
+   (5_1_14_b) [BON--{(5_1_14_b % 2 == 1):ACTIF--}Bethesda] Bethesda
+   (5_1_14_c) [{(5_1_14_c % 2 == 1):ACTIF--}Nintendo] Nintendo
+   (5_1_14_d) [{(5_1_14_d % 2 == 1):ACTIF--}Aucune de ces propositions.] Aucune de ces propositions.
+   { 5_1_14_a || 5_1_14_b || 5_1_14_c || 5_1_14_d } CACHER--Continuer
    // % ici veut dire modulo. Si modulo 2 retourne 1, ça veut dire que le
    // nombre de sélections du choix est un nombre impaire 1, 3, 5, 7,...
    // donc logiquement, le choix est sélectionné (Ou reselectioner s'il a été
    // déselectionné.
	{ (5_1_14_a % 2 == 1 && 5_1_14_b % 2 == 1 && 5_1_14_c % 2 == 0 && 5_1_14_d % 2 == 0):
Selon les archives d’époque, Blizzard et Bethesda sont deux des éditeurs de jeux vidéo qui permettaient la modification de leurs productions. Nintendo était une compagnie très opposée à la modification de ses jeux. Il s’agissait peut-être d’une manière de contrôler son image.  # retroaction
    	-> quiz_5_1_question_15
    - else:
    	~ generer_mauvaise_reponse_retroaction()
        -> quiz_5_1_question_14
    }
- -> quiz_5_1_question_14

= quiz_5_1_question_15
15- Mais alors, était-il possible dans certains cas de générer des revenus avec des mods de jeux? # question index=15
+  (5_1_15_a) [BON--{5_1_15_a: VISITE--}Oui] Oui
Selon la licence de l’éditeur Blizzard, il n’était pas possible (sauf accord préalable et écrit de la part de Blizzard) de générer des revenus avec les mods de jeux (voir l’article 4, Custom Game Acceptable Use Policy). Selon la licence de l’éditeur Bethesda, qui proposait un éditeur de contenu aux joueurs, ces derniers ne pouvaient pas en principe distribuer commercialement leurs créations sans le consentement de Bethesda. Elles devaient être proposées sans frais (voir l’article 1). Cependant la licence prévoyait une exception à l’article 5. Les créateurs pouvaient proposer, contre rétribution, leurs créations sur le Steam Workshop. # retroaction
-> quiz_5_1_question_16
+  (5_1_15_b) [{5_1_15_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_15

= quiz_5_1_question_16
16- À qui appartenaient les créations des joueurs selon Bethesda? # question index=16
+   (5_1_16_a) [{5_1_16_a: VISITE--}Au joueur-créateur] Au joueur-créateur
+   (5_1_16_b) [{5_1_16_b: VISITE--}À Bethesda] À Bethesda
+   (5_1_16_c) [BON--{5_1_16_c: VISITE--}Elle est partagée entre l’éditeur et le joueur-créateur] Elle est partagée entre l’éditeur et le joueur-créateur
Selon la licence de Bethesda, le nouveau matériel créé par les joueurs semblait rester la propriété de ces derniers, mais ça n’est pas clairement précisé. Nous pouvons le déduire, car dès lors que les créateurs décidaient de distribuer leurs créations, ils octroyaient automatiquement une licence d’exploitation très large (comportant notamment le droit de modifier, reproduire ou encore adapter les créations) à Bethesda (voir l’article 1). # retroaction
-> quiz_5_1_question_17
 +  (5_1_16_d) [{5_1_16_d: VISITE--}Elles n’appartiennent à personne] Elles n’appartiennent à personne
 +  (5_1_16_e) [{5_1_16_e: VISITE--}Aucune de ces propositions]
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_16

= quiz_5_1_question_17
17- À qui appartenaient les créations des joueurs selon Blizzard? # question index=17
+   (5_1_17_a) [{5_1_17_a: VISITE--}Au joueur-créateur] Au joueur-créateur
+   (5_1_17_b) [BON--{5_1_17_b: VISITE--}À Blizzard] À Blizzard
Selon la licence de Blizzard, ce dernier conservait la propriété sur les créations des joueurs produites au moyen des outils mis à la disposition par l’éditeur. On dirait que Blizzard souhaitait se prémunir contre un cas comme Dota, développé par des joueurs et qui a échappé à Blizzard dans une certaine mesure. # retroaction
   -> quiz_5_1_fin
+   (5_1_17_c) [{5_1_17_c: VISITE--}Elle est partagée entre l’éditeur et le joueur-créateur] Elle est partagée entre l’éditeur et le joueur-créateur
 +  (5_1_17_d) [{5_1_17_d: VISITE--}Elles n’appartiennent à personne] Elles n’appartiennent à personne
 +  (5_1_17_e) [{5_1_17_e: VISITE--}Aucune de ces propositions]
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_17

= quiz_5_1_fin
~terminer_quiz()
~arreter_musique()
~cacher_fond()
-> scene_2

= scene_2
~jouer_musique(theme_narrateur)
Narrateur: Fred est prête à prendre sa décision. Les recommandations qu’elle fera l’aideront peut-être à regagner la confiance de la résistance. Prenez vous-même connaissance des documents qu’elle a consultés. Ensuite, choisissez. # character=NARRATEUR invisible
<b>Fred</b> se réveille de sa torpeur.
~afficher_fond(rue_flemming)
~jouer_musique(theme_general)

* <b>Fred</b> recommande de laisser les utilisateurs moder les jeux.
~afficher_personnage(TEACHER_V2, "slideInUp")
Teacher: Tu voulais me voir? # character=TEACHER_V2 expression=wtf

Fred: Oui, j’ai analysé la situation et je pense qu’on devrait permettre les mods de jeux. # character=FRED_GALLANT invisible

Teacher: Sûre? Il me semble que ça crée des problèmes. # character=TEACHER_V2 expression=surprise

Fred: Oui, mais il a existé des jeux, dans le passé, qui non seulement toléraient le modage, mais l'encourageaient. En fait, ça leur rendait service. Si on le prévoit dès la conception, ça peut être un atout majeur. Ça engage le joueur, ça lui permet de personnaliser son jeu et c’est plus immersif. Ce sont des avantages à considérer. # character=FRED_GALLANT invisible

Teacher: Tu recommandes vraiment qu’on le permette? # character=TEACHER_V2 expression=surprise

Fred: Oui, vraiment. # character=FRED_GALLANT invisible

Teacher: Ça implique de renégocier avec Jonathan et Christian, ça n’a pas été facile déjà. # character=TEACHER_V2 expression=concern

Fred: Je sais, mais je pense que ça en vaut la peine. Si vous voulez, je peux leur parler, voir ce qu’ils en pensent. Peut-être qu’ils seront d’accord. # character=FRED_GALLANT invisible

Teacher: Je serais surpris. Mais j’aime ton courage. Tu prends des risques. J’aurais conseillé de ne pas s’en occuper et de voir après la sortie comment le public réagit. Tu m’as fait changer d’avis. Je vais t’appuyer sur ce coup-là.# character=TEACHER_V2 expression=joy
~cacher_personnage(TEACHER_V2, "slideOutDown")

*<b>Fred</b> recommande de ne pas permettre le modage pour des raisons de propriété intellectuelle.
~afficher_personnage(TEACHER_V2, "slideInUp")

Teacher: Tu voulais me voir? # character=TEACHER_V2 expression=wtf

Fred: Oui, c’est au sujet du modage de jeu. # character=FRED_GALLANT invisible

Teacher: Pourquoi me parles-tu de cela? # character=TEACHER_V2 expression=surprise

Fred: J’ai analysé la situation pour la sortie du jeu. # character=FRED_GALLANT invisible

Teacher: Eh bien? # character=TEACHER_V2 expression=neutral

Fred: Je pense qu’on ne devrait pas se risquer à le permettre. # character=FRED_GALLANT invisible

Teacher: Pourquoi? # character=TEACHER_V2 expression=wtf

Fred: Parce que ça complique beaucoup les droits de propriété intellectuelle et la situation est déjà assez compliquée avec Christian… et Jonathan. # character=FRED_GALLANT invisible

Teacher: Oui, mais tu sais que les gens vont quand même le faire possiblement et là, on perd le contrôle pour vrai. # character=TEACHER_V2 expression=anxiety

Fred: C’est un risque à prendre. Il y a certainement moins de gens qui en sont capables qu’avant la loi, non? # character=FRED_GALLANT invisible

Teacher: C’est encore drôle. Nous le verrons bien! # character=TEACHER_V2 expression=sterness

Fred: J’imagine. # character=FRED_GALLANT invisible

Teacher: Alors, tu es certain, c’est ça ta recommandation? On refuse? # character=TEACHER_V2 expression=wtf

Fred: Oui, je crois que c’est mieux. # character=FRED_GALLANT invisible
~cacher_personnage(TEACHER_V2, "slideOutDown")

- ~afficher_personnage(CHRISTIAN, "slideInUp")
Fred: Je suis vraiment très contente de ta réaction pour le modage. # character=FRED_GALLANT invisible

Christian: C’est normal. # character=CHRISTIAN expression=neutral

Fred: Maintenant on doit parler d’autre chose. # character=FRED_GALLANT invisible

Christian: De quoi? # character=CHRISTIAN expression=neutral

Fred: De dépendance. # character=FRED_GALLANT invisible

Christian: Qu’est-ce que tu veux savoir? # character=CHRISTIAN expression=concern

Fred: La résistance prévoit rendre le jeu gratuit, ce qui ne s’est jamais fait sur le marché noir depuis la <i>Loi Game Over</i>. Tu es d’accord avec ça? # character=FRED_GALLANT invisible

Christian: Tant qu’on me paye, moi. L’accès au jeu, ça m’arrange qu’il soit facile. # character=CHRISTIAN expression=neutral

Fred: Mais Christian, si le jeu est gratuit, tu sais ce que ça veut dire? # character=FRED_GALLANT invisible

Christian: Comme je te dis. Ce qui m’intéresse, c’est que beaucoup de monde y joue.# character=CHRISTIAN expression=satisfaction

Fred: Oui, mais il faut réfléchir aux conditions du jeu. # character=FRED_GALLANT invisible

Christian: Qu’est-ce que tu veux dire? # character=CHRISTIAN expression=neutral

Fred: Pense aux jeunes, aux enfants. Est-ce que les joueurs vont pouvoir personnaliser leur avatar? # character=FRED_GALLANT invisible

Christian: Bah oui! C’est sûr! # character=CHRISTIAN expression=satisfaction

Fred: Est-ce que la personnalisation peut se faire en gagnant ou en achetant des éléments? # character=FRED_GALLANT invisible

Christian: Oui, les deux. On peut débloquer des éléments en gagnant et en achetant. C’est normal, je pense. # character=CHRISTIAN expression=satisfaction

Fred: Normal peut-être, mais ça peut contribuer à créer des dépendances. # character=FRED_GALLANT invisible

Christian: Je ne vois pas pourquoi. # character=CHRISTIAN expression=concern

Fred: Mais si, les récompenses, tu vois? Un système de récompense, ça peut entraîner une forme de dépendance. # character=FRED_GALLANT invisible

Christian: Mais qu’est-ce que tu veux qu’on fasse? # character=CHRISTIAN expression=concern

Fred: Je ne sais pas, mais c'est le genre de choses qu’on doit comprendre avant de lancer un jeu en demandant le retour de la légalité. # character=FRED_GALLANT invisible

Christian: D’accord, je veux bien, mais qu’est-ce que je peux faire moi? Je suis un artiste, pas un avocat! # character=CHRISTIAN expression=disdain

Fred: Voilà, l’experte en droit, c’est moi et je te dis que ce n’est pas une bonne idée. # character=FRED_GALLANT invisible

Christian: Experte en droit, tu exagères. Tu vas leur en parler? # character=CHRISTIAN expression=disdain

Fred: Je dois continuer mon enquête d’abord. Tu me donnes les documents qui décrivent les systèmes du jeu et le contenu? # character=FRED_GALLANT invisible

Christian: Tu vas en faire quoi? # character=CHRISTIAN expression=concern

Fred: L’analyser. Des gens l’ont testé déjà? # character=FRED_GALLANT invisible

Christian: Oui, je crois. Des amis, des proches. # character=CHRISTIAN expression=neutral

Fred: Ils ont fait des rapports? # character=FRED_GALLANT invisible

Christian: Je ne sais pas, tu demanderas à Teacher. # character=CHRISTIAN expression=neutral

Fred: Bien. Tu as des photos? Des extraits de gameplay? # character=FRED_GALLANT invisible

Christian: Tu vois ça avec Teacher d’accord? # character=CHRISTIAN expression=sterness

Fred: D’accord. # character=FRED_GALLANT invisible
~cacher_personnage(CHRISTIAN, "slideOutDown")
TODO:Accès document décrivant les systèmes de jeu 

~afficher_personnage(BORIS, "slideInUp")

Boris: Salut Fred. Qu’est-ce que tu veux? # character=BORIS expression=neutral

Fred: Salut Boris. J’aurais une question à te poser. # character=FRED_GALLANT invisible

Boris: Je t’écoute, mais dépêche-toi, je suis pressé. Je ne vois pas pourquoi je te répondrais. # character=BORIS expression=sterness

Fred: Je me demandais si vous n’aviez pas des documents qui montreraient les dépenses encourues en moyenne avec des jeux du même type que celui qu’on va lancer. # character=FRED_GALLANT invisible

Boris: Je ne crois pas. Pourquoi on s’en préoccuperait? # character=BORIS expression=concern

Fred: Parce que si votre plan fonctionne, beaucoup de gens vont poser des questions. Bon sang! Ça me paraît évident! Tu ne crois pas que les jeux vidéo ont été interdits pour une bonne raison? # character=FRED_GALLANT invisible

Boris: Non! Tu es de quel côté Gallant? Qu’est-ce qui te prend? On m’avait bien dit de me méfier de toi! # character=BORIS expression=wtf

Fred: Te méfier? Je n’ai rien à me reprocher! Je pense simplement qu’on ne devrait pas refaire les mêmes erreurs qu’avant la loi. Écoute-moi. Je te jure, il faut l’examiner. # character=FRED_GALLANT invisible

Boris: Tu veux qu’on ne tente pas de faire de l’argent? Si les joueurs ne peuvent pas se contrôler, ce n’est pas notre problème. # character=BORIS expression=disdain

Fred: Mais Boris, ça va le devenir. Ça donne des armes à la loi! Au gouvernement! Aux groupes qui sont contre un retour de la légalité! # character=FRED_GALLANT invisible

Boris: Ils ne vont pas gagner cette fois. # character=BORIS expression=sterness

Fred: Mais pour combien de temps? # character=FRED_GALLANT invisible

~jouer_musique(theme_choix_cruciaux)

* Fred décide de parler à Christopher pour connaître son avis à ce sujet et peut-être obtenir des informations sur les dépenses et le phénomène de dépendance.
~ points_fin_B1 += 4
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
Christopher: Ça fait longtemps qu’on t’a vu. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Oui, justement, je voulais te parler. J’ai eu des informations sur le jeu qui va sortir. Si je te parle de ça, c’est parce que je veux regagner ta confiance, mais aussi, c’est parce que je ne suis pas certaine qu’ils fassent le bon choix. # character=FRED_GALLANT invisible

Christopher: Oui, mais nous, ils ne nous disent rien. Ils veulent simplement qu’on monte une communauté de joueurs prêts à tester le jeu et à jouer lors de l’événement, en pro, comme dans le bon vieux temps. # character=CHRISTOPHER_YOUNG expression=desperation

Fred: Je sais, mais je suis inquiète à propos de la dépendance que pourrait causer le jeu. # character=FRED_GALLANT invisible 

Christopher: La dépendance? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Oui, il y a eu des cas dans le passé, non? C’est pas ce que dénonce John? # character=FRED_GALLANT invisible

Christopher: Oui, bon, mais il exagère. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Je ne sais pas, il faut être prudent. # character=FRED_GALLANT invisible

Christopher: Mais qu’est-ce que tu attends de moi? # character=CHRISTOPHER_YOUNG expression=wonder

Fred: Vous n’auriez pas une piste, des données sur les dépenses liées à certains anciens jeux qui causaient de la dépendance? # character=FRED_GALLANT invisible

Christopher: Non, je ne vois pas. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Bon. Je vais devoir trouver d’autres moyens. Tu me donneras les rapports des testeurs? # character=FRED_GALLANT invisible

Christopher: Ils n’ont pas encore commencé, on n’a pas vu le jeu! # character=CHRISTOPHER_YOUNG expression=wtf

Fred: Bon, alors, lorsque vous l’aurez? # character=FRED_GALLANT invisible

Christopher: Est-ce que c’est à leur insu? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Non, bien sûr que non. Je leur ai parlé. # character=FRED_GALLANT invisible

* Fred repense à Al, l’ancien dépendant interné… Mais elle est convaincue qu’il s’agit d’un cas isolé et qu’il n’est pas de la responsabilité des concepteurs de s’assurer que leur jeu n’entraîne pas de dépendances. Elle laisse tomber cette partie de l’enquête. 
~ points_fin_B2 += 4
- -> scene_3

=scene_3
~afficher_fond(bureau_fred)
~jouer_musique(theme_choix_cruciaux)

* <b>Fred</b> regrette sa décision et décide d’examiner encore quelques éléments du jeu avant de clore l’affaire. 
~points_fin_A2 += 4
[BUREAU DE FRED]
[Thème général]
Fred travaille sur des dossiers en lien avec la dépendance aux jeux vidéo. Ses inquiétudes sont confirmées. Avec le rapport de jeu de l’équipe de Christopher, plusieurs éléments du jeu peuvent mener à la dépendance. 
Rapport de l’équipe de Christopher.
[Thème quiz]
1- Le jeu de la résistance comprend des éléments problématiques du point de vue de la dépendance, mais lesquels en particulier ? 
-	Le jeu est entièrement gratuit.
-	Les joueurs peuvent personnaliser leur avatar. 
-	Des offres d’achat adaptées à chaque joueur en fonction de ses habitudes de jeu sont faites chaque jour.
-	Des graphismes jamais vus grâce à un moteur graphique révolutionnaire. 
-	Un système de récompenses aléatoire auquel tous les joueurs ont accès. 
-	Aucun de ces éléments

Rétroaction : 

La personnalisation des offres dans les jeux gratuits ou payants était très courante. Elle permettait de fortement encourager les joueurs à dépenser de l’argent. Avant la Loi Game Over, les développeurs avaient de plus en plus tendance à utiliser cette technique pour maximiser leurs profits. Il est très problématique de trouver cet élément dans le jeu de la résistance. Des critiques pourraient être formulées à l’égard du jeu. 

2- Et que penser de ces autres éléments, peuvent-ils être problématiques du point de vue de la dépendance aux jeux vidéo ? 
-	Un jeu sans fin avec des environnements générés aléatoirement.
-	Un gameplay très facile d’accès, mais aussi très profond pour les joueurs les plus perfectionnistes. 
-	Une limite de temps de jeu journalier, sans quoi le joueur perd des ressources. 
-	La possibilité d’acheter des bonus afin d’augmenter son niveau. 
-	Aucune de ces propositions

Rétroaction : Certains jeux permettaient aux joueurs de payer pour obtenir des bonus leur conférant un avantage sur les autres. Pour certains joueurs, cette possibilité pouvait les encourager à dépenser beaucoup d’argent pour obtenir de meilleurs résultats. Il est problématique de trouver cet élément dans le jeu de la résistance. Des critiques pourraient être formulées à l’égard du jeu en raison de sa présence. 

Fred téléphone à Teacher.

Fred, au téléphone: Salut. Tu as une minute? # character=FRED_GALLANT invisible

Teacher, au téléphone [neutral]
Qu’est-ce qu’il y a?

Fred, au téléphone: Je pense que vous ne devriez pas aller de l’avant avec le jeu tel qu’il est. # character=FRED_GALLANT invisible

Teacher, au téléphone [surprise]
Pourquoi?

Fred, au téléphone: Parce qu’il comporte des éléments qui ont été identifiés comme pouvant causer de la dépendance chez les joueurs. # character=FRED_GALLANT invisible

Teacher, au téléphone [wtf]
Mais pourquoi ça devrait nous préoccuper?

Fred, au téléphone: Je l’ai expliqué à plusieurs reprises déjà : si vous n’êtes pas prêts à affronter les critiques, comment pensez-vous convaincre les gens qui ont des réticences à cause de la dépendance au jeu si vous forcez sur le marché un jeu qui crée des dépendances? # character=FRED_GALLANT invisible

Teacher, au téléphone [anxiety]
Qu’est-ce que tu suggères?

Fred, au téléphone: Écoute : il faut que vous diminuiez la qualité en quelque sorte. Les jeux qui ont un univers qui n’a pas de fin, des mondes qui se génèrent à l’infini, c’est risqué. Le gameplay est trop raffiné aussi. Les gens perfectionnistes peuvent s’y perdre. Il est simple, mais s’améliorer est aussi sans fin…les bonus, les systèmes de récompenses. Vous avez tout prévu! C’est vraiment intense! # character=FRED_GALLANT invisible

Teacher, au téléphone [concern]
Il faut enlever tout ça?

Fred, au téléphone: Il faut diminuer les risques de dépendance et surtout, montrer que vous comprenez les risques, qu’ils ont été étudiés, mesurés. Que vous êtes responsables et que les erreurs du passé ne seront pas répétées. # character=FRED_GALLANT invisible

Fred, au téléphone: Ça me surprendrait énormément que vous puissiez remettre les jeux vidéo sur la carte de la légalité sans montrer pattes blanches. Il faut remédier aux problèmes qui étaient déjà connus avant la loi. Il faut gagner la confiance des gens qui craignent que leurs enfants sombrent dans le jeu. # character=FRED_GALLANT invisible

Teacher, au téléphone [neutral]
Je te rappelle.

[BLACKOUT]
[Thème narrateur]

Narrateur
Cette fois, Fred a perdu le contrôle. Voici un choix devant lequel vous êtes seuls. 

SOUS CHOIX DU CHOIX 4-A
1-	La résistance va écouter les recommandations de Fred et diminuer les risques de dépendance du jeu. 1 POINT FIN 3
2-	La résistance va ignorer les recommandations de Fred. 1 POINT FIN 4

* <b>Fred</b> décide de parler de ses découvertes au <b>chef Miller</b>.
~points_fin_A1 += 4

[BUREAU DU CHEF MILLER]
[Thème général]

Fred: Chef, j’ai des informations à vous donner. # character=FRED_GALLANT invisible

Chef Miller [sterness]
Ce n’était pas dans votre rapport?

Fred: Non, je viens d’obtenir ces informations. # character=FRED_GALLANT invisible

Chef Miller [neutral]
Très bien, je vous écoute.

Fred: Voilà, j’ai entendu de la bouche d’une personne sûre qu’il se prépare quelque chose à la résistance. # character=FRED_GALLANT invisible

Chef Miller [concern]
Quoi donc?

Fred: En fait, leur but est de provoquer le retour légal des jeux. # character=FRED_GALLANT invisible

Chef Miller [cruel]
Oui, ça, je savais.

Fred: Bon, et bien leur carte maîtresse est de rendre public un jeu gratuit, comme avant. # character=FRED_GALLANT invisible

Chef Miller [neutral]
En ligne?

Fred
Oui.

Chef Miller [concern]
Quand?

Fred
Je ne sais pas encore. Mais c’est dangereux.

Chef Miller [wtf]
Mais dites-moi quelque chose que je ne sais pas déjà, Gallant!

Fred: Ils ont conçu un jeu qui est extrêmement addictif. # character=FRED_GALLANT invisible

Chef Miller [neutral]
Et puis?

Fred: Eh bien, même s’ils réussissent leur coup, il ne serait pas très difficile de faire pencher l’opinion publique de notre côté. Le jeu est mauvais, néfaste. Vous voyez? # character=FRED_GALLANT invisible

Chef Miller [satisfaction]
Si, je pense que je vois où vous voulez en venir. Merci Gallant, j’appelle l’attaché politique du premier ministre. Allez donc explorer davantage ces questions de dépendance à propos du jeu de la résistance.

[BUREAU DE FRED]
[Thème général]
Fred travaille sur des dossiers en lien avec la dépendance aux jeux vidéo. Ses inquiétudes sont confirmées. Avec le rapport de jeu de l’équipe de Christopher, plusieurs éléments du jeu peuvent mener à la dépendance. Fred téléphone à Teacher.

Rapport de l’équipe de Christopher.
Quiz

[Thème quiz]
1- Le jeu de la résistance comprend des éléments problématiques du point de vue de la dépendance, mais lesquels en particulier ? 
-	Le jeu est entièrement gratuit.
-	Les joueurs peuvent personnaliser leur avatar. 
-	Des offres d’achat adaptées à chaque joueur en fonction de ses habitudes de jeu sont faites chaque jour.
-	Des graphismes jamais vus grâce à un moteur graphique révolutionnaire. 
-	Un système de récompenses aléatoire auquel tous les joueurs ont accès. 
-	Aucun de ces éléments

Rétroaction : 

La personnalisation des offres dans les jeux gratuits ou payants était très courante. Elle permettait de fortement encourager les joueurs à dépenser de l’argent. Avant la Loi Game Over, les développeurs avaient de plus en plus tendance à utiliser cette technique pour maximiser leurs profits. Il est très problématique de trouver cet élément dans le jeu de la résistance. Des critiques pourraient être formulées à l’égard du jeu. 

2- Et que penser de ces autres éléments, peuvent-ils être problématiques du point de vue de la dépendance aux jeux vidéo ? 
-	Un jeu sans fin avec des environnements générés aléatoirement.
-	Un gameplay très facile d’accès, mais aussi très profond pour les joueurs les plus perfectionnistes. 
-	Une limite de temps de jeu journalier, sans quoi le joueur perd des ressources. 
-	La possibilité d’acheter des bonus afin d’augmenter son niveau. 
-	Aucune de ces propositions

Rétroaction : Certains jeux permettaient aux joueurs de payer pour obtenir des bonus leur conférant un avantage sur les autres. Pour certains joueurs, cette possibilité pouvait les encourager à dépenser beaucoup d’argent pour obtenir de meilleurs résultats. Il est problématique de trouver cet élément dans le jeu de la résistance. Des critiques pourraient être formulées à l’égard du jeu en raison de sa présence. 

Fred, au téléphone
Salut. Tu as une minute?

Teacher, au téléphone [neutral]
Oui. Qu’est-ce qu’il y a?

Fred, au téléphone
Je pense que vous ne devriez pas aller de l’avant avec le jeu tel qu’il est.

Teacher, au téléphone [surprise]
Pourquoi?

Fred, au téléphone
Parce qu’il comporte des éléments qui ont été identifiés comme causant de la dépendance.

Teacher, au téléphone [wtf]
Mais pourquoi ça devrait nous préoccuper?

Fred, au téléphone
Je l’ai expliqué à plusieurs reprises déjà : si vous n’êtes pas prêts à affronter les critiques, comment pensez-vous convaincre les gens qui ont des réticences à cause de la dépendance au jeu si vous forcez sur le marché un jeu qui crée des dépendances?

Teacher, au téléphone [anxiety]
Qu’est-ce que tu suggères?

Fred, au téléphone
Écoute : il faut que vous diminuiez la qualité en quelque sorte. Les jeux qui ont un univers qui n’a pas de fin, des mondes qui se génèrent à l’infini, c’est risqué. Le gameplay est trop raffiné aussi. Les gens perfectionnistes peuvent s’y perdre. Il est simple, mais s’améliorer est aussi sans fin…les bonus, les systèmes de récompenses. Vous avez tout prévu! C’est vraiment intense!

Teacher, au téléphone [concern]
Il faut enlever tout ça?

Fred, au téléphone
Il faut diminuer les risques de dépendance et surtout, montrer que vous comprenez les risques, qu’ils ont été étudiés, mesurés. Que vous êtes responsables et que les erreurs du passé ne seront pas répétées. 

Fred, au téléphone
Ça me surprendrait énormément que vous puissiez remettre les jeux vidéo sur la carte de la légalité sans montrer patte blanche. Il faut remédier aux problèmes qui étaient déjà connus avant la loi. Il faut gagner la confiance des gens qui craignent que leurs enfants sombrent dans le jeu.

Teacher, au téléphone [neutral]
Je te rappelle.

[BLACKOUT]
[Thème narrateur]

Narrateur
Cette fois, Fred a perdu le contrôle. Voici un choix devant lequel vous êtes seuls. 

SOUS CHOIX DU CHOIX 4-B
1-	La résistance va écouter les recommandations de Fred et diminuer les risques de dépendances du jeu. 1 POINT FIN 3
2-	La résistance va ignorer les recommandations de Fred. 1 POINT FIN 4

- Fred se réveille de sa torpeur


[5567 RUE FLEMMING]
[Thème général]
Teacher [joy]
On est prêt du but.

Boris: Tout est en place, on va y arriver. Mais on a besoin d’une dernière chose. # character=BORIS expression=satisfaction

Fred
Comment je peux vous être utile?

Boris: Il faut classer le jeu. # character=BORIS expression=neutral

Fred
Ah oui? Vous tenez à le faire?

Boris: Oui, c’est une directive qui vient d’en haut. Ils ont aimé tes dernières interventions. On te confie cette mission. Mais ne nous déçois plus. # character=BORIS expression=sterness

Fred
Je suis contente que vous le fassiez.

Boris: C’est toi qui vas le faire. # character=BORIS expression=satisfaction

Fred
Très bien, je vais avoir besoin d’informations.

Teacher [neutral]
Oui, je suis affecté à t’aider. De quoi auras-tu besoin?

Fred
Il me faut des informations sur le jeu. Des informations très précises. 

Fred
Et aussi…

Teacher [concern]
Oui?

Fred
J’ai besoin d’assistance. Je peux contacter quelqu’un?

Teacher [sterness]
C’est secret tout ça. Tu le sais. Qui veux-tu impliquer?

Fred
Une ancienne employée de l’ESRB…

[BLACKOUT]
[Thème narrateur]

Narrateur
À vous de prendre les commandes. Croyez-vous que Fred devrait consulter quelqu’un? La laisserez-vous se débrouiller seule? 

[Thème choix cruciaux]
CHOIX 5 DU CHAPITRE 5

5- A 1 POINT FIN 3
Fred réussit à convaincre Teacher et Boris de consulter Olivia Paul. 

5-B 2 POINTS FIN 2
La résistance n’accepte pas que Fred consulte une professionnelle de la classification, ils trouvent cela trop risqué. Fred devra se débrouiller seule.

5-C 1 POINT FIN 4
La résistance fait comprendre à Fred qu’il s’agit d’une simple formalité et qu’ils ne s’attendent pas à ce que la classification soit infaillible. Inutile de consulter quelqu’un. 

SUITE DU CHOIX 5 DU CHAPITRE 5
5-A
Boris: C’est une personne de confiance? # character=BORIS expression=concern

Fred
Oui, j’ai confiance en elle. Et elle connaît vraiment son métier. Elle serait un atout important pour nous. Elle voulait justement militer pour que la classification soit moins… arbitraire. Elle va nous faire gagner des points pour l’opinion publique.

Teacher [amusement]
Tu es sûre que tu n’es pas conseillère en communication stratégique, toi? Hahaha!

Fred
Très certaine.

Boris: Bon, c’est d’accord, mais tu lui en dis le moins possible. # character=BORIS expression=sterness

Fred
Bien entendu.

5-B
Boris: Je veux bien croire que tu nous proposes cela de bonne foi et que tu penses vraiment que tu as besoin de son expertise, mais c’est trop risqué. Fais-toi confiance, Fred. On croit que tu vas y arriver. # character=BORIS expression=amusement

Fred
Je vais faire de mon mieux, mais je ne suis pas une experte dans ce domaine.

Teacher [satisfaction]
C’est une occasion d’apprendre.

5-C
Boris: Écoute Fred, j’aime ton enthousiasme, mais vraiment, non. Tu fais comme tu penses et ça va aller. Nous, ce qu’on te demande, c’est juste que ça soit fait, qu’il y ait quelque chose de proposé. On veut montrer qu’on y a pensé et qu’on agit respectueusement envers le public. Tu comprends? # character=BORIS expression=sterness

Fred
Oui, alors, pourquoi ne pas le faire vraiment?

Teacher [sterness]
C’est dans tes mains. Mais toi seule, compris?

Fred
Oui, compris.

SUITE 2 DU CHOIX 5-B et 5-C

[MAISON D’OLIVIA PAUL - EXTÉRIEUR]
[Thème général]

[BLACKOUT] 
[Thème narrateur]

Narrateur
Eh oui! Je vous avais prévenu! Fred n’en fait qu’à sa tête. Si elle perd la confiance des personnes qui lui ont demandé cette classification, je crains qu’elle ne puisse plus continuer sa mission, une fois pour toutes. Soyez donc discrets!

Fred se réveille de sa torpeur au moment où Olivia Paul ouvre la porte. 

[MAISON D’OLIVIA PAUL - EXTÉRIEUR]

RETOUR À L’INTRIGUE POUR TOUS LES CHOIX

[MAISON D’OLIVIA PAUL - INTÉRIEUR] 
[Thème général]

Fred
Je suis vraiment désolée de vous déranger à nouveau.

Olivia Paul [surprise]
J’avoue que votre appel m’a passablement surprise. Vous m’excuserez, la maison est bien vide maintenant. Vous m’avez attrapée à la dernière minute. 

Fred
J’ai de la chance. Madame Paul, j’ai besoin de votre aide.

Olivia Paul [wonder]
À quel sujet?

Fred
Je dois classer un jeu.

Olivia Paul [alertness]
Mais… quel jeu? Vous trafiquez des jeux illégaux? Je croyais que…

Fred
Non, je ne peux pas vous donner tous les détails, mais le jeu sera légal. C’est, disons, de la désobéissance civile pour le moment, mais le jeu sera légal ou ne sera pas. Il faut se préparer.

Olivia Paul [sterness]
Je n’ai nullement l’intention de m’impliquer dans ce projet.

Fred
Je ne vous le demande pas. Je veux juste votre avis…officieusement. 

Olivia Paul [alertness]
À propos de quoi?

Fred
Voilà : j’ai en ma possession un questionnaire qui comprend une description du jeu, une vidéo de présentation d’éléments du jeu et maintenant, je dois le tester.

Olivia Paul [neutral]
Vous avez une version beta du jeu?

Fred
Exactement.

Olivia Paul [sterness]
D’accord. Mais je ne veux pas que mon nom figure où que ce soit.

Fred
C’est compréhensible. Je vous le confirme. Il n’apparaîtra pas.

Accès à :
-	Documents décrivant des systèmes de jeu et une partie de son contenu.
-	Une vidéo de présentation d’éléments du jeu (cut-scènes)
Quiz

Olivia Paul et Fred jouent un peu au prototype du jeu que la résistance a préparé pour le grand événement. 

Olivia Paul [disdain]
Écoutez Fred, voici mes recommandations. Ce jeu contient du sang, de l’alcool, de la violence, de l’humour cru, un langage offensant et des simulations de jeux de hasard. La liste est longue! C’est du 16 ans et plus. Êtes-vous bien certain de vouloir utiliser ce jeu pour le retour de la légalité, ça me paraît très risqué. Je veux dire, comment rallier l’opinion publique avec un pareil contenu?

Fred
Je suis d’accord avec vous Olivia. Je vous remercie de votre aide. Je vais faire mes recommandations aux décideurs. J’espère qu’ils comprendront les enjeux.

Olivia Paul [neutral]
Je ne tiens pas à ce que les jeux vidéo reviennent, je ne retournerai jamais travailler pour l’ESRB, mais je vous aime bien, vous. J’espère que vous réussirez à atteindre vos objectifs, quels qu’ils soient!

Fred
Merci encore Olivia. Je vous revaudrai cela.

[Thème choix cruciaux]

CHOIX 6 DU CHAPITRE 5
6-A 1 POINT FIN 3
Fred décide de suivre les recommandations d’Olivia Paul.

6-B 1 POINT FIN 4
Fred décide de voir ce que la résistance a en tête avant de faire ses recommandations.

6-C 3 POINTS FIN 2
Fred propose un compromis.  

SUITE DU CHOIX 6 DU CHAPITRE 5
6-A
[5567 RUE FLEMMING]
[Thème général]
Teacher [concern]
Eh bien? Qu’en dis-tu finalement?

Fred
Je sais que vous ne serez pas contents, mais il faut absolument que vous fassiez le bon choix aujourd’hui. De cela dépend le retour de la légalité à mon avis.

Teacher [wtf]
Explique-toi!

Fred
Le jeu devrait être classé 16 ans et plus. Il faut aussi être honnête et prévenir le public qu’il contient des éléments qui peuvent choquer.

Teacher [aversion]
Aussi bien dire qu’on leur donne raison! Aussi bien oublier le projet!

Fred
Non, écoute. J’ai réfléchi. Si on sort ce jeu en étant honnête et transparent, on va gagner des points. Pourquoi ne pas demander à Christian et Jonathan de concevoir un autre jeu qui serait pour tous et disponible en même temps? On pourrait l’offrir en alternative pour ceux qui ne veulent pas du contenu violent et sanglant. 

Fred
On montrerait notre bonne volonté et on prouverait qu’il est possible de jouer sans les risques, et que, quand il y a des risques, on exerce quand même un contrôle.

Teacher [satsifaction]
Ouais… ce n’est pas fou. Je vais plaider ta cause auprès des patrons. Tu t’en es bien sortie sur ce coup, Fred.

6-B
Teacher [concern]
Eh bien? Qu’en dis-tu finalement?

Fred
Je ne sais trop quoi recommander.

Teacher [wtf]
Explique-toi!

Fred
Il y a des éléments qui pourraient être jugés inopportuns.

Teacher [concern]
Quel âge tu recommandes? 

Fred
Quel âge, crois-tu, conviendrait à l’événement?

Teacher [sterness]
Pas trop restrictif, c’est certain.

Fred
C’est ce que je craignais.

Teacher [surprise]
Pourquoi?

Fred
Parce qu’il y a des éléments, je te dis, des éléments qui demandent une classification adéquate, mais je comprends que c’est délicat de sortir un jeu 16 ans et plus quand on veut vendre l’idée du retour de la légalité.

Teacher [sterness]
Non, 16 ans et plus, c’est trop. 

Fred
Je sais.

Teacher [disdain]
Bon. Je vais en parler aux patrons. Mais je pense qu’on va tout simplement laisser tomber l’idée.

Fred
Ça me semble trop risqué.

Teacher [sterness]
Laisse-les en juger, si tu veux bien.

Fred
Peut-être que Christian et Jonathan pourraient revoir au moins la simulation de jeux de hasard? Ça aiderait la cause je pense.

Teacher [sterness]
Merci pour tes recommandations Fred, mais je vais régler ça.

Fred
Comme tu veux.

6-C
Teacher [concern]
Eh bien? Qu’en dis-tu finalement?

Fred
J’ai le mandat difficile de t’informer que le jeu comporte plusieurs éléments qui exigent qu’on les mentionne. 

Teacher [concern]
Ce qui veut dire?

Fred
Il devrait être classé 16 ans et plus. 

Teacher [disdain]
Tu veux rire!

Fred
Non, malheureusement.

Teacher [dejection]
Il n’en est pas question!

Fred
Je sais. Puis-je te proposer une solution?

Teacher [sterness]
Laquelle?

Fred
Si Christian et Jonathan retiraient quelques éléments comme la simulation de jeux de hasard et le langage offensant, par exemple, je pense qu’on pourrait risquer le 13 ans et plus.

Teacher [wtf]
13 ans… mais tu sais que tu nous en demandes beaucoup? Il va falloir revoir beaucoup de choses!

Fred
Je sais, mais je ne comprends pas comment vous avez pu laisser passer ça!

Teacher [disdain]
C’est un jeu vidéo, pas un conte pour enfants.

Fred
Oui, mais le jeu qui doit être à l’origine du retour de la légalité ne peut pas contenir tous les défauts qu’on reproche aux jeux vidéo!

Teacher [dejection]
On ne voulait pas céder sur ce chantage! On voulait faire une déclaration claire. On est contre la censure.

Fred
Je comprends. Mais si au moins il n’y avait pas de jeux de hasard, ce serait peut-être moins difficile à retirer et moins risqué pour la suite.

Teacher [neutral]
Je vais faire part de tes recommandations aux patrons.

[530 RUE MCLEOD]
[Thème général]
Tom, Christopher et Fred sont ensemble. 

Christopher [joy]
Oui! Je viens de recevoir le go!

Fred
Le go pour?

Christopher [satisfaction]
Il semble que tu as été bien utile. J’ai entendu parler de ce que tu as fait.

Fred
Je fais de mon mieux.

Christopher [joy]
Ce soir, on célèbre!

Fred
Qu’est-ce qu’on célèbre?

Christopher [joy]
On est mandaté pour mettre sur pied l’événement sur la plateforme qu’on prépare depuis des mois : Only Gamers!!

Tom [concern]
Tu es certain qu’on peut lui dire?

Christopher [satisfaction]
Oui! Elle est approuvée par l’autre faction!

Tom [neutral]
Si tu le dis!

Fred
C’est quoi cette plateforme?

Christopher [satisfaction]
C’est celle dont on va se servir pour diffuser le jeu le moment venu!

Fred
Et quel est le moment venu?

Christopher [amusement]
Ah ça! Top secret! Je ne le sais même pas moi-même. Moi, mon rôle, c’est de m’assurer que la plateforme soit prête.

Tom [satisfaction]
Et recruter des joueurs pros!

Christopher [satisfaction]
Oui, ça, j’y arrive!

GROS TITRES
[NEWS ROOM]
[Thème news]

FIN 1 :
La tension monte : des fuites indiquent qu’une organisation tente un retour des jeux vidéo sur le marché légal

Interdire, surveiller et punir, l’héritage de Foucault et les jeux vidéo

Les jeux vidéo redeviendront-ils légaux? Assisterons-nous au retour des dépendances à la violence et au jeu?

FIN 2 : 
Y a-t-il un retour possible des jeux vidéo? Ce qu’en disent les experts.

Jeux vidéo : un assouplissement de la loi est-il envisageable?

Scandale! Les jeux vidéo seraient bientôt de retour sur le marché!

FIN 3 :
Une réconciliation est-elle possible? Les jeux vidéo et leur retour triomphant

Un contrôle raisonnable des jeux vidéo est-il possible? Un avenir ouvert pour des jeunes responsables

« Nos enfants ne comptent-ils plus? » Le cri déchirant d’une mère devant les rumeurs du retour des jeux vidéo.

FIN 4 :
Les débordements sont inévitables : la population préoccupée par les rumeurs du retour des jeux vidéo

Du pain et des jeux : quelle issue pour l’humanité ?

Dossier choc : les adeptes de jeux vidéo encore actifs malgré l’interdiction!




->fin