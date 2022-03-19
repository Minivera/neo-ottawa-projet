=== chapitre_7 ===

= scene_1
~ afficher_fond(transition)
<center><titre>Chapitre 7</titre></center><br/><center>Le poids des responsabilités</center> # transition
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(BRAD, "slideInLeft")
~afficher_personnage(JEN, "slideInRight")
<b>Fred</b> consulte la liste des joueurs potentiels avec l’aide de <b>Brad</b> et de <b>Jen</b>.

Fred: Bon, vous avez consulté la liste? # character=FRED_GALLANT invisible

Brad: Oui. On a quelques inquiétudes. # character=BRAD expression=alertness

Fred: Ah oui? Lesquelles? # character=FRED_GALLANT invisible

Jen: Est-ce qu’on respecte les standards d’une ligue professionnelle? # character=JEN expression=alertness

Fred: Idéalement, il faudrait. # character=FRED_GALLANT invisible

Jen: Tu sais, les règles utilisées à l’époque par la LEC pour le jeu League of Legends sont devenues assez coutumières. C’est ce que nous utilisons encore. # character=JEN expression=neutral

Fred: Je comprends, est-ce que tu as une copie du règlement? # character=FRED_GALLANT invisible

Jen: Oui, en voici une copie. # character=JEN expression=neutral

~ajouter_document(REGLES_TOURNOIS_LOL)
// Description du document: Je n’arrive pas à croire que j’ai en ma possession une relique de cette importance... Je pensais que ce type de document avait disparu à tout jamais. Ce règlement est aujourd’hui utilisé par la résistance pour organiser des compétitions de sport électronique. Ce document peut donc m’être utile si l’on fait appel à moi pour contribuer à l’organisation des compétitions.

Fred: Merci Jen. Maintenant qu’on sait par où commencer, sur quoi devrait-on se concentrer? # character=FRED_GALLANT invisible

Brad: Si j’étais vous, et je vous le dis en toute transparence, je ferais attention à certains joueurs. # character=BRAD expression=alertness

Fred: Bon, on les passe en revue? # character=FRED_GALLANT invisible

Jen: On a des doutes sur Masato Miki, aka <i>RalfAle</i>. # character=JEN expression=alertness

Fred: Pourquoi? # character=FRED_GALLANT invisible

Brad: Il n’a pas un bon esprit sportif. # character=BRAD expression=concern

Fred: Il est trop compétitif? # character=FRED_GALLANT invisible

Brad: Il est insupportable. Il a été expulsé d’un tournoi dernièrement pour comportement antisportif. # character=BRAD expression=disdain

Jen: Il a ses admirateurs, mais il a aussi des détracteurs. # character=JEN expression=melancholy

Fred: Il est doué? # character=FRED_GALLANT invisible

Brad: Il est imbattable. # character=BRAD expression=neutral

Jen: Ceux qui le supportent mettent de l’avant son style de jeu. Très fluide. # character=JEN expression=neutral

Brad: C’est un joueur qui ne se préoccupe pas de son image. # character=BRAD expression=concern

Fred: D’accord. Quoi d’autre? # character=FRED_GALLANT invisible

Jen: Darrell aka <i>TakeMeOutofThisLane</i>. # character=JEN expression=neutral

Fred: Qu’est-ce qu’il a? # character=FRED_GALLANT invisible

Brad: Rien, c’est juste son pseudo. Il va devoir le changer… trop long. Il n’aimera pas. # character=BRAD expression=concern

Fred: D’autres éléments? # character=FRED_GALLANT invisible

Brad: Zhu Kang aka <i>FonGus</i>. # character=BRAD expression=neutral

Fred: Trop jeune? # character=FRED_GALLANT invisible

Jen: Trop jeune. Il n’a pas 16 ans, mais 15 ans. Et puis son intérêt pour la résistance n’est pas clair. # character=JEN expression=sterness

Fred: Autre chose? # character=FRED_GALLANT invisible

Brad: Non, les autres sont a priori fiables. Mais je te donne quand même leurs profils pour vérifier. # character=BRAD expression=neutral

Fred: Bon, merci pour vos conseils. Je vais analyser tout ça. On ne peut en prendre que 3 de plus. # character=FRED_GALLANT invisible
~cacher_tout_personnages()
-> quiz_7_1

= quiz_7_1
~ demarrer_quiz(QUIZ_7_1, 2)
~jouer_musique(theme_quiz)
~afficher_document(REGLES_TOURNOIS_LOL_ABREGEES)
// Description document dans le pda : Le règlement de la LEC, voyons voir de quoi il s’agit exactement et qui était impliqué là-dedans. 
-> quiz_7_1_question_1

=quiz_7_1_question_1
1- Qu’est-ce que signifie LEC? # question index=1
+   (7_1_1_a) [{7_1_1_a: VISITE--}League of Legends Esport Championship] League of Legends Esport Championship
+   (7_1_1_b) [{7_1_1_b: VISITE--}League of Legends European Contest] League of Legends European Contest
+   (7_1_1_c) [BON--{7_1_1_c: VISITE--}League of Legends European Championship] League of Legends European Championship 
Bonne réponse # retroaction
-> quiz_7_1_question_2
+   (7_1_1_d) [{7_1_1_d: VISITE--}League of Legends Esport Challenge] League of Legends Esport Challenge
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_1_question_1

=quiz_7_1_question_2
2- Qui étaient les 3 types d’acteurs principaux dans le cadre des ligues professionnelles de sport électronique comme la LEC? # question index=2
+   (7_1_2_a) [{7_1_2_a: VISITE--}L’éditeur d’un jeu vidéo, les joueurs et les commanditaires] L’éditeur d’un jeu vidéo, les joueurs et les commanditaires
+   (7_1_2_b) [{7_1_2_b: VISITE--}Les équipes, les joueurs et les commanditaires] Les équipes, les joueurs et les commanditaires
+   (7_1_2_c) [{7_1_2_c: VISITE--}Les équipes, les joueurs et leurs parents] Les équipes, les joueurs et leurs parents 
+   (7_1_2_d) [BON--{7_1_2_d: VISITE--}L’éditeur d’un jeu vidéo, les équipes et les joueurs] L’éditeur d’un jeu vidéo, les équipes et les joueurs
Il y avait bien sûr l’éditeur du jeu vidéo objet de la compétition (par exemple, la compagnie Riot Games). Finalement, chaque jeu constituait un « sport » en quelque sorte, parfois avec plusieurs catégories pour un même jeu. Par la suite, le règlement dont nous disposons nous permet de constater que les équipes jouaient un rôle central tout comme les joueurs dont la participation était encadrée. Les commanditaires sont présents dans le règlement, mais ils ne jouaient pas un rôle central. # retroaction
-> quiz_7_1_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_1_question_2

=quiz_7_1_fin
~terminer_quiz()
-> scene_2

=scene_2
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
~afficher_personnage(AGENT_LUCAS, "slideInUp")

<b>Fred</b> effectue des recherches sur les joueurs qui l’intéressent.

<b>L’agent Lucas</b> l’observe.

Agent Lucas: Tu sais, Gallant, tu n’es pas prudente. # character=AGENT_LUCAS expression=neutral

Fred: Pardon? # character=FRED_GALLANT invisible

Agent Lucas: Je ne sais pas ce que tu trafiques, mais Moore m’a raconté des choses. # character=AGENT_LUCAS expression=sterness

Fred: Quelles choses? # character=FRED_GALLANT invisible

Agent Lucas: Ton approche, disons… cavalier seul. # character=AGENT_LUCAS expression=sterness

Fred: Et alors? # character=FRED_GALLANT invisible

Agent Lucas: Ceux qui n’ont jamais besoin des autres se retrouvent seuls au moment où ils ont enfin compris qu’ils avaient besoin des autres. # character=AGENT_LUCAS expression=melancholy

Fred: Je ne m’isole pas par plaisir. # character=FRED_GALLANT invisible

Agent Lucas: Pourquoi alors? # character=AGENT_LUCAS expression=neutral

Fred: Je suis impliquée de manière de plus en plus délicate. # character=FRED_GALLANT invisible 

Agent Lucas: Tu aurais dû faire de la politique, pas des enquêtes. # character=AGENT_LUCAS expression=cruel

<b>L’agent Lucas</b> quitte le bureau.
~cacher_tout_personnages()
<b>Fred</b> consulte les autres profils des joueurs recrutables.

Fref, à elle même: <b>Kracotte</b> est généralement très apprécié.# character=FRED_GALLANT invisible

Fref, à elle même: <b>MsJG</b> se serait entrainé pendant 3 ans en Corée du Sud.# character=FRED_GALLANT invisible
~ajouter_document(PROFIL_JOUEURS)

Fref, à elle même: <b>MrNobodyYet</b>, la meilleure joueuse d’Islande… refusée dans les tournois locaux, car elle tue tout suspense. # character=FRED_GALLANT invisible
-> quiz_7_2

=quiz_7_2
~ demarrer_quiz(QUIZ_7_2, 4)
~jouer_musique(theme_quiz)
~afficher_document(ELIGIBILITE_JOUEURS_LEC)
// Description du document : Voyons voir les règles d’éligibilité et de composition des équipes dans le règlement de la LEC (art. 1.1 ; 1.4 ; 3.1 et 3.7). 
-> quiz_7_2_question_1

=quiz_7_2_question_1
1- Est-ce qu’il y avait une limite d’âge pour pouvoir jouer dans la LEC? # question index=1
+  (7_2_1_a) [BON--{7_2_1_a: VISITE--}Vrai] Vrai
  Selon le règlement de la LEC, il y avait bien un âge pour jouer dans la LEC. Les joueurs devaient avoir au moins 17 ans pour prendre part à un match officiel, même s’ils pouvaient être recrutés dès 16 ans par une équipe participant à la LEC (voir l’article 1.1.1 du règlement de la LEC). # retroaction
