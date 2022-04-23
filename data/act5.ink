=== chapitre_5 ===

=scene_1
~ afficher_fond(transition_5)
<center><titre>Chapitre 5</titre></center><br/><center>À l'épreuve de la confiance</center> # transition
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)

<b>Fred</b> rend visite à <b>Vivian</b>.
~ afficher_fond(blackout)
~jouer_musique(theme_narrateur)

Narrateur: Fred est en train de perdre la confiance de ses collaborateurs de tous les côtés. Elle va devoir arriver avec une bonne idée pour leur faire oublier les mauvaises… Rappelez-lui le jeu qu’elle a acheté à Christopher. Christopher avait mentionné qu’elle pouvait moder le jeu… Skyrim. Vous savez, ces modifications faites par des fans pour transformer un jeu existant? Les mods de jeu… c’est une clé, agent Gallant. Faites vos preuves maintenant! # character=NARRATEUR invisible
~arreter_musique()
<b>Fred</b> se réveille de sa torpeur.
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)

Fred, à elle-même: Les mods de jeux! Bien sûr! # character=FRED_GALLANT invisible

Fred, à elle-même: Il faudrait quand même que je pense à consulter sur ces moments d’absences… # character=FRED_GALLANT invisible

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

Vivian: Laquelle? # character=VIVIAN expression=disdain

Fred: Concernant l’événement. # character=FRED_GALLANT invisible

Vivian: Qu’est-ce que tu sais à propos de l’événement? # character=VIVIAN expression=alertness

*<b>Fred</b> décide de rester prudente sur ce qu’elle va répondre.

Fred: Je sais qu’ils planifient un événement pour convaincre le public que les jeux ne devraient pas rester illégaux. # character=FRED_GALLANT invisible

Vivian: D’accord, Sherlock. # character=VIVIAN expression=amusement

*<b>Fred</b> demeure très vague sur ce qu’elle sait. Elle se méfie.

 Fred: Rien, personne ne semble me faire confiance. # character=FRED_GALLANT invisible

Vivian: Il y a certainement une raison à cela. # character=VIVIAN expression=disdain

*<b>Fred</b> explique ce qu’elle sait.

Fred: Je sais qu’ils planifient un événement pour convaincre le public que les jeux ne devraient pas rester illégaux. # character=FRED_GALLANT invisible

Vivian: D’accord, Sherlock. # character=VIVIAN expression=amusement

Fred: Je ne blague pas. Je connais le jeu qui sera utilisé pour le lancement. # character=FRED_GALLANT invisible

- Vivian: C’est quoi ta question au juste? # character=VIVIAN expression=sterness

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
~ demarrer_quiz(QUIZ_5_1, 16)
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
+  (5_1_3_a) [BON--{5_1_3_a: VISITE--}Oui] Oui
Les jeux vidéo dont on ne connaissait pas les auteurs étaient tout de même protégés durant 75 ans après leur création selon l’article 6.1. (1) de la Loi sur le droit d’auteur.  # retroaction
-> quiz_5_1_question_4
+  (5_1_3_b) [{5_1_3_b: VISITE--}Non] Non
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
 +  (5_1_4_e) [{5_1_4_e: VISITE--}Aucune de ces propositions] Aucune de ces propositions
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

= quiz_5_1_question_6
~afficher_document(LICENCE_JEU_VIDEO)
// Description du document: Une licence de jeu vidéo! Une véritable relique de l’époque. Voyons voir ce qu’elle peut nous apprendre sur un éventuel droit de modification d’un jeu vidéo par les joueurs.
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

= quiz_5_1_question_8
~afficher_document(MOD_COUNTER_STRIKE)
// Description document: La créativité de certains joueurs était tout bonnement extraordinaire! Certains mods de jeu créés par des passionnés sont devenus des jeux à part entière…
8- Lequel de ces jeux n'était pas à l'origine un mod créé par des joueurs passionnés? # question index=8
+   (5_1_8_a) [{5_1_8_a: VISITE--}Counter-Strike] Counter-Strike
+   (5_1_8_b) [{5_1_8_b: VISITE--}DOTA] DOTA
+   (5_1_8_c) [BON--{5_1_8_c: VISITE--}Grand Theft Auto] Grand Theft Auto
  Selon les archives d’époque, les jeux Counter-Strike et DOTA étaient des créations de moddeurs. Les joueurs ont donc utilisé les outils fournis avec le jeu leur permettant de le modifier pour créer du contenu original. Ces « mods » sont devenus des jeux vidéo très prisés des joueurs. # retroaction
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

