=== chapitre_8 ===

= scene_1
~ afficher_fond(transition_8)
<center><titre>Chapitre 8</titre></center><br/><center>Sur le fil</center> # transition
~afficher_fond(bureau_chef_miller)
~jouer_musique(theme_general)
~afficher_personnage(CHEF_MILLER, "slideInUp")

Chef Miller: Gallant, vous m’impressionnez. Vos méthodes sont douteuses, mais votre cran est prometteur. # character=CHEF_MILLER expression=satisfaction

Fred: J’ai besoin de faire une dernière mission, chef. # character=FRED_GALLANT invisible

Chef Miller: Non, c’est impossible. Je ne peux plus cautionner vos conneries. Vous vous tenez trop près de la fine ligne et je crains que vous ne basculiez une fois de trop. # character=CHEF_MILLER expression=sterness

Fred: Je sais, mais laissez-moi une dernière chance. La confiance est revenue avec Christopher et je suis sur le point d’avoir de gros noms à vous livrer. # character=FRED_GALLANT invisible

Chef Miller: Je vous laisse 4 jours pour me donner un nom important. 4 jours. # character=CHEF_MILLER expression=sterness

Fred: J’ai aussi besoin de protection pour mon informatrice. # character=FRED_GALLANT invisible

Chef Miller: Donnez-moi son nom et son adresse et je vais voir ce que je peux faire pour elle. # character=CHEF_MILLER expression=neutral

Fred: Merci, chef. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
<b>Fred</b>, <b>Teacher</b> et <b>Christopher</b> discutent.
~afficher_personnage(TEACHER_V2, "slideInLeft")
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInRight")

Teacher: Les choses bougent vite là-bas. Vous n’êtes plus les bienvenus. Je veux dire, toi, Fred. # character=TEACHER_V2 expression=sterness

Fred: Pourquoi? Il me semble que j’ai livré la marchandise! # character=FRED_GALLANT invisible

Teacher: Oui, mais maintenant, ils travaillent sur le plan politique. Ils ont leurs avocats, pas besoin d’une simple étudiante. # character=TEACHER_V2 expression=sterness

Fred: Et Boris qu’est-ce qu’il en pense? # character=FRED_GALLANT invisible

Teacher: Boris n’est pas payé pour penser. S’il s’oppose aux décisions, il ne fera pas long feu. Moi non plus d’ailleurs. Ces investisseurs ne sont pas des joueurs. C’est seulement une activité lucrative pour eux. # character=TEACHER_V2 expression=concern

Fred: Oui, mais ils ont besoin des joueurs. # character=FRED_GALLANT invisible

Teacher: Oui. Tous les joueurs. # character=TEACHER_V2 expression=neutral

Fred: Qu’est-ce que tu veux dire? # character=FRED_GALLANT invisible

Teacher: Mineurs. Dépendants. Rien ne les dérange. # character=TEACHER_V2 expression=concern

Fred: Je croyais que tu étais d’accord avec eux. # character=FRED_GALLANT invisible

Teacher: Je l’étais. Mais tout le travail qu’on a fait pour former l’équipe m’a fait réfléchir. # character=TEACHER_V2 expression=melancholy

Christopher: Je suis content d’entendre ça. # character=CHRISTOPHER_YOUNG expression=satisfaction

Fred: C’est bien, en effet. # character=FRED_GALLANT invisible

Teacher: J’ai cessé de distribuer des jeux. # character=TEACHER_V2 expression=melancholy

Fred: Bonne chose. # character=FRED_GALLANT invisible

Christopher: Tu peux rester avec nous, si tu veux. # character=CHRISTOPHER_YOUNG expression=neutral

Teacher: Vous ne m’en voulez plus d’être parti? # character=TEACHER_V2 expression=alertness

Christopher: Non. On est en train de bâtir quelque chose de bien. Restons solidaires. # character=CHRISTOPHER_YOUNG expression=neutral

Teacher: Merci, Chris, j’apprécie. # character=TEACHER_V2 expression=joy

Fred: Mais qu’est-ce qu’ils vont dire là-bas? # character=FRED_GALLANT invisible

Teacher: Il ne se passe plus rien chez moi. Boris ne vient plus. C’est devenu du lobby, des chiffres, du PIB, des taxes. Ça n’a plus rien à voir avec une résistance. # character=TEACHER_V2 expression=concern

Fred: Je vois. # character=FRED_GALLANT invisible

Teacher: J’arrête. Je reste avec les vrais. Les joueurs. Mais j’ai une dernière information à vous donner.  # character=TEACHER_V2 expression=satisfaction

Fred: Laquelle? # character=FRED_GALLANT invisible

Teacher: Ils ont parlé de streaming. Ils veulent rendre le jeu disponible aussitôt après l’événement. Les plateformes seront rouvertes. C’est très gros ce qui se prépare.  # character=TEACHER_V2 expression=alertness

Christopher: Du streaming? # character=CHRISTOPHER_YOUNG expression=surprise

Teacher: Oui. Mais nous, on va perdre le contrôle. Nos espoirs, nos rêves d’une communauté de joueurs, tout ça va trop vite.  # character=TEACHER_V2 expression=melancholy

Fred: Et l’équipe? # character=FRED_GALLANT invisible

Teacher: Eux, tant qu’ils créent des ventes et de l’engouement, ils sont protégés.  # character=TEACHER_V2 expression=neutral

Christopher: Ne nous laissons pas faire. Fred, il faut que tu essaies d’en savoir plus. Contacte Boris. Fais l’innocente. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Je suis fatiguée, Christopher. # character=FRED_GALLANT invisible

Christopher: Mais tu as réussi à les convaincre et tu leur as livré la marchandise, ils ne vont pas t’évincer comme ça. Essaie de savoir comment ça marche le streaming et ce qu’ils pensent faire. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Je vais contacter Boris, mais après, j’arrête tout. J’ai fait ma part. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

~afficher_fond(bureau_fred)
~jouer_musique(theme_choix_cruciaux)

<b>Fred</b> doit décider ce qu'elle dira à Boris.

* <b>Fred</b> décide d’effectuer ses recherches de son côté et de ne pas contacter <b>Boris</b>. De toute façon, ça ne servira à rien, <b>Teacher</b> l’a dit.
~points_fin_B2 += 4
~jouer_musique(theme_general)

<b>Fred</b> va sur le Dark Web pour voir les plateformes existantes comme Friv. Cela ne l’aide pas tellement. Pourtant, de fil en aiguille, elle découvre des informations pertinentes. Avant l’interdiction et depuis, plusieurs personnes vivent de leur talent comme joueurs. Ils diffusent des parties ou des extraits de parties et récoltent des commandites.

* <b>Fred</b> décide de mettre cartes sur table avec <b>Boris</b> et de tenter de lui soutirer des informations.
~points_fin_B2 += 2
~afficher_fond(art_house_cafe)
~jouer_musique(theme_general)
~afficher_personnage(BORIS, "slideInUp")
<b>Fred</b> discute avec <b>Boris</b>.

Fred: Merci d’être venu Boris. # character=FRED_GALLANT invisible

Boris: Pas de souci. # character=BORIS expression=neutral

Fred: Mais qu’est-ce qui se passe? Teacher me dit que vous travaillez sans nous désormais? # character=FRED_GALLANT invisible

Boris: Ne le prends pas comme ça. Les investisseurs ne sont pas des enfants de cœur, tu sais. Ils ont leurs avocats, leurs lobbyistes, leurs connexions et leurs secrets aussi. # character=BORIS expression=concern

Fred: Oui d’accord. Mais on a quand même été utiles, non? # character=FRED_GALLANT invisible

Boris: Bien sûr. # character=BORIS expression=satisfaction

Fred: Alors? Qu’en est-il du projet de streaming? # character=FRED_GALLANT invisible

Boris: J’en sais très peu moi-même. # character=BORIS expression=neutral

Fred: Tu m’en diras tant. # character=FRED_GALLANT invisible