-> quiz_7_2_question_2
+  (7_2_1_b) [{7_2_1_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_2_question_1

= quiz_7_2_question_2
2- Pouvait-on constituer des équipes mixtes selon la LEC? # question index=2
+  (7_2_2_a) [BON--{7_2_2_a: VISITE--}Oui] Oui
Le règlement ne prévoyait aucune restriction en ce qui concerne la mixité des équipes dans la LEC. On peut donc estimer que les équipes pouvaient être mixtes. Néanmoins, ce n’était pas une pratique adoptée par les équipes avant l’interdiction des jeux vidéo. # retroaction
-> quiz_7_2_question_3
+  (7_2_2_b) [{7_2_2_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_2_question_2

= quiz_7_2_question_3
3- Pouvait-on accepter des joueurs du jeu League of Legends et ce qu’importe leur classement dans le jeu? # question index=3
+  (7_2_3_a) [{7_2_3_a: VISITE--}Vrai] Vrai
+  (7_2_3_b) [BON--{7_2_3_b: VISITE--}Faux] Faux
Tous les joueurs du jeu League of Legends n’étaient pas automatiquement sélectionnable dans la LEC. Ils ou elles devaient disposer d’un certain classement… Ils ou elles devaient être Diamond 3 pour pouvoir intégrer la LEC (voir l’article 3.1.16 du règlement de la LEC). Diamond 3, mais qu’est-ce que cela peut bien signifier? # retroaction
-> quiz_7_2_question_4
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_2_question_3

= quiz_7_2_question_4
4- Si le niveau était pris en compte pour recruter des joueurs professionnels, est-ce que leur comportement en ligne était considéré dans le processus de sélection? # question index=4
+  (7_2_4_a) [BON--{7_2_4_a: VISITE--}Vrai] Vrai
Les joueurs ne pouvaient pas faire n’importe quoi si ils ou elles souhaitaient être recrutés par une équipe pour jouer dans la LEC. Les équipes devaient fournir l’ensemble des comptes actifs de leurs joueurs (voir l’article 1.4.1). La ligue vérifiait par la suite le comportement des joueurs en ligne pour s’assurer qu’ils ou elles respectaient les standards de la LEC (voir l’article 1.4.2). # retroaction
-> quiz_7_2_fin
+  (7_2_4_b) [{7_2_4_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_2_question_4

= quiz_7_2_fin
~terminer_quiz()
-> scene_3

=scene_3
~afficher_fond(bureau_fred)
~jouer_musique(theme_choix_cruciaux)
<b>Fred</b> doit déterminer quels joueurs elle va recruter. 

* Fred recrute les joueurs suivants : Kracotte, MrNobodyYet et MsJG.
~points_fin_B1 += 4

* Fred recrute les joueurs suivants : RalfAle, FonGus et TakeMeOutofThisLane.
~points_fin_B2 += 4

* Fred recrute les joueurs suivants : MsJG, FonGus et MrNobodyYet. 
~points_fin_B1 += 2

* Fred recrute les joueurs suivants : RalfAle, MrNobodyYet et FonGus.
~points_fin_B2 += 2

-~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: Plus son enquête avance, plus l’agent Gallant joue avec le feu. Ça commence à sentir le roussi… # character=NARRATEUR invisible
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(BRIGHTON, "slideInUp")
<b>Brighton</b> continue de filer <b>Fred</b>. Il téléphone à <b>l’enquêteur Beaulieu</b>.

Brighton: Le rat est au 530. Sa voiture est devant. #character=BRIGHTON expression=cruel
~afficher_personnage(ENQUETEUR_BEAULIEU, "fadeIn")

Enquêteur Beaulieu, au téléphone: Prévenez-moi lorsqu’elle sort. # character=ENQUETEUR_BEAULIEU expression=sterness phone

Brighton: Bien reçu. #character=BRIGHTON expression=satisfaction
~cacher_tout_personnages()

<b>Fred</b> retrouve ses esprits.
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInLeft")
~afficher_personnage(BORIS, "slideInRight")
Elle est avec <b>Christopher</b> et <b>Boris</b>. Ils sont réunis pour discuter de la suite de la préparation de l’événement.

Christopher: Ça va Fred? Tu te sens bien? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Oui, oui, tout va bien. Ça m’arrive, parfois… # character=FRED_GALLANT invisible

Boris: Bon. Voici le budget accordé. On ne pourra pas le dépasser. # character=BORIS expression=neutral

Christopher: Avoir eu accès à cet argent avant, on serait mieux installé et mieux préparé. # character=CHRISTOPHER_YOUNG expression=melancholy

Boris: Tu crois quoi? Cet argent, c'est une seule fois et il faut que ça marche. Les gens qui financent ne rigolent pas. Ils veulent doubler leur investissement. # character=BORIS expression=sterness

Fred: J’ignorais que les joueurs étaient payés autant. # character=FRED_GALLANT invisible

Boris: Hum. Quand c’était légal, c’était beaucoup plus stable. # character=BORIS expression=concern

Fred: Oui, je veux bien le croire. # character=FRED_GALLANT invisible

Christopher: Alors, combien de zéros? # character=CHRISTOPHER_YOUNG expression=concern

Boris: Six. # character=BORIS expression=neutral

Fred: Quelles sont les normes? Disons le minimum ? # character=FRED_GALLANT invisible

Christopher: 60k. Même un jeune qui débute, on ne peut pas aller en bas de ça. Il se moquerait de nous et irait voir ailleurs. Ils pourraient même nous nuire. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Comment? # character=FRED_GALLANT invisible

Boris: En nous ridiculisant. En tuant notre réputation auprès des autres réseaux. # character=BORIS expression=concern

Fred: D’accord. Est-ce que certains joueurs approchés ont des demandes spéciales? # character=FRED_GALLANT invisible

Christopher: Oui. Trevor est le plus connu et le plus expérimenté. Il demande la moitié du budget global. Ça n’ira pas. # character=CHRISTOPHER_YOUNG expression=alertness

Boris: Trevor, ce n’est pas négociable. On doit lui donner. C’est lui qui va attirer les foules. # character=BORIS expression=sterness

Christopher: Et le respect. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: J’aimerais avoir son talent. # character=FRED_GALLANT invisible

Christopher: Comme tout le monde! # character=CHRISTOPHER_YOUNG expression=amusement

Fred: Mais pourquoi faut-il aussi payer les plus jeunes. Les deux débutants, Andrea et Brad, n’ont pas dit qu’ils voulaient jouer gratuitement? # character=FRED_GALLANT invisible

Christopher: Non. Ça ne se fait pas. On va passer pour des ploucs. # character=CHRISTOPHER_YOUNG expression=concern

Boris: Écoutez, réglez ça. Moi, j’ai le mandat de vous dire qu’il n’y aura pas de majoration du budget. Organisez-vous. # character=BORIS expression=wtf

Fred: C’est mathématiquement impossible. # character=FRED_GALLANT invisible

Boris: Pas mon problème. # character=BORIS expression=sterness
~cacher_tout_personnages()
-> quiz_7_3

=quiz_7_3
~ demarrer_quiz(QUIZ_7_3, 2)
~jouer_musique(theme_quiz)
~afficher_document(FINANCE_EQUIPE)
// Description document: Les finances n’ont jamais été mon fort… Mais si je veux constituer le budget de l’équipe je n’ai pas le choix de m’y replonger un peu dedans (art. 4.1 à 4.4). 
-> quiz_7_3_question_1

= quiz_7_3_question_1
1- Le budget d'une équipe comportait un plafond de dépenses. # question index=1
+  (7_3_1_a) [{7_3_1_a: VISITE--}Vrai] Vrai
+  (7_3_1_b) [BON--{7_3_1_b: VISITE--}Faux] Faux
 Le règlement de la LEC comportait plusieurs articles sur les questions de financement des équipes (voir les articles 4.1 à 4.4). Aucun d’entre eux ne prévoyait un plafond de dépense. Les équipes pouvaient dépasser autant qu’elles le souhaitaient pour tenter de remporter le championnat. Mais est-ce que l’investissement en valait la chandelle? # retroaction
-> quiz_7_3_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_3_question_1

= quiz_7_3_question_2
2- Les joueurs devaient recevoir un salaire minimal.  # question index=2
+  (7_3_2_a) [BON--{7_3_2_a: VISITE--}Vrai] Vrai
 Les équipes ne pouvaient pas employer leurs membres à n’importe quel prix. S’il n’existait pas de plafond maximal, il existait un plafond minimal pour les entraîneurs (voir les articles 4.2.2.1. et 4.2.2.2.) et les joueurs (voir les articles. 4.2.2.3. et 4.2.2.4.). Pour les joueurs les plus utilisés (au moins 18 matchs joués), le salaire minimum était de 60 000 euros par an en 2021. # retroaction
-> quiz_7_3_fin
+  (7_3_2_b) [{7_3_2_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_3_question_2

= quiz_7_3_fin
~terminer_quiz()
-> scene_4

=scene_4
~afficher_fond(rue_mcleod)
~jouer_musique(theme_choix_cruciaux)
<b>Fred</b> doit couper quelque part. Si <b>Fred</b> veut garder les meilleurs joueurs, <b>Trevor</b> et <b>Jen</b>, elle doit faire un choix.

* <b>Fred</b> coupe <b>Andrea</b> et </b>Brad de l’équipe. Elle propose à <b>Trevor</b> et <b>Jen</b> des salaires équivalents.
~points_fin_B1 += 4

* <b>Fred</b> coupe <b>Andrea</b> et <b>Brad</b> de l’équipe. Elle propose à <b>Jen</b> de jouer quasiment gratuitement afin de pouvoir payer <b>Trevor</b> selon ces attentes. Il saura mobiliser les foules.
~points_fin_B2 += 4

- ~jouer_musique(theme_general)
Après une rude négociation, <b>Trevor</b> et <b>Jen</b> acceptent les conditions salariales.

~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(BORIS, "slideInUp")
<b>Fred</b> et <b>Boris</b> revoient les contrats acceptés.

Boris: Je ne suis pas fâché que ce soit derrière nous. # character=BORIS expression=satisfaction

Fred: Je suis vraiment surprise de la tournure des événements. # character=FRED_GALLANT invisible

Boris: Tu t’attendais à quoi? # character=BORIS expression=surprise

Fred: À plus de collaboration. # character=FRED_GALLANT invisible

Boris: Tu n’es pas une très bonne négociatrice. Mais enquêteuse, si. Tu as manqué ta vocation. # character=BORIS expression=amusement

Fred: J’ai fait de mon mieux. # character=FRED_GALLANT invisible

Boris: Bon, de toute façon, ce qui compte c’est qu’on ait notre équipe. # character=BORIS expression=neutral

Fred: Ouais. Ils ne se distinguent pas par leur grandeur d’âme. # character=FRED_GALLANT invisible

Boris: Ce n’est rien. # character=BORIS expression=neutral

Fred: Ça fait beaucoup de mécontents. Andrea et Brad auraient été de bons éléments et les deux autres qui ont perdu 10 000$ par rapport à leur demande initiale… # character=FRED_GALLANT invisible

Boris: La situation est un peu tendue, en effet. # character=BORIS expression=concern

Fred: Je ne comprends pas l’entêtement des investisseurs. # character=FRED_GALLANT invisible

Boris: Écoute, il reste des cartes à jouer. # character=BORIS expression=neutral

Fred: Ah bon? Lesquelles? # character=FRED_GALLANT invisible

Boris: Il faut courtiser des commanditaires. # character=BORIS expression=neutral
~cacher_tout_personnages()
-> scene_5

= scene_5
~afficher_fond(art_house_cafe)
~jouer_musique(theme_general)
~afficher_personnage(JEN, "slideInUp")
<b>Fred</b> et <b>Jen</b> discutent.

Jen: Est-ce que ça va aider à faire en sorte que Brad et Andrea jouent avec nous? # character=JEN expression=surprise

Fred: Pas dans l’immédiat. Pas pour l’événement. # character=FRED_GALLANT invisible

Jen: Quand? # character=JEN expression=surprise

Fred: Après. Il faut que ce soit légal. Là, les fonds vont pleuvoir. # character=FRED_GALLANT invisible

Jen: Attention, on pourrait aussi être recrutés par d’autres équipes, moins pauvres. # character=JEN expression=alterness

Fred: Je sais. Mais vous contribuez aussi à un événement dont les gens vont se souvenir. # character=FRED_GALLANT invisible

Jen: Nos fans nous suivent, de toute façon. # character=JEN expression=neutral

Fred: Jen, aide-moi. Après, Brad et Andrea seront réintégrés, je te le promets. # character=FRED_GALLANT invisible

Jen: Et mon salaire majoré? # character=JEN expression=neutral

Fred: Oui. # character=FRED_GALLANT invisible

Jen: Bon. Tu sais qu’il y a des pays où les jeux ne sont pas illégaux. # character=JEN expression=sterness

Fred: Oui. # character=FRED_GALLANT invisible

Jen: Alors, il y a encore des compagnies qui commanditent légalement. # character=JEN expression=neutral

Fred: Parfait. # character=FRED_GALLANT invisible

Jen: Mais moi, je dis ça comme ça. Si j’étais eux, je n’embarquerais pas dans le projet avant que ça soit redevenu légal. # character=JEN expression=neutral

Fred: Tu as raison. Alors, que proposes-tu? # character=FRED_GALLANT invisible

Jen: Il y a aussi des commanditaires qui nous suivent, même dans l’illégitimité où nous sommes. # character=JEN expression=neutral

Fred: Mais, on aura aussi un problème lorsque ce sera redevenu légal, ces commanditaires ne seront plus acceptables! # character=FRED_GALLANT invisible

Jen: Je n’aimerais pas être à ta place. # character=JEN expression=wonder

Fred: Très drôle. # character=FRED_GALLANT invisible

Jen: Tu veux quand même quelques noms? # character=JEN expression=alertness

Fred: Tu peux me les laisser au cas où. # character=FRED_GALLANT invisible

Jen: Et veux-tu que je t’indique les plus fidèles commanditaires légaux au monde? # character=JEN expression=alertness

Fred: Oui, stp. Et comment les contacte-t-on? # character=FRED_GALLANT invisible

Jen: Oh, ce sont eux qui nous contactent. Quand on est visible, on se fait recruter. # character=JEN expression=amusement

Fred: Est-ce que je peux te poser une question? # character=FRED_GALLANT invisible

Jen: Oui, bien sûr. # character=JEN expression=default

Fred: Vas-tu répondre franchement? # character=FRED_GALLANT invisible

Jen: Oui. # character=JEN expression=default

Fred: Vous quatre, Trevor, Brad, Andrea et toi. Faisiez-vous partie d’une équipe illégale? # character=FRED_GALLANT invisible

Jen: Bien sûr. Tu crois qu’on jouait à quoi, au bridge? # character=JEN expression=amusement

Fred: Vous êtes commandités? # character=FRED_GALLANT invisible

Jen: Je te vois venir. # character=JEN expression=alertness

Fred: Mais aide-moi Jen. Il faut commencer quelque part. Ce sont des commanditaires légaux ou pas? # character=FRED_GALLANT invisible

Jen: On joue souvent en Corée et au Japon. Là-bas, on a des commanditaires légaux. # character=JEN expression=alertness

Fred: Et ici? # character=FRED_GALLANT invisible

Jen: Je ne te ferai pas un dessin, Fred. On ne vit pas d’amour et d’eau fraîche. # character=JEN expression=sterness

Fred: Juste pour me rassurer, qui est ton principal commanditaire ici, au Canada? # character=FRED_GALLANT invisible

Jen: Sans les nommer, je peux te dire qu’ils vendent de la bière aux fruits. # character=JEN expression=sterness
~cacher_tout_personnages()

~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInUp")
<b>Fred</b> est en colère. Elle n’a pas ce qu’il faut pour aller chercher des commanditaires.

Fred: Un peu de sérieux! Quels sont mes arguments pour aller chercher des commanditaires légaux, alors qu’on n’a aucune garantie que l’événement va fonctionner? # character=FRED_GALLANT invisible

Teacher: Tu es surmenée, Fred. # character=TEACHER_V2 expression=concern

Fred: Non, pas de ça. J’ai besoin de réponses. Tu vas me mettre en contact avec un des investisseurs, ou alors, je lâche tout. # character=FRED_GALLANT invisible

Teacher: Bon. Bon. Attends. # character=TEACHER_V2 expression=alertness

<b>Boris</b> entre.
~afficher_personnage(BORIS,"slideInUp")

Boris: Qu’est-ce qui se passe ici? # character=BORIS expression=wonder

Teacher: On en a trop demandé à Fred. # character=TEACHER_V2 expression=alertness

Fred: Je te préviens, Teacher, arrête de me provoquer! # character=FRED_GALLANT invisible

Boris: Qu’est-ce qui ne va pas? # character=BORIS expression=concern

Fred: Il y a que je ne peux pas trouver des commanditaires sérieux et légaux pour un événement illégal et risqué. Il est temps que vous développiez une section communication. Avez-vous lu la presse récemment? Avez-vous vu les sondages? # character=FRED_GALLANT invisible

Boris: Écoute, Fred. On y travaille. Tu crois que ces gros bonnets n’ont pas de lobbyistes? Les choses bougent tranquillement. # character=BORIS expression=sterness

Fred: Trop tranquillement. Et puis, c’est quand l’événement? Je commence à en avoir marre d’être exclue des informations les plus importantes. Vous me demandez l’impossible depuis que je suis ici. Et vous ne me faites même pas encore confiance! # character=FRED_GALLANT invisible

Boris: Je peux te donner une piste. Les commanditaires, il faut qu’ils soient concurrents. S’ils voient que leur concurrent a embarqué, ils vont vouloir surenchérir. D’ailleurs, lorsque tout sera officiel, leur implication va aider à faire pencher la balance du bon côté. # character=BORIS expression=neutral

Fred: Et si ça ne fonctionnait pas? Ce n’est pas le genre de risques que je prendrais, personnellement. Je ne pourrai pas leur vendre cette salade. Je n’y crois pas. # character=FRED_GALLANT invisible

Teacher: Voilà, le chat sort du sac. Tu n’y crois pas! # character=TEACHER_V2 expression=wtf

Boris: Du calme tous les deux. La date, tu la sauras lorsqu’elle sera définitive. En attendant, à quoi bon? Et puis les commanditaires, il faut les convaincre de s’impliquer monétairement et politiquement. Point. # character=BORIS expression=sterness

Fred: Avez-vous réfléchi à un argumentaire? # character=FRED_GALLANT invisible

Boris: On a des alliés importants. # character=BORIS expression=neutral

Fred: Qui? # character=FRED_GALLANT invisible

Boris: Des députés, des ministres. # character=BORIS expression=neutral

Fred: Mais le premier ministre a encore dit hier à la télé qu’il n’était pas question d’un retour des jeux vidéo et que les rumeurs n’étaient pas fondées. Que s’il y avait une tentative d’événement public, les coupables seraient traités en justice. Le gouvernement du Canada ne se fera pas forcer la main sur une question aussi importante, etc. # character=FRED_GALLANT invisible

Teacher: Oui, et aujourd’hui, sa cote a baissé dans les sondages. # character=TEACHER_V2 expression=satisfaction

Boris: Son conseiller principal est en contact étroit avec un des investisseurs, Fred. Ils font un spectacle. La politique marche avec la majorité. La majorité est en train de changer d’avis. Il faut travailler l’image des jeux vidéo doucement. Lentement, mais sûrement. # character=BORIS expression=satisfaction

Fred: Je vais approcher des compagnies, mais je ne promets rien. # character=FRED_GALLANT invisible

Teacher: On a quand même un seuil à atteindre. # character=TEACHER_V2 expression=neutral

Fred: Qui l’eût cru. Plus je vous côtoie, plus je me rends compte que vous ne me communiquez des informations qu’au compte-goutte. # character=FRED_GALLANT invisible
~ajouter_document(LISTE_COMMANDITAIRES)
Teacher: C’est pour ton bien, Fred. # character=TEACHER_V2 expression=sterness
~cacher_tout_personnages()
-> quiz_7_4

= quiz_7_4
~ demarrer_quiz(QUIZ_7_4, 2)
~jouer_musique(theme_quiz)
~afficher_document(REGLES_COMMANDITAIRES)
// Description du document: Je devrais regarder si le règlement traite de la participation des commanditaires (art. 4.3). 
-> quiz_7_4_question_1

=quiz_7_4_question_1
1- Les commanditaires étaient interdits dans la LEC. # question index=1
+  (7_4_1_a) [{7_4_1_a: VISITE--}Vrai] Vrai
+  (7_4_1_b) [BON--{7_4_1_b: VISITE--}Faux] Faux
  Bien sûr que non. Qui peut imaginer une compétition sportive professionnelle sans commanditaires?? Ce serait étrange compte tenu du nombre de spectateurs et de l'engouement pour les compétitions de sports électroniques à l’époque.  Le règlement de la LEC contenait une section entière à propos des commanditaires (voir l’article 4.3).  # retroaction
-> quiz_7_4_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_4_question_1

= quiz_7_4_question_2
2- Tout commanditaire était admissible dans la LEC. # question index=2
+  (7_4_2_a) [{7_4_2_a: VISITE--}Vrai] Vrai
+  (7_4_2_b) [BON--{7_4_2_b: VISITE--}Faux] Faux
  Les commanditaires étaient les bienvenus dans la LEC, mais attention pas tous les commanditaires. Il était précisé dans le règlement qu’il existait des types de soutiens interdits (voir l’article 4.3.1.). Ces types de soutiens interdits sont précisés dans le glossaire du règlement. Il s’agit d’une liste non exhaustive comprenant notamment d’autres développeurs ou éditeur de jeux vidéo, les produits ou accessoires du tabac, tout médicament sur ordonnance. # retroaction
-> quiz_7_4_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_4_question_2

=quiz_7_4_fin
~terminer_quiz()
-> scene_6

=scene_6
<b>Fred</b> doit décider quels commanditaires elle approchera. 
~jouer_musique(theme_choix_cruciaux)

* <b>Fred</b> approche des commanditaires sans se soucier de la légalité au regard des critères du règlement. Comme les jeux sont encore illégaux, elle a plus de chance de réussir auprès de ceux qui commanditent déjà des équipes illégalement.
~points_fin_B2 += 2

* <b>Fred</b> approche uniquement des compagnies légales au regard des critères du règlement. Elle propose un contrat dans lequel il est clairement stipulé que les fonds sont conditionnels à la réussite du projet.
~points_fin_B1 += 4

* <b>Fred</b> approche des commanditaires qui ont déjà des contrats dans des pays où les jeux sont légaux. Elle propose une clause au contrat qui prévoit que la publicité liée à la commandite ne sera initiée au Canada que si le projet fonctionne. Si la légalité est retardée, l’équipe s’engage à jouer dans les pays légaux pendant toute la période du contrat.
~points_fin_B1 += 4

* <b>Fred</b> approche tous les commanditaires pour ne pas perdre une opportunité. Elle se plie aux demandes de chacun. Ceux qui sont illégaux au regard des critères du règlement exigent de recevoir une visibilité avant l’événement et ceux qui sont légaux demandent une visibilité internationale et canadienne lorsque les jeux seront redevenus légaux au Canada.
~points_fin_B2 += 4

- ~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(STYLISTE, "slideInLeft")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInRight")
<b>Fred</b> assiste à une réunion entre la <b>Styliste</b> de l’équipe et <b>Christopher</b>.

Styliste: Alors, j’ai trois modèles possibles. # character=STYLISTE expression=default

Christopher: C’est en quel tissu ceux-là? # character=CHRISTOPHER_YOUNG expression=neutral

Styliste: C’est synthétique à 100%. Acrylique, spendex. # character=STYLISTE expression=default

Fred: Ça n’ira pas. # character=FRED_GALLANT invisible

Christopher: Pourquoi? # character=CHRISTOPHER_YOUNG expression=surprise

Fred: Parce que Trevor a stipulé dans son contrat qu’il ne peut porter que du coton. # character=FRED_GALLANT invisible

Styliste: Du coton? Mais ça coûte une fortune le 100% coton de nos jours! # character=STYLISTE expression=surprise

Fred: Je sais, j’ai entendu parler de la gestion de l’eau moi aussi. Mais j’ai un document signé de son dermatologue. On n’a pas le choix. # character=FRED_GALLANT invisible

Christopher: Quelles sont vos options? # character=CHRISTOPHER_YOUNG expression=concern

Styliste: Je n’ai rien en coton. On va devoir lui créer son costume sur mesure. # character=STYLISTE expression=alertness

Christopher: C’est notre vedette principale. # character=CHRISTOPHER_YOUNG expression=satisfaction 

Fred: Sans compter qu’il a un comportement exemplaire.# character=FRED_GALLANT invisible

Styliste: Je vous laisse régler cela. Mais choisissez le modèle rapidement. Les délais de production sont longs. Et j’ai besoin de voir ce papier de médecin. # character=STYLISTE expression=alertness

Christopher: D’accord, merci beaucoup. On s’en occupe. # character=CHRISTOPHER_YOUNG expression=satisfaction
~cacher_tout_personnages()
-> quiz_7_5

=quiz_7_5
~ demarrer_quiz(QUIZ_7_5, 2)
~jouer_musique(theme_quiz)
~afficher_document(REGLES_TENUES)
// Description du document: Voyons voir si le règlement allait jusqu’à réglementer les tenues des joueurs (art. 7.2).
-> quiz_7_5_question_1

=quiz_7_5_question_1
1- Les joueurs devaient porter un uniforme propre à leur équipe lors des matchs officiels. # question index=1
+  (7_5_1_a) [BON--{7_5_1_a: VISITE--}Vrai] Vrai
 À l’image de sportifs professionnels, les joueurs d’une équipe devaient porter un uniforme officiel (voir l’article 7.2). Ils devaient les porter pour les entrevues avant et après les matchs et durant les parties devant le public. Les règles étaient assez précises ! La LEC ne laissait vraiment rien au hasard. # retroaction
-> quiz_7_5_question_2
+  (7_5_1_b) [{7_5_1_b: VISITE--}Faux] Faux
+  (7_5_1_c) [{7_5_1_c: VISITE--}Impossible à dire] Impossible à dire
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_5_question_1

= quiz_7_5_question_2
2- Les équipes étaient complètement libres de choisir l’uniforme officiel. # question index=2
+  (7_5_2_a) [{7_5_2_a: VISITE--}Vrai] Vrai
+  (7_5_2_b) [BON--{7_5_2_b: VISITE--}Faux] Faux
 Pas du tout, il existait plusieurs spécifications à respecter pour les équipes en ce qui concerne la forme des uniformes (voir l’article 7.2.3.), la matière utilisée (pas de coton sauf exception : voir l’article 7.2.3.), ou encore le placement des logos des commanditaires (voir les articles 7.2.6 et 7.2.7). Encore une fois, il s’agissait de règles très similaires à celles existantes dans les sports professionnels classiques. # retroaction
-> quiz_7_5_fin
+  (7_5_2_c) [{7_5_2_c: VISITE--}Impossible à dire] Impossible à dire
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_5_question_2

= quiz_7_5_fin
~terminer_quiz()
-> scene_7

= scene_7
~afficher_fond(rue_mcleod)
~jouer_musique(theme_choix_cruciaux)

<b>Fred</b> et <b>Christopher</b> choisissent un modèle très sobre, mais désirent faire ajouter un capuchon en plus de créer un modèle sur mesure en coton pour Trevor.

*La <b>styliste</b> approuve la commande sans problème. Tout est légal.

*La <b>styliste</b> refuse d’ajouter un capuchon, elle affirme qu’ils sont interdits.
- ~jouer_musique(theme_general)

<b>Fred</b>, <b>Christopher</b>, <b>Teacher</b> et <b>Boris</b> sont en réunion.
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(TEACHER_V2, "slideInUp")
~afficher_personnage(BORIS, "slideInUp")
Fred: Je ne suis pas certaine que ce soit une bonne idée de tenir le tournoi préparatoire ici. # character=FRED_GALLANT invisible

Christopher: Mais oui! Justement! Il y a une eu descente il n’y a pas longtemps. Ils ne reviendront pas de sitôt! # character=CHRISTOPHER_YOUNG expression=surprise

Fred: Mais s’il y avait à nouveau une plainte? Le voisinage n’est pas très compréhensif. # character=FRED_GALLANT invisible

Teacher: Il est exclu que ce soit chez moi. On ne peut pas compromettre mon adresse en ce moment. # character=TEACHER_V2 expression=sterness

Fred: Je croyais que… # character=FRED_GALLANT invisible

Boris: Quoi? # character=BORIS expression=concern

Fred: Non, rien. # character=FRED_GALLANT invisible

Boris: Alors, on fait quoi? # character=BORIS expression=concern

Fred: Ici. Mais au grenier. Et discrètement. # character=FRED_GALLANT invisible

Teacher: Pour l’équipement? # character=TEACHER_V2 expression=concern

Christopher: Il faut qu’on utilise un équipement de seconde main. On n’a plus rien. Et si on utilise l’équipement de l’événement et qu’il y a à nouveau une descente, on est fichu. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Il n’y aura pas de descente. # character=FRED_GALLANT invisible

Christopher: Qu’est-ce qui t’a fait changer d’idée? # character=CHRISTOPHER_YOUNG expression=surprise

Fred: Rien. Une intuition. Tu as raison. Ils viennent de passer. Ils ne peuvent pas s’imaginer qu’on reprend les activités si vite. # character=FRED_GALLANT invisible

Teacher: Bon, l’équipement, je m’en occupe. # character=TEACHER_V2 expression=neutral

Boris: Ce sera prêt pour le weekend prochain. # character=BORIS expression=neutral
~cacher_tout_personnages()
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)

Le pré-tournoi bat son plein.<br/> Tous les joueurs qui composent l’équipe de la résistance affrontent une équipe illicite. <br/> Ils jouent au prototype du jeu de Christian et Jonathan. <br/>L’équipe adverse a signé une clause de confidentialité.

L’équipe gagnante est celle de la résistance.

<b>Fred</b> est inquiète, car <b>Jen</b> a perdu son dernier match et elle aurait dû gagner. Elle était plus forte que son adversaire.


~afficher_personnage(TREVOR, "slideInUp")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
<b>Fred</b>, <b>Trevor</b> et <b>Christopher</b> font le bilan du tournoi.

Christopher: Si ça pouvait se passer comme ça pour l’événement aussi! # character=CHRISTOPHER_YOUNG expression=satisfaction

Fred: Je ne suis pas certaine que ce serait une bonne chose. # character=FRED_GALLANT invisible

Christopher: Pourquoi? # character=CHRISTOPHER_YOUNG expression=surprise

Trevor: Je pense que je sais pourquoi tu n’es pas enthousiaste. # character=TREVOR expression=concern

Fred: Tu sais quelque chose qu’on devrait savoir. # character=FRED_GALLANT invisible

Trevor: Je déteste trahir Jen, mais elle m’a envoyé un message avant son dernier match. # character=TREVOR expression=melancholy

Fred: Je le savais! # character=FRED_GALLANT invisible

Christopher: Tu savais quoi? Qu’est-ce qui se passe? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Jen a laissé gagner l’adversaire. # character=FRED_GALLANT invisible

Trevor: Un instant. Je n’ai pas dit ça. Jen est une vraie pro. Elle ne ferait jamais cela. Elle a dû blaguer. # character=TREVOR expression=sterness

Fred: Mais elle a effectivement perdu. # character=FRED_GALLANT invisible

Trevor: Ça ne veut rien dire. # character=TREVOR expression=wtf

Fred: C’est à voir. # character=FRED_GALLANT invisible

Christopher: Mais Jen jouit d’une réputation impeccable! # character=CHRISTOPHER_YOUNG expression=alertness

Trevor: Et elle n’a jamais triché. # character=TREVOR expression=sterness

Fred: Je vais la confronter. # character=FRED_GALLANT invisible

Christopher: Doucement! On ne veut pas perdre un joueur de sa trempe! # character=CHRISTOPHER_YOUNG expression=alertness

Trevor: Je peux te donner un conseil? # character=TREVOR expression=neutral

Fred: Oui. # character=FRED_GALLANT invisible

Trevor: Demande-lui franchement ce qu’il en est, mais pas agressivement. # character=TREVOR expression=sterness

Fred: D’accord. Merci. # character=FRED_GALLANT invisible
~cacher_tout_personnages()
~afficher_fond(art_house_cafe)
~jouer_musique(theme_general)
~afficher_personnage(JEN, "slideInUp")
<b>Fred</b> et <b>Jen</b> prennent un café ensemble.

Jen: Alors? Satisfaite du tournoi préparatoire? On va tous les battre. Tu as monté une bonne équipe! # character=JEN expression=joy

Fred: Si je t’ai fait venir ici, c’est parce que j’ai intercepté un message que tu as envoyé. # character=FRED_GALLANT invisible

Jen: Intercepté? Tu nous espionnes? # character=JEN expression=sterness

Fred: Est-ce que tu as perdu ton dernier match volontairement? # character=FRED_GALLANT invisible

Jen: Non! # character=JEN expression=dejection

Fred: Pourquoi avoir écrit à Trevor que, je te cite : « We can int a game. Let’s rest a little. » # character=FRED_GALLANT invisible

Jen: C’était une blague !! # character=JEN expression=dejection

Fred: Mais tu as perdu! # character=FRED_GALLANT invisible

Jen: Ça arrive! # character=JEN expression=aversion

Fred: Comment te croire? # character=FRED_GALLANT invisible

Jen: Analyse mes stats. # character=JEN expression=sterness

Fred: Qu’est-ce que ça prouve? # character=FRED_GALLANT invisible

Jen: Si j’ai joué en dessous de ma moyenne, expulse-moi et donne ma place à Andrea. # character=JEN expression=sterness

Fred: Laisse-moi réfléchir, Jen. # character=FRED_GALLANT invisible
~ajouter_document(STATISTIQUES_JEN)
Jen: Ne commets pas d’erreur, Fred. Je ne suis pas une tricheuse. C’était une blague, une bla-gue. # character=JEN expression=aversion
~cacher_tout_personnages()
-> quiz_7_6

=quiz_7_6
~ demarrer_quiz(QUIZ_7_6, 2)
~jouer_musique(theme_quiz)
~afficher_document(CODE_CONDUITE)
// Description du document: Voyons voir si le règlement prévoyait des règles de conduite spécifiques par exemple en ce qui concerne la performance des joueurs (art. 9.1).
-> quiz_7_6_question_1

= quiz_7_6_question_1
1- Les joueurs étaient tenus de donner la meilleure performance possible lors des matchs. # question index=1
+  (7_6_1_a) [BON--{7_6_1_a: VISITE--}Vrai] Vrai
 Le règlement de la LEC prévoyait une section code de conduite (articles 9.1 et suivant). Il était clairement prévu à l’article 9.1.1 que les joueurs devaient jouer à leur meilleur niveau lors des matchs de la ligue. # retroaction
-> quiz_7_6_question_2
+  (7_6_1_b) [{7_6_1_b: VISITE--}Faux] Faux
+  (7_6_1_c) [{7_6_1_c: VISITE--}Impossible à dire] Impossible à dire
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_6_question_1

= quiz_7_6_question_2
2- Les joueurs d’une équipe pouvaient décider par stratégie de ne pas gagner un match. # question index=2
+  (7_6_2_a) [{7_6_2_a: VISITE--}Vrai] Vrai
+  (7_6_2_b) [BON--{7_6_2_b: VISITE--}Faux] Faux
 Un joueur ne pouvait pas par stratégie laisser filer un match. Le règlement prévoyait que les joueurs devaient en tout temps jouer à leur meilleur niveau (voir l’article 9.1.1.). Le règlement prévoyait également des cas de collusion définie comme une pratique visant à tricher ou à tromper les autres (voir l’article 9.1.2). Le règlement prévoyait une liste non exhaustive d’actes de collusion et notamment le « soft play », c’est-à-dire le fait pour des joueurs décider de ne pas jouer à « un niveau raisonnable de compétition ». Ainsi, laisser intentionnellement un adversaire gagner rentrerait dans la définition de la collusion. # retroaction
-> quiz_7_6_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_6_question_2

= quiz_7_6_fin
~terminer_quiz()
-> scene_8

=scene_8
~afficher_fond(art_house_cafe)
~jouer_musique(theme_choix_cruciaux)
<b>Fred</b> doit décider comment réagir par rapport au comportement de <b>Jen</b>.

* <b>Fred</b> constate, en consultant les statistiques de <b>Jen</b>, que sa performance lors de son dernier match n’est pas moins bonne que sa moyenne générale. Elle décide que l’équipe de la résistance peut la garder et oublier l’incident.
~points_fin_B2 += 4

* <b>Fred</b> constate, en consultant les statistiques de <b>Jen</b>, que sa performance lors de son dernier match n’est pas moins bonne que sa moyenne générale. Elle décide que l’équipe de la résistance peut la garder et oublier l’incident, mais doit tout de même la rencontrer afin de bien lui faire comprendre que ce genre de comportement ne sera pas toléré sous peine de résiliation de son contrat.
~points_fin_B2 += 2

* <b>Fred</b> constate, en consultant les statistiques de <b>Jen</b>, que sa performance lors de son dernier match n’est pas moins bonne que sa moyenne générale. Elle décide que l’équipe de la résistance peut la garder et oublier l’incident, mais devrait se protéger en insérant une clause automatique de résiliation en cas d’incident.
~points_fin_B1 += 4

- ~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
<b>Fred</b> est à son bureau et regarde ses courriels. L’<b>agent Moore</b> arrive.
~afficher_personnage(AGENT_MOORE, "slideInUp")

Agent Moore: Agent Gallant. # character=AGENT_MOORE expression=neutral

Fred: Bonjour. # character=FRED_GALLANT invisible

Agent Moore: La descente au 530 n’a absolument rien donné. # character=AGENT_MOORE expression=neutral

Fred: Je sais. # character=FRED_GALLANT invisible

Agent Moore: Tu as des infos? # character=AGENT_MOORE expression=surprise

Fred: Quelques-unes, oui. # character=FRED_GALLANT invisible

Agent Moore: Tu vas me les dire, ou …? # character=AGENT_MOORE expression=wtf

Fred: Je touche à une liste, j’y suis presque. Une liste qui contient des noms de joueurs qui sont très organisés. Qui jouent en groupe comme au 530, mais pas pour le plaisir, pour de l’argent. J’aurai aussi accès à des commanditaires qui versent de l’argent de manière illégale à des équipes de joueurs. Le réseau est bien vivant. # character=FRED_GALLANT invisible

Agent Moore: Tu as tout raconté au chef? # character=AGENT_MOORE expression=wtf

Fred: Je n’ai pas les listes, tu comprends? # character=FRED_GALLANT invisible

Agent Moore: Tu sais que Miller est en absolu désaccord avec un retour des jeux vidéo. Absolu. # character=AGENT_MOORE expression=sterness

Fred: Bien sûr! Pourquoi me dis-tu cela? # character=FRED_GALLANT invisible

Agent Moore: Juste un petit rappel amical. # character=AGENT_MOORE expression=neutral

Fred: Il doit être furieux en ce moment. # character=FRED_GALLANT invisible

Agent Moore: Tu réfères à l’opinion publique? # character=AGENT_MOORE expression=neutral

Fred: Oui. # character=FRED_GALLANT invisible

Agent Moore: Ce n’est pas encore gagné, tu sais, il y a beaucoup d’opposition. Beaucoup. # character=AGENT_MOORE expression=sterness

Fred: Je sais. Mais les choses ont changé. # character=FRED_GALLANT invisible

Agent Moore: Oui. Tu ferais quoi si on perdait notre travail? # character=AGENT_MOORE expression=sterness

Fred: On ne perdra pas notre travail. On va devoir surveiller l’application de la loi, quelle qu’elle soit, non? # character=FRED_GALLANT invisible

Agent Moore: Je ne sais pas. J’ai demandé à être transféré. # character=AGENT_MOORE expression=melancholy

Fred: Ah bon? Où ça? # character=FRED_GALLANT invisible

Agent Moore: Au criminel. # character=AGENT_MOORE expression=melancholy

Fred: Pas avec l’agent Beaulieu? # character=FRED_GALLANT invisible

Agent Moore: Oui, je… ferai équipe avec Brighton. Brighton est quelqu’un de bien. Il sait bien des choses. # character=AGENT_MOORE expression=melancholy

L’<b>agent</b> Moore s’en va.
~cacher_tout_personnages()
<b>Fred</b> tombe sur un message alarmant dans ses courriels. Elle n’a pas le temps de réfléchir à ce que vient de laisser entendre <b>Moore</b>.

Il s’agit d’un courriel de <b>Jen</b>. Elle a relayé une publication de <b>Trevor</b> pendant le tournoi préparatoire pour se venger de lui. 

Le message dit « Quelle joie de jouer au pays! Marre de Hong Kong XD ».

<b>Fred</b> accède à la publication originale sur Twitter. Le message a été beaucoup vu, beaucoup partagé et beaucoup commenté. <b>Fred</b> remarque même que <b>Teacher</b> lui-même a partagé la publication.
-> quiz_7_7

= quiz_7_7
~ demarrer_quiz(QUIZ_7_7, 2)
~jouer_musique(theme_quiz)
~afficher_document(REGLES_COMMUNICATION_PUBLIQUE)
// Description du document: Voyons voir si les droits des équipes et leurs membres en matière de communication publique selon le règlement (art. 9.2).
-> quiz_7_7_question_1

=quiz_7_7_question_1
1- Les joueurs et les équipes pouvaient parler publiquement de politique. # question index=1
+  (7_7_1_a) [{7_7_1_a: VISITE--}Vrai] Vrai
+  (7_7_1_b) [{7_7_1_b: VISITE--}Faux] Faux
+  (7_7_1_c) [BON--{7_7_1_c: VISITE--}C'était risqué pour eux] C'était risqué pour eux
  Le code de conduite de la LEC prévoyait de nombreuses situations. Il pouvait être interdit de parler publiquement de questions dans les cas où les propos auraient porté atteinte à l’intégrité ou la dignité d’un pays, d’un groupe ou d’individus (voir l’article 9.2.4). Des cas de cette nature ont eu lieu dans le domaine des compétitions de sports électroniques par le passé. Un joueur de Hearthstone – Ng “Blitzchung” Wai Chung – s’est par exemple vu disqualifié d’une compétition pour un message politique. Finalement la sanction a été annulée sous la pression publique. # retroaction
-> quiz_7_7_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_7_question_1

= quiz_7_7_question_2
2- Les joueurs et les équipes ne pouvaient pas critiquer publiquement Riot Games. # question index=2
+  (7_7_2_a) [BON--{7_7_2_a: VISITE--}Vrai] Vrai
 Les joueurs et les équipes ne pouvaient pas non plus critiquer publiquement la compagnie Riot Games dans la mesure où ces critiques auraient porté atteinte à ses intérêts (voir l’article 9.2.5). Notons que la ligue était l’autorité compétente pour apprécier ces cas. # retroaction
-> quiz_7_7_fin
+  (7_7_2_b) [{7_7_2_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_7_question_2

= quiz_7_7_fin
~terminer_quiz()
-> scene_9

= scene_9
~afficher_fond(bureau_fred)
~jouer_musique(theme_choix_cruciaux)
<b>Fred</b> doit déterminer comment réagir à la publication de <b>Trevor</b>. 
* <b>Fred</b> alerte immédiatement <b>Boris</b> de la situation. Elle envisage d’exclure <b>Trevor</b> de l’équipe. 
~points_fin_B1 += 4
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(BORIS, "slideInUp")
Fred: Boris, je suis content de te trouver ici. As-tu vu ce que Trevor a publié sur Twitter? # character=FRED_GALLANT invisible

Boris: Oui, il a eu du succès avec ça! Ça a été republié 450 fois. Je crois que le public est mûr. Il a créé le momentum. # character=BORIS expression=satisfaction

Fred: Non! C’est une erreur! Cela pourrait être interprété comme pouvant porter préjudice à la Chine. # character=FRED_GALLANT invisible

Boris: Mais pourquoi? C’est normal d’aimer son chez-soi! # character=BORIS expression=surprise

Fred: Oui, mais inutile de le comparer à un autre endroit en particulier… # character=FRED_GALLANT invisible

Boris: Tu crois? # character=BORIS expression=surprise

Fred: Je crois qu’on doit envisager de remplacer Trevor. # character=FRED_GALLANT invisible

Boris: Tu es folle? # character=BORIS expression=wtf

Fred: Il a commis un grave impair. Ce n’est pas digne d’un champion. # character=FRED_GALLANT invisible

Boris: Je comprends tes scrupules, mais je trouve cela exagéré. # character=BORIS expression=concern

Fred: Non. C’est dans l’ancienne loi. Et je crois qu’on doit au minimum la respecter si l’on veut que le public nous suive. # character=FRED_GALLANT invisible

Boris: Tu crois? # character=BORIS expression=concern

Fred: Vérifie les réactions. Vérifie sur Twitter. # character=FRED_GALLANT invisible

Boris: Il y a en effet des internautes qui trouvent le commentaire déplacé… En plus, les jeux ne sont pas encore légaux. Il n’aurait pas dû se vanter de jouer au Canada. # character=BORIS expression=melancholy

Boris: Tu as raison… qu’est-ce qu’on va faire? # character=BORIS expression=melancholy

Fred: On va trouver quelqu’un d’autre, il le faut. Trevor est un excellent joueur et je sais qu’il ne se rendait pas compte, mais le mal est fait. Son nom sera entouré de cette controverse. On doit le laisser aller. # character=FRED_GALLANT invisible

Boris: Mais qui va apprendre à jouer assez rapidement pour prendre la place du meilleur? # character=BORIS expression=concern

Fred: Laisse-moi cela entre les mains. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

*<b>Fred</b> décide d’en parler à <b>Christopher</b> pour déterminer si la publication pourrait causer du tort à l’équipe et par extension au projet de la résistance.
~points_fin_B1 += 1
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
Fred: Je suis contente que tu sois là, Christopher. # character=FRED_GALLANT invisible

Christopher: Tu as vu la publication de Trevor? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Oui. # character=FRED_GALLANT invisible

Christopher: Qu’est-ce qu’on fait? Qu’est-ce que tu en penses? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Je ne sais pas. Je trouve que c’est extrêmement déplacé. # character=FRED_GALLANT invisible

Christopher: Je suis d’accord. Normalement, je suis plutôt du genre à laisser couler, mais là, je vois les problèmes arriver. Il y a déjà des internautes mécontents. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: L’as-tu contacté? # character=FRED_GALLANT invisible

Christopher: À vrai dire, j’attendais de te parler. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Je suis venue aussitôt que j’ai su. # character=FRED_GALLANT invisible

Christopher: Je l’appelle immédiatement et lui dis d’enlever la publication. Mais ensuite? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Il va falloir le remplacer. # character=FRED_GALLANT invisible

Christopher: C’est inévitable? # character=CHRISTOPHER_YOUNG expression=surprise

Fred: Je crains que oui. # character=FRED_GALLANT invisible

Christopher: C’est affreux. Un si grand joueur. # character=CHRISTOPHER_YOUNG expression=melancholy

Fred: Je sais. Un grand joueur. Mais l’arrogance! # character=FRED_GALLANT invisible

Christopher: Tu me fais penser… Je crois que je connais quelqu’un d’aussi talentueux, moins flamboyant. Modeste. Cultivé, articulé. Très jeune, il n’a que 17 ans. C’est un snipper, pas très stratégique, plutôt cavalier seul que joueur d’équipe, mais pas centré sur ses perfs, juste timide et il a un style… très classe. Très précis. Il n’a jamais manqué un « headshot », c’est le meilleur au monde du « no scope ». Il va coûter cher, mais je pense qu’on peut l’avoir pour 500 000$. # character=CHRISTOPHER_YOUNG expression=alertness

Fred: Attention, il va falloir dédommager Trevor. # character=FRED_GALLANT invisible

Christopher: Oui, tu as raison. Ok, mais ça va coûter cher... # character=CHRISTOPHER_YOUNG expression=melancholy

Fred: C’est bon, je te laisse t’en occuper. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

*Comme il est hors de question de résilier le contrat de <b>Trevor</b>, <b>Fred</b> croit qu’il vaut mieux simplement lui demander de supprimer la publication et oublier cela.
~points_fin_B2 += 4
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
Fred, au téléphone: Trevor? # character=FRED_GALLANT invisible
~afficher_personnage(TREVOR, "fadeIn")
Trevor, au téléphone: C’est moi. # character=TREVOR expression=neutral phone

Fred: C’est Fred. Tu pourrais retirer ta publication sur ta joie de jouer au Canada stp? # character=FRED_GALLANT invisible

Trevor: Oui. Je vois déjà qu’il y a des réactions négatives. Je suis désolé. # character=TREVOR expression=alertness phone

Fred: Ce n’était pas l’idée du siècle. Est-ce que tu as idée combien ça pourrait nuire à la résistance? # character=FRED_GALLANT invisible

Trevor: Je sais. Je viens de dire que je suis désolé. # character=TREVOR expression=melancholy phone

Fred: Retire-le tout de suite. # character=FRED_GALLANT invisible

Trevor: Est-ce que j’écris des excuses? # character=TREVOR expression=melancholy phone

Fred: Non. Tiens-toi tranquille. # character=FRED_GALLANT invisible

Trevor: Comme vous voulez. # character=TREVOR expression=concern phone

Fred: On va voir. Si le public n’oublie pas, on publiera quelque chose, mais on va devoir se consulter. # character=FRED_GALLANT invisible

Trevor: C’est d’accord. # character=TREVOR expression=neutral phone

Fred: Bien. Ne publie plus rien jusqu’à l’événement. # character=FRED_GALLANT invisible

Trevor: Et c’est quand ça? # character=TREVOR expression=concern phone

Fred: Je ne sais pas. Bientôt. # character=FRED_GALLANT invisible

Trevor: Mes fans attendent des mises à jour de ma part. # character=TREVOR expression=sterness phone

Fred: Mais Trevor, je te demande seulement un peu de patience. Si le retour de la légalité rate à cause d’impairs qu’on aura commis, on s’en voudra. # character=FRED_GALLANT invisible

Trevor: Je m’excuse Fred. Je ne partage pas votre idéalisme. Malgré l’illégalité, nous on en vit très bien. Et puis, il y a moins de règles. # character=TREVOR expression=sterness phone

Fred: Trevor! Tu ne peux pas être sérieux! # character=FRED_GALLANT invisible

Trevor: Je suis très sérieux. # character=TREVOR expression=sterness phone

Fred: Mais qu’est-ce que tu dis? En fait, tu n’as pas à cœur la cause de la résistance? Sais-tu que Christopher avait pleine confiance en toi? # character=FRED_GALLANT invisible

Trevor: Et alors? # character=TREVOR expression=disdain phone

Fred: Il comptait sur l’admiration que tu suscites pour faire évoluer l’opinion publique en faveur des jeux. # character=FRED_GALLANT invisible

Trevor: L’admiration que je suscite, c’est mon gagne-pain. Je ne le prête à aucune cause autre que la mienne. # character=TREVOR expression=disdain phone

Fred: Trevor! # character=FRED_GALLANT invisible

Trevor: Je suis désolé, encore une fois, de ne pas correspondre à vos idéaux. Je suis un joueur, un des meilleurs au monde. Je ne suis pas un militant politique. # character=TREVOR expression=sterness phone

Fred: Alors, que vas-tu faire? Vas-tu honorer ton contrat? Avec tout ce que ça implique? # character=FRED_GALLANT invisible

Trevor: Tu veux dire pas de publication jusqu’à ce que tu me le permettes? # character=TREVOR expression=wtf phone

Fred: Entre autres. # character=FRED_GALLANT invisible

Trevor: Laisse-moi y réfléchir. # character=TREVOR expression=disdain phone

Fred: Je ne m’attendais pas à cette réaction de ta part. # character=FRED_GALLANT invisible

Trevor: Je dois penser à moi, à mon avenir. Si les jeux redeviennent légaux, je me trouverai une équipe légale facilement. Mais en attendant, je dois m’assurer que mes activités demeurent lucratives. Je joue partout dans le monde, Fred. Pas seulement au Canada. # character=TREVOR expression=concern phone

Fred: Je comprends. Tu vas me donner ta décision quand? # character=FRED_GALLANT invisible

Trevor: Je vais voir si je peux trouver un contrat de remplacement et je te le ferai savoir si j’y arrive. # character=TREVOR expression=neutral phone

Fred: Bon. Très bien. Merci. # character=FRED_GALLANT invisible

Trevor: La publication est retirée. # character=TREVOR expression=neutral phone

Fred: Merci. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

-~afficher_fond(rue_flemming)
~jouer_musique(theme_general)
~afficher_personnage(TEACHER_V2, "slideInUp")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(PALVID, "slideInUp")

<b>Fred</b>, <b>Teacher</b>, <b>Christopher</b> et <b>PALVID_</b> discutent.

Teacher: Très heureux de te rencontrer. Je t’ai vu jouer souvent. #character=TEACHER_V2 expression=satisfaction 

Palvid_: Merci. # character=PALVID expression=neutral

Christopher: On a ajouté quelques clauses au contrat. On a appris de nos expériences. On a été obligé de se débarrasser d’un joueur extrêmement fort. On a failli en perdre une autre. Si tu embarques, c’est pour le projet. Pour l’équipe. # character=CHRISTOPHER_YOUNG expression=neutral

Palvid_: Je comprends. # character=PALVID expression=neutral

Fred: Tu es jeune. Comment tu as pu devenir aussi fort aussi vite? # character=FRED_GALLANT invisible

Palvid_: J’ai commencé très jeune. # character=PALVID expression=satisfaction

Fred: Tes parents n’étaient pas inquiets de te voir pratiquer une activité illégale? # character=FRED_GALLANT invisible

Palvid_: J’ai été élevé juste par ma mère et honnêtement, elle sait, mais elle ne m’en parle pas. # character=PALVID expression=melancholy

Fred: Vous n’êtes pas proches? # character=FRED_GALLANT invisible

Palvid_: Oui, on est proche. Elle sait. # character=PALVID expression=melancholy

Teacher: Bon, ça suffit l’interrogatoire. On n’est quand même pas de la police. #character=TEACHER_V2 expression=sterness

Palvid_:Juste, ne mentionnez jamais mon vrai nom, s’il vous plaît. # character=PALVID expression=sterness

Christopher: Pas de problème. # character=CHRISTOPHER_YOUNG expression=neutral

Palvid_: Si la légalisation ne se concrétise pas, je disparais. # character=PALVID expression=concern

Christopher: C’est légitime. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: En attendant, profil bas. # character=FRED_GALLANT invisible

Palvid_: Pas de problème. Je vais me retirer des serveurs. # character=PALVID expression=neutral

~ajouter_contact(PALVID)
Fred: Merci. # character=FRED_GALLANT invisible
~cacher_tout_personnages()
-> scene_10

=scene_10
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
<b>Fred</b>, <b>Bonnie</b>, <b>Christopher</b> et quelques autres sont au grenier et jouent au prototype qui est maintenant un véritable jeu compétitif. La distribution a commencé et le marché noir répond bien. Le jeu commence à être connu. On a aussi publié des clips de jeu des joueurs de l’équipe de la résistance et on commence à alimenter les rumeurs pour l’événement.
~afficher_personnage(BONNIE_RANDLE_V2, "slideInLeft")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInRight")
Bonnie: Il est vraiment amusant, ce jeu. # character=BONNIE_RANDLE_V2 expression=surprise

Christopher: Oui, même nos joueurs pros peuvent plus s’arrêter de jouer, même si on est en pause jusqu’à nouvel ordre. # character=CHRISTOPHER_YOUNG expression=satisfaction

Fred: Ils sont passionnés. # character=FRED_GALLANT invisible

Bonnie: Ils vivent pour ça. Ils jouent tous les jours, plusieurs heures. # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Je dois admettre que leurs réflexes sont impressionnants. La plupart du temps, je ne vois même pas ce qui se passe et ils ont tué 4 bêtes! # character=FRED_GALLANT invisible

Christopher: J’ai eu de la peine de perdre Trevor, mais Palvid_, c’est quelque chose. # character=CHRISTOPHER_YOUNG expression=satisfaction

Bonnie: En plus, il est vraiment mignon. # character=BONNIE_RANDLE_V2 expression=joy

Christopher: Hahaha! Il va attirer les foules alors! # character=CHRISTOPHER_YOUNG expression=amusement

Fred: C’est un enfant, attention tout de même! # character=FRED_GALLANT invisible

Bonnie: Presque majeur. # character=BONNIE_RANDLE_V2 expression=concern

Fred: Presque. # character=FRED_GALLANT invisible
~cacher_personnage(CHRISTOPHER_YOUNG, "slideOutDown")
<b>Fred</b> descend du grenier et est suivie par <b>Bonnie</b>.

Bonnie: Fred! # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Oui? # character=FRED_GALLANT invisible

Bonnie: Je… merci pour tout ce que vous avez fait. # character=BONNIE_RANDLE_V2 expression=melancholy

Fred: Ce que j’ai fait? Je ne vous ai pas encore sortie du pétrin, il me semble. # character=FRED_GALLANT invisible

Bonnie: Je sais, mais j’ai le sentiment que ça va marcher. C’est bien ce que vous avez fait. Ils ne font rien de mal. Ça ne devrait pas être interdit. # character=BONNIE_RANDLE_V2 expression=alertness

Fred: Mais ça l’est, Bonnie. Je vais vous aider, je ne vous oublie pas. C’est presque terminé. Les dés sont jetés. # character=FRED_GALLANT invisible

Bonnie: Je crois que peu importe l’issue, vous aurez une place. Ici ou là-bas. # character=BONNIE_RANDLE_V2 expression=joy

Fred: Je n’en suis pas si sûre. # character=FRED_GALLANT invisible

Bonnie: Moi oui. # character=BONNIE_RANDLE_V2 expression=alertness

Fred: Je vais essayer de me reposer un peu. Il faut que je passe plus de temps au poste. J’ai l’impression d’être suivie parfois. # character=FRED_GALLANT invisible

Bonnie: Et votre mission? # character=BONNIE_RANDLE_V2 expression=surprise

Fred: Parfois, je ne sais plus très bien quand je mens et quand je dis la vérité. # character=FRED_GALLANT invisible

Bonnie: Je vous crois. #character=BONNIE_RANDLE_V2 expression=alertness

Fred: À bientôt. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: Bientôt, les jeux seront faits. Il n’y aura plus de retour en arrière possible. La résistance, la brigade, le gouvernement, la population... Tout se mettra en place : les décisions prises en cours de route connaîtront leur dénouement. Fred sauvera-t-elle sa peau? Bonnie sera-t-elle blanchie? La brigade sera au chômage ou fera des arrestations? À vous de jouer! # character=NARRATEUR invisible

<b>Fred</b> se réveille de sa torpeur.
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)

Son téléphone vibre avec insistance. 
~jouer_effet_sonore(vibration_telephone)
~afficher_fond(telephone_boris)
Fred, au téléphone: Que se passe-t-il, Boris? # character=FRED_GALLANT invisible 

Boris, au téléphone: Un autre pépin. # character=BORIS invisible

Fred: Qu’est-ce qui se passe? Pas Palvid? # character=FRED_GALLANT invisible

Boris, au téléphone: Non, c’est Jen. # character=BORIS invisible

Fred: Non! Pas encore! # character=FRED_GALLANT invisible

Boris, au téléphone: Oui, encore. Mais cette fois-ci c’est plus grave. # character=BORIS invisible

Fred: Qu’est-ce qui se passe? # character=FRED_GALLANT invisible

Boris, au téléphone: Elle m’a appelé pour me demander si elle pouvait s’inscrire sur un site américain de paris. Un tournoi à Las Vegas. Elle prédit toujours le bon gagnant et sa mère veut qu’elle tente sa chance. # character=BORIS invisible

Fred: Mais ils ne se reposent jamais ces enfants-là? # character=FRED_GALLANT invisible

Boris, au téléphone: On dirait bien qu’ils sont accros à l’adrénaline. # character=BORIS invisible

Fred: Boris, dis-moi quand l’événement aura lieu. # character=FRED_GALLANT invisible

Boris, au téléphone: Bon... D’accord. La date prévue, c’est dans 1 semaine.

Fred: 1 semaine! # character=FRED_GALLANT invisible

Boris, au téléphone: Oui, tout est en place. Il faut régler ça tout de suite pour Jen. # character=BORIS invisible

Fred: Tu es conscient que c’est non, bien sûr? Qu’est-ce qu’elle va inventer après ça, celle-là. # character=FRED_GALLANT invisible

Boris, au téléphone: Je commence à croire qu’on aurait dû la relâcher avec Trevor. # character=BORIS invisible

Fred: Moi aussi. Je commence à être nerveuse. # character=FRED_GALLANT invisible

Boris, au téléphone: Parle-lui sérieusement. # character=BORIS invisible

Fred: Pourquoi c’est toujours moi? # character=FRED_GALLANT invisible

Boris, au téléphone: Parce que tu t’en sors vraiment bien. # character=BORIS invisible

Fred: Très drôle. # character=FRED_GALLANT invisible

~afficher_fond(art_house_cafe)
~jouer_musique(theme_general)
~afficher_personnage(JEN, "slideInUp")
<b>Fred</b> rencontre <b>Jen</b>.

Fred: Jen, je croyais que tu m’avais bien compris la dernière fois. # character=FRED_GALLANT invisible

Jen: Mais oui! C’est pour ça que je vous le demande! # character=JEN expression=surprise

Fred: D’accord, j’apprécie ça. Mais on dirait que tu ne connais pas les règles. Lorsque tu fais partie d’une équipe, il y a des choses à respecter. # character=FRED_GALLANT invisible

Jen: Mais on n’est pas en tournoi actuellement. Et puis, quel âge tu me donnes? # character=JEN expression=dejection

Fred: Je connais ton âge, pourquoi me demandes-tu cela? # character=FRED_GALLANT invisible

Jen: Parce que je suis visiblement trop jeune pour avoir connu les tournois d’esport lorsqu’ils étaient légaux. # character=JEN expression=dejection

Fred: Mais tu joues dans des pays où c’est légal, Jen, tu sais. # character=FRED_GALLANT invisible

Jen: Bon d’accord, mais au Canada, je suis habituée à ce qu’on soit libre. # character=JEN expression=sterness

Fred: Comme Trevor! As-tu l’intention de nous laisser tomber? # character=FRED_GALLANT invisible

Jen: Non! # character=JEN expression=sterness

Fred: Alors, es-tu disposée à suivre les règlements? # character=FRED_GALLANT invisible

Jen: Oui, mais écoute s’il te plaît. Je ne demanderais pas cela si ce n’était pas très important pour moi. Pour ma famille. # character=JEN expression=alertness

Fred: En quoi le pari … # character=FRED_GALLANT invisible

Jen: Ma mère est ruinée. # character=JEN expression=melancholy

Fred: Mais toi, tu fais de l’argent, non? # character=FRED_GALLANT invisible

Jen: Oui. Je fais de l’argent. Et ma dernière paie est passée au complet dans les paiements d’hypothèque en retard de ma mère. # character=JEN expression=melancholy

Fred: Jen! Pourquoi ne pas en avoir parlé avant? # character=FRED_GALLANT invisible

Jen: Qui parle de ses malheurs, de ses soucis? # character=JEN expression=neutral

Fred: Bon, alors, qu’en est-il? # character=FRED_GALLANT invisible

Jen: Ma mère est au bord de la faillite, elle a perdu son travail, elle est malade. # character=JEN expression=melancholy

Fred: Très malade? # character=FRED_GALLANT invisible

Jen: Elle ne peut plus travailler. Les assurances ne payent plus. # character=JEN expression=melancholy

Fred: Je suis vraiment désolée. # character=FRED_GALLANT invisible

Jen: Merci. Vous savez, j’ai un excellent taux de réussite dans mes prédictions. Je réussis à 82%. On pourrait gagner beaucoup d’argent si on misait mon cachet pour l’équipe. # character=JEN expression=alertness
~cacher_tout_personnages()
-> quiz_7_8

=quiz_7_8
~ demarrer_quiz(QUIZ_7_8, 2)
~jouer_musique(theme_quiz)
~afficher_document(REGLES_PARIS)
// Description du document:Voyons voir les règles en matière de paris selon le règlement et les éventuelles sanctions (art. 9.2 et 9.3).
-> quiz_7_8_question_1

=quiz_7_8_question_1
1-  Les paris n’étaient pas autorisés pour les joueurs et les équipes de la LEC.  # question index=1
+  (7_8_1_a) [BON--{7_8_1_a: VISITE--}Vrai] Vrai
  Parier ou jouer pour une équipe professionnelle dans la LEC, il fallait choisir. En effet, selon le règlement de la LEC, les paris étaient interdits (voir l’article 9.2.15). Les activités de paris légales ou illégales étaient interdites pour les membres d’une équipe de la LEC. Peu importe donc que les paris soient placés via un site reconnu par les autorités ou de manière informelle. # retroaction
-> quiz_7_8_question_2
+  (7_8_1_b) [{7_8_1_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_8_question_1

=  quiz_7_8_question_2
2- La LEC ne prévoyait aucune sanction pour les joueurs qui ne respectaient pas leurs obligations. # question index=2
+  (7_8_2_a) [{7_8_2_a: VISITE--}Vrai] Vrai
+  (7_8_2_b) [BON--{7_8_2_b: VISITE--}Faux] Faux
 Tout règlement qui se respecte prévoit des sanctions... Le règlement de la LEC ne faisait pas exception. Il prévoyait une variété de sanctions (voir l’article 9.3.2) parmi lesquelles des avertissements verbaux, des amendes ou encore des suspensions. Les joueurs avaient intérêt à bien se comporter! # retroaction
-> quiz_7_8_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_7_8_question_1

=quiz_7_8_fin
~terminer_quiz()
-> scene_11

=scene_11
~afficher_fond(art_house_cafe)
~jouer_musique(theme_choix_cruciaux)
<b>Fred</b> doit décider si elle permettra à <b>Jen</b> de placer quelques paris. 

* <b>Fred</b> décide de permettre à <b>Jen</b> de placer quelques paris discrètement et sous un pseudonyme, si possible.
~points_fin_B2 += 4

* <b>Fred</b> explique à <b>Jen</b> combien il est risqué de faire un tel pari. Le règlement de la LEC interdit une telle pratique et qu’elle ne peut pas compromettre les chances de la résistance de réussir son événement. Elle propose à Jen d’être patiente, que d’autres contrats vont arriver et qu’elle pourra aider sa mère honnêtement.
~points_fin_B1 += 4

* <b>Fred</b> explique à <b>Jen</b> que le règlement de la LEC interdit une telle pratique et qu’elle ne peut pas compromettre les chances de la résistance de réussir son événement.
~points_fin_B1 += 2

* <b>Fred</b> décide de permettre à <b>Jen</b> de placer quelques paris discrètement et sous un pseudonyme, si possible. Elle ne parle pas de cette conversation aux autres membres de la résistance. Seul <b>Boris</b> est au courant, mais <b>Fred</b> ne lui donnera pas les détails. 
~points_fin_B2 += 2

- ~afficher_fond(news_room_chapitre_7)
~jouer_musique(theme_news)
« Il n’y a aucune chance que ça marche mieux qu’avant » confirme le titulaire de la chaire de recherches en histoire de la technologie de l’Université d’Ottawa.
~arreter_musique()
-> fin 