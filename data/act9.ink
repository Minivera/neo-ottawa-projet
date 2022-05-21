=== chapitre_9 ===

= scene_1
~ afficher_fond(transition_9)
<center><titre>Chapitre 9</titre></center><br/><center>Dernières lignes droites</center> # transition
~afficher_fond(rue_flemming)
~jouer_musique(theme_general)

<b>Boris</b>, <b>Christopher</b>, <b>MR GHOST</b>, <b>CLEAR VIEW</b> et <b>Fred</b> sont en réunion.
~afficher_personnage(BORIS, "slideInUp")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(MR_GHOST, "slideInUp")
~afficher_personnage(CLEAR_VIEW, "slideInUp")
Mr Ghost: On vous a fait confiance, on vous a donné de la corde et vous êtes en train de vous pendre avec et la résistance au complet aussi! Il faut que ça cesse! # character=MR_GHOST expression=wtf

Fred: Mais ces jeunes ne sont pas contrôlables! On ne les a pas invités! Les streamers et les joueurs de l’équipe n’ont pas un auditoire à 100% fiables. Certains ont des comportements très toxiques. Mais comment aurait-on pu l’anticiper! # character=FRED_GALLANT invisible

Clear View: Vous auriez dû le savoir! # character=CLEAR_VIEW expression=disdain

Boris: C’était votre boulot de préserver la résistance des débordements. Votre initiative n’était pas assez réfléchie. Maintenant, ces comportements ont compromis l’événement! # character=BORIS expression=sterness

Christopher: Mais non, mais non, il n’est pas trop tard. Laissez-nous voir ce qu’on peut faire. # character=CHRISTOPHER_YOUNG expression=surprise

Boris: Il n’est plus question de vous laisser faire quoi que ce soit. Vous allez obéir aux ordres! # character=BORIS expression=wtf

Mr Ghost: Je ne devais même pas vous rencontrer, ni mon partenaire ici présent. Si on est là, dites-vous que c’est parce que vous êtes dans l’eau chaude. # character=MR_GHOST expression=disdain 

Fred: Qu’est-ce que vous voulez faire maintenant? # character=FRED_GALLANT invisible

Boris: On va vous donner les ordres. En attendant, tentez de raisonner vos streamers et vos joueurs. Il faut qu’ils parlent à leur communauté. Les journalistes vont nous manger tout rond! # character=BORIS expression=sterness

Fred: Mais quel est le problème le plus urgent? # character=FRED_GALLANT invisible

Clear View: Les comportements toxiques en ligne. On en voit de plus en plus au cours des parties. # character=CLEAR_VIEW expression=dejection

Fred: Mais la diffusion du jeu est encore très limitée. Comment est-ce possible? # character=FRED_GALLANT invisible

~ajouter_contact(CLEAR_VIEW)

Boris: Je n’en sais rien et cela ne m’intéresse pas de le savoir! Ce qui m’intéresse c’est de régler le problème. On va nous reprocher ces comportements. L’opinion publique ne sera pas en notre faveur et de cela dépend toute l’opération. # character=BORIS expression=sterness

~ajouter_contact(MR_GHOST)

Mr Ghost: Nos pertes vous seront attribuées. Je dois vous dire que si c’est un fiasco et que ça reste illégal, vous paierez. D’une manière ou d’une autre, vous paierez. # character=MR_GHOST expression=sterness
~cacher_tout_personnages()
~ afficher_fond(blackout)
~jouer_musique(theme_narrateur)

Narrateur: Qu’avez-vous donc fait? La résistance serait-elle victime de sa popularité? Les jeunes auraient-ils tenu pour acquis le retour des jeux et ainsi, compromis l'issue favorable de la lutte? Un peu de concentration et finissez cette mission avant de vendre la peau de l’ours! # character=NARRATEUR invisible

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)

<b>Brighton</b> voit <b>Fred</b> au 530, accompagnée de <b>Christopher</b> et <b>Bonnie</b>.

<b>Brighton</b> interpelle <b>Fred</b>.

~afficher_personnage(BRIGHTON, "slideInUp")

Brighton: Fred, puis-je vous parler? # character=BRIGHTON expression=neutral

Fred: Qu’est-ce que vous faites là? # character=FRED_GALLANT invisible

Brighton: J’ai à vous parler. # character=BRIGHTON expression=sterness

~jouer_musique(theme_choix_cruciaux)

*<b>Fred</b> accepte de rencontrer <b>Brighton</b> et sort avec lui sous le regard médusé de <b>Christopher</b> et de <b>Bonnie</b>.
~points_fin_A1 += 4

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(BONNIE_RANDLE_V2, "slideInUp")
Fred, à Christopher et Bonnie: Je n’en ai pas pour longtemps. # character=FRED_GALLANT invisible

Christopher: Mais qui est ce clown? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Je vous expliquerai. # character=FRED_GALLANT invisible

<b>Christopher</b> et <b>Bonnie</b> entrent au 530 rue McLeod.
~cacher_personnage(CHRISTOPHER_YOUNG, "slideOutDown")
~cacher_personnage(BONNIE_RANDLE_V2,"slideOutDown")