Boris: Tu as le droit de ne pas me croire, mais ce que je sais, ce sont des choses que tu pourrais trouver toi-même. # character=BORIS expression=alertness

Fred: Où donc? # character=FRED_GALLANT invisible

<b>Boris</b> donne un bout de papier à <b>Fred</b> sur lequel sont indiqués des hyperliens.

* <b>Fred</b> contacte <b>Boris</b> et lui propose son aide pour la dernière étape de la préparation.
~points_fin_B1 += 4
~afficher_fond(art_house_cafe)
~jouer_musique(theme_general)
~afficher_personnage(BORIS, "slideInUp")
<b>Fred</b> discute avec <b>Boris</b>.

Fred: Merci d’être venu Boris. # character=FRED_GALLANT invisible

Boris: Pas de souci. # character=BORIS expression=neutral

Fred: Je t’ai contacté pour savoir ce que vous attendiez de moi pour la suite. # character=FRED_GALLANT invisible

Boris: Rien. Tu as fait du bon travail, mais maintenant, ils ont pris les dernières démarches en main. # character=BORIS expression=satisfaction

Fred: Ah bon? Et quelles sont les dernières étapes? # character=FRED_GALLANT invisible

Boris: De la politique et des politicailleries. # character=BORIS expression=concern

Fred: Mais encore? # character=FRED_GALLANT invisible

Boris: Tout ce qu’il reste à faire à part le lobby, c’est mettre en place un nouveau réseau de streaming. # character=BORIS expression=neutral

Fred: Mais les joueurs de notre équipe ont déjà des millions de fans. # character=FRED_GALLANT invisible

Boris: Oui, dans d’autres pays. # character=BORIS expression=neutral

Fred: Oui, et ici au aussi. # character=FRED_GALLANT invisible

Boris: Sauf qu’ils sont sur le Dark Web. Ils veulent rafraîchir l’image et partir sur de nouvelles bases. # character=BORIS expression=neutral

Fred: D’accord. Je pourrais peut-être aider? # character=FRED_GALLANT invisible

Boris: Je ne vois pas comment. En fait, pour être honnête, je crois qu’ils ne veulent plus. Ils veulent exercer un certain contrôle et ils ne confient plus de projet à des tiers. # character=BORIS expression=alertness

Fred: Des tiers? # character=FRED_GALLANT invisible

Boris: Mais oui! Qu’est-ce que tu crois? Qu’on fait partie de leur clan? # character=BORIS expression=concern

Fred: Je vois. # character=FRED_GALLANT invisible

Boris: Je te donne tout de même des infos, si tu veux. Mais tu ne peux plus rien faire. Maintenant, les choses ont pris une proportion qui nous échappe. # character=BORIS expression=concern

Fred: Quelles informations? # character=FRED_GALLANT invisible

<b>Boris</b> donne un bout de papier à <b>Fred</b> sur lequel sont indiqués des hyperliens.

* <b>Fred</b> contacte <b>Boris</b> et lui propose son aide pour planifier le streaming. Elle lui avoue que <b>Teacher</b> l’a prévenue.
~points_fin_B1 += 2
~afficher_fond(art_house_cafe)
~jouer_musique(theme_general)
~afficher_personnage(BORIS, "slideInUp")

<b>Fred</b> discute avec <b>Boris</b>.

Fred: Merci d’être venu Boris. # character=FRED_GALLANT invisible

Boris: Pas de souci. # character=BORIS expression=neutral

Fred: Je t’ai contacté pour savoir ce que vous attendiez de moi pour la suite. # character=FRED_GALLANT invisible

Boris: Rien. Tu as fait du bon travail, mais maintenant, ils ont pris les dernières démarches en main. # character=BORIS expression=satisfaction

Fred: Mais qu’est-ce qui se passe? Teacher me dit que vous travaillez sans nous désormais? # character=FRED_GALLANT invisible

Boris: Ah, voilà ce qui t’amène, en fait. # character=BORIS expression=concern

Fred: Mets-toi à ma place. # character=FRED_GALLANT invisible

Boris: Ce n’est pas personnel. # character=BORIS expression=sterness

Fred: Cette phrase! # character=FRED_GALLANT invisible

Boris: Qu’est-ce que tu voudrais que je te dise? # character=BORIS expression=sterness

Fred: Que vous n’avez pas profité de jeunes gens passionnés pour reprendre le contrôle sur un projet qui ne vous dit absolument rien. Que vous avez investi seulement pour générer plus de profits. # character=FRED_GALLANT invisible

Boris: Mais qu’est-ce que tu es naïve! Bien sûr que les investisseurs s’attendent à récolter des profits. Je ne fais pas partie de ceux qui vont s’enrichir avec ça. Je suis dans le même bateau que toi. # character=BORIS expression=wtf

Boris: Tout ce que j’ai, ce sont ces informations. Je peux te les donner, mais ça ne t’avancera pas tellement. Vous ne pouvez pas vous retirer. L’événement arrive et tout est en place. Les jeux sont faits, Fred. # character=BORIS expression=sterness

Fred: Nous allons voir. # character=FRED_GALLANT invisible

<b>Boris</b> donne un bout de papier à <b>Fred</b> sur lequel sont indiqués des hyperliens.
- ~cacher_tout_personnages()
-> quiz_8_1

= quiz_8_1
~ demarrer_quiz(QUIZ_8_1, 2)
~jouer_musique(theme_quiz)
~afficher_document(MARCHE_STREAMING)
// Description du document: Diffuser des sessions de jeux vidéo en direct? Quelle pratique étrange… Ça ne devait être qu’un hobby chronophage pour les joueurs. Voyons voir cela de plus près.
-> quiz_8_1_question_1

= quiz_8_1_question_1
1- Le streaming était une pratique uniquement amateur et il n'était pas possible d’en vivre. # question index=1
+  (8_1_1_a) [{8_1_1_a: VISITE--}Vrai] Vrai
+  (8_1_1_b) [BON--{8_1_1_b: VISITE--}Faux] Faux
 Selon les données d’archives, les cinq streamers les mieux payés dépassent tous le seuil d’un million de dollars de revenus par an (2020). Avec les autres revenus, les sommes peuvent être beaucoup plus importantes. Fait intéressant, les cinq streamers les mieux rémunérés étaient des hommes. La première femme a touché des revenus de 500 000 dollars durant l’année (2020). Autre fait intéressant, les revenus n’étaient pas liés tant au nombre de followers qu’au nombre d’heures visionnées. C’est logique puisque ces revenus sont principalement liés à la publicité. # retroaction
-> quiz_8_1_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_1_question_1

= quiz_8_1_question_2
2- Quelle plateforme de streaming dominait le marché avant l’interdiction des jeux vidéo? # question index=2
+   (8_1_2_a) [{8_1_2_a: VISITE--}Youtube] Youtube
+   (8_1_2_b) [BON--{8_1_2_b: VISITE--}Twitch] Twitch
  Selon les statistiques de 2019, la plateforme Twitch était de loin la plus utilisée (75 % du marché). À noter que la plateforme Mixer, lancée par Microsoft en 2016, a été fermée en 2020 (fusion avec Facebook gaming). # retroaction
-> quiz_8_1_fin
+   (8_1_2_c) [{8_1_2_c: VISITE--}Facebook gaming] Facebook gaming
+   (8_1_2_d) [{8_1_2_d: VISITE--}Mixer] Mixer
 +  (8_1_2_e) [{8_1_2_d: VISITE--}Aucune de ces réponses] Aucune de ces réponses
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_1_question_2

= quiz_8_1_fin
~terminer_quiz()
-> scene_2

=scene_2
~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: On dirait bien que Fred va finalement prendre parti. À vous de voir de quel côté elle penchera… # character=NARRATEUR invisible

~afficher_fond(bureau_fred)
~jouer_musique(theme_choix_cruciaux)
<b>Fred</b> doit décider de sa prochaine action.

