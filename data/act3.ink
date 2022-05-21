=== chapitre_3 ===

= scene_1
~afficher_fond(transition_3)
<center><titre>Chapitre 3</titre></center><br/><center>Entre deux mondes</center> # transition
~afficher_fond(bureau_chef_miller)
~jouer_musique(theme_general)
~afficher_personnage(CHEF_MILLER, "slideInUp")

Chef Miller: Bien. Merci pour le rapport. # character=CHEF_MILLER expression=satisfaction

Fred: À vos ordres, chef. # character=FRED_GALLANT invisible

Chef Miller: Gallant, je veux que ce soit bien clair, votre conduite je la réprouve, mais vous avez fait du bon boulot avec le petit Kane. Par contre, l’enquêteur Beaulieu était furieux! Il sait faire 1+1, lui aussi. Il a du métier. La prochaine fois, vous allez rencontrer des difficultés à obtenir ce que vous voulez avec lui. # character=CHEF_MILLER expression=sterness

Fred: J’imagine, oui. Je serais vexée si j’étais dans ses souliers aussi. # character=FRED_GALLANT invisible

Chef Miller: J’espère que vous aurez eu votre leçon Gallant. J’ai besoin d’éléments comme vous, mais je ne suis pas le genre d’homme à qui on peut désobéir. Est-ce qu’il y a quelque chose que vous voudriez me dire avant que je ne plonge dans votre rapport? # character=CHEF_MILLER expression=sterness

Fred: Il n’y a pas grand-chose là-dedans que je ne vous aie déjà dit, chef. # character=FRED_GALLANT invisible

Chef Miller: Gallant, Moore est allé faire un tour au 530 McLeod et il a découvert une salle, au grenier, où des jeunes se rencontrent pour jouer. Comment se fait-il que vous n’ayez pas encore découvert cela, vous qui êtes amie avec celui qui tient cette maison? # character=CHEF_MILLER expression=concern

Fred: Il faut croire qu’ils sont comme vous, ils ne me font pas encore confiance. # character=FRED_GALLANT invisible

Chef Miller: Ne jouez pas à la plus maline avec moi. # character=CHEF_MILLER expression=anger

Fred: Je vous dis ce qu’il en est, chef. En fait, je le soupçonnais. Je n’ai pas jugé que c’était essentiel de faire une descente là-bas tout de suite. Ça aurait pu me servir. # character=FRED_GALLANT invisible

Chef Miller: Vous êtes sérieuse Gallant? Avez-vous conscience du nombre d’infractions commises là-bas? Tournoi de jeux vidéo, possession de matériel et de copies physiques de jeux, produits dérivés, propagande pro jeux-vidéo… Et avez-vous la moindre idée de l’énergie que ce trou consommait pour faire tourner tout ça 24 heures sur 24? # character=CHEF_MILLER expression=anger

Fred: L’énergie? # character=FRED_GALLANT invisible

Chef Miller: Eh oui, Gallant. L’impact environnemental, ça vous dit quelque chose? Qui vous a donné votre diplôme? Vous les jeunes, vous ne vous rendez pas compte que tout ça a des impacts majeurs sur l’environnement. # character=CHEF_MILLER expression=disdain

Fred: Nous n’avons pas grandi avec les jeux vidéo, chef. # character=FRED_GALLANT invisible

Chef Miller: La dépendance et le contenu choquant n’étaient pas les seules raisons ayant entraîné l’interdiction. Relisez donc la Loi Game Over! Et ça aussi par la même occasion. Faites vos devoirs Gallant. # character=CHEF_MILLER expression=rage

~ajouter_document(MARCHE_JV_2020)
~ajouter_document(IMPACT_JV_ENVIRONNEMENT)

Chef Miller: Par contre, si j’apprends que vous me cachez des informations primordiales, vous pourrez dire adieu à votre carrière dans la brigade, agent Gallant. Je veux que vous fassiez pression sur vos nouveaux amis pour qu’ils vous présentent des gens plus importants au sein de la résistance. Organisez-vous pour avoir des noms, des preuves et savoir ce qu’ils trament. Le grenier, c’est fini de toute façon.# character=CHEF_MILLER expression=sterness