Fred: Qu’est-ce que vous me voulez? # character=FRED_GALLANT invisible

Brighton: Je vous ai suivie. # character=BRIGHTON expression=satisfaction

Fred: Pourquoi? # character=FRED_GALLANT invisible

Brighton: Ordre de l’enquêteur Beaulieu. # character=BRIGHTON expression=cruel

Fred: Pour quels motifs? # character=FRED_GALLANT invisible

Brighton: Je crois que votre chef ne vous fait plus tellement confiance. # character=BRIGHTON expression=cruel

Fred: Je suis agent double, imbécile! # character=FRED_GALLANT invisible

Brighton: Oh! J’espère que vous savez ce que vous faites, parce que moi, ici, j’ai ce qu’il faut pour vous faire boucler! # character=BRIGHTON expression=satisfaction

Fred: Je ne comprends pas votre objectif, mais je le découvrirai. Au revoir. # character=FRED_GALLANT invisible

Brighton: Oh, je ne vais pas loin, je vous attends. J’ai hâte de voir à quelle heure vous allez rentrer. # character=BRIGHTON expression=neutral

Fred: Ordure! # character=FRED_GALLANT invisible

~cacher_tout_personnages()

*<b>Fred</b> refuse de suivre <b>Brighton</b> et fait mine de ne pas le connaître. <b>Brighton</b> lui glisse un papier dans la main.
~points_fin_A2 += 2

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(BONNIE_RANDLE_V2, "slideInUp")

Fred: Je ne connais pas ce sinistre individu. Qu’est-ce que vous me voulez? # character=FRED_GALLANT invisible

Brighton: Oh moi rien! # character=BRIGHTON expression=surprise

<b>Brighton</b> glisse un papier dans la main de <b>Fred</b>.

Christopher: Qu’est-ce que c’est que ça? # character=CHRISTOPHER_YOUNG expression=alertness

Bonnie: Fred, dites-moi que vous n’êtes pas… # character=BONNIE_RANDLE_V2 expression=alertness

Christopher: N’êtes pas quoi? Est-ce que quelqu’un peut m’expliquer ce qui se passe? # character=CHRISTOPHER_YOUNG expression=wtf

Fred: Si je savais, je te le dirais, Chris. # character=FRED_GALLANT invisible

<b>Fred</b> regarde le papier. Il y est écrit "<b>Chef Miller</b> aime beaucoup mes rapports".

~cacher_tout_personnages()

*<b>Fred</b> répond que ce n’est pas le moment et qu’elle pourra le voir plus tard. 
~points_fin_A1 += 3

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
Fred: Je ne sais pas ce que vous me voulez, mais ce n’est pas un bon moment. Où puis-je vous rejoindre plus tard? # character=FRED_GALLANT invisible

Brighton: Oh, je reste à votre disposition, vous savez comment me joindre. # character=BRIGHTON expression=neutral

<b>Brighton</b> s’en va. <b>Christopher</b> et <b>Bonnie</b> se regardent, très inquiets.

~cacher_personnage(BRIGHTON, "slideOutDown")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(BONNIE_RANDLE_V2, "slideInUp")

Christopher: Tu vas nous expliquer ça? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Expliquer quoi? C’est un gars du 5567 Flemming. # character=FRED_GALLANT invisible

Bonnie: Connais pas. # character=BONNIE_RANDLE_V2 expression=sterness

Christopher: Pourquoi tu le connaitrais? # character=CHRISTOPHER_YOUNG expression=wtf

Fred: Écoutez, ils sont fâchés. Il faut que je vous explique, c’est pour ça qu’on est ici, non? Donnez-moi quelques minutes et vous saurez tout. # character=FRED_GALLANT invisible

<b>Bonnie</b> reste méfiante. Ils entrent tous les trois.

~cacher_tout_personnages()

*<b>Fred</b> se défend énergiquement en affirmant ne pas connaître <b>Brighton</b>, mais ce dernier se moque d’elle et tente de miner sa crédibilité devant les personnes présentes.
~points_fin_A2 += 4

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(BONNIE_RANDLE_V2, "slideInUp")
Fred: Qu’est-ce que vous me voulez? C’est une propriété privée ici! Je ne vous connais pas! # character=FRED_GALLANT invisible

Brighton: Oh! Inquiète devant vos nouveaux amis? Remarquez, je le serais aussi. Bon, lorsque vous vous souviendrez de moi, vous savez comment me joindre. Je fais ça pour vous rendre service, moi. Agent euh… Fred, c’est ça? # character=BRIGHTON expression=cruel

Christopher: Agent? Qu’est-ce qu’il raconte? # character=CHRISTOPHER_YOUNG expression=surprise

<b>Bonnie</b> devient pâle.

Fred: Je n’ai aucune idée de ce qu’il raconte et il partait! # character=FRED_GALLANT invisible

Christopher: Je crois qu’il pourrait nous instruire un peu avant. # character=CHRISTOPHER_YOUNG expression=sterness

Brighton: Nan, Fred le fera. J’en suis sûr. Moi, je passais par-là, d’ailleurs, je passe souvent par-là ces derniers temps. Je suis plus souvent ici que chez moi je crois bien. # character=BRIGHTON expression=satisfaction 