* <b>Fred</b> enquête pour mieux comprendre ce qui se met en place dans l’équipe en ce qui concerne le streaming. Elle le fait dans le but de donner quelques informations au <b>chef Miller</b>, et aussi, lui transmettre la date de l’événement.
~points_fin_B2 += 4
~afficher_personnage(CHEF_MILLER, "slideInUp")
~jouer_musique(theme_general)

Fred: L’événement est prévu pour la semaine prochaine, chef. # character=FRED_GALLANT invisible

Chef Miller: Beau boulot Gallant! Vraiment, je n’étais pas certain de vous. Je vous l’admets. # character=CHEF_MILLER expression=satisfaction

Fred: Je sais, c’est normal. # character=FRED_GALLANT invisible

Chef Miller: Je vais prévenir les personnes intéressées. Mais je ne sais plus quoi penser parfois, Gallant. # character=CHEF_MILLER expression=concern

Fred: Par rapport à quoi? # character=FRED_GALLANT invisible

Chef Miller: Les gens ont changé. Ils ne sont plus aussi convaincus que les jeux soient aussi néfastes que le gouvernement le dit. # character=CHEF_MILLER expression=concern

Fred: Oui, je lis les journaux. # character=FRED_GALLANT invisible

Chef Miller: Une chose est certaine, je ne céderai jamais. Jusqu’à mon dernier souffle. J’ai consacré ma vie à protéger les enfants de la dépendance aux jeux vidéo. Si j’échoue, j’échouerai. Mais je ne changerai pas d’avis comme ces hypocrites. # character=CHEF_MILLER expression=sterness

Fred: Je comprends, chef. # character=FRED_GALLANT invisible

Fred: Oh, j’oubliais. J’ai aussi appris que la résistance met en place une plateforme de streaming pour que les joueurs qui feront le tournoi public pour le retour légal des jeux puissent diffuser leurs exploits. Ils organisent un événement qu’une brigade de police seule ne pourra pas contenir. # character=FRED_GALLANT invisible

Chef Miller: Nom d’un chien, Gallant! Il faut intercepter les distributeurs de cette plateforme, les arrêter, les mettre à l’amende! # character=CHEF_MILLER expression=wtf

Fred: Je vais essayer de remonter jusqu’à cette source. # character=FRED_GALLANT invisible

Chef Miller: Le temps presse! # character=CHEF_MILLER expression=wtf

Fred: Oui, je vais faire vite. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

* <b>Fred</b> enquête pour s’assurer que les joueurs de l’équipe ne se sentent pas forcés de délaisser leur auditoire habituel pour en créer un nouveau pour l’événement. La transition entre l’illégalité et la légalité présente quelques défis. Les fans canadiens craignent les représailles.
~points_fin_B2 += 2
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(JEN, "slideInLeft")
~afficher_personnage(PALVID, "slideInRight")
<b>Fred</b> rencontre <b>Jen</b>, <b>Palvid</b> et les autres joueurs de l’équipe.
Fred: Comme toi, Palvid_, as-tu beaucoup de fans? Est-ce qu’ils collaboreront tu crois? # character=FRED_GALLANT invisible

Palvid_: Mes fans sont très discrets et je n’ai pas beaucoup de contacts avec eux. Je fais mon streaming en conséquence de mon style de jeu. Je ne m’adresse pas à eux directement comme d’autres streamers. Je publie des extraits de mes meilleurs jeux. C’est tout. # character=PALVID expression=neutral

Fred: Toi, Jen? # character=FRED_GALLANT invisible

Jen: Ma communauté me suivra, je le crois fermement. # character=JEN expression=amusement

Fred: Bien. Commence à en parler. # character=FRED_GALLANT invisible

Jen: On va y arriver, mais je me sentirais plus à l’aise si tu nous donnais un peu les grandes lignes… je veux dire sur le comportement à adopter. Il y aura peut-être des différences avec les pays dans lesquels on stream légalement et puis…avec ce qui est arrivé.  # character=JEN expression=alertness

Fred: Tu as raison, Jen. Je vais trouver cette information et vous la partager. # character=FRED_GALLANT invisible

Palvid_: Parfait. Je vais faire une petite annonce, mais je garde mon style. Je ne force personne et je n’insiste pas. # character=PALVID expression=sterness

Fred: Ça va, ce sont tes fans, ils vont t’entendre. # character=FRED_GALLANT invisible

~cacher_tout_personnages()

* <b>Fred</b> va demander l’aide de <b>Christopher</b> et de <b>Teacher</b> afin de ne pas perdre le contrôle sur les initiatives de streaming que l’autre faction de la résistance est en train de mettre en place. Ils vont aider à préparer la transition des fans existants vers la plateforme de streaming de l’événement et ce, sans demander la permission de <b>Boris</b>.
~points_fin_B1 += 4
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInLeft")
~afficher_personnage(TEACHER_V2, "slideInRight")
<b>Fred</b>, <b>Christopher</b> et <b>Teacher</b> sont réunis pour discuter de la plateforme de streaming.

Fred: Je vous ai demandé de me recevoir parce que j’ai quelque chose à vous proposer. Il faut qu’on évalue ce qui se faisait avant, quand c’était légal. Il faut qu’on mette au point une approche et qu’on la présente aux joueurs de l’équipe. Il faut qu’on leur demande de faire un appel à leurs fans pour qu’ils soient nombreux à l’événement. On va leur donner le feu vert pour commencer à parler officiellement de l’événement et tout. # character=FRED_GALLANT invisible

Teacher: Tu as parlé à Boris? # character=TEACHER_V2 expression=neutral

Fred: Oui. # character=FRED_GALLANT invisible

Teacher: C’est lui qui t’a confié cette mission? # character=TEACHER_V2 expression=concern

Fred: Non. # character=FRED_GALLANT invisible

Christopher: Ah bon? # character=CHRISTOPHER_YOUNG expression=surprise

Fred: Ce que je vous demande, c’est de m’aider. Et de m’aider à le faire sans leur aval. # character=FRED_GALLANT invisible

Teacher: Tu veux qu’on fasse ça sans qu’ils soient au courant? # character=TEACHER_V2 expression=surprise

Fred: Exactement. # character=FRED_GALLANT invisible

Christopher: Je suis partant. # character=CHRISTOPHER_YOUNG expression=neutral

Teacher: Moi aussi! # character=TEACHER_V2 expression=satisfaction
 ~cacher_tout_personnages()

* <b>Fred</b> décide de demander aux joueurs de l’équipe d’inviter leurs fans à migrer vers la plateforme que proposera la résistance et de le faire en masse. Cela montrera au gouvernement que l’auditoire est varié, nombreux et bien motivé à poursuivre les activités liées aux jeux vidéo, peu importe la décision du gouvernement.
~points_fin_B1 += 2
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(JEN, "slideInLeft")
~afficher_personnage(PALVID, "slideInRight")
<b>Fred</b> rencontre <b>Jen</b>, <b>Palvid</b> et les autres joueurs de l’équipe.
Fred: Si je vous ai convoqué ici ce soir, c’est pour vous annoncer qu’étant donné que la date de l’événement approche, vous avez maintenant le feu vert pour annoncer à vos fans la tenue de l’événement et aussi, on vous demande de les inciter fortement à venir en masse sur la plateforme de streaming de la résistance. L’événement y sera diffusé et on vous demandera d’interagir avec vos fans. Vous vous devrez d’être des exemples pour les amateurs de jeux vidéo. # character=FRED_GALLANT invisible

Palvid_: Je veux bien collaborer à la cause, mais je n’ai pas habitué mes fans à les solliciter pour quoi que ce soit. # character=PALVID expression=concern

Fred: Mais une fois n’est pas coutume! # character=FRED_GALLANT invisible

Palvid_: Je vais faire une annonce, mais je ne suis pas du style vendeur de voitures. # character=PALVID expression=sterness

Jen: Mes fans vont me suivre. Pas de souci. Mais je me demandais… est-ce que vous pourriez nous donner des lignes directrices? Je veux dire, est-ce qu’on pourrait savoir ce qui est interdit? # character=JEN expression=alertness