= quiz_5_1_question_10
~afficher_document(MOD_DOTA)
// Description document: Il y a donc eu plusieurs mods qui sont devenus des succès commerciaux. Mais cela n’a pas été sans parfois entraîner des tensions et des litiges juridiques comme avec Dota. Je devrais tirer cela au clair.
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
11- Les droits sur le jeu DOTA a été cédé par des droits à des studios de jeux vidéo # question index=11
+  (5_1_11_a) [BON--{5_1_11_a: VISITE--}Vrai] Vrai
Il s'agit de la bonne réponse # retroaction
-> quiz_5_1_question_12
+  (5_1_11_b) [{5_1_11_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_11

= quiz_5_1_question_12
12- Le jeu DOTA a été centre d’une bataille juridique entre : # question index=12
+   (5_1_12_a) [{5_1_12_a: VISITE--}Un joueur et Valve] Un joueur et Valve
+   (5_1_12_b) [BON--{5_1_12_b: VISITE--}Valve et Blizzard] Valve et Blizzard
   Il s'agit de la bonne réponse # retroaction
   -> quiz_5_1_question_13
+   (5_1_12_c) [{5_1_12_c: VISITE--}Valve et Riot Games] Valve et Riot Games
 +  (5_1_12_d) [{5_1_12_d: VISITE--}Un joueur et Blizzard] Un joueur et Blizzard
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_12

= quiz_5_1_question_13
~afficher_document(LICENSES_NORMES_INDUSTRIE)
//Description document: Quelle chance d’avoir retrouvé ces reliques d’avant l’interdiction des jeux vidéo! Je vais pouvoir déterminer l’attitude de ces acteurs du milieu des jeux vidéo vis-à-vis des mods créés par les fans.
13- Quel éditeur permettait la modification de ses productions (voir les pages 1,4, 6 et 15)? # question index=13
+   (5_1_13_a) [BON--{(5_1_13_a % 2 == 1):ACTIF--}Blizzard] Blizzard
+   (5_1_13_b) [BON--{(5_1_13_b % 2 == 1):ACTIF--}Bethesda] Bethesda
+   (5_1_13_c) [{(5_1_13_c % 2 == 1):ACTIF--}Nintendo] Nintendo
+   (5_1_13_d) [{(5_1_13_d % 2 == 1):ACTIF--}Aucune de ces propositions.] Aucune de ces propositions.
+   { 5_1_13_a || 5_1_13_b || 5_1_13_c || 5_1_13_d } CACHER--Continuer
    // % ici veut dire modulo. Si modulo 2 retourne 1, ça veut dire que le
    // nombre de sélections du choix est un nombre impaire 1, 3, 5, 7,...
    // donc logiquement, le choix est sélectionné (Ou reselectioner s'il a été
    // déselectionné.
	{ (5_1_13_a % 2 == 1 && 5_1_13_b % 2 == 1 && 5_1_13_c % 2 == 0 && 5_1_13_d % 2 == 0):
Selon les archives d’époque, Blizzard et Bethesda sont deux des éditeurs de jeux vidéo qui permettaient la modification de leurs productions. Nintendo était une compagnie très opposée à la modification de ses jeux. Il s’agissait peut-être d’une manière de contrôler son image. # retroaction
    	-> quiz_5_1_question_14
    - else:
    	~ generer_mauvaise_reponse_retroaction()
        -> quiz_5_1_question_13
    }
- -> quiz_5_1_question_13

= quiz_5_1_question_14
14- Mais alors, était-il possible dans certains cas de générer des revenus avec des mods de jeux (voir les pages 6 et 15)? # question index=14
+  (5_1_14_a) [BON--{5_1_14_a: VISITE--}Oui] Oui
Selon la licence de l’éditeur Blizzard, il n’était pas possible (sauf accord préalable et écrit de la part de Blizzard) de générer des revenus avec les mods de jeux (voir section 1, D, i, 4). Selon la licence de l’éditeur Bethesda, qui proposait un éditeur de contenu aux joueurs, ces derniers ne pouvaient pas en principe distribuer commercialement leurs créations sans le consentement de Bethesda. Elles devaient être proposées sans frais (voir l’article 1). Cependant la licence prévoyait une exception à l’article 5. Les créateurs pouvaient proposer, contre rétribution, leurs créations sur le Steam Workshop. # retroaction
-> quiz_5_1_question_15
+  (5_1_14_b) [{5_1_14_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_14

= quiz_5_1_question_15
15- À qui appartenaient les créations des joueurs selon Bethesda? # question index=15
+   (5_1_15_a) [{5_1_15_a: VISITE--}Au joueur-créateur] Au joueur-créateur
+   (5_1_15_b) [{5_1_15_b: VISITE--}À Bethesda] À Bethesda
+   (5_1_15_c) [BON--{5_1_15_c: VISITE--}Elle est partagée entre l’éditeur et le joueur-créateur] Elle est partagée entre l’éditeur et le joueur-créateur
Selon la licence de Bethesda, le nouveau matériel créé par les joueurs semblait rester la propriété de ces derniers, mais ça n’est pas clairement précisé. Nous pouvons le déduire, car dès lors que les créateurs décidaient de distribuer leurs créations, ils octroyaient automatiquement une licence d’exploitation très large (comportant notamment le droit de modifier, reproduire ou encore adapter les créations) à Bethesda (voir l’article 1). # retroaction
-> quiz_5_1_question_16
 +  (5_1_15_d) [{5_1_15_d: VISITE--}Elles n’appartiennent à personne] Elles n’appartiennent à personne
 +  (5_1_15_e) [{5_1_15_e: VISITE--}Aucune de ces propositions]
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_15

= quiz_5_1_question_16
16- À qui appartenaient les créations des joueurs selon Blizzard? # question index=16
+   (5_1_16_a) [{5_1_16_a: VISITE--}Au joueur-créateur] Au joueur-créateur
+   (5_1_16_b) [BON--{5_1_16_b: VISITE--}À Blizzard] À Blizzard
Selon la licence de Blizzard, ce dernier conservait la propriété sur les créations des joueurs produites au moyen des outils mis à la disposition par l’éditeur (voir section 2, A). On dirait que Blizzard souhaitait se prémunir contre un cas comme Dota, développé par des joueurs et qui a échappé à Blizzard dans une certaine mesure. # retroaction
   -> quiz_5_1_fin
+   (5_1_16_c) [{5_1_16_c: VISITE--}Elle est partagée entre l’éditeur et le joueur-créateur] Elle est partagée entre l’éditeur et le joueur-créateur
 +  (5_1_16_d) [{5_1_16_d: VISITE--}Elles n’appartiennent à personne] Elles n’appartiennent à personne
 +  (5_1_16_e) [{5_1_16_e: VISITE--}Aucune de ces propositions]
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_1_question_16

= quiz_5_1_fin
~terminer_quiz()
~ afficher_fond(blackout)
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
~cacher_tout_personnages()

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
~cacher_tout_personnages()

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
~cacher_tout_personnages()

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
~cacher_tout_personnages()
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
~cacher_tout_personnages()

* Fred repense à Al, l’ancien dépendant interné… Mais elle est convaincue qu’il s’agit d’un cas isolé et qu’il n’est pas de la responsabilité des concepteurs de s’assurer que leur jeu n’entraîne pas de dépendances. Elle laisse tomber cette partie de l’enquête.
~ points_fin_B2 += 4
- -> scene_3

=scene_3
~afficher_fond(bureau_fred)
~jouer_musique(theme_choix_cruciaux)
<b>Fred doit décider quelle sera la prochaine étape de son enquête</b>.

* <b>Fred</b> regrette sa décision et décide d’examiner encore quelques éléments du jeu avant de clore l’affaire.
~points_fin_A2 += 4

~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
<b>Fred</b> travaille sur des dossiers en lien avec la dépendance aux jeux vidéo. Ses inquiétudes sont confirmées. Avec le rapport de jeu de l’équipe de <b>Christopher</b>, plusieurs éléments du jeu peuvent mener à la dépendance.
~ajouter_document(RAPPORT_CHRISTOPHER)

* <b>Fred</b> décide de parler de ses découvertes au <b>chef Miller</b>.
~points_fin_A1 += 4
~afficher_fond(bureau_chef_miller)
~jouer_musique(theme_general)
~afficher_personnage(CHEF_MILLER, "slideInUp")
Fred: Chef, j’ai des informations à vous donner. # character=FRED_GALLANT invisible

Chef Miller: Ce n’était pas dans votre rapport? # character=CHEF_MILLER expression=sterness

Fred: Non, je viens d’obtenir ces informations. # character=FRED_GALLANT invisible

Chef Miller: Très bien, je vous écoute. # character=CHEF_MILLER expression=neutral

Fred: Voilà, j’ai entendu de la bouche d’une personne sûre qu’il se prépare quelque chose à la résistance. # character=FRED_GALLANT invisible

Chef Miller: Quoi donc? # character=CHEF_MILLER expression=concern

Fred: En fait, leur but est de provoquer le retour légal des jeux. # character=FRED_GALLANT invisible

Chef Miller: Oui, ça, je savais. # character=CHEF_MILLER expression=cruel

Fred: Bon, et bien leur carte maîtresse est de rendre public un jeu gratuit, comme avant. # character=FRED_GALLANT invisible

Chef Miller: En ligne? # character=CHEF_MILLER expression=neutral

Fred: Oui. # character=FRED_GALLANT invisible

Chef Miller: Quand? # character=CHEF_MILLER expression=concern

Fred: Je ne sais pas encore. Mais c’est dangereux. # character=FRED_GALLANT invisible

Chef Miller: Mais dites-moi quelque chose que je ne sais pas déjà, Gallant! # character=CHEF_MILLER expression=wtf

Fred: Ils ont conçu un jeu qui est extrêmement addictif. # character=FRED_GALLANT invisible

Chef Miller: Et puis? # character=CHEF_MILLER expression=neutral

Fred: Eh bien, même s’ils réussissent leur coup, il ne serait pas très difficile de faire pencher l’opinion publique de notre côté. Le jeu est mauvais, néfaste. Vous voyez? # character=FRED_GALLANT invisible

Chef Miller: Si, je pense que je vois où vous voulez en venir. Merci Gallant, j’appelle l’attaché politique du premier ministre. Allez donc explorer davantage ces questions de dépendance à propos du jeu de la résistance. # character=CHEF_MILLER expression=satisfaction
~cacher_tout_personnages()
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
<b>Fred</b> travaille sur des dossiers en lien avec la dépendance aux jeux vidéo. Ses inquiétudes sont confirmées. Avec le rapport de jeu de l’équipe de <b>Christopher</b>, plusieurs éléments du jeu peuvent mener à la dépendance.
~ajouter_document(RAPPORT_CHRISTOPHER)
- -> act_5_quiz_2.quiz_5_2

= scene_3_suite
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)

<b>Fred</b> téléphone à <b>Teacher</b>.

Fred, au téléphone: Salut. Tu as une minute? # character=FRED_GALLANT invisible
~afficher_personnage(TEACHER_V2, "fadeIn")
Teacher, au téléphone: Qu’est-ce qu’il y a? # character=TEACHER_V2 expression=neutral phone

Fred, au téléphone: Je pense que vous ne devriez pas aller de l’avant avec le jeu tel qu’il est. # character=FRED_GALLANT invisible

Teacher, au téléphone: Pourquoi? # character=TEACHER_V2 expression=surprise phone

Fred, au téléphone: Parce qu’il comporte des éléments qui ont été identifiés comme pouvant causer de la dépendance chez les joueurs. # character=FRED_GALLANT invisible

Teacher, au téléphone: Mais pourquoi ça devrait nous préoccuper? # character=TEACHER_V2 expression=wtf phone

Fred, au téléphone: Je l’ai expliqué à plusieurs reprises déjà : si vous n’êtes pas prêts à affronter les critiques, comment pensez-vous convaincre les gens qui ont des réticences à cause de la dépendance au jeu si vous forcez sur le marché un jeu qui crée des dépendances? # character=FRED_GALLANT invisible

Teacher, au téléphone: Qu’est-ce que tu suggères? # character=TEACHER_V2 expression=anxiety phone

Fred, au téléphone: Écoute : il faut que vous diminuiez la qualité en quelque sorte. Les jeux qui ont un univers qui n’a pas de fin, des mondes qui se génèrent à l’infini, c’est risqué. Le gameplay est trop raffiné aussi. Les gens perfectionnistes peuvent s’y perdre. Il est simple, mais s’améliorer est aussi sans fin…les bonus, les systèmes de récompenses. Vous avez tout prévu! C’est vraiment intense! # character=FRED_GALLANT invisible

Teacher, au téléphone: Il faut enlever tout ça? # character=TEACHER_V2 expression=concern phone

Fred, au téléphone: Il faut diminuer les risques de dépendance et surtout, montrer que vous comprenez les risques, qu’ils ont été étudiés, mesurés. Que vous êtes responsables et que les erreurs du passé ne seront pas répétées. # character=FRED_GALLANT invisible

Fred, au téléphone: Ça me surprendrait énormément que vous puissiez remettre les jeux vidéo sur la carte de la légalité sans montrer pattes blanches. Il faut remédier aux problèmes qui étaient déjà connus avant la loi. Il faut gagner la confiance des gens qui craignent que leurs enfants sombrent dans le jeu. # character=FRED_GALLANT invisible

Teacher, au téléphone: Je te rappelle. # character=TEACHER_V2 expression=neutral phone

~cacher_tout_personnages()
~ afficher_fond(blackout)
~jouer_musique(theme_narrateur)

Narrateur: Cette fois, Fred a perdu le contrôle. Voici un choix devant lequel vous êtes seuls. # character=NARRATEUR invisible
~jouer_musique(theme_choix_cruciaux)
* La résistance va écouter les recommandations de <b>Fred</b> et diminuer les risques de dépendance du jeu.
~points_fin_B1 += 4
* La résistance va ignorer les recommandations de <b>Fred</b>.
~points_fin_B2 += 4
- <b>Fred</b> se réveille de sa torpeur
->scene_4

 =scene_4
~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInLeft")
~afficher_personnage(BORIS, "slideInRight")

Teacher: On est prêt du but. # character=TEACHER_V2 expression=joy

Boris: Tout est en place, on va y arriver. Mais on a besoin d’une dernière chose. # character=BORIS expression=satisfaction

Fred: Comment je peux vous être utile? # character=FRED_GALLANT invisible

Boris: Il faut classer le jeu. # character=BORIS expression=neutral

Fred: Ah oui? Vous tenez à le faire? # character=FRED_GALLANT invisible

Boris: Oui, c’est une directive qui vient d’en haut. Ils ont aimé tes dernières interventions. On te confie cette mission. Mais ne nous déçois plus. # character=BORIS expression=sterness

Fred: Je suis contente que vous le fassiez. # character=FRED_GALLANT invisible

Boris: C’est toi qui vas le faire. # character=BORIS expression=satisfaction

Fred: Très bien, je vais avoir besoin d’informations. # character=FRED_GALLANT invisible

Teacher: Oui, je suis affecté à t’aider. De quoi auras-tu besoin? # character=TEACHER_V2 expression=neutral

Fred: Il me faut des informations sur le jeu. Des informations très précises. # character=FRED_GALLANT invisible

Fred: Et aussi… # character=FRED_GALLANT invisible

Teacher: Oui? # character=TEACHER_V2 expression=concern

Fred: J’ai besoin d’assistance. Je peux contacter quelqu’un? # character=FRED_GALLANT invisible

Teacher: C’est secret tout ça. Tu le sais. Qui veux-tu impliquer? # character=TEACHER_V2 expression=sterness

Fred: Une ancienne employée de l’ESRB… # character=FRED_GALLANT invisible

~cacher_tout_personnages()
~ afficher_fond(blackout)
~jouer_musique(theme_narrateur)
Narrateur: À vous de prendre les commandes de la résistance. Croyez-vous que Fred devrait consulter quelqu’un? Ou devra-t-elle se débrouiller seule? # character=NARRATEUR invisible

~jouer_musique(theme_choix_cruciaux)
* <b>Teacher</b> et <b>Boris</b> décident de faire confiance à <b>Fred</b>. Elle ira consulter <b>Olivia Paul</b>.
~points_fin_B1 += 4
~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInLeft")
~afficher_personnage(BORIS, "slideInRight")

Boris: C’est une personne de confiance? # character=BORIS expression=concern

Fred: Oui, j’ai confiance en elle. Et elle connaît vraiment son métier. Elle serait un atout important pour nous. Elle voulait justement militer pour que la classification soit moins… arbitraire. Elle va nous faire gagner des points pour l’opinion publique. # character=FRED_GALLANT invisible

Teacher: Tu es sûre que tu n’es pas conseillère en communication stratégique, toi? Hahaha! # character=TEACHER_V2 expression=amusement

Fred: Très certaine. # character=FRED_GALLANT invisible

Boris: Bon, c’est d’accord, mais tu lui en dis le moins possible. # character=BORIS expression=sterness

Fred: Bien entendu. # character=FRED_GALLANT invisible
~cacher_tout_personnages()
-> scene_5

* <b>Teacher</b> et <b>Boris</b> n’acceptent pas que <b>Fred</b> consulte une professionnelle de la classification, ils trouvent cela trop risqué. <b>Fred</b> devra se débrouiller seule.
~points_fin_B1 += 1
~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInLeft")
~afficher_personnage(BORIS, "slideInRight")

Boris: Je veux bien croire que tu nous proposes cela de bonne foi et que tu penses vraiment que tu as besoin de son expertise, mais c’est trop risqué. Fais-toi confiance, Fred. On croit que tu vas y arriver. # character=BORIS expression=amusement

Fred: Je vais faire de mon mieux, mais je ne suis pas une experte dans ce domaine. # character=FRED_GALLANT invisible

Teacher: C’est une occasion d’apprendre. # character=TEACHER_V2 expression=satisfaction
~cacher_tout_personnages()
~afficher_fond(maison_olivia_exterieur)
~jouer_musique(theme_general)

<b>Fred</b> se rend à la maison d’<b>Olivia Paul</b>.
~ afficher_fond(blackout)
~jouer_musique(theme_narrateur)

Narrateur: Eh oui! Je vous avais prévenu! Fred n’en fait qu’à sa tête. Si elle perd la confiance des personnes qui lui ont demandé cette classification, je crains qu’elle ne puisse plus continuer sa mission, une fois pour toutes. Soyez donc discrets! # character=NARRATEUR invisible

<b>Fred</b> se réveille de sa torpeur au moment où <b>Olivia Paul</b> ouvre la porte.
-> scene_5

* <b>Teacher</b> et <b>Boris</b> font comprendre à <b>Fred</b> qu’il s’agit d’une simple formalité et qu’ils ne s’attendent pas à ce que la classification soit infaillible. Inutile de consulter quelqu’un.
~points_fin_B2 += 4
~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInLeft")
~afficher_personnage(BORIS, "slideInRight")

Boris: Écoute Fred, j’aime ton enthousiasme, mais vraiment, non. Tu fais comme tu penses et ça va aller. Nous, ce qu’on te demande, c’est juste que ça soit fait, qu’il y ait quelque chose de proposé. On veut montrer qu’on y a pensé et qu’on agit respectueusement envers le public. Tu comprends? # character=BORIS expression=sterness

Fred: Oui, alors, pourquoi ne pas le faire vraiment? # character=FRED_GALLANT invisible

Teacher: C’est dans tes mains. Mais toi seule, compris? # character=TEACHER_V2 expression=sterness

Fred: Oui, compris. # character=FRED_GALLANT invisible

~cacher_tout_personnages()
~afficher_fond(maison_olivia_exterieur)
~jouer_musique(theme_general)

<b>Fred</b> se rend à la maison d’<b>Olivia Paul</b>.
~ afficher_fond(blackout)
~jouer_musique(theme_narrateur)

Narrateur: Eh oui! Je vous avais prévenu! Fred n’en fait qu’à sa tête. Si elle perd la confiance des personnes qui lui ont demandé cette classification, je crains qu’elle ne puisse plus continuer sa mission, une fois pour toutes. Soyez donc discrets! # character=NARRATEUR invisible

<b>Fred</b> se réveille de sa torpeur au moment où <b>Olivia Paul</b> ouvre la porte.
-> scene_5

= scene_5
- ~afficher_fond(maison_olivia_exterieur)
~afficher_personnage(OLIVIA_PAUL, "fadeIn")
~jouer_musique(theme_general)
~cacher_tout_personnages()

~afficher_fond(maison_olivia_interieur)
~afficher_personnage(OLIVIA_PAUL, "slideInUp")
~jouer_musique(theme_general)

Fred: Je suis vraiment désolée de vous déranger à nouveau. # character=FRED_GALLANT invisible

Olivia Paul: J’avoue que votre appel m’a passablement surprise. Vous m’excuserez, la maison est bien vide maintenant. Vous m’avez attrapée à la dernière minute. # character=OLIVIA_PAUL expression=surprise

Fred: J’ai de la chance. Madame Paul, j’ai besoin de votre aide. # character=FRED_GALLANT invisible

Olivia Paul: À quel sujet? # character=OLIVIA_PAUL expression=wonder

Fred: Je dois classer un jeu. # character=FRED_GALLANT invisible

Olivia Paul: Mais… quel jeu? Vous trafiquez des jeux illégaux? Je croyais que… # character=OLIVIA_PAUL expression=alertness

Fred: Non, je ne peux pas vous donner tous les détails, mais le jeu sera légal. C’est, disons, de la désobéissance civile pour le moment, mais le jeu sera légal ou ne sera pas. Il faut se préparer. # character=FRED_GALLANT invisible

Olivia Paul: Je n’ai nullement l’intention de m’impliquer dans ce projet. # character=OLIVIA_PAUL expression=sterness

Fred: Je ne vous le demande pas. Je veux juste votre avis…officieusement. # character=FRED_GALLANT invisible

Olivia Paul: À propos de quoi? # character=OLIVIA_PAUL expression=alertness

Fred: Voilà : j’ai en ma possession un questionnaire qui comprend une description du jeu, une vidéo de présentation d’éléments du jeu et maintenant, je dois le tester. # character=FRED_GALLANT invisible

Olivia Paul: Vous avez une version beta du jeu? # character=OLIVIA_PAUL expression=neutral

Fred: Exactement. # character=FRED_GALLANT invisible

Olivia Paul: D’accord. Mais je ne veux pas que mon nom figure où que ce soit. # character=OLIVIA_PAUL expression=sterness

Fred: C’est compréhensible. Je vous le confirme. Il n’apparaîtra pas. # character=FRED_GALLANT invisible

<b>Olivia Paul</b> et <b>Fred</b> jouent un peu au prototype du jeu que la résistance a préparé pour le grand événement.

Olivia Paul: Écoutez Fred, voici mes recommandations. Ce jeu contient du sang, de l’alcool, de la violence, de l’humour cru, un langage offensant et des simulations de jeux de hasard. La liste est longue! C’est du 16 ans et plus. Êtes-vous bien certain de vouloir utiliser ce jeu pour le retour de la légalité, ça me paraît très risqué. Je veux dire, comment rallier l’opinion publique avec un pareil contenu? # character=OLIVIA_PAUL expression=disdain

Fred: Je suis d’accord avec vous Olivia. Je vous remercie de votre aide. Je vais faire mes recommandations aux décideurs. J’espère qu’ils comprendront les enjeux. # character=FRED_GALLANT invisible

Olivia Paul: Je ne tiens pas à ce que les jeux vidéo reviennent, je ne retournerai jamais travailler pour l’ESRB, mais je vous aime bien, vous. J’espère que vous réussirez à atteindre vos objectifs, quels qu’ils soient! # character=OLIVIA_PAUL expression=neutral

Fred: Merci encore Olivia. Je vous revaudrai cela. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

-> scene_6

=scene_6
~afficher_fond(maison_olivia_interieur)
<b>Fred</b> doit déterminer quelle sera sa recommandation.
~jouer_musique(theme_choix_cruciaux)
* <b>Fred</b> décide de suivre les recommandations d’<b>Olivia Paul</b>.
~points_fin_B1 += 4

~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInUp")
Teacher: Eh bien? Qu’en dis-tu finalement? # character=TEACHER_V2 expression=concern

Fred: Je sais que vous ne serez pas contents, mais il faut absolument que vous fassiez le bon choix aujourd’hui. De cela dépend le retour de la légalité à mon avis. # character=FRED_GALLANT invisible

Teacher: Explique-toi! # character=TEACHER_V2 expression=wtf

Fred: Le jeu devrait être classé 16 ans et plus. Il faut aussi être honnête et prévenir le public qu’il contient des éléments qui peuvent choquer. # character=FRED_GALLANT invisible

Teacher: Aussi bien dire qu’on leur donne raison! Aussi bien oublier le projet! # character=TEACHER_V2 expression=aversion

Fred: Non, écoute. J’ai réfléchi. Si on sort ce jeu en étant honnête et transparent, on va gagner des points. Pourquoi ne pas demander à Christian et Jonathan de concevoir un autre jeu qui serait pour tous et disponible en même temps? On pourrait l’offrir en alternative pour ceux qui ne veulent pas du contenu violent et sanglant. # character=FRED_GALLANT invisible

Fred: On montrerait notre bonne volonté et on prouverait qu’il est possible de jouer sans les risques, et que, quand il y a des risques, on exerce quand même un contrôle. # character=FRED_GALLANT invisible

Teacher: Ouais… ce n’est pas fou. Je vais plaider ta cause auprès des patrons. Tu t’en es bien sortie sur ce coup, Fred. # character=TEACHER_V2 expression=satisfaction
~cacher_tout_personnages()

* <b>Fred</b> décide de voir ce que la résistance a en tête avant de faire ses recommandations.
~points_fin_B1 += 1
~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInUp")
Teacher: Eh bien? Qu’en dis-tu finalement? # character=TEACHER_V2 expression=concern

Fred: Je ne sais trop quoi recommander. # character=FRED_GALLANT invisible

Teacher: Explique-toi! # character=TEACHER_V2 expression=wtf

Fred: Il y a des éléments qui pourraient être jugés inopportuns. # character=FRED_GALLANT invisible

Teacher: Quel âge tu recommandes? # character=TEACHER_V2 expression=concern

Fred: Quel âge, crois-tu, conviendrait à l’événement? # character=FRED_GALLANT invisible

Teacher: Pas trop restrictif, c’est certain. # character=TEACHER_V2 expression=sterness

Fred: C’est ce que je craignais. # character=FRED_GALLANT invisible

Teacher: Pourquoi? # character=TEACHER_V2 expression=surprise

Fred: Parce qu’il y a des éléments, je te dis, des éléments qui demandent une classification adéquate, mais je comprends que c’est délicat de sortir un jeu 16 ans et plus quand on veut vendre l’idée du retour de la légalité. # character=FRED_GALLANT invisible

Teacher: Non, 16 ans et plus, c’est trop. # character=TEACHER_V2 expression=sterness

Fred: Je sais. # character=FRED_GALLANT invisible

Teacher: Bon. Je vais en parler aux patrons. Mais je pense qu’on va tout simplement laisser tomber l’idée.# character=TEACHER_V2 expression=disdain

Fred: Ça me semble trop risqué. # character=FRED_GALLANT invisible

Teacher: Laisse-les en juger, si tu veux bien. # character=TEACHER_V2 expression=sterness

Fred: Peut-être que Christian et Jonathan pourraient revoir au moins la simulation de jeux de hasard? Ça aiderait la cause je pense. # character=FRED_GALLANT invisible

Teacher: Merci pour tes recommandations Fred, mais je vais régler ça. # character=TEACHER_V2 expression=sterness

Fred: Comme tu veux. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

* <b>Fred</b> propose un compromis.
~points_fin_B2 += 4

~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInUp")
Teacher: Eh bien? Qu’en dis-tu finalement? # character=TEACHER_V2 expression=sterness

Fred: J’ai le mandat difficile de t’informer que le jeu comporte plusieurs éléments qui exigent qu’on les mentionne. # character=FRED_GALLANT invisible

Teacher: Ce qui veut dire? # character=TEACHER_V2 expression=concern

Fred: Il devrait être classé 16 ans et plus.

Teacher: Tu veux rire! # character=TEACHER_V2 expression=disdain

Fred: Non, malheureusement. # character=FRED_GALLANT invisible

Teacher: Il n’en est pas question! # character=TEACHER_V2 expression=dejection

Fred: Je sais. Puis-je te proposer une solution? # character=FRED_GALLANT invisible

Teacher: Laquelle? # character=TEACHER_V2 expression=sterness

Fred: Si Christian et Jonathan retiraient quelques éléments comme la simulation de jeux de hasard et le langage offensant, par exemple, je pense qu’on pourrait risquer le 13 ans et plus. # character=FRED_GALLANT invisible

Teacher: 13 ans… mais tu sais que tu nous en demandes beaucoup? Il va falloir revoir beaucoup de choses! # character=TEACHER_V2 expression=wtf

Fred: Je sais, mais je ne comprends pas comment vous avez pu laisser passer ça! # character=FRED_GALLANT invisible

Teacher: C’est un jeu vidéo, pas un conte pour enfants. # character=TEACHER_V2 expression=disdain

Fred: Oui, mais le jeu qui doit être à l’origine du retour de la légalité ne peut pas contenir tous les défauts qu’on reproche aux jeux vidéo! # character=FRED_GALLANT invisible

Teacher: On ne voulait pas céder sur ce chantage! On voulait faire une déclaration claire. On est contre la censure. # character=TEACHER_V2 expression=dejection

Fred: Je comprends. Mais si au moins il n’y avait pas de jeux de hasard, ce serait peut-être moins difficile à retirer et moins risqué pour la suite. # character=FRED_GALLANT invisible

Teacher: Je vais faire part de tes recommandations aux patrons. # character=TEACHER_V2 expression=neutral
~cacher_tout_personnages()

- -> scene_7

=scene_7
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
<b>Tom</b>, <b>Christopher</b> et <b>Fred</b> sont ensemble.
~afficher_personnage(TOM, "slideInLeft")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInRight")

Christopher: Oui! Je viens de recevoir le go! # character=CHRISTOPHER_YOUNG expression=joy

Fred: Le go pour? # character=FRED_GALLANT invisible

Christopher: Il semble que tu as été bien utile. J’ai entendu parler de ce que tu as fait. # character=CHRISTOPHER_YOUNG expression=satisfaction

Fred: Je fais de mon mieux. # character=FRED_GALLANT invisible

Christopher: Ce soir, on célèbre! # character=CHRISTOPHER_YOUNG expression=joy

Fred: Qu’est-ce qu’on célèbre? # character=FRED_GALLANT invisible

Christopher: On est mandaté pour mettre sur pied l’événement sur la plateforme qu’on prépare depuis des mois : Only Gamers!! # character=CHRISTOPHER_YOUNG expression=joy

Tom: Tu es certain qu’on peut lui dire? # character=TOM expression=concern

Christopher: Oui! Elle est approuvée par l’autre faction! # character=CHRISTOPHER_YOUNG expression=satisfaction

Tom: Si tu le dis! # character=TOM expression=neutral

Fred: C’est quoi cette plateforme? # character=FRED_GALLANT invisible

Christopher: C’est celle dont on va se servir pour diffuser le jeu le moment venu! # character=CHRISTOPHER_YOUNG expression=satisfaction

Fred: Et quel est le moment venu? # character=FRED_GALLANT invisible

Christopher: Ah ça! Top secret! Je ne le sais même pas moi-même. Moi, mon rôle, c’est de m’assurer que la plateforme soit prête. # character=CHRISTOPHER_YOUNG expression=amusement

Tom: Et recruter des joueurs pros! # character=TOM expression=satisfaction

Christopher: Oui, ça, j’y arrive! # character=CHRISTOPHER_YOUNG expression=satisfaction
~cacher_tout_personnages()

-> scene_8

= scene_8
~afficher_fond(news_room_chapitre_5)
~jouer_musique(theme_news)
La tension monte, des fuites indiquent qu’une organisation tente un retour des jeux vidéo sur le marché légal
~arreter_musique()
->chapitre_6.scene_1