Fred: Partez d’ici immédiatement! # character=FRED_GALLANT invisible

Brighton: Oui, bien sûr, mais je ne serai pas loin si ce que j’ai à vous dire vous intéresse. # character=BRIGHTON expression=satisfaction

Christopher: Moi, ça m’intéresse. # character=CHRISTOPHER_YOUNG expression=sterness

Brighton: Ce n’est malheureusement pas à vous que j’ai à parler. Mais au plaisir, jeune homme. # character=BRIGHTON expression=neutral

<b>Brighton</b> s’en va.

~cacher_personnage(BRIGHTON, "slideOutDown")

Christopher: Qu’est-ce qui se passe, Fred? # character=CHRISTOPHER_YOUNG expression=wtf

Fred: Rien, je vais tout vous expliquer. Entrons. # character=FRED_GALLANT invisible

~cacher_tout_personnages()

- -> scene_2

= scene_2
~afficher_fond(grenier)
~jouer_musique(theme_general)

<b>Fred</b>, <b>Christopher</b> et <b>Bonnie</b> discutent.

~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(BONNIE_RANDLE_V2, "slideInUp")

Fred: Bon, ils m’ont sommée de trouver une solution parce que les joueurs en ligne n’ont pas tous des comportements acceptables et ils ne veulent pas de débordements. # character=FRED_GALLANT invisible

Christopher: Mais nos joueurs agissent correctement, je suis avec eux tout le temps, je regarde pratiquement tout, je ne dors plus. # character=CHRISTOPHER_YOUNG expression=surprise

Fred: Je sais. Je suis désolée. Mais ils ont vu des comportements toxiques. Ils ont dit des comportements toxiques! # character=FRED_GALLANT invisible

Christopher: De la part de quel joueur? # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Pas les joueurs de notre équipe. # character=FRED_GALLANT invisible

Christopher: Mais alors, en quoi ça les dérange? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Eh bien Chris, si des jeunes, des mineurs, commencent à jouer à notre jeu et adoptent de mauvais comportements, le jeu en sera entaché. # character=FRED_GALLANT invisible

Christopher: J’en ai vraiment assez! La politique, c’est impossible à gérer. # character=CHRISTOPHER_YOUNG expression=disdain

Fred: Mais non, mais non. On doit d’abord voir ce que c’est qu’un comportement toxique. Je veux savoir ce que ça représente. Il va falloir réfléchir à des façons de limiter les dégâts. Prendre des mesures, quoi. # character=FRED_GALLANT invisible

Bonnie: Encore! # character=BONNIE_RANDLE_V2 expression=surprise

Christopher: Mais on n’aura jamais le temps! # character=CHRISTOPHER_YOUNG expression=wtf

Fred: Mais oui, dites-moi tout ce que vous savez sur ces comportements. # character=FRED_GALLANT invisible

Christopher: Je ne sais rien. Nous, on aime jouer, c’est tout. Quand quelqu’un n’a pas un bon esprit sportif, on l’ignore. Il y a des serveurs partout dans le monde, parfois on ne comprend même pas ce que les joueurs disent. # character=CHRISTOPHER_YOUNG expression=sterness

Bonnie: C’est vrai qu’il peut y avoir des comportements grossiers, du racisme, de la xénophobie. Toutes sortes de choses… # character=BONNIE_RANDLE_V2 expression=alertness

Fred: Mais il fallait me le dire avant! Comment ça se passait avant la loi? Est-ce que quelqu’un s’occupait de ça? # character=FRED_GALLANT invisible

Christopher: Mais est-ce que je sais moi? # character=CHRISTOPHER_YOUNG expression=surprise

Fred: Bon. Laisse-moi cela entre les mains. # character=FRED_GALLANT invisible

Christopher: Et qui c’était dehors, Fred? Dis-nous. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Un gars de l’autre faction. J’ai rencontré des gros bonnets récemment. Ils rigolent pas. Il faut colmater la brèche et vite. # character=FRED_GALLANT invisible

Bonnie: Tu es certaine, Fred? Tu as besoin d’aide? # character=BONNIE_RANDLE_V2 expression=alertness

Fred: Je crois que je sais à quelle porte frapper. # character=FRED_GALLANT invisible

~cacher_tout_personnages()

~afficher_fond(centre_rehabilitation_autre_piece)
~jouer_musique(theme_general)

<b>Fred</b> et <b>Al</b> jouent au poker.

~afficher_personnage(AL, "slideInUp")

Al: Je savais bien que vous reviendriez pour cette partie de poker. Ça ne se refuse pas. # character=AL expression=joy

Fred: Je m’excuse, Al, d’avoir mis tellement de temps avant de revenir vous voir. # character=FRED_GALLANT invisible

Al: Vous êtes de ceux qui travaillent pour que les jeux reviennent? # character=AL expression=concern

Fred: Pas directement, non. # character=FRED_GALLANT invisible

Al: Réponse de politicien! Pouah! # character=AL expression=wtf

Fred: Al, j’ai besoin de votre aide. # character=FRED_GALLANT invisible