Fred: Je fais de mon mieux. # character=FRED_GALLANT invisible

Chef Miller: Ce sera tout. Hors de ma vue maintenant. # character=CHEF_MILLER expression=disdain
~cacher_tout_personnages()

-> quiz_3_1

=quiz_3_1
~ demarrer_quiz(QUIZ_3_1, 1)
~afficher_document(MARCHE_JV_2020)
~jouer_musique(theme_quiz)
// Description document 1 : Ce document devrait me permettre d’en apprendre sur l’ampleur du marché des jeux vidéo avant l’entrée en vigueur de la <i>Loi Game Over</i>.

-> quiz_3_1_question_1
=quiz_3_1_question_1
1 - Je me demande combien il y avait de joueurs et de joueuses à travers le monde en 2021… # question index=1
+   (3_1_1_a) [BON--{3_1_1_a: VISITE--}2,7 milliards.] 2,7 milliards.
Et bien dites donc, selon les chiffres de 2021, il y avait près de la moitié de l’humanité qui s’adonnait aux jeux vidéo à travers le monde. Ça en fait des joueurs et des joueuses. Comme on dit, les temps changent…  # retroaction
-> quiz_3_1_fin
+   (3_1_1_b) [{3_1_1_b: VISITE--}4,5 milliards. ] 4,5 milliards. 
+   (3_1_1_c) [{3_1_1_c: VISITE--}1,2 milliard.] 1,2 milliard.
+   (3_1_1_d) [{3_1_1_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_1_question_1

= quiz_3_1_fin
~ terminer_quiz()
-> scene_1_1

=scene_1_1
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
Fred, à elle-même: Je vais maintenant examiner l'autre document. # character=FRED_GALLANT invisible
-> quiz_3_2

=quiz_3_2
~ demarrer_quiz(QUIZ_3_2, 4)
~afficher_document(IMPACT_JV_ENVIRONNEMENT)
~jouer_musique(theme_quiz)
// Description document 2 : On dirait bien qu’avec les jeux vidéo tout n’était pas virtuel.... Ces documents devraient me permettre d’en savoir plus sur les impacts des jeux vidéo sur l’environnement. 
-> quiz_3_2_question_1

=quiz_3_2_question_1
1 - Alors, les jeux vidéo avaient-ils un impact sur l'environnement ? # question index=1 
+   (3_2_1_a) [BON--{3_2_1_a: VISITE--}Oui] Oui
Selon les documents de l’époque, les impacts des jeux vidéo étaient très nombreux. # retroaction
-> quiz_3_2_question_2
+   (3_2_1_b) [{3_2_1_b: VISITE--}Non ] Non
+   (3_2_1_c) [{3_2_1_c: VISITE--}Impossible à déterminer] Impossible à déterminer
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_2_question_1

=quiz_3_2_question_2
2 - Si les jeux vidéo avaient un impact environnemental, je devrais aller vérifier quels étaient ces impacts : # question index=2
+   (3_2_2_a) [{3_2_2_a: VISITE--}Émissions de gaz à effet de serre.] Émissions de gaz à effet de serre. 
+   (3_2_2_b) [{3_2_2_b: VISITE--}Production de déchets.] Production de déchets.  
+   (3_2_2_c) [{3_2_2_c: VISITE--}Pollutions.] Pollutions. 
+   (3_2_2_d) [BON--{3_2_2_d: VISITE--}Toutes ces propositions.] Toutes ces propositions.
Apparemment, les impacts des jeux vidéo et de l’industrie en général étaient très variés. Les archives nous apprennent que la pratique des jeux vidéo entraînait des émissions de gaz à effet de serre, notamment en raison de l’énergie nécessaire à leur utilisation. Bon, les jeux vidéo c’était aussi beaucoup de déchets physiques (les boites de jeux, les supports, les consoles, etc.)... C’était à la source de pollutions diverses. # retroaction
-> quiz_3_2_question_3
+   (3_2_2_e) [{3_2_2_e: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_2_question_2

=quiz_3_2_question_3
3 - Donc il y avait beaucoup d’émissions de gaz à effet de serre en lien avec l’industrie des jeux vidéo… Je me demande quel était l'impact estimé de cette industrie en termes d'émissions de gaz à effet de serre (équivalent CO2) ? # question index=3
+   (3_2_3_a) [BON--{3_2_3_a: VISITE--}Aucune étude ne permet de le déterminer.] Aucune étude ne permet de le déterminer. 
Les archives ne permettent pas de déterminer cet impact. On sait que les jeux vidéo entrainaient des émissions de gaz à effet de serre, mais combien exactement est difficile à dire, même plusieurs années après… Ceci pourrait peut-être expliquer pourquoi l’élévation de température est proche de 2,5 degrés en 2047…  Nous avons une estimation des émissions correspondant au fonctionnement de certaines des machines utilisées pour jouer aux jeux vidéo, mais pas d’estimation globale. Les chiffres devaient probablement être vertigineux… # retroaction
-> quiz_3_2_question_4
+   (3_2_3_b) [{3_2_3_b: VISITE--}532 millions de tonnes d’équivalent CO2.] 532 millions de tonnes d’équivalent CO2.  
+   (3_2_3_c) [{3_2_3_c: VISITE--}912 582 kilos d’équivalent CO2.] 912 582 kilos d’équivalent CO2. 
+   (3_2_3_d) [{3_2_3_d: VISITE--}848 733 kilos d’équivalent CO2.] 848 733 kilos d’équivalent CO2.
+   (3_2_2_e) [{3_2_2_e: VISITE--}Négligeable.] Négligeable.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_2_question_3

=quiz_3_2_question_4
4 – Et de façon plus générale, disposait-on de données précises en ce qui concerne l'ensemble des impacts des jeux vidéo sur l'environnement ? # question index=4
*  (3_2_4_a) [{3_2_4_a: VISITE--}Oui] Oui
*  (3_2_4_b) [BON--{3_2_4_b: VISITE--}Non] Non
Selon les archives, on ne disposait pas de données précises concernant l’ensemble des impacts du secteur des jeux vidéo sur l’environnement. On disposait d’informations précises pour certains impacts uniquement : par exemple, celui des ventes de jeux sur support physique, la consommation électrique de certains équipements, l’empreinte de certains acteurs du secteur, etc. Mais pas d’estimations globales. Ce manque d’information est problématique pour établir un bon diagnostic et imaginer des stratégies d’action. Une chose certaine, en 2021, les jeux vidéo n’étaient définitivement pas le secteur le plus polluant. # retroaction
-> quiz_3_2_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_2_question_4

=quiz_3_2_fin
~ terminer_quiz()
->scene_2

=scene_2
~afficher_fond(maison_fred)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "bounceIn")

Christopher: Bah allez, une petite partie! On n’a même jamais joué ensemble. Même John a déjà joué avec moi! # character=CHRISTOPHER_YOUNG expression=joy

Fred: Ouais, il y a des années de ça! # character=FRED_GALLANT invisible

Christopher: Et alors? # character=CHRISTOPHER_YOUNG expression=surprise

Fred: Non, rien. Mais j’ai pas envie de jouer, j’ai la tête pleine. # character=FRED_GALLANT invisible

Christopher: Justement! Jouer détend et fait oublier les tracas. # character=CHRISTOPHER_YOUNG expression=joy

Fred: Je ne peux pas les oublier! # character=FRED_GALLANT invisible

Christopher: Bon. Mais on devrait planifier une petite soirée de tournoi d’e-sport, à l’ancienne. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: E-sport? Je n’ai pas connu ça. # character=FRED_GALLANT invisible

Christopher: Raison de plus! On se fait un tournoi de PES ce week-end! Allez quoi! # character=CHRISTOPHER_YOUNG expression=joy

Fred: Je suis nul à ce jeu. # character=FRED_GALLANT invisible

Christopher: Moi aussi! Pour le plaisir! Le plaisir pur de jouer! # character=CHRISTOPHER_YOUNG expression=joy

Fred: Bon, je vais voir. # character=FRED_GALLANT invisible

Christopher: Excellent. J’en parle à John. Il fera peut-être une exception pour toi. # character=CHRISTOPHER_YOUNG expression=satisfaction

Fred: Tu crois? Ça me surprendrait… # character=FRED_GALLANT invisible

Fred: Je voulais te demander… Es-tu au courant, enfin, connais-tu les gens qui fabriquent les nouveaux jeux? # character=FRED_GALLANT invisible

Christopher: Pourquoi tu t’intéresses à ça? Tu joues à peine! # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Ça m’intéresse parce que j’aimerais peut-être plus les jeux récents que les vieux jeux d’avant la loi. # character=FRED_GALLANT invisible

Christopher: Certains jeux demandent moins de dextérité, c’est certain. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Alors? # character=FRED_GALLANT invisible

Christopher: J’en connais un ou deux qui en connaissent un ou deux. Mais ce sont des gens discrets. Distribuer, jouer, on ne prend pas trop cher, mais produire, c’est autre chose. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Oui, c’est clairement plus risqué vis-à-vis de la loi. T’as entendu parler de l’impact environnemental des jeux produits aujourd’hui? # character=FRED_GALLANT invisible

Christopher: Pourquoi tu mentionnes ça? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Parce que ce sont des circonstances aggravantes. Justement, est-ce que tu sais ce qu’ils font avec les déchets produits par la conception des nouveaux jeux? C’est un impact parmi d’autres, mais il n’est pas négligeable… # character=FRED_GALLANT invisible

Christopher: Pas négligeable certes, mais certainement pas le pire. J’ai l’impression d’entendre le discours officiel du gouvernement… # character=CHRISTOPHER_YOUNG expression=disdain

Fred: Ce sont les seules informations disponibles… # character=FRED_GALLANT invisible

Christopher: T’as jamais entendu parler de l’initiative Playing for the Planet? Tu devrais mieux faire tes devoirs! # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Non. Je vais me renseigner. # character=FRED_GALLANT invisible

Fred: Et ils conçoivent des jeux sur la rue Flemming? # character=FRED_GALLANT invisible

Christopher: Quoi la rue Flemming? Qui t’a parlé de la rue Flemming? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: J’ai entendu dire qu’il y avait un autre repaire là-bas. # character=FRED_GALLANT invisible

Christopher: Qui t’a dit ça? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Quel est le problème? # character=FRED_GALLANT invisible

Christopher: Le problème, c’est la confiance. Si tu fais tes petites enquêtes de ton côté, tu n’es pas près d’être invitée sur la rue Flemming. Et ça me rappelle, je voulais te dire, un agent de la brigade anti-jeux vidéo est passé au 530… Il a fouillé jusqu’à ce qu’il trouve le grenier. Il a tout embarqué. Tout. Mais il n’a arrêté personne. T’étais au courant de ça aussi? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Non! Est-ce que Bonnie était là? Il a pris vos identités? # character=FRED_GALLANT invisible

Christopher: Euh…ouais, peut-être qu’elle était là. Qu’est-ce que tu lui veux à Bonnie? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: C’est la sœur de John. Je crois pas qu’il ne serait pas très heureux de savoir qu’elle traîne là-bas et qu’elle s’est fait contrôler. # character=FRED_GALLANT invisible

Christopher: Tu me prends pour qui? John est mon ami depuis toujours et Bonnie, on la protège. Jamais ils ne la coinceront. # character=CHRISTOPHER_YOUNG expression=aversion

Fred: Tant mieux. # character=FRED_GALLANT invisible

Christopher: Mais dis-moi, comment tu sais qu’il y avait qu’un seul clown de la brigade? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Je sais ça, moi? # character=FRED_GALLANT invisible

Christopher: Tu as dit : il a pas pris vos identités? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Je suis une extra-lucide. Je sais tout! # character=FRED_GALLANT invisible

Christopher: Je suis assez lucide aussi.# character=CHRISTOPHER_YOUNG expression=sterness

Fred: J’en prends note. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

->scene_3

= scene_3
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)

<b>Fred</b> enquête sur cette piste <i>Playing for the Planet</i>. Il semble que ce soit un programme mis sur pied avant la <i>Loi Game Over</i> par les Nations Unies. Mais les Nations Unies c’est vaste, quelle agence en particulier Fred devrait contacter?
-> scene_3_suite

=scene_3_suite
*UNEP/PNUE (Programme des Nations Unies pour l’environnement)
<i>Playing for the Planet</i> est une initiative du Programme des Nations Unies pour l’environnement.
-> scene_4

*FAO (Organisation pour l’alimentation et l’agriculture)
<i>Playing for the Planet</i> n’est pas une initiative de l’Organisation pour l’alimentation et l’agriculture.
->scene_3_suite

*UNEA (Assemblée des Nations Unies pour l’environnement)
<i>Playing for the Planet</i> n’est pas une initiative de l’Assemblée des Nations Unies pour l’environnement.
->scene_3_suite

- ->scene_4

=scene_4
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)

<b>Fred</b> appelle un administrateur du Programme des Nations Unies pour l’environnement.
~jouer_effet_sonore(composer_numero)
~afficher_personnage(ADMINISTRATEUR, "fadeIn")

Administrateur: Programme des Nations Unies pour l’environnement, bonjour. Comment puis-je vous être utile aujourd’hui? # character=ADMINISTRATEUR expression=default phone

Fred: Fred Gallant, brigade anti-jeux video, Canada. # character=FRED_GALLANT invisible

Administrateur: Vous appelez pour une enquête en particulier? # character=ADMINISTRATEUR expression=neutral phone

Fred: Je cherche à comprendre ce qu’était le projet <i>Playing for the Planet</i>. Les informations à ce sujet ne sont pas disponibles au Canada. # character=FRED_GALLANT invisible

Administrateur: La <i>Loi Game Over</i> n’est-ce pas? # character=ADMINISTRATEUR expression=sterness phone

Fred: Oui, c’est exact. # character=FRED_GALLANT invisible

Administrateur: Aux Nations-Unies, nous n’avons pas détruit les documents, question de juridiction. En fait, les jeux vidéo ne sont pas illégaux partout dans le monde et donc, le projet vit encore dans certains pays. # character=ADMINISTRATEUR expression=neutral phone

Fred: Dites-m’en plus sur ses origines. # character=FRED_GALLANT invisible

Administrateur: Vous avez combien de temps? # character=ADMINISTRATEUR expression=neutral phone

Fred: Peu. # character=FRED_GALLANT invisible

Administrateur: Alors, laissez-moi simplement vous dire qu’il s’agissait d’une initiative qui visait à réduire l’empreinte écologique de l’industrie des jeux vidéo. Le projet n’en était qu’à ses balbutiements lorsque la loi canadienne est entrée en vigueur, mais c’était prometteur. # character=ADMINISTRATEUR expression=sterness phone

Administrateur: Je peux vous envoyer de la documentation. Mais vous n’allez pas avoir des problèmes si je vous envoie ça? # character=ADMINISTRATEUR expression=alertness phone

Fred: Laissez-moi m’inquiéter de ça. # character=FRED_GALLANT invisible

Administrateur: D’accord, vous aurez une bonne idée de la prise conscience de l’industrie des jeux vidéo en matière environnementale. Bonne chance dans votre enquête! # character=ADMINISTRATEUR expression=joy phone

~ajouter_document(PLAYING_FOR_PLANET)
~cacher_tout_personnages()
-> quiz_3_3

= quiz_3_3
~ demarrer_quiz(QUIZ_3_3, 9)
~afficher_document(PLAYING_FOR_PLANET)
~jouer_musique(theme_quiz)
// Description document 3 :  On dirait bien que les acteurs du milieu des jeux vidéo avaient conscience des effets négatifs de leur production en matière environnementale. Je devrais essayer d’identifier les stratégies qui ont été envisagées et les différents types d’engagements qui ont pu être pris par le passé.
-> quiz_3_3_question_1

=quiz_3_3_question_1
1 - Pour commencer, je vais essayer de déterminer quelles étapes de la vie d’un jeu vidéo ont un impact sur l’environnement ? (voir la page 21 du document) # question index=1
+   (3_3_1_a) [{3_3_1_a: VISITE--}Sa création.] Sa création.  
+   (3_3_1_b) [{3_3_1_b: VISITE--}Sa distribution.] Sa distribution.   
+   (3_3_1_c) [{3_3_1_c: VISITE--}Sa consommation par les joueurs et les joueuses.] Sa consommation par les joueurs et les joueuses.
+   (3_3_1_d) [{3_3_1_d: VISITE--}Sa fin de vie.] Sa fin de vie.
+   (3_3_1_e) [BON--{3_3_1_e: VISITE--}Toutes ces propositions.] Toutes ces propositions.
Selon le rapport Playing for the Planet, toutes les étapes de la vie d’un jeu vidéo avaient un impact sur l’environnement… Ce n’est pas rassurant. On dirait bien que les jeux vidéo n’avaient vraiment rien de purement virtuel, mais nécessitaient au contraire une large infrastructure pour que les joueurs et les joueuses puissent en profiter. Ces impacts étaient également présents pour des jeux distribués uniquement de manière virtuelle. Ces jeux devaient être hébergés en ligne quelque part et les joueurs devaient disposer d’équipements pour pouvoir y jouer, ce qui impliquait de consommer de l’énergie. # retroaction
->quiz_3_3_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_1

= quiz_3_3_question_2
2 - Avec tout ça, il est à se demander si les acteurs des milieux des jeux vidéo prenaient en compte les impacts environnementaux des jeux vidéo ? (voir la page 4 du document) # question index=2
*  (3_3_2_a) [BON--{3_3_2_a: VISITE--}Oui] Oui
L’initiative Playing for the Planet a été lancée par le programme des Nations Unies pour l’environnement en 2019. En consultant leur rapport, on peut s’apercevoir que cette institution avait réussi à regrouper certains acteurs majeurs du secteur des jeux vidéo. Ces acteurs n’étaient donc pas indifférents aux problématiques environnementales. # retroaction
-> quiz_3_3_question_3
*   (3_3_2_b) [{3_3_2_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_2

=quiz_3_3_question_3
3 - Je vais aller fouiller davantage sur l'initiative Playing for the Planet. Je me demande si elle comptait plusieurs centaines d’acteurs de l’industrie des jeux vidéo parmi ses membres (voir la page 51 du document). # question index=3
*  (3_3_3_a) [{3_3_3_a: VISITE--}Vrai] Vrai
*  (3_3_3_b) [BON--{3_3_3_b: VISITE--}Faux] Faux
Malheureusement l’initiative Playing for the Planet ne comptait qu’environ une trentaine de membres et leur participation était à géométrie variable… Selon le rapport annuel de 2020, tous les membres n’avaient pas communiqué pour cette année leurs accomplissements en matière environnementale. Par contre, toujours selon ce rapport, les membres de cette initiative pouvaient toucher jusqu’à 1,2 milliard de joueurs à travers le monde. # retroaction
-> quiz_3_3_question_4
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_3

 =quiz_3_3_question_4
4 - Mais alors, est- ce que tous les acteurs du milieu des jeux vidéo impliqués dans l'initiative Playing for the Planet se sont fixé des objectifs de réduction des gaz à effet de serre (voir aux pages 51 à 70 du document)? # question index=4
*  (3_3_4_a) [{3_3_4_a: VISITE--}Oui] Oui
*  (3_3_4_b) [BON--{3_3_4_b: VISITE--}Non] Non
Selon ce même rapport annuel, tous les membres ne se sont pas fixés d'objectifs de réduction des gaz à effet de serre. Néanmoins, huit membres s’étaient engagés à le faire en 2021 (en plus des membres disposant déjà de cibles). # retroaction
-> quiz_3_3_question_5
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_4

= quiz_3_3_question_5
5 - Je suis curieuse de savoir quel acteur de l’industrie des jeux vidéo s'était engagé à réduire ses émissions de gaz à effet de serre dans le cadre de l’initiative Playing for the Planet (voir la page 67 du document)? # question index=5
+   (3_3_5_a) [{3_3_5_a: VISITE--}Pixelberry] Pixelberry
+   (3_3_5_b) [{3_3_5_b: VISITE--}Niantic] Niantic
+   (3_3_5_c) [BON--{3_3_5_c: VISITE--}Supercell] Supercell
Selon le rapport, la compagnie Supercell s’était engagée à réduire ses émissions de gaz à effet de serre. Mais ce n’était pas le seul membre à avoir pris des engagements de cette nature. # retroaction
-> quiz_3_3_question_6
+   (3_3_5_d) [{3_3_5_d: VISITE--}E-Line] E-Line
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_5

= quiz_3_3_question_6
6 - Bon, tous les membres de l'initiative Playing for the Planet ne se sont pas fixés des objectifs de réduction des gaz à effet de serre, mais est-ce qu’ils avaient l'obligation d'adopter de telles mesures (voir la page 33 du document)? # question index=6
*  (3_3_6_a) [{3_3_6_a: VISITE--}Vrai] Vrai
*  (3_3_6_b) [BON--{3_3_6_b: VISITE--}Faux] Faux
 Selon le document, les membres se sont fixé des : « voluntary, specific, time-based and increasingly ambitious commitments for both people and planet ». Les membres n’avaient donc pas d’obligations spécifiques… Mais ils étaient encouragés à adopter des cibles et des stratégies en faveur de l’environnement. # retroaction
-> quiz_3_3_question_7
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_6

= quiz_3_3_question_7
7 - Pas d’obligations… Mais est-ce que certains jeux vidéo ont par le passé permis de financer des actions de protection de l’environnement (voir la page 12 du document)? # question index=7
*  (3_3_7_a) [BON--{3_3_7_a: VISITE--}Vrai] Vrai
Selon l’initiative Playing for the Planet, il faut croire que les jeux vidéo avaient permis de lever des fonds pour la protection de l’environnement. C’était le cas du jeu Pokémon Go par exemple (voir à la page 12). # retroaction
-> quiz_3_3_question_8
*  (3_3_7_b) [{3_3_7_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_7

= quiz_3_3_question_8
8 - Il semble qu’un événement avait été organisé à l’initiative de Playing for the Planet en 2019 afin de mobiliser le potentiel des jeux vidéo pour la protection de l’environnement… Quel type d'événement était-ce (voir aux pages 15 et 16 du document)? # question index=8
+   (3_3_8_a) [{3_3_8_a: VISITE--}Une journée mondiale sans jeux vidéo] Une journée mondiale sans jeux vidéo
+   (3_3_8_b) [BON--{3_3_8_b: VISITE--}Un Game Jam] Un Game Jam
Selon le document, un Game Jam a été organisé. Un Game Jam est un événement au cours duquel les participants sont invités à créer un prototype de jeu, parfois en lien avec un thème donné. Parmi les thèmes de ce Game Jam figuraient les changements climatiques, la reforestation et les énergies renouvelables. # retroaction
-> quiz_3_3_question_9
+   (3_3_8_c) [{3_3_8_c: VISITE--}Une marche virtuelle en faveur du climat] Une marche virtuelle en faveur du climat
+   (3_3_8_d) [{3_3_8_d: VISITE--}Aucune de ces propositions] Aucune de ces propositions
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_8

= quiz_3_3_question_9
9 - Je devrais vérifier la posture des acteurs sur ce sujet. Est-il possible, selon, l'initiative Playing for the Planet, de contribuer à la protection de l'environnement en produisant des jeux (voir aux pages 11 à 17 du document)? # question index=9
*  (3_3_9_a) [BON--{3_3_9_a: VISITE--}Vrai] Vrai
 Selon Playing for the Planet, il était possible de contribuer à la protection de l’environnement grâce au contenu même des jeux vidéo. Les jeux vidéo racontaient des histoires, comportaient des personnages et proposaient des perspectives variées. En ce sens, les jeux vidéo pouvaient d’après eux véhiculer des messages en lien avec la protection de l’environnement et pouvaient potentiellement encourager des changements. # retroaction
-> quiz_3_3_fin
*  (3_3_9_b) [{3_3_9_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_3_question_9

= quiz_3_3_fin
~terminer_quiz()

-> scene_5

=scene_5
~afficher_fond(news_room_chapitre_3)
~jouer_musique(theme_news)
L’empreinte environnementale du marché illicite des jeux vidéo pointé du doigt
~arreter_musique()
-> chapitre_4.scene_1