Fred: Oui, excellente observation, je m’occupe de fournir des informations là-dessus. # character=FRED_GALLANT invisible

~cacher_tout_personnages()

- ~afficher_fond(bureau_fred)
~jouer_musique(theme_general)

Fred, à elle-même: Où pourrais-je trouver de l’information sur le streaming? Je n’ai plus le temps d’aller fouiller dans des archives et puis… par où commencer? # character=FRED_GALLANT invisible
~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: Vous croyiez que c’était terminé? Et non! Il reste du pain sur la planche encore à notre chère agent Gallant. Si elle commençait par le dossier Morris? Vous savez, celui dont lui avait parlé les agents Moore et Lucas… Morris ne streamait-il pas? # character=NARRATEUR invisible

<b>Fred</b> se réveille de sa torpeur.

Fred, à elle même: Encore une piste qui sort de nulle part. Utile, mais étrange… # character=FRED_GALLANT invisible

À l’intérieur du dossier, <b>Fred</b> apprend que Morris streamait sur une plateforme autrefois connue sous le nom de Twitch.

Elle découvre également dans le dossier des informations sur les règles d’utilisation de Twitch à l’époque de la légalité et les politiques des compagnies de jeux vidéo par rapport au streaming.
-> quiz_8_2

= quiz_8_2
~ demarrer_quiz(QUIZ_8_2, 2)
~jouer_musique(theme_quiz)
-> quiz_8_2_question_1

= quiz_8_2_question_1
~afficher_document(REGLES_UTILISATION_TWITCH)
// Description du document: Les règles d’utilisation d’une ancienne plateforme de diffusion de contenu en ligne. La résistance utilise ces vieilles règles pour son propre service de streaming. J’ai intérêt à bien les maîtriser si je veux continuer mon travail (point 10 en particulier).
1- Par définition, les joueurs avaient le droit de diffuser leur partie de jeux vidéo. # question index=1
+  (8_2_1_a) [{8_2_1_a: VISITE--}Vrai] Vrai
+  (8_2_1_b) [BON--{8_2_1_b: VISITE--}Faux] Faux
  Même si instinctivement, j’aurais eu tendance à répondre qu’ils avaient le droit de diffuser en ligne, il semble que c’était plus compliqué que ça…  Même si les joueurs avaient acheté le jeu et que la diffusion de contenu était populaire, a y regarder de plus près, nous savons que le droit d’auteur canadien comportait le droit exclusif de produire ou reproduire la totalité ou une partie importante de l’œuvre, sous une forme matérielle quelconque, d’en exécuter ou d’en représenter la totalité ou une partie importante en public et, si l’œuvre n’est pas publiée, d’en publier la totalité ou une partie importante (voir l’article 3(1) de la Loi sur le droit d’auteur). A priori, les joueurs n’avaient donc pas l’autorisation de diffuser le contenu des jeux vidéo en ligne sans l’accord des détenteurs du droit d’auteur. Dès lors, nous devons consulter les conditions d’utilisation des jeux et déterminer si les éditeurs autorisent ou non ce type d’usage. # retroaction
-> quiz_8_2_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_2_question_1

= quiz_8_2_question_2
~afficher_document(POLITIQUES_COMPAGNIES_JV)
// Description du document: Voici un échantillon des politiques d’éditeurs de jeux vidéo en matière de diffusion de contenu en ligne. Ces documents devraient me permettre d’en savoir plus sur la mise en œuvre des règles de base en matière de streaming. Je devrais aussi être en mesure de déterminer si les éditeurs adoptaient une approche commune ou non.
2- Certains éditeurs de jeux vidéo autorisaient la diffusion en ligne de parties. # question index=2
+  (8_2_2_a) [BON--{8_2_2_a: VISITE--}Vrai] Vrai
 Je remarque dans les archives que des compagnies comme Riot Games ou encore Nintendo toléraient voire encourageaient la diffusion en ligne de parties. C’était a priori tout à leur avantage puisqu’il s’agissait de publicité gratuite. Je note néanmoins que certains éditeurs, par exemple celui du jeu Firewatch, ont demandé à un streamer en particulier de ne plus diffuser de parties de son jeu en ligne. Ceci était lié au comportement du streamer. Comme quoi les compagnies pouvaient vraiment interdire la diffusion en ligne de leurs jeux. # retroaction