Al: Si vous me promettez que ça n’aidera pas le groupe d’illuminés qui veulent le retour des jeux, je ferai ce que vous voulez! # character=AL expression=sterness

* <b>Fred</b> ne peut pas mentir à <b>Al</b>. Elle n’en peut plus et décide de lui confier la vérité.

Fred: Al, je suis désolée d’être venue. Je pense que je n’aurais pas dû vous tourmenter avec mes questions. # character=FRED_GALLANT invisible

Al: Aaaah, voilà. Donc, vous travaillez pour ce groupe, non? # character=AL expression=sterness

Fred: Pas exactement, Al. # character=FRED_GALLANT invisible 

Al: Hum, encore une réponse évasive. # character=AL expression=concern

Fred: Non, je… je suis agent de police. Mais j’ai infiltré le groupe auquel vous faites allusion. # character=FRED_GALLANT invisible

Al: Eh bien? Continuez. # character=AL expression=neutral

Fred: Il y a peu à ajouter. Dans le processus, les choses ont changé. # character=FRED_GALLANT invisible

Al: Qu’est-ce qui a changé? # character=AL expression=surprise

Fred: Ces gens, ces jeunes qui ont continué de jouer et qui tentent de ramener les jeux, ce ne sont pas de mauvaises personnes. # character=FRED_GALLANT invisible

Al: Bien sûr que non. Ils sont inconscients! # character=AL expression=wtf

Fred: J’aimerais les aider à comprendre les enjeux, à ce qu’ils se rendent bien compte de ce que ça implique. # character=FRED_GALLANT invisible

Al: Vous croyez qu’ils vont renoncer à leur plaisir par altruisme pour ceux qui ne se contrôlent pas? # character=AL expression=sterness

Fred: Peut-être bien que non. # character=FRED_GALLANT invisible

Al: C’est votre conscience, Fred. Faites ce que vous croyez le mieux. Qu’est-ce que vous vouliez me demander? # character=AL expression=neutral

Fred: Eh bien, je voudrais que vous me disiez ce que vous savez sur les comportements toxiques. # character=FRED_GALLANT invisible

Al: Vous vous demandez quelles étaient l’ampleur et l'étendue des comportements toxiques? # character=AL expression=neutral

Fred: Oui, on fait face au problème déjà et on ne sait pas comment arrêter la prolifération de comportements très désagréables en ligne. # character=FRED_GALLANT invisible

Al: Mais vous vous imaginiez quoi? Ramener les jeux, c’est ramener tout l’univers et tout ce qu’il comporte d’affreux. # character=AL expression=disdain

Fred: Vous croyez qu’il n’est pas possible d’enrayer ces comportements? # character=FRED_GALLANT invisible

Al: Ha! Certainement pas! # character=AL expression=sterness

Fred: Les diminuer? # character=FRED_GALLANT invisible

Al: Bonne chance! # character=AL expression=amusement

Fred: Pourquoi? # character=FRED_GALLANT invisible

Al: Vous avez entendu parler du stream sniping? # character=AL expression=neutral

Fred: Non. # character=FRED_GALLANT invisible

Al: C’était une pratique de tricherie. Vous savez, les jeunes se branchaient avec un streamer et ils commençaient une partie avec le streamer en question. Comme ils voyaient où il était dans la partie, ils pouvaient facilement le tuer de loin sans que lui ne puisse se défendre. # character=AL expression=disdain

Fred: Est-ce qu’on était arrivé à empêcher cela? # character=FRED_GALLANT invisible

Al: Oui. Mais ça ne montre qu’une chose : dès qu’il y a une faille dans le système, il y en aura qui vont la trouver et l’exploiter. # character=AL expression=disdain

Fred: Mais n’y aurait-il pas un moyen d’au moins décourager les commentaires haineux et les comportements toxiques? # character=FRED_GALLANT invisible

Al: Oh, et comment ferez-vous pour contrôler toutes les langues? Il y en aura toujours. Toujours, c’est moi qui vous le dis. # character=AL expression=sterness

Fred: Avez-vous des informations sur les pratiques avant la loi? # character=FRED_GALLANT invisible

<b>Al quitte</b> la partie, se lève et va dans un de ses tiroirs. Il en sort des documents.

Al: Voilà. Commencez par ça. Vous verrez à quel point c’est incontrôlable. # character=AL expression=neutral

~ajouter_document(TOXICITE_LOL)

Fred: Merci Al. Et désolée de remuer des souvenirs douloureux. # character=FRED_GALLANT invisible

Al: Bah, non. Ça me rappelle pourquoi je ne veux plus jouer. # character=AL expression=sterness

* <b>Fred</b> continue de s’enfoncer dans ses mensonges. De toute façon, elle ne sait même plus ce qui est vrai et ce qui est faux. 

Fred: Bien sûr Al. Je suis agent de police, vous vous souvenez? Cela n’est pas pour servir la résistance. Il s’agit d’une enquête de police. # character=FRED_GALLANT invisible

Al: Ha! Vous mentez mal! Tout ce que je peux vous dire Fred, c’est que vous devez comprendre que vous ne contrôlerez pas les comportements toxiques. # character=AL expression=sterness

<b>Al</b> se lève et quitte la partie. Il va chercher un dossier dans ses tiroirs et le lance à Fred.

Al: Lisez ceci et ne revenez pas me voir, Fred. Je sais que vous ne comprenez pas, mais moi, je me fais vieux pour ce genre de choses. # character=AL expression=disdain

~ajouter_document(TOXICITE_LOL)

Fred: Al! Al, je ne voulais pas vous insulter. J’avais besoin de comprendre. Il faut arrêter ces jeunes, vous comprenez? # character=FRED_GALLANT invisible

Al: Empêchez les jeux de redevenir légaux, Fred. Empêchez-les à tout prix! # character=AL expression=sterness

- <b>Al</b> gagne la partie de poker. 
~cacher_tout_personnages()
-> quiz_9_1

= quiz_9_1
~ demarrer_quiz(QUIZ_9_1, 2)
~jouer_musique(theme_quiz)
~afficher_document(TOXICITE_LOL)
// Description du document: Qui l’eut cru... On dirait bien que la pratique des jeux vidéo n’était pas nécessairement positive pour tout le monde par le passé. Au contraire, on dirait bien que certains comportements pouvaient être toxiques. Mais de quoi parle-t-on au juste quand on parle de comportements toxiques? 
-> quiz_9_1_question_1

= quiz_9_1_question_1
1- En quoi consistaient généralement les comportements toxiques en ligne selon les chercheurs de l’époque? # question index=1 
+   (9_1_1_a) [{9_1_1_a: VISITE--}Harcèlement] Harcèlement
+   (9_1_1_b) [{9_1_1_b: VISITE--}Triche] Triche 
+   (9_1_1_c) [{9_1_1_c: VISITE--}Colères] Colères
+   (9_1_1_d) [{9_1_1_d: VISITE--}Actes visant à perturber l’expérience des autres joueurs] Actes visant à perturber l’expérience des autres joueurs
 +  (9_1_1_e) [BON--{9_1_1_e: VISITE--}Toutes ces propositions] Toutes ces propositions
  Si je m’attendais à cela, les jeux vidéo n’étaient pas seulement des activités amusantes et ludiques. Leur pratique pouvait entraîner ou être le théâtre de nombreux comportements jugés néfastes par les joueurs. Ces comportements toxiques allaient de la triche jusqu’au harcèlement en ligne. C’est malheureux. Nous devrions envisager des manières de limiter ces types de comportements. # retroaction
-> quiz_9_1_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_9_1_question_1

= quiz_9_1_question_2
2- Les comportements toxiques étaient rares selon les témoignages des joueurs. # question index=2
+  (9_1_2_a) [{9_1_2_a: VISITE--}Vrai] Vrai
+  (9_1_2_b) [BON--{9_1_2_b: VISITE--}Faux] Faux
   Selon les données de l’époque, la grande majorité des joueurs avaient expérimenté des comportements toxiques dans leur pratique des jeux en ligne. Quelle situation effroyable… # retroaction
-> quiz_9_1_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_9_1_question_2

= quiz_9_1_fin
~terminer_quiz()
-> scene_3

= scene_3
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)

<b>Fred</b>, <b>Teacher</b>, <b>Christopher</b>, <b>Palvid_</b> et <b>Jen</b> discutent.

~afficher_personnage(TEACHER_V2, "slideInUp")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(PALVID, "slideInUp")
~afficher_personnage(JEN, "slideInUp")

Palvid_: Je sais ce qui vous inquiète, mais comme, moi, par exemple, je ne m’abaisse jamais à ces comportements. # character=PALVID expression=sterness

Fred: Mais vos fans le font, tous ceux qui ont acheté le jeu et qui jouent présentement, qui streament sur la plateforme, beaucoup ont de ces comportements toxiques. # character=FRED_GALLANT invisible

Palvid_: Je sais. Moi, je n’écoute pas. Je bloque leur son. # character=PALVID expression=neutral

Fred: Je comprends, mais ce ne sera pas suffisant. Toi qui suis de vieux streamers, qu’est-ce qui s’est fait, comment ils ont géré ça, avant? # character=FRED_GALLANT invisible

Teacher: Je pense qu’on laissait faire. # character=TEACHER_V2 expression=neutral

Jen: Il y avait un système de dénonciation. # character=JEN expression=neutral

Fred: Ça me semble délicat. # character=FRED_GALLANT invisible

Jen: Mais si tout le monde pouvait dénoncer, mais que pour bannir quelqu’un, il fallait qu’il soit dénoncé par plusieurs personnes? # character=JEN expression=surprise

Teacher: Ça pourrait marcher. # character=TEACHER_V2 expression=neutral

Fred: Mais que faites-vous de tous les parents qui sont inquiets que leurs enfants soient exposés à de la violence, pas seulement dans les jeux, mais en jouant? Que faites-vous du contrôle qu’on n’a même pas sur l’âge des joueurs présentement? Ça va être un fiasco! # character=FRED_GALLANT invisible

Christopher: Mais calme-toi Fred! Qu’est-ce qui t’arrive? # character=CHRISTOPHER_YOUNG expression=alertness