-> quiz_8_2_fin
+  (8_2_2_b) [{8_2_2_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_2_question_2

= quiz_8_2_fin
~terminer_quiz()
-> scene_3

= scene_3
~afficher_fond(maison_fred)
~jouer_musique(theme_general)
~afficher_personnage(PALVID, "slideInUp")
Fred: C’est fou les streamers, je ne me doutais pas de l’engouement. # character=FRED_GALLANT invisible

Palvid_: Ah oui! Moi, j’ai commencé à l’envers des autres. # character=PALVID expression=neutral

Fred: Qu’est-ce que tu veux dire? # character=FRED_GALLANT invisible

Palvid_: Je ne jouais pas. Mais j’ai découvert un streamer, Bob Lennon. J’avais 8 ans. # character=PALVID expression=satisfaction

Fred: Wow. Et qu’est-ce qu’il avait de spécial ce streamer? # character=FRED_GALLANT invisible

Palvid_: Je ne sais pas. Mon père était parti. J’avais besoin d’une figure paternelle. # character=PALVID expression=melancholy

Fred: Une figure paternelle! # character=FRED_GALLANT invisible

Palvid_: Oui, je ne rigole pas. Il était drôle. Il était vieux. Il est d’origine française, mais il a déménagé en Suède pour continuer à streamer légalement après l’adoption de la loi par la France. Il a streamé toute sa vie. # character=PALVID expression=melancholy

Fred: Incroyable. Ça ne l’ennuyait pas à la fin? # character=FRED_GALLANT invisible

Palvid_: Non. Il était authentique et un vrai modèle. Un homme bien. # character=PALVID expression=satisfaction

Fred: Je n’imaginais pas cela. Vraiment pas. # character=FRED_GALLANT invisible

Palvid_:Qu’est-ce que tu veux dire? # character=PALVID expression=surprise

Fred: Je veux dire que… je croyais que… # character=FRED_GALLANT invisible

Palvid_: Que l’interdiction était fondée? # character=PALVID expression=sterness

Fred: Tu l’écoutes depuis que tu as 8 ans? # character=FRED_GALLANT invisible

Palvid_: Oui. C’est en le voyant s’amuser que j’ai commencé à vouloir essayer les jeux auxquels il jouait. J’ai même trouvé des archives de collectionneurs, d’anciennes vidéos. Il est très drôle et unique. Il avait beaucoup de fans au Canada, il venait avant. # character=PALVID expression=sterness

Fred: Ah oui? Il venait rencontrer ses fans? # character=FRED_GALLANT invisible

Palvid_: Oui et participer à des événements de streamers. # character=PALVID expression=satisfaction

Fred: Je vois. # character=FRED_GALLANT invisible

Palvid_: Je n’ai pas connu ça. Mais je lui envoyais des commentaires de temps en temps. # character=PALVID expression=neutral

Fred: Et tu as commencé à jouer à 8 ans? # character=FRED_GALLANT invisible

Palvid_: À peu près. # character=PALVID expression=neutral

Fred: Merci d’être venu signer ton contrat ici. J’étais un peu coincée, je ne pouvais pas trop sortir ce soir. # character=FRED_GALLANT invisible

Palvid_: Pas de problème. Si tu me poses toutes ces questions, c’est parce que vous cherchez un streamer, c’est ça? # character=PALVID expression=alertness

Fred: Oui, on va vers cette possibilité. Ça prend du monde à l’événement. Ça prend des vedettes. Les membres de l’équipe, vous apportez déjà beaucoup de visibilité, mais on a besoin de joueurs amateurs avec un gros, gros public. # character=FRED_GALLANT invisible

Palvid_: Ah, je ne vous blâme pas. J’ai moins d’audience que Trevor, de toute façon. Les relations publiques, ce n'est pas mon fort. # character=PALVID expression=melancholy

Fred: Aucun souci. On s’en occupe. Mais tu n’en connaîtrais pas des streamers très populaires? # character=FRED_GALLANT invisible

Palvid_: Pas très difficile à trouver, tu sais. Va un peu sur les plateformes. # character=PALVID expression=amusement

Fred: J’avoue. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG,"slideInUp")
~afficher_personnage(BONNIE_RANDLE_V2,"slideInUp")
~afficher_personnage(VIVIAN,"slideInUp")
<b>Fred</b>, <b>Christopher</b>, <b>Bonnie</b> et <b>Vivian</b> discutent.

Christopher: Ouais, il faut qu’on réfléchisse. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Oui, mais est-ce que vraiment la requête vient de Boris ou de Teacher? # character=FRED_GALLANT invisible

Christopher: Non. C’est notre initiative. # character=CHRISTOPHER_YOUNG expression=neutral

Vivian: Qu’est-ce qu’il y a Fred, tu crains de désobéir aux ordres? # character=VIVIAN expression=wonder

Fred: Non. # character=FRED_GALLANT invisible

Christopher: Laisse-la, Vivian. # character=CHRISTOPHER_YOUNG expression=concern

Fred: C’est juste que l’événement est si proche. # character=FRED_GALLANT invisible

Bonnie: Justement. # character=BONNIE_RANDLE_V2 expression=neutral

Christopher: Laisse-moi lui expliquer, Bonnie. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Quoi, qu’est-ce qu’il y a? # character=FRED_GALLANT invisible

Christopher: On ne rencontre pas les standards, on n’a pas assez d’audience potentielle. Les prévisions parlaient de bassin d’auditoire plus élevé. Il faut que le mouvement soit solide pour que les élus prennent en considération le souhait de la majorité. Il faut que ça soit énorme. Et depuis qu’on a perdu Trevor, on a perdu de l’auditoire. # character=CHRISTOPHER_YOUNG expression=melancholy

Fred: Je sais, je lui en ai déjà parlé, à Palvid_. # character=FRED_GALLANT invisible

Bonnie: Oh! Pauvre lui, il est moins célèbre, mais il est aussi bon! # character=BONNIE_RANDLE_V2 expression=alertness

Fred: Oui, mais il faut compenser pour l'audience perdue, je suis d’accord. On sollicite des streamers. Mais il va falloir être prudents. # character=FRED_GALLANT invisible

Christopher: Tu ne vas pas me dire qu’il y a encore des histoires légales à considérer. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Mais bien sûr, toujours! # character=FRED_GALLANT invisible

Christopher: Y’en a marre! On peut pas juste s’amuser? Il faut quelqu’un qui mobilise les foules. Point. # character=CHRISTOPHER_YOUNG expression=wtf

Fred: Quelqu’un de respectueux aussi. # character=FRED_GALLANT invisible

Vivian: Mais Fred, les gens aiment bien l’impertinence. # character=VIVIAN expression=amusement

Fred: Pas la majorité. Pas dans un cas comme celui-ci. Est-ce que vous avez toujours l’objectif de ramener la légalité? # character=FRED_GALLANT invisible

Christopher: Oui. # character=CHRISTOPHER_YOUNG expression=sterness

Vivian: Bien sûr. # character=VIVIAN expression=neutral

Fred: Alors, il faut un minimum de savoir-vivre quand on porte une telle cause. Toutes les erreurs seront sujettes à critique sévère et pourraient faire la différence entre le retour de la légalité et un renforcement des lois. # character=FRED_GALLANT invisible

Christopher: Mais tu as lu les journaux? Tout le monde attend l’événement, tout le monde est assez convaincu. # character=CHRISTOPHER_YOUNG expression=surprise

Fred: On doit rester prudents. # character=FRED_GALLANT invisible

Vivian: Alors, qu’est-ce qu’on fait? # character=VIVIAN expression=alertness

Fred: On pourrait lancer un concours éclair. On recrute les meilleurs streamers. On leur demande de nous dire pourquoi ils seraient de bons porte-parole pour notre cause. # character=FRED_GALLANT invisible

Christopher: Ah ouais, et on aura le temps de faire quelques vérifications? # character=CHRISTOPHER_YOUNG expression=alertness

Fred: Il le faut. Je m’occupe de la réglementation de l’époque. Toi, tu vérifies leurs profils. # character=FRED_GALLANT invisible
~cacher_tout_personnages()
~afficher_fond(maison_fred)
~jouer_musique(theme_general)

<b>Fred</b> examine les deux dossiers de candidature les plus intéressants.
~afficher_document(FICHE_DESCRIPTIVE_OPULENCE)
//Description du document: OPULENCE: Auditoire vaste. Personnalité appréciée. Humour, virtuosité dans plusieurs types de jeux, grande connaissance des jeux de tous les styles. Un peu soupe au lait, mais ça plaît à l’auditoire qui ne cesse de grandir. Grande fidélité des fans. Beaucoup de commandites.
~ajouter_contact(OPULENCE)
Fred, à elle-même: Voyons voir l'autre candidat... # character=FRED_GALLANT invisible
~afficher_document(FICHE_DESCRIPTIVE_UPPERSTREAMER)
// Description du document: UPPERSTREAMER : Auditoire énorme et fidèle. Impeccabilité des contenus en streaming. Grande conscience éthique et dévouement envers une cause noble : les stéréotypes dans les jeux vidéo. Auditoire extrêmement fidèle. Beaucoup de commandites de qualité. Grande visibilité et beaucoup de commentaires positifs. Connu à l’extérieur du monde des jeux vidéo pour ses prises de position intransigeantes.
~ajouter_contact(UPPER_STREAMER)
<b>Fred</b> doit enquêter sur ces streamers et essayer de voir s’il n’y a pas des comportements problématiques dans leur passé.

Elle consulte les règlements d’époque annexés au dossier Morris.
-> quiz_8_3

= quiz_8_3
~ demarrer_quiz(QUIZ_8_3, 5)
~jouer_musique(theme_quiz)
-> quiz_8_3_question_1

= quiz_8_3_question_1
~afficher_document(LIGNE_CONDUITE_TWITCH)
// Voyons voir ce que prévoyaient les règlements d’époque à propos du contenu que pouvaient diffuser les streamers et à propos de leur comportement.
1- Les streamers pouvaient diffuser n'importe quel contenu. # question index=1
+  (8_3_1_a) [{8_3_1_a: VISITE--}Vrai] Vrai
+  (8_3_1_b) [BON--{8_3_1_b: VISITE--}Faux] Faux
  Les streamers ne pouvaient pas diffuser n’importe quel contenu. Il existait différentes lignes directrices fournies par les diffuseurs de contenu en ligne. Il s’agit par exemple de règles concernant le harcèlement en ligne. Plusieurs streamers ont eu des problèmes par le passé. # retroaction
-> quiz_8_3_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_3_question_1

= quiz_8_3_question_2
2- Les comportement cruels envers les animaux étaient interdits. # question index=2
+  (8_3_2_a) [BON--{8_3_2_a: VISITE--}Vrai] Vrai
 Les lignes directrices ne mentionnaient pas les violences envers les animaux. Dans la section violence et menaces, seuls les cas envers les personnes sont traités. Cependant, les joueurs utilisant la plateforme Twitch devaient également respecter la règle suivante : « Lorsque vous utilisez nos services, vous devez respecter toutes les lois locales, nationales et internationales applicables. Tout contenu ou activité mettant en avant, encourageant, proposant ou sollicitant une activité illégale est interdite » (section « infraction à la loi » des lignes de conduites de Twitch). Dès lors, le droit applicable en matière de traitement des animaux s’appliquait. # retroaction
  -> quiz_8_3_question_3
+  (8_3_2_b) [{8_3_2_b: VISITE--}Faux] Faux
+  (8_3_2_c) [{8_3_2_c: VISITE--}Impossible à dire] Impossible à dire
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_3_question_2

= quiz_8_3_question_3
~afficher_document(SANCTIONS_TWITCH)
3- Il n'existait aucun système de sanctions étant donné que les plateformes désiraient conserver leur public. # question index=3
+  (8_3_3_a) [{8_3_3_a: VISITE--}Vrai] Vrai
+  (8_3_3_b) [BON--{8_3_3_b: VISITE--}Faux] Faux
Selon les règles de la plateforme Twitch, il existait deux grands types de sanctions. Les avertissements et les suspensions (comprenant elles-mêmes plusieurs sous-catégories : les suspensions temporaires ou à durée indéterminée et les restrictions d’usages). Il ne valait mieux pas énerver la plateforme Twitch. # retroaction
  -> quiz_8_3_question_4
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_3_question_3

= quiz_8_3_question_4
4- Les plateformes de diffusion pouvaient mettre fin à la carrière d’un streamer. # question index=4
+  (8_3_4_a) [BON--{8_3_4_a: VISITE--}Vrai] Vrai
Selon les archives, la plateforme Twitch pouvait mettre un terme à la carrière d’un streamer. En effet, Twitch disposait de nouveaux pouvoirs pour sanctionner les joueurs. Il existait bien un mécanisme d’appel, mais ultimement Twitch pouvait décider de fermer un compte ou non. Dans ce cas, un streamer pouvait perdre l’accès à sa communauté et ses revenus.  # retroaction
  -> quiz_8_3_question_5
+  (8_3_4_b) [{8_3_4_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_3_question_4

= quiz_8_3_question_5
5- Les rapports entre les streamers et les plateformes de diffusion étaient équilibrés. # question index=5
+  (8_3_5_a) [{8_3_5_a: VISITE--}Vrai] Vrai
+  (8_3_5_b) [BON--{8_3_5_b: VISITE--}Faux] Faux
Selon les archives que j’ai pu consulter, les rapports entre les plateformes et les streamers étaient à l’avantage des premiers. Il existe de nombreux indices qui vont dans ce sens. Twitch pouvait modifier à tout moment les conditions d’utilisation. Ce n’était pas négociable. Twitch disposait d’une licence d’utilisation du contenu publié sur leur plateforme. Les dispositions en matière de résiliation étaient clairement à l’avantage de la plateforme qui peut fermer des comptes pour n’importe quel motif. Les réclamations à l’encontre de Twitch devaient être effectuées dans un délai d’un an sans quoi elles sont caduques (voir le point 15(e) des conditions d’utilisation). # retroaction
  -> quiz_8_3_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_8_3_question_5

= quiz_8_3_fin
~terminer_quiz()
-> scene_4

= scene_4
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
<b>Fred</b> et <b>Christopher</b> effectuent des recherches.

Fred: J’ai fait quelques recherches, il semble qu’à l’époque il existait des règles de conduite y compris pour les streamers. T’as des résultats sur le passif d’Upperstreamer et d’Opulence? # character=FRED_GALLANT invisible

Christopher: Oui, j’ai fouillé le Dark Web. Le moins qu’on puisse dire, c’est que ça n’est pas tout rose… # character=CHRISTOPHER_YOUNG expression=concern

Fred: Vas-y je t’écoute. # character=FRED_GALLANT invisible

Christopher: Lors d’une vidéo en direct, en 2039, Opulence  a été filmée en train de lancer son chat qui passait devant son écran. Les fans ont réagi et elle a retiré son direct des ondes très peu de temps après l’événement. # character=CHRISTOPHER_YOUNG expression=concern

Christopher: Malgré tout, cela lui a fait une réputation de colérique et elle l’exploite un peu en faisant mine de se fâcher pour tout et pour rien depuis. C’est un peu sa marque de commerce. Elle a fait des excuses publiques pour avoir lancé son chat sur sa chaîne, mais affirme ne pas l’avoir blessé ni lui avoir fait peur. # character=CHRISTOPHER_YOUNG expression=concern

Fred: C’est ennuyeux. C’est peut-être le type de comportement qui pourrait nous valoir des ennuis auprès du public… Et Upperstreamer? S’il te plaît, dis-moi que ce n’est pas la même chose? # character=FRED_GALLANT invisible

Christopher: Non, lui ne fait pas dans la cruauté animale… Mais sur le Dark Web, on peut voir qu’il fait partie de plusieurs organisations dont les Great Americans qui sont connus pour leur extrémisme et leurs positions misogynes. Il est un membre actif de l’association, bien qu’il n’ait jamais été vu dans les manifestations publiques du groupe extrémiste. # character=CHRISTOPHER_YOUNG expression=disdain

Fred: Pas forcément le gendre idéal… Mais est-ce qu’on retrouve du contenu extrémiste sur sa chaîne? # character=FRED_GALLANT invisible

Christopher: Non à ce que je sache. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: C’est déjà ça. Tu as autre chose? # character=FRED_GALLANT invisible

Christopher: Oui, il fait aussi partie d’un groupe climatosceptique très actif pour lequel il ne se gêne pas d’intervenir régulièrement. Il donne des conférences publiques sur le sujet et même s’il n’utilise pas le même pseudonyme, son auditoire de streamer le suit également dans ses combats politiques. # character=CHRISTOPHER_YOUNG expression=disdain

Fred: Et dire qu’on a passé le seuil symbolique des 2,5 degrés d’élévation de température en 2045… 30 ans après l’Accord de Paris. Et il y a encore qui ne croit pas à la réalité des changements climatiques. Affligeant. # character=FRED_GALLANT invisible

Christopher: Tu t’y connais en environnement toi? Mais attends, le meilleur pour la fin… Upperstreamer a également fait 6 mois de prison pour une altercation avec une collègue alors qu’il travaillait comme animateur graphique dans une grande compagnie d’animation d’effets spéciaux. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Dis donc, il n’en rate pas une ce Upperstreamer… Merci d’avoir fait des recherches si approfondies. Voyons voir ce qu’en pense Boris. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(BORIS, "slideInUp")
<b>Fred</b>, <b>Christopher</b> et <b>Boris</b> discutent.

Boris: Mais à quoi avez-vous pensé? # character=BORIS expression=wtf

Christopher: On était en mode solution. # character=CHRISTOPHER_YOUNG expression=neutral

Boris: Vous croyiez que personne ne verrait votre petit concours en ligne? Vous n’avez pas cru bon de nous en parler et vous avez cru que personne ne surveillait les plateformes de streaming pour nous en ce moment? # character=BORIS expression=wtf

Fred: Non, on a pensé qu’on devait élargir l’auditoire. C’est tout. Ça faisait partie de vos demandes. On a cru qu’on avait une certaine marge de manœuvre. Qu’on avait confiance en notre jugement jusqu’à un certain point, que… # character=FRED_GALLANT invisible

Boris: Oui, bon d’accord. Ça va. Alors, qu’est-ce que vous avez obtenu? # character=BORIS expression=sterness

Christopher: Des candidats très célèbres se sont portés volontaires. Ils vont même parler de l’événement sur leur plateforme. En fait, on ne parle plus que du Canada partout dans le monde où les jeux sont encore légaux. # character=CHRISTOPHER_YOUNG expression=satisfaction

Boris: Qui vous avez? # character=BORIS expression=surprise
~cacher_tout_personnages()
~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: Vous devrez encore décider de ce qu’il convient de faire. Allez-vous mettre sous contrat des streamers qui ont des comportements discutables? Avez-vous examiné comme il se doit les paramètres? Allez-vous vous fier à eux ou les faire signer un contrat très contraignant? Réfléchissez-bien aux implications de chacune de vos décisions. Dans trois jours, il sera trop tard, les jeux seront faits. # character=NARRATEUR invisible
~afficher_fond(rue_mcleod)
~jouer_musique(theme_choix_cruciaux)
<b>Fred</b> doit décider qui elle mettra sous contrat.

* <b>Fred</b> propose de laisser tomber le projet. <b>Boris</b> n’est pas content, cela ne faisait pas partie du plan de départ et puis de toute façon, la publicité peut se faire autrement. Plus il y aura de streamers qui en parleront, plus l’événement sera couru. Elle décide de ne mettre personne sous contrat.
~points_fin_B2 += 3

~afficher_fond(bureau_chef_miller)
~jouer_musique(theme_general)
~afficher_personnage(CHEF_MILLER, "slideInUp")

Fred: Je leur ai conseillé de ne mettre personne sous contrat. # character=FRED_GALLANT invisible

Chef Miller: Mais c’était une erreur Gallant! On aurait pu alimenter les craintes du public avec ça !! # character=CHEF_MILLER expression=wtf

Fred: J’ai pensé que ça ne serait pas nécessaire. En fait, maintenant, grâce au concours qui circule encore, tous les streamers en parlent. # character=FRED_GALLANT invisible

Chef Miller: Oui, mais ça aurait été plus efficace de montrer que la résistance paye des gens controversés. # character=CHEF_MILLER expression=sterness

Fred: Je comprends votre déception. Mais l’événement aura lieu dans quelques jours. Je vous indiquerai le lieu, l’heure. On fera une belle descente. Tout le monde ne sera pas au même endroit. Ça va prendre beaucoup d’effectifs. # character=FRED_GALLANT invisible

Chef Miller: Je m’en occupe. Tenez-moi au courant. C’est presque terminé. Ne flanchez pas, Gallant. # character=CHEF_MILLER expression=sterness

Fred: Je tiens le coup. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

* <b>Fred</b> propose qu’on mette <b>Opulence</b> sous contrat, mais selon des conditions très strictes. Aucun comportement à risque ne sera toléré.
~points_fin_B1 += 1

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(OPULENCE, "slideInUp")
<b>Fred</b> et <b>Opulence</b> sont en train de signer le contrat.

Fred: L’incident avec ton chat nous a un peu stressés, je l’avoue. # character=FRED_GALLANT invisible

Opulence: Je ne maltraite pas mon chat! # character=OPULENCE expression=disdain

Fred: Je veux bien te croire, mais tu comprends que dans les circonstances, nous devons nous protéger. Nous exigeons que tu t’engages à ne pas adopter de comportement violent ni impulsif lorsque tu joues. # character=FRED_GALLANT invisible

Opulence: Quand est-ce que je vais avoir accès au jeu? # character=OPULENCE expression=neutral

Fred: Aussitôt que tu signes. # character=FRED_GALLANT invisible

Opulence: Mais c’est quoi cette clause? # character=OPULENCE expression=disdain

Fred: Ça, c’est que ton contrat sera résilié si tu as le moindre comportement impulsif ou violent sur n’importe quelle plateforme. Pas seulement celle de la résistance. # character=FRED_GALLANT invisible

Opulence: Hum hum. # character=OPULENCE expression=neutral

Fred: Tu ne devrais pas hésiter si tu es de bonne foi, rien n’arrivera. # character=FRED_GALLANT invisible

Opulence: Mais ça dépend, il faudrait définir les termes. # character=OPULENCE expression=alertness

Fred: Impulsif? Violent? # character=FRED_GALLANT invisible

Opulence: Oui. Je n’ai pas envie que vous m’imposiez des pénalités ou que vous résiliiez mon contrat pour rien. # character=OPULENCE expression=sterness

Fred: Tu comprends les enjeux? # character=FRED_GALLANT invisible

Opulence: Je comprends aussi les miens. # character=OPULENCE expression=sterness

Fred: Mais tu n’aimerais pas que les jeux vidéo redeviennent légaux? # character=FRED_GALLANT invisible

Opulence: Oui. Comme tout le monde. Mais j’ai ma vie à gagner, mes fans à garder et si je fais ce métier, ce n’est pas pour me faire surveiller comme si j’étais une employée de bureau de 9 à 5. # character=OPULENCE expression=neutral

Fred: Je vois. Tu as des scrupules à t’engager à ne pas avoir de comportement violent! # character=FRED_GALLANT invisible

~ajouter_contact(OPULENCE)

Opulence: Non! Je veux juste que ce soit clarifié! Le moins d’interprétation possible. Je ne suis pas née hier! # character=OPULENCE expression=disdain

~afficher_fond(maison_fred)
~jouer_musique(theme_general)

Opulence: Voilà. Nous sommes un petit groupe de streamers et on aimerait bien que vous preniez connaissance de nos revendications. # character=OPULENCE expression=sterness

Fred: Mais, Opulence, ce n’est pas possible. Pas dans les circonstances. On doit se protéger. Tu comprends, si la résistance est dans la controverse, le gouvernement va faire des points contre nous. Ça pourrait faire tourner l’opinion publique. # character=FRED_GALLANT invisible

Opulence: Ouais. Et nous on risque tout. Si la légalisation devait ne pas se faire, il ne nous resterait rien. Rien du tout. Puis, si ça marche, on veut un syndicat. # character=OPULENCE expression=sterness

Fred: Un syndicat? # character=FRED_GALLANT invisible

Opulence: Ouais. C’était en train de se parler quand le Canada a adopté la <i>Loi Game Over</i>. # character=OPULENCE expression=sterness

Fred: Mais… Comment allez-vous justifier cela? # character=FRED_GALLANT invisible

Opulence: On a déjà beaucoup d’informations et d’exemples de situations injustes. On veut une certaine liberté. On n’est pas des vendeurs. On s’amuse avec vos jeux, mais on a la liberté d’expression. On ne veut pas se faire virer sur un mot qu’on aurait dit. # character=OPULENCE expression=neutral

Fred: Lancer son chat, c’est pas des mots, ça. # character=FRED_GALLANT invisible

Opulence: Vous voyez! Vous allez me faire payer combien de fois pour un simple geste malheureux? Est-ce que j’ai pas droit à une deuxième chance? # character=OPULENCE expression=disdain

Fred: Est-ce que je sais quand tu vas décider d’adopter un comportement inapproprié? # character=FRED_GALLANT invisible

Opulence: D’abord, j’avais que 15 ans! Et puis ça fait 4 ans. Est-ce que quelqu’un a rapporté autre chose après? # character=OPULENCE expression=disdain

Fred: Non. # character=FRED_GALLANT invisible

Opulence: Alors? # character=OPULENCE expression=sterness

Fred: Non, mais tu as une réputation d’impulsive. # character=FRED_GALLANT invisible

Opulence: C’est un personnage pour garder les fans sous tension. Mais je n'ai rien fait de répréhensible depuis. Il y a de l’abus. Vous nous tenez avec vos contrats et après on n’est plus nous-mêmes. On a peur que vous interprétiez tout de travers. # character=OPULENCE expression=disdain

Fred: Bon. Laisse-moi revoir tes revendications. Je vais lire cela à tête reposée et te revenir avec une contre-proposition. D’accord? # character=FRED_GALLANT invisible

Opulence: D’accord. Mais il y a une chose qui est non-négociable. Si on déménage sur la plateforme de la résistance, mes potes et moi on veut un syndicat. # character=OPULENCE expression=sterness

Fred: Si la légalisation se fait. # character=FRED_GALLANT invisible

Opulence: Si la légalisation se fait. # character=OPULENCE expression=neutral
~cacher_tout_personnages()
-> act_8_quiz_4.quiz_8_4

* <b>Fred</b> propose que la résistance refasse ses devoirs et cherche des streamers peut-être moins populaires, mais sans controverse.
~points_fin_B1 += 5

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInLeft")
~afficher_personnage(BORIS, "slideInRight")

<b>Fred</b>, <b>Christopher</b> et <b>Boris</b> discutent.

Fred: Bon alors, je recommande qu’on oublie ce projet. On est pressé, j’en conviens, mais s’il fallait qu’un de ces streamers nous fasse une réputation controversée, cela nuirait grandement à la résistance et au projet de retour de la légalité. Il faut refaire nos recherches et voir ce qu’on peut trouver. # character=FRED_GALLANT invisible

Christopher: Ce qu’il reste, ce sont des streamers avec moins d’auditoires, beaucoup moins. Moins que Palvid_!  # character=CHRISTOPHER_YOUNG expression=concern

Boris: Mais si on en engageait plusieurs? # character=BORIS expression=neutral

Fred: On les payerait moins cher? # character=FRED_GALLANT invisible

Boris: Voilà. # character=BORIS expression=neutral

Christopher: Peut-être que c’est mieux, en effet. # character=CHRISTOPHER_YOUNG expression=alertness

Boris: D’accord, refaites des recherches. Trois streamers me semblent un bon compromis. # character=BORIS expression=neutral

Christopher: Mais sérieusement, même les trois prochains les plus populaires, ils ne rejoignent pas Upperstreamer à lui tout seul. # character=CHRISTOPHER_YOUNG expression=concern

Fred: Tant pis. Il faudra que d’autres en parlent. # character=FRED_GALLANT invisible

Boris: Bon, vous nous soumettrez vos suggestions d’ici demain, 17h. On prépare les contrats. # character=BORIS expression=sterness

Christopher: Mais je vous dis qu’ils ne sont pas aussi connus et n’ont pas autant d’impact sur leurs fans. # character=CHRISTOPHER_YOUNG expression=alertness

Fred: C’est le mieux qu’on puisse faire quand même. # character=FRED_GALLANT invisible

Christopher: Mais moi j’aime Opulence et je ne lance pas mon chat par la fenêtre pour autant, c’est absurde! # character=CHRISTOPHER_YOUNG expression=wtf

Boris: On dirait que tu n’y comprends rien aux relations publiques, mon gars. # character=BORIS expression=sterness

Fred: Bon, un peu de calme. On est mieux d’être prudents, Chris. # character=FRED_GALLANT invisible

Christopher: Bon, faites ce qui vous plaît, mais moi, je ne recrute pas des ploucs. # character=CHRISTOPHER_YOUNG expression=disdain

Fred: Je vais m’en occuper. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")

<b>Fred</b> et <b>Christopher</b> discutent de plusieurs streamers qu'ils peuvent recruter pour les inviter à faire partie de la résistance en tant que streamer sur la plateforme officielle de la résistance.

Fred: J’ai identifié cinq streamers potentiels. # character=FRED_GALLANT invisible

 Christopher: On va leur demander de parler de la résistance et de l’événement qui s’en vient. Ils seront rémunérés selon un système de vues et d’abonnés. Certains signerons un contrat plus élaboré pour qu’ils deviennent les effigies officielles de la résistance. # character=CHRISTOPHER_YOUNG expression=satisfaction

Fred: Fantastique! De toute façon, on a besoin d’eux. Faisons en sorte qu’ils se joignent au mouvement. # character=FRED_GALLANT invisible

Christopher: Qu’est-ce qu’on va leur dire s’ils ont peur des conséquences? Par exemple, s’ils appréhendent une descente ou des arrestations… # character=CHRISTOPHER_YOUNG expression=wonder

Fred: Il faudra être honnête avec eux et leur dire que c’est une possibilité. Par contre, on va aussi préparer leur contrat en conséquence. # character=FRED_GALLANT invisible

Christopher: En conséquence? Qu’est-ce que tu as en tête Fred? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: On pourrait leur proposer d’être mieux payés bien sûr, mais également d’envisager la création d’un syndicat. # character=FRED_GALLANT invisible

Christopher: Tu veux dire leur apporter une sécurité par rapport à ceux qui tirent les ficelles? # character=CHRISTOPHER_YOUNG expression=wonder

Fred: Exactement. On va leur proposer de pouvoir se réunir et d’avoir une forme de recours dans des situations qui seraient potentiellement injustes. # character=FRED_GALLANT invisible

Christopher: Mais tu sais Fred, on a peu de pouvoirs… On ne pourrait pas plutôt inclure une clause dans leurs contrats? On pourra ainsi se laisser de la marge pour travailler sur l’implantation du syndicat après l’événement, lorsque les jeux seront légaux. # character=CHRISTOPHER_YOUNG expression=sterness

Fred: D'accord. Faisons comme ça. # character=FRED_GALLANT invisible

~cacher_tout_personnages()
-> act_8_quiz_4.quiz_8_4

* <b>Fred</b> propose qu’on mette les deux streamers les plus populaires sous contrat et qu’on réfléchisse à des façons de faire face à la controverse s’il y a lieu, après. On a surtout besoin de visibilité et la résistance n’aura pas nécessairement à répondre des actes passés de streamers qui devaient composer avec l’illégalité de toute façon.
~points_fin_B2 += 5

~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInLeft")
~afficher_personnage(BORIS, "slideInRight")

<b>Fred</b>, <b>Christopher</b> et <b>Boris</b> discutent.

Fred: Bon. On va les mettre sous contrat tous les deux. Ils vont nous donner un énorme coup de pouce! # character=FRED_GALLANT invisible

Boris: Et qui répondra d’eux s’ils ont des écarts de conduite? # character=BORIS expression=sterness

Christopher: On est tous au courant de ce qu’il y a de potentiellement controversé dans leur passé. On n’a qu’à préparer des réponses aux objections. # character=CHRISTOPHER_YOUNG expression=neutral

Boris: Vous devrez leur dire qu’ils doivent se tenir tranquilles pendant le lancement de l’événement. Après, on n’aura qu’à les dissocier et quand la légalité sera de retour, de toute façon, nous n’aurons plus besoin d’eux. # character=BORIS expression=neutral

Fred: Tu veux dire qu’on leur prépare un contrat de courte durée? Juste pour le lancement? # character=FRED_GALLANT invisible

Boris: Je veux dire qu’on ne s’embarrassera pas d’éléments à problèmes dans l’équipe. On va s’en servir plutôt. # character=BORIS expression=satisfaction

Fred: Très propre. # character=FRED_GALLANT invisible

Christopher: Ne t’en fais pas, Fred. C’est un monde comme ça. Ils vont se trouver d’autres contrats. Ils sont très célèbres. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Oui d’accord. Mais ça ne me dit rien qui vaille pour la légalisation. # character=FRED_GALLANT invisible

Boris: Qu’est-ce que tu veux dire? # character=BORIS expression=concern

Fred: Je pensais qu’on montrerait l’exemple et la volonté de la résistance à agir de façon éthique. Pas comme avant. # character=FRED_GALLANT invisible

Boris: Il sera toujours temps pour l’idéalisme plus tard. # character=BORIS expression=sterness
~cacher_tout_personnages()

~afficher_fond(maison_fred_telephone)
~jouer_musique(theme_general)

<b>Fred</b> reçoit un message texte d’<b>Opulence</b>.

Opulence: Hey. Tu veux bien jeter un œil là-dessus. # character=OPULENCE invisible

Fred: Qu’est-ce que c’est? # character=FRED_GALLANT invisible

Opulence: Nos conditions # character=OPULENCE invisible

Fred: Je croyais que tout était réglé? # character=FRED_GALLANT invisible

Opulence: On a un petit amendement à apporter au contrat. On veut pouvoir se syndiquer. # character=OPULENCE invisible

Fred: Tu veux dire qu’UpperStreamer aussi exige des choses? # character=FRED_GALLANT invisible

Opulence: C’est ça ou on n’embarque pas. # character=OPULENCE invisible

Fred: Laisse-moi regarder ce que c’est. # character=FRED_GALLANT invisible

Opulence: (pouce en l’air) # character=OPULENCE invisible
-> act_8_quiz_4.quiz_8_4

- -> scene_5

= scene_5
~afficher_fond(news_room_chapitre_8)
~jouer_musique(theme_news)
Dossier choc : les adeptes de jeux vidéo de plus en plus actifs malgré l’interdiction!
~arreter_musique()
-> chapitre_9.scene_1