Jen: C’est la pression qui est trop forte! # character=JEN expression=wonder

Fred: Non, c’est que je croyais qu’il y avait moyen que ça fonctionne! Je croyais que les jeux vidéo pouvaient se gérer. # character=FRED_GALLANT invisible

Teacher: Oh Fred, calme. On va trouver une solution. Qu’est-ce que tu voudrais qu’on fasse? # character=TEACHER_V2 expression=concern

Fred: Les patrons en disent quoi? # character=FRED_GALLANT invisible

Teacher: Ils attendent qu’on leur propose quelque chose. Ils veulent préserver leur réputation à tout prix. # character=TEACHER_V2 expression=sterness

Fred: Mais qu’est-ce qu’on va faire si la presse se jette là-dessus pour nous nuire? # character=FRED_GALLANT invisible

Teacher: Pas avant l’événement quand même? # character=TEACHER_V2 expression=concern

Fred: Mais s’ils cherchent la petite bête? # character=FRED_GALLANT invisible

Teacher: Et toi, tu cherches quoi? # character=TEACHER_V2 expression=concern

~cacher_tout_personnages()
~jouer_musique(theme_choix_cruciaux)

<b>Fred</b> doit décider si elle poursuit ses recherches.

* <b>Fred</b> décide d’abandonner les recherches et d’attendre de voir venir les problèmes.
~points_fin_A2 += 1

* <b>Fred</b> entreprend des recherches. Elle part en croisade.
~points_fin_A2 += 5

~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
<b>Fred</b> est assise à son bureau et tente de trouver des informations pouvant l’aider.

L’<b>agent Moore</b> arrive.
~afficher_personnage(AGENT_MOORE, "slideInUp")

Agent Moore: Hey! Ça fait longtemps qu’on s’est vus. Pour des partenaires. # character=AGENT_MOORE expression=surprise

Fred: J’ai été très prise. # character=FRED_GALLANT invisible

Agent Moore: Alors, ça avance cette infiltration? # character=AGENT_MOORE expression=neutral

Fred: Ça tire à sa fin, tu veux dire. # character=FRED_GALLANT invisible

Agent Moore: Ah oui? # character=AGENT_MOORE expression=surprise

Fred: Oui. C’est presque fini tout ça. Il ne me manque plus qu’une information. Plus qu’une. # character=FRED_GALLANT invisible

Agent Moore: C’est pour ça que tu es là? # character=AGENT_MOORE expression=neutral 

Fred: Oui. # character=FRED_GALLANT invisible

Agent Moore: Tu cherches quoi? # character=AGENT_MOORE expression=neutral

Fred: Tu veux m’aider? # character=FRED_GALLANT invisible

Agent Moore: Si on ne peut plus s’aider entre partenaires. # character=AGENT_MOORE expression=concern

Fred: Je cherche des informations sur ce qui se faisait avant avec les comportements toxiques en ligne. # character=FRED_GALLANT invisible

Agent Moore: Tu ne sais pas qu’ils ne faisaient rien? # character=AGENT_MOORE expression=neutral

Fred: Non, ils faisaient forcément quelque chose. Ça me donnerait un point de départ. # character=FRED_GALLANT invisible

Agent Moore: Un point de départ pour quoi? J’ai l’impression que tu t’es investie un peu trop dans ton dossier, Gallant. # character=AGENT_MOORE expression=concern

Fred: Pourquoi tu dis ça? # character=FRED_GALLANT invisible

Agent Moore: Il faut que tu appliques ce qu’on nous a enseigné. # character=AGENT_MOORE expression=sterness

Fred: Qu’est-ce que tu insinues? # character=FRED_GALLANT invisible

Agent Moore: Je n’insinue rien. Tu dois appliquer la loi, pas tenter de la changer. Ils t’ont eu, hein? Tu penses que ce sont de bonnes personnes et qu’ils bâtissent quelque chose de bien? Peut-être même que tu doutes du bien-fondé de l’illégalité. Tu les as beaucoup aidés? # character=AGENT_MOORE expression=sterness

Fred: Je ne vois pas de quoi tu parles. # character=FRED_GALLANT invisible

Agent Moore: Mais si tu vois. Tu vois trop bien. Tu es dans l’eau chaude, c’est ça? # character=AGENT_MOORE expression=concern

Fred: Pas du tout. # character=FRED_GALLANT invisible
 
Agent Moore: Tu peux garder ça pour toi, mais tu ne le pourras pas longtemps. J’ai surpris une conversation entre Miller et Beaulieu. Ils te surveillent, tu savais? # character=AGENT_MOORE expression=sterness

Fred: Ça n’a rien à voir! # character=FRED_GALLANT invisible

Agent Moore: Ça a tout à voir. Tu as donné la bonne date au chef? # character=AGENT_MOORE expression=neutral

Fred: Je n’ai même pas encore la date! # character=FRED_GALLANT invisible

Agent Moore: Bon, écoute. Tes choix, ça te regarde. S’il se faisait quelque chose avant la loi, je connais quelqu’un qui saurait. # character=AGENT_MOORE expression=sterness

Fred: Mais pourquoi tout le monde prend ça autant à la légère? # character=FRED_GALLANT invisible

Agent Moore: C’est juste incontrôlable. S’ils réussissent à ramener les jeux, on est tous au chômage. On va devoir changer de département. Mais ils ne règleront jamais le problème. Les jeux vidéo sont conçus pour canaliser la violence, pas l’arrêter. # character=AGENT_MOORE expression=dejection 

Fred: Si ce que tu dis est vrai, on s’en va effectivement vers un fiasco. Qui est la personne dont tu m’as parlé? # character=FRED_GALLANT invisible

Agent Moore: Laisse-moi voir…où j’ai mis ça? # character=AGENT_MOORE expression=concern

~ajouter_contact(JUGE_ABBOTT)

Agent Moore: Ah voilà. C’est un ancien juge. Le <b>JUGE ABBOTT</b>. # character=AGENT_MOORE expression=neutral

~cacher_tout_personnages()

~afficher_fond(maison_juge_abbott)
~jouer_musique(theme_general)

<b>Fred</b> entre dans le bureau de l’ancien <b>juge Abbott</b>. Il y a des dizaines de chats partout dans la maison.

~afficher_personnage(JUGE_ABBOTT, "slideInUp")

Fred: Merci de me recevoir. # character=FRED_GALLANT invisible

Juge Abbott: Je n’ai pas souvent de visiteurs. Mes amis à poils me tiennent compagnie, mais j’ai perdu le contact avec la plupart des personnes que je connaissais à l’époque. # character=JUGE_ABBOTT expression=melancholy

Fred: Que s’est-il passé? Vous avez pris votre retraite? # character=FRED_GALLANT invisible

Juge Abbott: On m’a plutôt indiqué que la retraite était ma meilleure option. # character=JUGE_ABBOTT expression=dejection

Fred: Pourquoi vous a-t-on invité à prendre votre retraite plus tôt? # character=FRED_GALLANT invisible

Juge Abbott: Vous venez me voir pourquoi exactement? # character=JUGE_ABBOTT expression=concern

Fred: Je… je cherche des façons de diminuer les comportements toxiques sur les plateformes de jeux vidéo en ligne. # character=FRED_GALLANT invisible

Juge Abbott: Comment?!!?? # character=JUGE_ABBOTT expression=surprise

Fred: Oui… euh… ce n’est toujours pas légal, mais on essaie, un groupe essaie de redorer le blason des jeux vidéo et organise… # character=FRED_GALLANT invisible

Juge Abbott: Pardon? J’ai bien entendu? Vous allez rendre les jeux légaux à nouveau? # character=JUGE_ABBOTT expression=surprise

Le <b>juge Abbott</b> se met à sauter de joie et à danser.

Fred: On tente de créer un gros événement. Mais le jeu qu’on a choisi est victime de son succès. Différents groupes y jouent et maintenant, on a peur qu’il y ait des comportements toxiques pendant l’événement qui devrait faire en sorte que l’opinion publique penche en notre faveur. # character=FRED_GALLANT invisible

Juge Abbott: Bien, bien! C’est pour ça très exactement qu’on m’a montré gentiment la porte. # character=JUGE_ABBOTT expression=wonder

Fred: Pourquoi donc? # character=FRED_GALLANT invisible

Juge Abbott: Parce que je m’étais prononcé contre la <i>Loi Game Over</i> à l’époque. # character=JUGE_ABBOTT expression=melancholy

Fred: Ah oui? Et pour quelles raisons? # character=FRED_GALLANT invisible

Juge Abbott: Parce que toute prohibition finit par amplifier le problème. Au lieu de jouer à l’autruche, il vaut mieux bien réglementer et exercer un contrôle responsable, examiner les comportements problématiques et y remédier dans les limites déterminées par le droit. # character=JUGE_ABBOTT expression=sterness 

Fred: Je vois. Et votre point de vue n’était pas populaire. # character=FRED_GALLANT invisible

Juge Abbott: C’est le moins qu’on puisse dire! # character=JUGE_ABBOTT expression=neutral

Fred: Quelle était votre position par rapport aux comportements toxiques? # character=FRED_GALLANT invisible

Juge Abbott: La cour! # character=JUGE_ABBOTT expression=sterness 

Fred: La cour? Vous voulez dire un tribunal? # character=FRED_GALLANT invisible

Juge Abbott: Oui! Un système de délation, mais qui prévoit que la personne accusée puisse se défendre et expliquer ses gestes. Une sorte de présomption d’innocence, mais appliquée à l'univers des jeux vidéo. # character=JUGE_ABBOTT expression=satisfaction

Fred: Intéressant, mais je n’aurai pas le temps de monter cela pour l’événement. C’est dans deux ou trois jours tout au plus. # character=FRED_GALLANT invisible

Juge Abbott: Mais j’ai des notes !! Un instant. # character=JUGE_ABBOTT expression=wonder

~cacher_personnage(JUGE_ABBOTT, "slideOutDown")

Le <b>juge Abbott</b> disparaît dans son bureau. <b>Fred</b> entend des bruits pas très rassurants. Le <b>juge Abbott</b> est extatique. 

~afficher_personnage(JUGE_ABBOTT, "slideInUp")

Juge Abbott: Voilà !!! J’ai trouvé! # character=JUGE_ABBOTT expression=satisfaction

Il revient et présente à <b>Fred</b> un épais dossier qui contient un système de tribunal des contrevenants élaboré il y a plus de 30 ans.

~ajouter_document(TRIBUNAL_JEUX_VIDEO)

Juge Abbott: Une simple mise à jour devrait suffire. Je vous souhaite bonne chance! Très heureux que vous soyez venue. # character=JUGE_ABBOTT expression=joy

~ajouter_document(PENALITE_JEUX_VIDEO)

Fred: Merci beaucoup. Je vais examiner ces documents avec soin. # character=FRED_GALLANT invisible

~cacher_tout_personnages()
-> act_9_quiz_2.quiz_9_2

* <b>Fred</b> dévoile au <b>chef Miller</b> les plans de la résistance et les problèmes auxquels ils font face.
~points_fin_A1 += 5

~afficher_fond(bureau_chef_miller)
~ jouer_musique(theme_general)

<b>Fred</b> informe le <b>chef Miller</b> des nouveaux développements.

~afficher_personnage(CHEF_MILLER, "slideInUp")

Fred: Voilà, ils rencontrent maintenant des difficultés avec les comportements toxiques en ligne. Les adeptes sont devenus trop nombreux trop vite, ils ont perdu le contrôle. # character=FRED_GALLANT invisible

Chef Miller: Et en quoi cela peut-il nous aider? # character=CHEF_MILLER expression=neutral

Fred: Vous n’avez qu’à expliquer à l’attaché du premier ministre qu’ils n’ont pas le contrôle, que des mineurs jouent en ligne, que la violence et les comportements toxiques sont légion. Ils perdront beaucoup d’appui. # character=FRED_GALLANT invisible

Chef Miller: Je vois. Et l’événement, c’est quand? # character=CHEF_MILLER expression=neutral

Fred: Dans deux ou trois jours. Pas plus. # character=FRED_GALLANT invisible

Chef Miller: Aurez-vous la date exacte? # character=CHEF_MILLER expression=sterness

Fred: Je préférerais ne pas y retourner. Je n’en peux plus. # character=FRED_GALLANT invisible

Chef Miller: Il me faudrait cette dernière information, Gallant. Ne baissez pas les bras. Il me faut cette information. # character=CHEF_MILLER expression=sterness

Fred: D’accord, je vais voir si je peux l’obtenir. # character=FRED_GALLANT invisible

~cacher_tout_personnages()

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)

<b>Fred</b> et <b>Christopher</b> analysent la situation des comportements toxiques.

~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")

Christopher: Ce n’est pas si grave et ça a toujours été pareil. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Je trouve cela irresponsable de notre part. # character=FRED_GALLANT invisible

Christopher: Tu t’en fais toujours trop. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Qu’est-ce qu’on fait alors? # character=FRED_GALLANT invisible

Christopher: On donne notre ok. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Et c’est pour quand? # character=FRED_GALLANT invisible

Christopher: Est-ce qu’on peut te faire confiance, Fred? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Je ne sais pas ce que j’ai fait pour mériter tant de méfiance. # character=FRED_GALLANT invisible

Christopher: Réponds. # character=CHRISTOPHER_YOUNG expression=wtf

Fred: Mais qu’est-ce que tu crois que je peux faire? # character=FRED_GALLANT invisible

Christopher: Je ne sais pas. Divulguer l’information trop vite à quelqu’un qui ne devrait pas le savoir. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Ça alors! Mais à qui? Et qu’est-ce que ça changerait? # character=FRED_GALLANT invisible

Christopher: Ça peut tout changer si on perd le contrôle. Ça va se jouer sur l’opinion publique. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Bon. Alors, quel est le plan? Je ne participerai pas? Je ne serai pas présente? Après avoir monté l’équipe, préparer les contrats, régler les différends entre les concepteurs… # character=FRED_GALLANT invisible

Christopher: Bon, d’accord, d’accord. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Alors? C’est quand? # character=FRED_GALLANT invisible

Christopher: Demain. # character=CHRISTOPHER_YOUNG expression=neutral
~cacher_tout_personnages()

- -> scene_4

= scene_4
~afficher_fond(news_room_chapitre_9)
~jouer_musique(theme_news)
Le jeu créé et financé par la résistance existe bel et bien. Enquête exclusive de notre journaliste - il a eu accès au jeu avant sa sortie officielle!
~arreter_musique()

	{
		- points_fin_A1 > points_fin_A2 && points_fin_B1 > points_fin_B2:
			-> conclusion_A1_B1.scene_1

		- points_fin_A1 > points_fin_A2 && points_fin_B2 > points_fin_B1:
			-> conclusion_A1_B2.scene_1
			
		- points_fin_A2 > points_fin_A1 && points_fin_B1 > points_fin_B2:
			-> conclusion_A2_B1.scene_1

		- else:
		-> conclusion_A2_B2.scene_1
	}
	
-> fin