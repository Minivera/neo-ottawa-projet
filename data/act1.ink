=== chapitre_1 ====

= scene_1
~afficher_fond(transition)
<center><titre>Chapitre 1</titre></center><br/><center>Connexions</center> # transition
~ afficher_fond(bureau_fred)
~ jouer_musique(theme_commissariat)
~ afficher_personnage(CHEF_MILLER, "slideInUp")
Chef Miller: C’est une excellente nouvelle, Gallant. # character=CHEF_MILLER expression=satisfaction
Fred: Ça a peut-être été un peu trop facile. Ça m’inquiète. Je ne crierais pas victoire tout de suite. # character=FRED_GALLANT invisible
Chef Miller: Vous n’avez pas beaucoup de temps. Les médias ne tarderont pas à s’emparer de l’affaire Kane et on va être dans l’eau chaude. Je vais être clair : je veux voir mon budget renouveler l’an prochain. Trouvez un coupable, Fred. # character=CHEF_MILLER expression=concern
Fred: J’y travaille! # character=FRED_GALLANT invisible
Le chef Miller quitte le bureau de Fred.
~cacher_personnage(CHEF_MILLER, "slideOutDown")
~jouer_effet_sonore(claquement_porte)
~ jouer_effet_sonore(cogner_porte)
~afficher_personnage(AGENT_LUCAS, "slideInLeft")
Agent Lucas: Eh ben! Tu veux lui en mettre plein la vue au chef Miller! Infiltrer la résistance. # character=AGENT_LUCAS expression=amusement
~afficher_personnage(AGENT_MOORE, "slideInRight")
Agent Moore: On a tous essayé. Je veux juste que tu le saches. # character=AGENT_MOORE expression=neutral
Agent Lucas: Bah, laisse-le rêver! # character=AGENT_LUCAS expression=amusement
Agent Moore: Quand tu seras brûlée toi aussi, ils recruteront d’autres jeunes ambitieux pour les jeter dans le feu à leur premier quart de travail. # character=AGENT_MOORE expression=amusement
Agent Lucas: Qui est ton contact? # character=AGENT_LUCAS expression=neutral
~ jouer_musique(theme_choix_cruciaux)
*Fred ne répond rien et elle quitte le bureau
  ~ points_fin_3 += 1
  ~ cacher_tout_personnages()
  -> scene_2
*Fred répond qu'elle n'en sait pas tellement pour le moment. Mais elle donne le pseudo de <b>Teacher</b>. De toute façon, ses collègues y auront accès.
  ~ points_fin_2 += 1
 Fred: J’en suis encore à tenter le coup. J’ai un pseudo découvert dans les conversations de la victime. # character=FRED_GALLANT invisible
 Agent Moore: Ouais. Toute une piste. # character=AGENT_MOORE expression=cruel
 Agent Lucas: Quel pseudo? # character=AGENT_LUCAS expression=neutral
  Fred: Teacher. # character=FRED_GALLANT invisible
  Agent Lucas: Je crois que ce nom est déjà apparu dans une enquête. Attends. # character=AGENT_LUCAS expression=neutral
Agent Moore: Oui, c’était l’affaire MORRIS. Non résolue. # character=AGENT_MOORE expression=concern
Fred: Je peux lire ça? # character=FRED_GALLANT invisible
Agent Lucas: Absolument! # character=AGENT_LUCAS expression=neutral
~jouer_effet_sonore(dossier_depose_bureau)
<b>L’Agent Lucas</b> donne le dossier <b>Morris</b>. Aucune information n’est déterminante, <b>Teacher</b> est aussi insaisissable que dans les messages sur le téléphone de <b>Kane</b>. Cependant, une autre adresse potentiellement liée à la résistance apparaît : le 530 rue McLeod. C’est le point de rendez-vous que <b>Christopher</b> vous a donné pour vous présenter aux autres.
*Fred donne le nom de son contact, la fille, pas <b>Christopher</b>
  ~ points_fin_1 += 1
Fred: Il y a une fille, Bonnie. # character=FRED_GALLANT invisible
Agent Lucas: Quel est son degré d’implication? Je suis désolé, mais ce nom ne me dit rien. # character=AGENT_LUCAS expression=neutral
Agent Moore: Jamais entendu parler. # character=AGENT_MOORE expression=neutral
Fred: Elle dit faire partie de la résistance et vouloir en sortir. # character=FRED_GALLANT invisible
Agent Lucas: Très noble de sa part. # character=AGENT_LUCAS expression=amusement
Agent Moore: Elle t’a donné quelque chose au moins? # character=AGENT_MOORE expression=neutral
Fred: Pas vraiment encore. Ses activités au sein de la résistance sont limitées. # character=FRED_GALLANT invisible
Agent Moore: Évidemment. # character=AGENT_MOORE expression=neutral
Agent Lucas: Bonnie…Bonnie… quel âge? # character=AGENT_LUCAS expression=wonder
Fred: Mineure. # character=FRED_GALLANT invisible
Agent Moore: C’est pas une piste ça. C’est un terrain miné. # character=AGENT_MOORE expression=concern
Fred: Je sais. Mais c’est la seule que j’ai. # character=FRED_GALLANT invisible
-   //transition - image non définie
~cacher_tout_personnages()
  -> scene_2

  = scene_2
 ~afficher_fond(bureau_fred)
~cacher_fond()
~jouer_musique(theme_narrateur)
Narrateur: Entrez dans la résistance maintenant. Plongez, sans vous retourner. Parce que lorsque vous en sortirez, vous ne serez plus la même personne. Plus jamais la même. Allez au rendez-vous que Christopher a fixé. C’est l’heure. Il est temps. # character=NARRATEUR invisible center
<b>Fred</b> se réveille de sa torpeur.
// TODO=(animation: transition du fond noir vers le lieu avec “des yeux qui s’ouvrent” / cligner des yeux?)
~arreter_musique()
~jouer_effet_sonore(reveille_brusque)
~afficher_fond(bureau_fred)
~jouer_musique(theme_fred)
Fred, <i>à elle-même</i>: Ces absences sont de plus en plus fréquentes.  # character=FRED_GALLANT invisible
Elle vérifie son PDA.
Fred, <i>à elle-même</i>: Aucune nouvelle info. Étrange. # character=FRED_GALLANT invisible
Fred, <i>à elle-même</i>: En route pour le 530 McLeod. # character=FRED_GALLANT invisible
// TODO= Transition - Image non définie encore
-> scene_3

  = scene_3
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
Christopher: Bienvenue Fred. Voici VIVIAN, RONNY et TOM. # character=CHRISTOPHER_YOUNG expression=joy
~afficher_personnage(VIVIAN, "slideInUp")
~afficher_personnage(RONNY, "slideInUp")
~afficher_personnage(TOM, "slideInUp")
Fred: Bonjour. Fred. # character=FRED_GALLANT invisible
Vivian: Salut. #character=VIVIAN expression=joy
Christopher: Je veux te montrer quelque chose. # character=CHRISTOPHER_YOUNG expression=neutral
~cacher_tout_personnages()
-> act_1_quiz_1.quiz_1

=scene_3_suite
~afficher_fond(rue_mcleod)
~jouer_musique(theme_general)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(VIVIAN, "slideInUp")
~afficher_personnage(RONNY, "slideInUp")
~afficher_personnage(TOM, "slideInUp")
Fred: Mais ça signifie qu’il y avait déjà un certain contrôle sur le contenu des jeux même avant l’arrivée de la <i>Loi Game Over</i>?! # character=FRED_GALLANT invisible
Christopher: Tu as tout compris!# character=CHRISTOPHER_YOUNG expression=satisfaction
Christopher: As-tu déjà entendu parler de l'ESRB? # character=CHRISTOPHER_YOUNG expression=satisfaction
Fred: Qu’est-ce c’est que ça? # character=FRED_GALLANT invisible
Christopher: Un organisme qui s’occupait d’évaluer le contenu des jeux avant leur commercialisation...# character=CHRISTOPHER_YOUNG expression=neutral
Tom: Les jeux qui étaient commercialisés avant la <i>Loi Game Over</i>, ce n’est pas ce que les gens croient… Ils étaient contrôlés. De nombreux jeux non violents et grand public étaient acceptés par le gouvernement. #character=TOM expression=disgust
Christopher: Regarde ça. # character=CHRISTOPHER_YOUNG expression=neutral
<b>Christopher</b> montre à <b>Fred</b>, une dizaine de pochettes de jeux vidéo avec un classement de l’ESRB « pour tous ».
~afficher_document(POCHETTES_JEUX)
Fred: Qu’est-ce que c’est que ce logo? # character=FRED_GALLANT invisible
Christopher: Je te l’ai dit, c’est l’ESRB. # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Oui, mais ça veut dire quoi? # character=FRED_GALLANT invisible
Christopher: Si tu veux comprendre, cherche. # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Pourquoi tu ne me le dis pas? # character=FRED_GALLANT invisible
Christopher: Parce que je ne sais pas avec certitude. Ça date d’avant l’interdiction. C’était un système de classement je crois. Pourquoi ça a de l’importance? # character=CHRISTOPHER_YOUNG expression=sterness
Fred: Je vois. Il y avait donc des classements. C’est extrêmement important.# character=FRED_GALLANT invisible
~ajouter_contact(TOM)
~ajouter_contact(VIVIAN)
~ajouter_contact(RONNY)
~cacher_tout_personnages()
//TODO=Transition - Image non définie encore
->scene_4

=scene_4
~afficher_fond(bureau_fred)
~jouer_musique(theme_police)
~afficher_personnage(AGENT_MOORE,"slideInUp")
Agent Moore: Tu n’as pas une famille à aller voir? Un lit? # character=AGENT_MOORE expression=concern
Fred: J’ai juste besoin de comprendre ceci. Je n’en ai plus pour longtemps. # character=FRED_GALLANT invisible
Agent Moore: Ne commets pas les mêmes erreurs que nous, Gallant. Rien ne presse. On passe de fausse piste en fausse piste depuis toujours ici. Tu vas t’y habituer! # character=AGENT_MOORE expression=desperation
Fred: Non, justement. Ce n’est pas mon genre. # character=FRED_GALLANT invisible
<b>L’agent Moore</b> quitte le bureau.
~cacher_personnage(AGENT_MOORE, "slideOutDown")
~jouer_effet_sonore(claquement_porte)
<b>Fred</b> téléphone immédiatement à <b>Bonnie</b>.
~jouer_effet_sonore(sonnerie_telephone)
~afficher_personnage(BONNIE_RANDLE_V2, "fadeIn")
Fred: Bonsoir. Désolée pour l’heure. # character=FRED_GALLANT invisible
Bonnie: Ça va, je ne suis pas couchée. #character=BONNIE_RANDLE_V2 expression=neutral phone
Fred: Bien. As-tu parlé à ton frère? # character=FRED_GALLANT invisible
Bonnie: Oui. Il est d’accord pour vous couvrir, mais il ne veut pas mentir. Il va éviter le sujet et répondre de manière évasive si Christopher parle de vous le plus longtemps possible. Il vous conseille de vous dépêcher d’obtenir les infos dont vous avez besoin avant que ça se complique avec Christopher. Il ne veut pas le trahir, c’est un ami. Il le fait seulement parce qu’il n’aime pas que je joue. #character=BONNIE_RANDLE_V2 expression=aversion phone
Fred: Mais s’il est si proche de Young, comment peut-il être en désaccord avec ses activités? # character=FRED_GALLANT invisible
Bonnie: Ce sont des amis d’enfance. Si vous connaissiez mon frère, vous comprendriez. Ce n’est pas toujours noir ou blanc, il dit. Et il veut bien vous aider si vous m’aidez aussi. #character=BONNIE_RANDLE_V2 expression=neutral phone
Fred: Mais si votre frère est si proche de Young pourquoi ne pas lui dire carrément que vous ne souhaitez plus être associée aux activités de la résistance, tout simplement? # character=FRED_GALLANT invisible
Bonnie: Il y a les autres. On n’en sort pas comme ça. C’est secret et ils ont peur.#character=BONNIE_RANDLE_V2 expression=wonder phone
Fred: Pourtant, ils me confient des infos importantes déjà. # character=FRED_GALLANT invisible
Bonnie: Non. Ils testent simplement votre fiabilité. Ce qu’ils vous donnent, n’importe qui d’un peu débrouillard peut le trouver. #character=BONNIE_RANDLE_V2 expression=disdain phone
Fred: Vous avez parlé de moi avec Young? # character=FRED_GALLANT invisible
Bonnie: Non, avec Vivian. #character=BONNIE_RANDLE_V2 expression=neutral phone
Fred: Eh bien? Qu’est-ce qu’il en est? # character=FRED_GALLANT invisible
Bonnie: Ils veulent vous faire passer un test.#character=BONNIE_RANDLE_V2 expression=sterness phone
Fred: Quel test? # character=FRED_GALLANT invisible
Bonnie: Je ne sais pas! Ils ne me disent pas tout, moi non plus.#character=BONNIE_RANDLE_V2 expression=sterness phone
Fred: De quoi avez-vous besoin? # character=FRED_GALLANT invisible
Bonnie: Un programme de protection des témoins. #character=BONNIE_RANDLE_V2 expression=default phone
Fred: Ce n’est pas un peu extrême? # character=FRED_GALLANT invisible
Bonnie: Non. Si je cesse de venir du jour au lendemain, mon frère, vous et moi, nous sommes en danger. #character=BONNIE_RANDLE_V2 expression=default phone
Fred: Je ne crois pas que ce soit quelque chose de courant à la brigade, mais laissez-moi voir ce que je peux faire. # character=FRED_GALLANT invisible
Bonnie: Faites vite. J’ai peur de me trahir.#character=BONNIE_RANDLE_V2 expression=wonder phone
Fred: Restez naturelle, continuez vos habitudes, je vais parler à mon chef aussitôt que possible. # character=FRED_GALLANT invisible
->scene_5

=scene_5
~afficher_fond(siege_esrb)
~jouer_musique(theme_fred)
~afficher_personnage(RECEPTIONISTE, "slideInUp")
Fred, <i>à un réceptionniste</i>: Bonjour, Fred Gallant, brigade anti-jeux vidéo. Est-il possible d’obtenir de l’information sur ce que signifient ces codes? # character=FRED_GALLANT invisible
Réceptionniste: L’ESRB n’a plus ce genre d’activité. #character=RECEPTIONISTE expression=neutral
Fred: Mais y a-t-il un moyen d’avoir accès à de l’information d’avant la <i>Loi Game Over</i>? # character=FRED_GALLANT invisible
Réceptionniste: Vous voulez fouiller dans les archives?  #character=RECEPTIONISTE expression=surprise
Fred: Admettons, oui.# character=FRED_GALLANT invisible
Réceptionniste: Il vous faut une permission spéciale. Avez-vous un mandat, quelque chose?  #character=RECEPTIONISTE expression=neutral
Fred: Non. Simple routine. Il faut que je vérifie certaines informations. # character=FRED_GALLANT invisible
Réceptionniste: Laissez-moi m’informer.  #character=RECEPTIONISTE expression=neutral
Le réceptionniste téléphone à un responsable.
~jouer_effet_sonore(sonnerie_telephone)
Réceptionniste: Oui, j’ai quelqu’un à la réception de la brigade anti-jeux vidéo pour consulter des archives d’avant la <i>Loi Game Over</i>. (pause) Votre nom déjà?  #character=RECEPTIONISTE expression=neutral
Fred: Fred Gallant. # character=FRED_GALLANT invisible
Réceptionniste: Fred Gallant. (pause) Hum hum. Je vois. Oui. Merci.  #character=RECEPTIONISTE expression=concern
~jouer_effet_sonore(raccrocher_telephone)
Réceptioniste: Je suis désolé, je ne pourrai pas vous donner l’accès, ce sont des informations qui sont classées secrètes et ça prend une autorisation. Vous pouvez remplir ce formulaire et vous aurez une réponse d’ici 15 jours ouvrables. Ça ne dépend pas de nous.  #character=RECEPTIONISTE expression=concern
Fred, à elle-même: Je ne suis pas venu pour rien… Il faut que je fasse mes preuves le plus rapidement possible. Il doit bien y avoir un moyen de faire changer d’avis le réceptionniste. # character=FRED_GALLANT invisible
*Fred tente de convaincre le réceptionniste en lui expliquant que sa carrière est en jeu et que son chef ne tolèrera pas l’échec.
Le réceptionniste accepte de faire une exception, il a lui aussi connu son lot de pression au travail.
*Fred essaye de soudoyer le réceptionniste en lui proposant un pot-de-vin.
Le réceptionniste accepte l’argent, les fins de mois sont difficiles en ce moment.
*Fred tente d’intimider le réceptionniste en usant de son autorité en tant que membre de la brigade anti-jeux vidéo.
Le réceptionniste coopère à contrecœur. Il ne s’agirait pas que Fred découvre certaines de ses activités parallèles.
- ~cacher_tout_personnages()
->scene_6

=scene_6
~afficher_fond(siege_esrb_informatique)
//TODO: si la technologie le permet,Le joueur accède ainsi à une salle qui contient des ordinateurs auxquels il peut accéder. Pour y accéder, le joueur clique sur l’ordinateur en surbrillance.
<b>Fred</b> est désormais dans la salle informatique de l’ESRB.
~afficher_fond(ecran_ordinateur_esrb)
Choisissez le mot de passe pour accéder à l’ordinateur : #center
Mot de passe oublié ? L’année où tout a changé. #center
<b>Fred</b> tape à l'écran <b>2021</b>
Code bon #center
~jouer_effet_sonore(son_demarrage_ordinateur)
->act_1_quiz_2.quiz_2

=scene_7
//TODO: [Transition - Image non définie encore]
~ afficher_fond(rue_mcleod)
~jouer_musique(theme_resistance)
~afficher_personnage(RONNY, "slideInUp")
Ronny: Eh bien! Je suis impressionné! On n’avait pas été autant en profondeur. Où as-tu eu ces documents? C’est évident que tu serais un bon élément, si tu voulais vraiment travailler avec nous. #character=RONNY expression=shock
Fred: Je dois admettre que ce que j’ai trouvé m’intrigue encore plus. Je suis prête à poursuivre mes recherches pour vous. Mais j’ai tout simplement eu de la chance. # character=FRED_GALLANT invisible
Ronny: Excellent. Qu’est-ce que tu as en tête? #character=RONNY expression=satisfaction
Fred: Si mon intuition est bonne, je pense que d’autres informations censurées pourraient révéler que le gouvernement ment à propos des vraies motivations de la <i>Loi Game Over</i>. Mais je crains d’avoir besoin de beaucoup de temps. # character=FRED_GALLANT invisible
Ronny: C’est une certitude que le gouvernement cache quelque chose. C’est ce sur quoi on travaille depuis des années. Tu aurais besoin de quoi? Tu veux commencer où? #character=RONNY expression=neutral
Fred: J’ai mis la main sur une liste d’anciens employés de l’ESRB, je vais commencer par les contacter. # character=FRED_GALLANT invisible

~ afficher_fond(bureau_fred)
~jouer_musique(theme_fred)
~afficher_document(LISTE_ANCIENS_EMPLOYES)
TODO: Quand le document est fermé par le joueur, le message suivant s’affiche:
Après avoir consulté la liste, <b>Fred</b> tente de rejoindre les trois employés qui y figurent. L’un d’eux, <b>ROBERT POWER</b>, a été arrêté en 2032, mais après sa sortie de prison pour bonne conduite, il a disparu, la police a perdu sa trace.
Les deux autres, <b>OLIVIA PAUL</b>, testeuse de l’ESRB et <b>CARL</b> WHITE du département du contentieux ne possèdent pas de dossiers, mais habitent tous les deux à Ottawa.
<b>Fred</b> contacte d’abord <b>Olivia Paul</b> au téléphone.
~jouer_effet_sonore(composer_numero)
Fred: Fred Gallant, brigade anti-jeux vidéo. J’aimerais parler à Olivia Paul. # character=FRED_GALLANT invisible
~afficher_personnage(OLIVIA_PAUL, "fadeIn")
Olivia: C’est moi. #character=OLIVIA_PAUL expression=alertness phone
Fred: J’aimerais vous rencontrer, j’aurais quelques questions à vous poser. # character=FRED_GALLANT invisible
Olivia: De quoi suis-je soupçonnée? #character=OLIVIA_PAUL expression=alertness phone
Fred: De rien. C’est au sujet de votre ancien poste de testeuse de l’ESRB. # character=FRED_GALLANT invisible
Olivia [Surprise]
Qu’est-ce que vous voulez savoir? Ça fait une éternité. C’était légal à l’époque. #character=OLIVIA_PAUL expression=surprise phone
Fred: Je sais, j’ai simplement besoin de quelques informations. # character=FRED_GALLANT invisible
Olivia: Passez me voir. Je ne sors pas aujourd’hui. #character=OLIVIA_PAUL expression=neutral phone
Fred: Merci, à toute à l’heure. # character=FRED_GALLANT invisible
~cacher_tout_personnages()

~afficher_fond(maison_olivia_exterieur)
~jouer_musique(theme_fred)
~jouer_effet_sonore(sonnette_futuriste)
~afficher_personnage(OLIVIA_PAUL, "fadeIn")
Olivia: Entrez. Je n’ai pas grand-chose à vous offrir, je suis dans les rénovations depuis une éternité, mais comme c’est bientôt terminé, j’ai concentré mes efforts à maintenir la maison le moins encombrée possible. Je vends! #character=OLIVIA_PAUL expression=neutral
Fred: Aucun souci, je n’en ai pas pour longtemps. J’aurais juste quelques questions à vous poser. # character=FRED_GALLANT invisible
~afficher_fond(maison_olivia_interieur)
Olivia: Je ne sais pas grand-chose. Tout ce que je peux vous dire, c’est que du temps de l’ESRB, je luttais contre le monopole de l’organisation sur l’évaluation des jeux. #character=OLIVIA_PAUL expression=neutral
Fred: Que voulez-vous dire? # character=FRED_GALLANT invisible
Olivia: Je trouvais cela dangereux de confier l’évaluation des jeux vidéo à une seule et unique organisation. Tout monopole comporte des dangers. #character=OLIVIA_PAUL expression=alertness
Fred: Mais il y avait bien une évaluation systématique de tous les jeux? # character=FRED_GALLANT invisible
Olivia: En principe, oui. Mais je n’avais pas un poste de décision, pas de vue d’ensemble. #character=OLIVIA_PAUL expression=neutral
Fred: Je comprends. Mais alors, il y avait des jeux qui étaient interdits, par exemple aux mineurs? # character=FRED_GALLANT invisible
Olivia: Interdit, le mot est trop fort. Les évaluations sont de fortes recommandations. #character=OLIVIA_PAUL expression=disdain
Fred: Je vois. # character=FRED_GALLANT invisible
Olivia: Mais la raison pour laquelle j’ai accepté de vous rencontrer, c’est l’autre préoccupation que j’avais concernant les évaluations. Aujourd’hui, ça semble sans importance, mais si vous enquêtez là-dessus, c’est qu’il est probable que vous n’êtes pas la seule à mettre en doute les dires du gouvernement. #character=OLIVIA_PAUL expression=alertness
Fred: Je ne fais que mon travail, je ne mets rien en doute. Mais de quelle préoccupation parlez-vous? # character=FRED_GALLANT invisible
Olivia: Eh bien, vous savez, c’était très noble d’évaluer les jeux et de guider les parents sur le contenu. Cependant, les évaluateurs dont je faisais partie ne jouaient pas au jeu. #character=OLIVIA_PAUL expression=sterness
Fred: Comment pouviez-vous l’évaluer? # character=FRED_GALLANT invisible
Olivia: Nous regardions des vidéos d’autres joueurs et nos évaluations étaient entièrement basées sur ce qu’on pouvait voir à l’écran. #character=OLIVIA_PAUL expression=sterness
Fred: Donc, limitées. # character=FRED_GALLANT invisible
Olivia: Exact. Le système d’évaluation était gardé secret et l’identité des évaluateurs aussi. #character=OLIVIA_PAUL expression=sterness
Fred: Pourquoi? # character=FRED_GALLANT invisible
Olivia: ESRB disait que c’était pour protéger les évaluateurs de pression indue. Mais la pression venait de l’interne. #character=OLIVIA_PAUL expression=sterness
Fred: Comment? # character=FRED_GALLANT invisible
Olivia: Eh bien, nous avions peu de temps pour évaluer les jeux, nous n’avions pas accès au jeu complet, mais la tendance était à la prudence. #character=OLIVIA_PAUL expression=alertness
Fred: Je comprends. Et donc, vous me confirmez que tous les jeux étaient classés et que des recommandations étaient faites quant à leur utilisation? # character=FRED_GALLANT invisible
Olivia: Ça vous surprend? #character=OLIVIA_PAUL expression=disdain
Fred: Oui. # character=FRED_GALLANT invisible
Olivia: Je sais. Tout le monde croit que c’était un peu tout et n’importe quoi avant l’interdiction. #character=OLIVIA_PAUL expression=melancholy
Fred: C’est en effet ce qu’on nous enseigne.# character=FRED_GALLANT invisible
Olivia: À mon humble avis, ça n’empêche pas que le système était pourri et que les jeux vidéo sont mieux aux oubliettes. #character=OLIVIA_PAUL expression=indignation
Fred: Pourquoi dites-vous cela? # character=FRED_GALLANT invisible
Olivia: Parce que ces entreprises étaient des compagnies à but lucratif et que la réglementation avait d’importantes lacunes. C’était un terreau parfait pour les exagérations. #character=OLIVIA_PAUL expression=indignation
Fred: Je vois. Je vous remercie de m’avoir reçue. # character=FRED_GALLANT invisible
Olivia: Ce n’est rien! Si quelqu’un vous le demande, vous n’êtes jamais venue ici. #character=OLIVIA_PAUL expression=alertness
~ajouter_contact(OLIVIA_PAUL)
~ajouter_document(ESRB_FLAWS)
~cacher_tout_personnages()

-> quiz_3

=quiz_3

~ demarrer_quiz(QUIZ_3, 3)
~afficher_document(ESRB_FLAWS)
~jouer_musique(theme_quiz)

-> quiz_3_question_1

= quiz_3_question_1

1 - Les évaluateurs de l'ESRB jouent à l'intégralité d'un jeu vidéo avant de lui attribuer sa classification ?  # question index=1
*   (3_1_a) [{3_1_a: VISITE--}Vrai] Vrai
*   (3_1_b) [BON--{3_1_b: VISITE--}Faux] Faux
    Les évaluateurs de l’ESRB ne jouaient pas à l’intégralité d’un jeu vidéo avant de lui attribuer sa classification. Cela me parait vraiment problématique... Imaginons qu’un élément particulièrement problématique échappe à un évaluateur ! Et puis pourquoi ne pas jouer à l’intégralité d’un jeu pour s’assurer de donner un avis éclairé ? # retroaction
    -> quiz_3_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_question_1

= quiz_3_question_2
2 - Si les évaluateurs ne jouaient pas à l’intégralité d’un jeux vidéo avant de lui attribuer une note, comment faisaient-ils selon le témoignage ? # question index=2

+   (3_2_a) [{3_2_a: VISITE--}Ils consultaient le projet de boîte du jeu comprenant des images et une description. ] Ils consultaient le projet de boîte du jeu comprenant des images et une description.
+   (3_2_b) [BON--{3_2_b: VISITE--}Ils consultaient une vidéo présentant des phases de jeu.] Ils consultaient une vidéo présentant des phases de jeu.
Selon le témoignage, les évaluateurs consultaient des vidéos présentant des phases de gameplay d’un jeu vidéo avant de l’évaluer. L’ESRB demandait également aux éditeurs de jeux vidéo de fournir un formulaire décrivant le contenu de leur jeu. Les informations contenues dans ce formulaire pouvaient également guider les évaluateurs. # retroaction
-> quiz_3_question_3
+   (3_2_c) [{3_2_c: VISITE--}Ils suivaient les propositions des concepteurs du jeu.] Ils suivaient les propositions des concepteurs du jeu.
+   (3_2_d) [{3_2_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_question_2

= quiz_3_question_3

3- Selon le témoignage de l’ancien employé de l’ESRB, pourquoi les évaluateurs ne jouent-ils pas aux jeux vidéo ? # question index=3

+   (3_3_a)[BON--{3_3_a: VISITE--}Ils n’avaient pas le temps de jouer aux jeux vidéo.] Ils n’avaient pas le temps de jouer aux jeux vidéo.
Selon le témoignage, les évaluateurs n’avaient pas le temps de joueur à l’intégralité d’un jeu vidéo. C’est compréhensible. Un jeu vidéo est différent d’un film, le compléter peut prendre plusieurs dizaines d’heures. De plus, certains éléments peuvent être cachés et plus ou moins difficiles d’accès. Peut-être que l’ESRB n’avait pas le choix de fonctionner de cette manière. Mais imaginons que l’on découvre un élément problématique après l’évaluation d’un jeu et sa sortie, cela aurait pu être dramatique non ? # retroaction
-> quiz_3_fin
+   (3_3_b) [{3_3_b: VISITE--}La plupart d’entre eux n’aimaient pas jouer aux jeux vidéo. ] La plupart d’entre eux n’aimaient pas jouer aux jeux vidéo.
+   (3_3_c) [{3_3_c: VISITE--}La plupart d’entre eux étaient trop mauvais pour compléter les premiers niveaux.] La plupart d’entre eux étaient trop mauvais pour compléter les premiers niveaux.
+   (3_3_d) [{3_3_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_3_question_3

  =quiz_3_fin
~ terminer_quiz()
 ->scene_8

 =scene_8
~afficher_fond(maison_carl_white)
~jouer_musique(theme_fred)
<b>Fred</b> décide d’arriver à l’improviste chez <b>Carl White</b>.
~jouer_effet_sonore(sonnette_futuriste)
~afficher_personnage(CARL_WHITE, "fadeIn")
Carl: Qui êtes-vous? #character=CARL_WHITE expression=surprise
Fred: Fred Gallant, brigade anti-jeux vidéo. # character=FRED_GALLANT invisible
Carl: Qu’est-ce que vous me voulez?  #character=CARL_WHITE expression=sterness
Fred: J’aurais juste quelques questions. Je fais une enquête spéciale sur les années qui ont précédé la <i>Loi Game Over</i>. # character=FRED_GALLANT invisible
Carl: Je n’ai rien à voir là-dedans.  #character=CARL_WHITE expression=indignation
Fred: Non, je viens vous voir en tant qu’ancien employé de l’ESRB. # character=FRED_GALLANT invisible
Carl: Ça fait plus de trente ans que je ne travaille plus dans cette boîte!  #character=CARL_WHITE expression=indignation
Fred: Je sais. J’aurais juste quelques questions sur la manière dont les évaluations étaient faites… # character=FRED_GALLANT invisible
Carl: Les évaluations étaient faites en analysant le contenu du jeu! Que voulez-vous savoir de plus?  #character=CARL_WHITE expression=cruel
Fred: Oui, mais comment exactement? # character=FRED_GALLANT invisible
Carl: Ne jouez pas au plus malin avec moi. Qu’est-ce que vous voulez savoir? Je suis un citoyen honnête, moi. Et je n’ai pas de temps à perdre même si je suis à la retraite.  #character=CARL_WHITE expression=anger
Fred: Non, bien sûr. Écoutez, dites-moi simplement comment les jeux étaient évalués. Svp? # character=FRED_GALLANT invisible
Carl: Je ne me rappelle plus.  #character=CARL_WHITE expression=sterness
Fred: Les anciens évaluateurs sont introuvables Monsieur White. Vous ne vous rappelez rien? # character=FRED_GALLANT invisible
Carl: Non...  #character=CARL_WHITE expression=neutral
Fred: Bon d’accord, pardonnez-moi de vous avoir dérangé. # character=FRED_GALLANT invisible
Carl: Attendez. Je me souviens d’une histoire avec GTA…  #character=CARL_WHITE expression=neutral
Carl: C’est pour des histoires comme celle-là qu’ils ont tout interdit vous savez.  #character=CARL_WHITE expression=laughing
Fred: Quelle histoire? # character=FRED_GALLANT invisible
Carl: GTA! Quel jeu stupide! Ce n’est pas moi qui l’ai évalué, ça non. Mais le scandale! Ça, tout le monde qui l’a vécu se le rappelle.  #character=CARL_WHITE expression=amusement
Fred: Eh bien, pourriez-vous m’en parler ? # character=FRED_GALLANT invisible
Carl: C’était en 2005, lorsque le jeu est sorti, il est arrivé en bonne et due forme avec le formulaire détaillé sur le contenu fourni par le concepteur et l’extrait de gameplay quoi, comme d’habitude. On l’a évalué et classé. Mais après que le jeu ait été en circulation un certain temps, des joueurs ont découvert une mission cachée, le hot coffee. On pouvait la débloquer avec un code et le personnage pouvait avoir une relation sexuelle avec une travailleuse du sexe.  #character=CARL_WHITE expression=neutral
Fred: Ah bon? # character=FRED_GALLANT invisible
Carl: Oui et oh! Ce qu’on en a bavé à l’ESRB. On nous a accusés d’être en conflit d’intérêts, mais ce n’était pas ça. On utilisait la même méthode pour tous les jeux.  #character=CARL_WHITE expression=wonder
Fred: Je vois. Mais selon vous, cette méthode était-elle efficace? # character=FRED_GALLANT invisible
Carl: La plupart du temps, oui. Mais pour GTA, ce qu’on en a bavé!  #character=CARL_WHITE expression=neutral
Fred: Oui. Et puis, est-ce que ça a changé la méthode de l’ESRB par la suite? # character=FRED_GALLANT invisible
Carl: Non, on a seulement insisté pour que le contenu à caractère sexuel soit déclaré.  #character=CARL_WHITE expression=neutral
Fred: Y a-t-il eu d’autres cas comme GTA? # character=FRED_GALLANT invisible
Carl: Je ne sais pas! Je suis un vieux gâteux. Parler de ça devant mes enfants m’enverrait tout droit au foyer. Ils ont peur.  #character=CARL_WHITE expression=concern
Fred: Peur de quoi? # character=FRED_GALLANT invisible
Carl: De passer pour des joueurs ou d’anciens joueurs. Ou des enfants de joueurs. #character=CARL_WHITE expression=concern
Fred: Bon. Je vous remercie Monsieur White. Je ne vous dérange pas plus longtemps. # character=FRED_GALLANT invisible
Carl: Désolé pour le numéro de vieux grincheux. Je ne suis pas réellement pressé. Vous voulez entrer prendre un café? #character=CARL_WHITE expression=joy
Fred: C’est gentil, mais je suis pressée. # character=FRED_GALLANT invisible
Carl: D’accord, mais prenez ça avant de partir. C’est une relique du passé, ça pourrait vous être utile. #character=CARL_WHITE expression=amusement
~ajouter_contact(CARL_WHITE)
~ajouter_document(RATING_PROCESS)
~cacher_tout_personnages()

-> quiz_4

=quiz_4

~ demarrer_quiz(QUIZ_4, 3)
~afficher_document(RATING_PROCESS)
~jouer_musique(theme_quiz)

-> quiz_4_question_1

= quiz_4_question_1

1 - L'ESRB pouvait-elle sanctionner les éditeurs de jeux vidéo. # question index=1

 *   (4_1_a) [BON--{4_1_a: VISITE--}Oui] Oui
 L’ESRB disposait bien de moyens de sanction. Cette organisation pouvait notamment imposer des amendes. Cela devait tout de même être dissuasif. # retroaction
 -> quiz_4_question_2
*   (4_1_b) [{4_1_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_4_question_1

 = quiz_4_question_2
2 - L'ESRB n'a jamais sanctionné un éditeur de jeux vidéo.  # question index=2

*   (4_2_a) [{4_2_a: VISITE--}Vrai] Vrai
*   (4_2_b) [BON--{4_2_b: VISITE--}Faux] Faux
Dans le cas du jeu GTA, il est probable que l’éditeur ait été sanctionné pour ne pas avoir dévoilé un élément problématique de son jeu. Malheureusement, la sanction ne semble pas avoir été rendue publique. # retroaction
-> quiz_4_question_3
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_4_question_2

 = quiz_4_question_3
3- Mais imaginons qu’un jeu soit déjà sorti et évalué, l’ESRB ne pouvait alors plus rien faire… # question index=3

 *   (4_3_a) [{4_3_a: VISITE--}Vrai] Vrai
*   (4_3_b) [BON--{4_3_b: VISITE--}Faux] Faux
  L’exemple du jeu GTA a démontré que par le passé l’ESRB pouvait revoir sa classification et faire modifier les informations présentes sur une boite de jeu. Pour un éditeur de jeux vidéo, c’est en quelque sorte une sanction, car ce sont des coûts et une très mauvaise publicité. # retroaction
-> quiz_4_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_4_question_3

=quiz_4_fin
~ terminer_quiz()
-> scene_9

=scene_9
TODO: [Transition - Image non définie encore]
~afficher_fond(bureau_chef_miller)
~jouer_musique(theme_commissariat)
~afficher_personnage(CHEF_MILLER_NO_CIGAR, "slideInUp")
Chef Miller: Eh bien? Qu’est-ce que vous avez? Il faut me donner quelque chose! #character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Je cherche à relier la disparition du gamin au jeu qui est indiqué dans les messages, mais il n’y a pas de trace de ce jeu chez les Kane. # character=FRED_GALLANT invisible

Chef Miller: Et puis? Qu’est-ce que ça veut dire? #character=CHEF_MILLER_NO_CIGAR expression=sterness

Fred: Je ne sais pas. Rien. Seulement, pour établir un lien avec le gars, Teacher, obtenir un mandat et aller l’interroger, il faudrait prouver que Kane a bien joué à un jeu vendu par lui et aussi qu’il a développé une dépendance à ce jeu ou que le fait de jouer à ça l’a poussé à fuir! # character=FRED_GALLANT invisible

Chef Miller: Que disent les parents? #character=CHEF_MILLER_NO_CIGAR expression=sterness

Fred: Ils n’ont rien vu. Ils veulent juste… un coupable. # character=FRED_GALLANT invisible

Chef Miller: Eh bien! Voilà quelque chose sur lequel on s’entend. Demain, Gallant. Demain, je fais une annonce à la presse. Donnez-moi du croustillant qu’on n’en parle un bon coup et qu’ils passent à autre chose. #character=CHEF_MILLER_NO_CIGAR expression=joy

Fred: Je vais trouver. # character=FRED_GALLANT invisible

Chef Miller: J’y compte bien. #character=CHEF_MILLER_NO_CIGAR expression=disdain

Fred: Question chef. # character=FRED_GALLANT invisible

Chef Miller: Oui.#character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Est-ce que nous avons un programme de protection des témoins pour des informateurs? # character=FRED_GALLANT invisible

Chef Miller: Vous voulez rire, Gallant? #character=CHEF_MILLER_NO_CIGAR expression=disdain
~ cacher_tout_personnages()
-> scene_10

=scene_10
~afficher_fond(rue_mcleod)
~jouer_musique(theme_resistance)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
~afficher_personnage(VIVIAN, "slideInUp")
~afficher_personnage(RONNY, "slideInUp")
~afficher_personnage(TOM, "slideInUp")
<b>Vivian</b>, <b>Tom</b>, <b>Christopher</b>, <b>Ronny</b> et <b>Fred</b> discutent.

Tom: Tu fais vraiment un travail impeccable Fred. À ce rythme, on va bientôt pouvoir nous adresser aux médias! Tu te rends compte! # character=TOM expression=joy

Fred: Je n’ai pas encore ce sentiment. Je me pose des tonnes de questions. Par exemple, est-ce que les distributeurs de jeux vidéo respectaient vraiment la réglementation concernant l’accès aux jeux des mineurs? # character=FRED_GALLANT invisible

Ronny: J’ai quelque chose pour toi. # character=RONNY expression=neutral

~ajouter_document(GAME_STOP_RESPECT_RATINGS)

Fred: Merci. J’aurais dû le demander avant. # character=FRED_GALLANT invisible

Christopher: Je vais te montrer autre chose. # character=CHRISTOPHER_YOUNG expression=neutral

Vivian: Déjà? La confiance règne! # character=VIVIAN expression=dejection

Ronny: Oui, je suis d’accord. # character=RONNY expression=neutral

Christopher: Fred, à toi l’honneur!# character=CHRISTOPHER_YOUNG expression=amusement
~cacher_tout_personnages()

TODO:Le joueur doit cliquer sur un bouton en surbrillance. Le bouton déclenche l’ouverture d’une trappe qui mène vers le grenier. Le joueur clique sur la trappe en surbrillance pour se rendre au grenier.
~jouer_effet_sonore(ouverture_trappe)
~afficher_fond(grenier)
~jouer_musique(theme_resistance)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
Fred se retrouve dans la salle de jeux clandestine de la résistance.

~cacher_fond()
~arreter_musique()
~jouer_musique(theme_narrateur)
Narrateur: Comment Fred expliquera au chef Miller qu’elle a été en présence de joueurs, une mine d’or pour la brigade, et qu’elle n’a rien fait? Jusqu’où ira Fred avant de se questionner sur son éthique de travail? Comment expliquer la présence de Bonnie? Comment va-t-elle l’aider ? Et vous, que ferez-vous? # character=NARRATEUR invisible
<b>Fred</b> se réveille de sa torpeur. 
~afficher_fond(grenier)
~jouer_musique(theme_resistance)
~afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
Christopher: Ça va Fred? # character=CHRISTOPHER_YOUNG expression=concern

Fred: Oui, désolée. Oui, ça va. Je suis juste un peu étourdie. # character=FRED_GALLANT invisible

Christopher: Bienvenue au paradis! # character=CHRISTOPHER_YOUNG expression=amusement

Fred: J’étais loin de soupçonner cette installation! # character=FRED_GALLANT invisible

Christopher: C’est la magie de Teacher! # character=CHRISTOPHER_YOUNG expression=joy

Fred: Teacher? # character=FRED_GALLANT invisible

Christopher: Oui, mais il n’est plus avec nous. C’est un jeune exalté et ambitieux qui était prêt à n’importe quoi pour gravir les échelons de la résistance. Pour le rencontrer lui, il faut plus de temps et il faut leur offrir quelque chose de substantiel. Mais la raison pour laquelle je t’ai fait voir tout ça, c’est pour t’expliquer une partie du plan. # character=CHRISTOPHER_YOUNG expression=alertness

Christopher: Ce que je suis autorisé à te dire sans trop compromettre notre organisation si tu t’avérais être un traître. # character=CHRISTOPHER_YOUNG expression=laughing

Fred: Je ne vois pas tellement ce que je pourrais faire pour vous nuire. # character=FRED_GALLANT invisible

Christopher: Une descente ici serait catastrophique. On a besoin de redorer notre image. L’opinion publique est contre nous. Les jeux vidéo ont longtemps eu très mauvaise presse, même si c’était plus nuancé à l’époque. # character=CHRISTOPHER_YOUNG expression=alertness

Fred: Alors, c’est quoi votre plan? # character=FRED_GALLANT invisible

Christopher: Nous voulons lever l’interdiction et recréer une réglementation encadrant tout ce qui aurait trait aux jeux vidéo. Comme avant, mais en mieux. # character=CHRISTOPHER_YOUNG expression=alertness

Fred
C’est-à-dire? # character=FRED_GALLANT invisible

Christopher: Une réglementation claire, reconnue et comprise pourrait éliminer bien des problèmes que le début des années 2000 a connus. Regarde ce qui se faisait avant, c’est un bon point de départ : respecter les évaluations et restreindre l’accès des jeux à contenu explicite est la clé. # character=CHRISTOPHER_YOUNG expression=neutral

Fred
Je vais la lire, merci. # character=FRED_GALLANT invisible

~ajouter_document(LOI_2005_CLASSEMENT)
~cacher_tout_personnages()
→ Affichage des questions dans la section « Notes ». Les notes doivent être complétées avant que le jeu et les dialogues reprennent.

-> quiz_5

=quiz_5
~ demarrer_quiz(QUIZ_5, 3)
~afficher_document(LOI_2005_CLASSEMENT)
~jouer_musique(theme_quiz)
->quiz_5_question_1

= quiz_5_question_1
1 - En cherchant un peu, je devrais être en mesure de déterminer les dispositions pertinentes de ce texte : # question index=1

+   (5_1_a) [{5_1_a: VISITE--}Art. 6(2) du règlement de l’Ontario 452/05.] Art. 6(2) du règlement de l’Ontario 452/05.
+   (5_1_b) [{5_1_b: VISITE--}Art. 1(1) du règlement de l’Ontario 452/05.] Art. 1(1) du règlement de l’Ontario 452/05.
+   (5_1_c) [{5_1_c: VISITE--}Art. 6(3) du règlement de l’Ontario 452/05.] Art. 6(3) du règlement de l’Ontario 452/05.
+   (5_1_d) [BON--{5_1_d: VISITE--}Toutes ces propositions.] Toutes ces propositions.
Toutes les propositions sont pertinentes. Elles renvoient à des articles qui traitent de l’ESRB (en français la Commission… )  #retroaction
-> quiz_5_question_2
+ (5_1_e) [{5_1_e: VISITE--}AUcune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_question_1

=quiz_5_question_2
2 - Le respect des règles de l’ESRB était-il obligatoire en Ontario ? # question index=2
*   (5_2_a) [BON--{5_2_a: VISITE--}Vrai] Vrai
Selon l’article 6(2) du règlement de l’Ontario, la classification de l’ESRB était obligatoire en Ontario. Mais était-ce le cas ailleurs au Canada ? # retroaction
-> quiz_5_question_3
*   (5_2_b) [{5_2_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_question_2

 = quiz_5_question_3
3 - J’ai ma réponse pour l’Ontario, mais qu’est-ce qu’il en était de la province voisine au Québec ? Je n’ai aucun document sous la main pour le déterminer… Le respect des règles de l’ESRB était-il obligatoire au Québec ?  # question index=3
*   (5_3_a) [{5_3_a: VISITE--}Oui] Oui
*   (5_2_b) [BON--{5_2_b: VISITE--}Non] Non
Je ne sais pas comment j’ai réussi à déterminer cela... Sûrement un coup de chance, mais effectivement les règles de l’ESRB n’étaient pas obligatoires au Québec. # retroaction
-> quiz_5_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_5_question_3

 =quiz_5_fin
 ~ terminer_quiz()
 -> scene_10_suite

 =scene_10_suite
~afficher_fond(grenier)
~jouer_musique(theme_resistance)
~afficher_personnage(CHRISTOPHER_YOUNG, "fadeIn")
Fred: Et donc, vous souhaitez que les jeux vidéo soient à nouveau légalisés, mais avec des règlements plus… sévères? # character=FRED_GALLANT invisible

Christopher: Plus éclairés. J’ai autre chose pour toi. Tu ne peux pas encore imaginer à quel point certaines réflexions avaient déjà été menées. C’était peut-être l’application des lois qui clochait. # character=CHRISTOPHER_YOUNG expression=wonder

Fred: Et comment tu crois que ça serait différent aujourd’hui? # character=FRED_GALLANT invisible

Christopher: Il faut bien se préparer et analyser toutes les éventualités. # character=CHRISTOPHER_YOUNG expression=neutral

Fred: Il y aura toujours des contrevenants. # character=FRED_GALLANT invisible

Christopher: Oui. Mais regarde autour de toi. Ce sont des criminels à ton avis? # character=CHRISTOPHER_YOUNG expression=sterness

Fred: Ce sont… des enfants pour la plupart. # character=FRED_GALLANT invisible

Christopher: Ok alors regarde, approche, regarde à quoi ils jouent et dis-moi ce qu’il y a de néfaste dans le contenu de ces jeux.# character=CHRISTOPHER_YOUNG expression=neutral

Fred: Je ne dis pas que ces jeux sont néfastes. # character=FRED_GALLANT invisible

Christopher: Eh bien? Alors? Tu nous aides? # character=CHRISTOPHER_YOUNG expression=alertness

TODO=Transition - Image non définie encore

->scene_11

=scene_11
~ afficher_fond(chambre_leigh_kane)
~jouer_musique(theme_police)
~afficher_personnage(MERE_DE_LEIGH_KANE, "slideInLeft")
~afficher_personnage(PERE_DE_LEIGH_KANE, "slideInRight")
Fred: Mais n’avez-vous jamais eu connaissance que votre fils…que Leigh jouait à des jeux vidéo? # character=FRED_GALLANT invisible

Mère: Non! Mais ça ne veut rien dire! On n’a plus connaissance de tout ce que font nos enfants avec tous les appareils auxquels ils ont accès! # character=MERE_DE_LEIGH_KANE expression=dejection

Fred: D’ailleurs, on a trouvé le téléphone de votre fils, mais aucun signe de son ordinateur… # character=FRED_GALLANT invisible

Mère: On avait peur… On ne savait pas quoi faire. Nous avons caché son ordinateur avant que la police n’arrive sur place. On ne sait pas ce que la police aurait pu trouver dessus. # character=MERE_DE_LEIGH_KANE expression=aversion

Fred: Vous avez caché une pièce à conviction? Le contenu de son ordinateur pourrait peut-être nous aider à le retrouver et à mieux comprendre ces activités. # character=FRED_GALLANT invisible

Mère: Mais Leigh n’y est pour rien! # character=MERE_DE_LEIGH_KANE expression=indignation

Fred: Je comprends, mais pour porter des accusations, il faut avoir des éléments de preuve. # character=FRED_GALLANT invisible

Mère: Je suis certaine que ce sont ces monstres qui vendent des jeux sur le marché noir qui l’ont influencé. # character=MERE_DE_LEIGH_KANE expression=grief

Fred: Comment? Comment était-il? Depuis quand? Connaissez-vous ceux qui lui auraient vendu des jeux et où sont ces jeux? # character=FRED_GALLANT invisible

Mère: Non! Non! Il était un bon garçon, un bon garçon. Tranquille, tranquille. # character=MERE_DE_LEIGH_KANE expression=grief

Père: On n’a pas la moindre preuve. Juste cette conversation sur son téléphone et… son ordinateur qu’on a caché. Alors on a cru. Enfin, notre fils pouvait être influençable. Et à son âge! # character=PERE_DE_LEIGH_KANE expression=melancholy

Fred: Je comprends. Mais est-ce que vous savez au moins s’il est allé à ce rendez-vous? # character=FRED_GALLANT invisible

Père: Non. On… on n’a pas de preuve qu’il y est allé. # character=PERE_DE_LEIGH_KANE expression=melancholy

Fred: Mais pourquoi vous avez cru que c’était lié à un jeu? # character=FRED_GALLANT invisible

Père: Parce qu’on n’a pas d’autres pistes. # character=PERE_DE_LEIGH_KANE expression=melancholy

Mère: C’est ce jeu! J’en suis sûre! Un cœur de mère ne se trompe pas! # character=MERE_DE_LEIGH_KANE expression=grief
~cacher_tout_personnages()
~arreter_musique()
~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: L’agent Gallant est pleine de zèle. Aidez-la donc à coincer les monstres de la résistance. Qu’attendez-vous? # character=NARRATEUR invisible

TODO=Animation: transition du fond noir vers le lieu avec “des yeux qui s’ouvrent” / cligner des yeux
~ afficher_fond(chambre_leigh_kane)
~jouer_musique(theme_police)
~afficher_personnage(MERE_DE_LEIGH_KANE, "slideInLeft")
~afficher_personnage(PERE_DE_LEIGH_KANE, "slideInRight")
Père: Vous allez bien? # character=PERE_DE_LEIGH_KANE expression=concern

Fred: Oui, désolée. Ça va. Est-ce que vous pouvez me confier l’ordinateur de votre fils? Je vais en analyser le contenu. Je vous le rapporte aussitôt que j’aurai terminé mon inspection. Je vais trouver. Ne vous inquiétez pas. On va le retrouver. # character=FRED_GALLANT invisible

Mère: Il ne se serait jamais enfui, Leigh. Jamais. Il y a quelqu’un qui le manipule! # character=MERE_DE_LEIGH_KANE expression=sadness

Père: Allez, laisse-la faire son travail. # character=PERE_DE_LEIGH_KANE expression=neutral

~ajouter_contact(MERE_DE_LEIGH_KANE)
~ajouter_contact(PERE_DE_LEIGH_KANE)

TODO=Transition - Image non définie encore

->scene_12

=scene_12
~afficher_fond(bureau_fred)
~jouer_musique(theme_police)
<b>Fred</b> examine l'ordinateur de <b>Leigh Kane</b>

Fred: Montre-moi ce que tu as dans le ventre. # character=FRED_GALLANT invisible

Après une analyse minutieuse, <b>Fred</b> identifie deux fichiers qui semblent pertinents: un <b>log d'activité</b> et un <b>ficher texte</b>.

<b>Fred</b> ouvre le <b>log d’activité</b>.
~jouer_effet_sonore(clic_souris)
Il n’y a rien qui relie la fugue à des jeux vidéo. Selon l’historique d’utilisation, <b>Leigh</b> a joué 25 minutes sur une plateforme qui s’appelle <i>Friv</i> et qui est en ligne sur le <i>Dark Web</i>. Il a joué à <i>Baskatball</i> et <i>RioRex</i>.

<b>Fred</b> ouvre le <b>fichier texte</b>.
~jouer_effet_sonore(clic_souris)
<i>Maman, papa,
Je suis désolé de vous infliger ça. Si je dois partir, c’est que je sais que je suis un poids pour vous. J’ai raté mes examens de fin d’année et je vais devoir reprendre la plupart de mes cours de 7e année. J’ai trop honte. Ne cherchez pas à savoir où je suis. Je vais trouver du travail et quand j’aurai moins honte je reviendrai peut-être. Leigh</i>

TODO=Image non définie encore

->scene_13

=scene_13
~afficher_fond(rue_mcleod)
~jouer_musique(theme_resistance)
~afficher_personnage(TOM, "slideInUp")
Tom: Je suis heureux que tu restes. On a eu raison de te recruter et de te faire confiance. Ce que ça nous prend, ce sont des preuves qu’ils ont caché des informations, mais surtout les informations qu’ils ont cachées. On doit montrer que les jeux n’étaient pas tous dommageables et qu’il existait déjà des manières de contrôler ceux qui avaient le potentiel de l’être. # character=TOM expression=satisfaction

Fred: Je comprends, mais crois-tu que s’ils ont vraiment fait ça, ils n’en ont pas complètement effacé les traces? # character=FRED_GALLANT invisible

Tom: Les traces ne sont jamais complètement effacées. Je le sais. Es-tu prête à aller plus loin? # character=TOM expression=alertness

Fred: Je ferai ce qu’il faut. Je veux en avoir le cœur net. # character=FRED_GALLANT invisible

Tom: T’es déjà allé sur le Dark Web? #character=TOM expression=alertness

Fred: Non… C’est quoi? # character=FRED_GALLANT invisible

Tom: On peut y trouver des informations croustillantes sur le passé. T’as pas l’air très au fait… Moi, j’y passe mes nuits. Je vais t’aider pour gagner du temps. Je t’enverrai un lien. #character=TOM expression=alertness
~cacher_tout_personnages()
-> scene_14

= scene_14
~afficher_fond(ordinateur_fred)
~jouer_musique(theme_commissariat)
~jouer_effet_sonore(clic_souris)
~ajouter_document(STEAMWORKS)

-> quiz_6

=quiz_6
~ demarrer_quiz(QUIZ_6, 5)
~afficher_document(GAME_STOP_RESPECT_RATINGS)
~jouer_musique(theme_quiz)
-> quiz_6_question_1

= quiz_6_question_1
1- La compagnie GameStop imposait-elle le respect du système de l’ESRB ? # question index=1
*   (6_1_a) [BON--{6_1_a: VISITE--}Oui] Oui
 Selon le document de la compagnie, celle-ci avait bien décidé d’imposer le respect de la classification de l’ESRB dans ses magasins et ce sans être forcé de le faire par l’État. Encore un exemple d’autorégulation des acteurs de l’industrie des jeux vidéo. # retroaction
 -> quiz_6_question_2
*   (6_1_b) [{6_1_b: VISITE--}Non] Non
*   (6_1_c) [{6_1_c: VISITE--}Impossible à dire] Impossible à dire
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_6_question_1

 = quiz_6_question_2
~afficher_document(STEAMWORKS)
2 - Steam utilisait-il le système de l’ESRB pour classer les jeux vidéo ? # question index=2
*   (6_2_a) [{6_2_a: VISITE--}Oui] Oui

*   (6_2_b) [BON--{6_2_b: VISITE--}Non] Non
Steam n’imposait pas le système de l’ESRB. Les jeux vidéo disposant d’une classification de ce type pouvaient néanmoins le mettre en avant sur la plateforme de vente Steam. # retroaction
-> quiz_6_question_3
 - ~ generer_mauvaise_reponse_retroaction()
 -> quiz_6_question_2

=quiz_6_question_3
3 - Quelle était l'approche préconisée par Steam pour la protection des consommateurs ?  # question index=3
 +   (6_3_a) [{6_3_a: VISITE--}Censure.] Censure.
+   (6_3_b) [BON--{6_3_b: VISITE--}Transparence.] Transparence.
Steam préconisait une approche basée sur la transparence vis-à-vis des consommateurs. Ces derniers étaient informés du caractère potentiellement choquant de certains jeux et devaient notamment confirmer leur âge avant de pouvoir accéder à certains contenus. Reste qu’il s’agissait d’une auto-déclaration et certains utilisateurs pouvaient mentir n’est-ce pas ? # retroaction
  -> quiz_6_question_4
+   (6_3_c) [{6_3_c: VISITE--} Laisse-faire.]  Laisse-faire.
+   (6_4_d) [{6_4_d: VISITE--} Paternaliste.] Paternaliste.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_6_question_3

 =quiz_6_question_4
4 - L’approche de la plateforme Steam me paraît intéressante. Mais a-t-elle déjà conduit à la censure de jeux vidéo ? Je n’ai pas l’impression que l’information se trouve dans les documents…  # question index=4
 *   (6_4_a) [BON--{6_4_a: VISITE--}Oui] Oui
 Steam a censuré par le passé un nombre très restreint de jeux vidéo. Selon les informations collectées, Steam ne souhaitait pas se positionner en censeur des productions vidéoludiques. Mais lorsque la situation l’imposait, Steam n’a pas hésité. # retroaction
-> quiz_6_question_5
*   (6_4_b) [{6_4_b: VISITE--}Non] Non
 - ~ generer_mauvaise_reponse_retroaction()
 -> quiz_6_question_4

 =quiz_6_question_5
5 - Si oui, quel jeu a déjà été interdit par Steam dans le passé ?  # question index=5
 +   (6_5_a) [{6_5_a: VISITE--}Grand Theft Auto V.] Grand Theft Auto V.
+   (6_5_b) [BON--{6_5_b: VISITE--}Active Shooter.] Active Shooter.
Ces quatre jeux contenaient assurément des scènes ou des éléments violents. Mais seul le jeu Active Shooter a été interdit par la plateforme Steam. Le joueur incarnait un assaillant dans une école américaine et prenait pour cible ses camarades. Au-delà du jeu et de son contenu, les pratiques problématiques de son développeur ont également été prises en compte dans le cadre de la décision de censurer ce jeu.  # retroaction
  -> quiz_6_fin
+   (6_5_c) [{6_5_c: VISITE--} Counter Strike.]  Counter Strike.
+   (6_5_d) [{6_5_d: VISITE--} Wolfenstein.] Wolfenstein.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_6_question_5

 =quiz_6_fin
~ terminer_quiz()
TODO=Transition - Image non définie encore
-> scene_15

= scene_15
~afficher_fond(bureau_chef_miller)
~jouer_musique(theme_choix_cruciaux)
~afficher_personnage(CHEF_MILLER_NO_CIGAR, "slideInUp")
Chef Miller: Vous vouliez me voir? J’espère que vous avez de bonnes nouvelles? # character=CHEF_MILLER_NO_CIGAR expression=concern
*Fred raconte ce qu’il en est de l’histoire de Leigh Kane, mais ne dit presque rien sur ces découvertes liées à la résistance.
 ~ points_fin_A2 += 4
Fred: Oui, j’ai des nouvelles de Kane. # character=FRED_GALLANT invisible

Chef Miller: De bonnes nouvelles? # character=CHEF_MILLER_NO_CIGAR expression=concern
Fred: Excellente! Il a fugué, mais ce n’est en rien lié aux jeux. J’ai retrouvé 34 minutes de temps de jeu sur le Dark Web, mais j’ai aussi retrouvé une lettre d’au revoir. # character=FRED_GALLANT invisible

Chef Miller: Quel genre de lettre? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Il est parti à cause de ses mauvaises notes à l’école. Je vais interroger les parents plus tard aujourd’hui. Je pense qu’ils doivent être exigeants. C’est un classique. # character=FRED_GALLANT invisible

Chef Miller: C’est donc officiel, je vais préparer le communiqué. Aucun lien avec les jeux vidéo. # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Et non… # character=FRED_GALLANT invisible

Chef Miller: Gallant, je vous retire de l’enquête. Bon boulot. Ça ne nous regarde plus. Inutile de contacter les parents. # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Mais ils pourraient avoir des pistes sur l’endroit où il se trouve! # character=FRED_GALLANT invisible

Chef Miller: Assurément, mais c’est au criminel de couvrir cette partie de l’affaire. Je vais vous donner un conseil, ne vous mêlez pas de ce qui n’est pas de votre secteur. Autre chose? # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: En ce qui concerne mon infiltration, je… # character=FRED_GALLANT invisible

Chef Miller: Où en êtes-vous? Des suspects intéressants? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Je pense que Teacher, le pseudo retrouvé sur le téléphone de Kane, est une piste solide. Il pourrait nous mener à des informations cruciales. # character=FRED_GALLANT invisible

Chef Miller: Bien. Bien. # character=CHEF_MILLER_NO_CIGAR expression=satisfaction

Fred: Je n’y ai pas encore accès, mais j’y travaille. # character=FRED_GALLANT invisible

Chef Miller: Vous continuerez donc cette enquête. Cependant, j’ai un autre dossier pour vous. # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Très bien, lequel? # character=FRED_GALLANT invisible

Chef Miller: Voilà, vous travaillerez avec Moore là-dessus. Il s’agit d’une plainte concernant le 530 rue McLeod. On soupçonne une activité illégale de distribution de jeux. Les voisins ont alerté la police hier. Moore nous a dit que cette adresse avait déjà figuré dans un rapport. Grâce à la plainte, vous pourrez aller y jeter un coup d’œil tous les deux. Faites-moi votre rapport d’ici demain midi. Autre chose? # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Pas pour l’instant. Je suis différentes pistes. # character=FRED_GALLANT invisible

Chef Miller: Je ne vous retiens donc pas. Bonne journée. # character=CHEF_MILLER_NO_CIGAR expression=neutral

*Fred raconte l’histoire de Leigh Kane et une partie de ce qu'elle a découvert.
 ~ points_fin_A1 += 2
 Fred: Oui, j’ai des nouvelles de Kane. # character=FRED_GALLANT invisible

Chef Miller: De bonnes nouvelles? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Excellente! Il a fugué, mais ce n’est en rien lié aux jeux. J’ai retrouvé 34 minutes de temps de jeu sur le Dark Web, mais j’ai aussi retrouvé une lettre d’au revoir. # character=FRED_GALLANT invisible

Chef Miller: Quel genre de lettre? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Il est parti à cause de ses mauvaises notes à l’école. Je vais interroger les parents plus tard aujourd’hui. Je pense qu’ils doivent être exigeants. C’est un classique. # character=FRED_GALLANT invisible

Chef Miller: C’est donc officiel, je vais préparer le communiqué. Aucun lien avec les jeux vidéo. # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Et non! # character=FRED_GALLANT invisible

Chef Miller: Gallant, je vous retire de l’enquête. Bon boulot. Ça ne nous regarde plus. Inutile de contacter les parents. # character=CHEF_MILLER_NO_CIGAR expression=satisfaction

Fred: Mais ils pourraient avoir des pistes sur l’endroit où il se trouve! # character=FRED_GALLANT invisible

Chef Miller: Assurément, mais c’est au criminel de couvrir cette partie de l’affaire. Je vais vous donner un conseil, ne vous mêlez pas de ce qui n’est pas de votre secteur. Autre chose? # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: En ce qui concerne mon infiltration, je… # character=FRED_GALLANT invisible

Chef Miller: Où en êtes-vous? Des suspects intéressants? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Je côtoie quelques organisateurs, mais pas encore les personnages clés de la résistance. Le pseudo retrouvé sur le téléphone de Kane, Teacher, je n’y ai pas accès, mais il semble être un des décideurs. # character=FRED_GALLANT invisible

Chef Miller: Ah bon. Vous y aurez accès dans un délai raisonnable? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Je crois que oui. Mais j’ai découvert des informations troublantes au sujet de réglementations qui datent d’avant la loi… # character=FRED_GALLANT invisible

Chef Miller: Vous n’allez pas me sortir ces vieilles fake news? # character=CHEF_MILLER_NO_CIGAR expression=aversion

Fred: J’ai des documents officiels du gouvernement, chef. # character=FRED_GALLANT invisible

Chef Miller: Vous me les remettrez en même temps que votre rapport sur votre prochaine mission. Ne soyez pas ébranlée par ces racontars, Gallant. Le gouvernement a examiné la situation de fond en comble avant de prendre la décision d’interdire les jeux vidéo, vous pouvez me croire. Ce n’est pas parce que certaines tentatives de juguler l’hémorragie ont été faites que ça efface les dégâts qu’ont causés les jeux vidéo à la jeunesse canadienne et même à des moins jeunes. Vos convictions devront demeurer inébranlables lorsque vous démantèlerez la résistance. Est-ce que je peux compter sur vous? # character=CHEF_MILLER_NO_CIGAR expression=aversion

Fred: Bien sûr, chef. # character=FRED_GALLANT invisible

Chef Miller: J’aime mieux ça. Je peux même vous dire ce qu’ils vous ont servi à la résistance : il y avait des règlements qui limitaient l’utilisation des jeux, etc. Le gouvernement maintient que non, ils mentent… bla bla bla. # character=CHEF_MILLER_NO_CIGAR expression=disdain

Fred: Ça ressemble à ça, en effet. # character=FRED_GALLANT invisible

Chef Miller: Et bien je peux vous assurer que c’est faux. Les fameux « règlements » qu’ils veulent sortir des boules à mites n’étaient que des textes inefficaces destinés à calmer l’opinion publique, mais n’ont été d’aucun secours pour les jeunes dépendants, pour les jeunes exposés à de la violence ou de la sexualité avant d’avoir le cerveau assez construit pour faire la part des choses. # character=CHEF_MILLER_NO_CIGAR expression=alertness

Fred: C’est pour ça que je sers dans la police, chef. # character=FRED_GALLANT invisible

Chef Miller: Très bien. Donc, comme je vous le disais, j’ai un autre dossier pour vous.# character=CHEF_MILLER_NO_CIGAR expression=satisfaction

Fred: Très bien, lequel?# character=FRED_GALLANT invisible

Chef Miller: Voilà, vous travaillerez avec Moore là-dessus. Il s’agit d’une plainte concernant le 530 rue McLeod. On soupçonne une activité illégale de distribution de jeux. Les voisins ont alerté la police hier. Moore nous a dit que cette adresse avait déjà figuré dans un rapport. Grâce à la plainte, vous pourrez aller y jeter un coup d’œil tous les deux. Faites-moi votre rapport d’ici demain midi. Autre chose? # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Pas pour l’instant. Je suis différentes pistes.# character=FRED_GALLANT invisible

Chef Miller: Je ne vous retiens donc pas. Bonne journée.# character=CHEF_MILLER_NO_CIGAR expression=neutral

*Fred raconte tout au Chef Miller.
 ~ points_fin_A1 += 4
 Fred: Oui, j’ai des nouvelles de Kane.# character=FRED_GALLANT invisible

Chef Miller: De bonnes nouvelles? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Excellente! Il a fugué, mais ce n’est en rien lié aux jeux. J’ai retrouvé 34 minutes de temps de jeu sur le Dark Web, mais j’ai aussi retrouvé une lettre d’au revoir. # character=FRED_GALLANT invisible

Chef Miller: Quel genre de lettre? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Il est parti à cause de ses mauvaises notes à l’école. Je vais interroger les parents plus tard aujourd’hui. Je pense qu’ils doivent être exigeants. C’est un classique. # character=FRED_GALLANT invisible

Chef Miller: C’est donc officiel, je vais préparer le communiqué. Aucun lien avec les jeux vidéo. # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Et non! # character=FRED_GALLANT invisible

Chef Miller: Gallant, je vous retire de l’enquête. Bon boulot. Ça ne nous regarde plus. Inutile de contacter les parents. # character=CHEF_MILLER_NO_CIGAR expression=satisfaction

Fred: Mais ils pourraient avoir des pistes de l’endroit où il est! # character=FRED_GALLANT invisible

Chef Miller: Assurément, mais c’est au criminel de couvrir cette partie de l’affaire. Je vais vous donner un conseil, ne vous mêlez pas de ce qui n’est pas de votre secteur. Autre chose? # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: En ce qui concerne mon infiltration, je… # character=FRED_GALLANT invisible

Chef Miller: Où en êtes-vous? Des suspects intéressants? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Je côtoie quelques organisateurs, mais pas encore les personnages clés de la résistance. Le pseudo retrouvé sur le téléphone de Kane, Teacher, je n’y ai pas accès, mais il semble un des décideurs. Je suis présentement de plus en plus proche d’un homme qui s’appelle Christopher Young. # character=FRED_GALLANT invisible

Chef Miller: Oui, on le connaît. Il a déjà été appréhendé pour possession de jeux vidéo dans le but de les vendre à des mineurs. On n’a pas pu le coincer. Trouvez des preuves, Gallant. Cette fois, il ne nous échappera pas. Pour ce qui est de l’autre, vous y aurez accès dans un délai raisonnable? # character=CHEF_MILLER_NO_CIGAR expression=concern

Fred: Je crois que oui. Mais j’ai aussi découvert des informations troublantes au sujet de réglementations qui datent d’avant la loi… # character=FRED_GALLANT invisible

Chef Miller: Vous n’allez pas me sortir ces vieilles fake news? # character=CHEF_MILLER_NO_CIGAR expression=aversion

Fred: J’ai des documents officiels du gouvernement, chef. # character=FRED_GALLANT invisible

Chef Miller: Vous me les remettrez en même temps que votre rapport sur votre prochaine mission. Ne soyez pas ébranlée par ces racontars, Gallant. Le gouvernement a examiné la situation de fond en comble avant de prendre la décision d’interdire les jeux vidéo, vous pouvez me croire. Ce n’est pas parce que certaines tentatives de juguler l’hémorragie ont été faites que ça efface les dégâts qu’ont causés les jeux vidéo à la jeunesse canadienne et même à des moins jeunes. Vos convictions devront demeurer inébranlables lorsque vous démantèlerez la résistance. Est-ce que je peux compter sur vous? # character=CHEF_MILLER_NO_CIGAR expression=wtf

Fred: Bien sûr, chef. # character=FRED_GALLANT invisible

Chef Miller: J’aime mieux ça. Je peux même vous dire ce qu’ils vous ont servi à la résistance : il y avait des règlements qui limitaient l’utilisation des jeux, etc., etc. Le gouvernement maintient que non, ils mentent… bla bla bla.# character=CHEF_MILLER_NO_CIGAR expression=disdain

Fred: Ça ressemble à ça, en effet. # character=FRED_GALLANT invisible

Chef Miller: Et bien je peux vous assurer que c’est faux. Les fameux « règlements » qu’ils veulent sortir des boules à mites n’étaient que des ébauches destinées à calmer l’opinion publique, mais n’ont été d’aucun secours pour les jeunes dépendants, pour les jeunes exposés à de la violence ou de la sexualité avant d’avoir le cerveau assez construit pour faire la part des choses. # character=CHEF_MILLER_NO_CIGAR expression=alertness

Fred: C’est pour ça que je sers dans la police, chef. # character=FRED_GALLANT invisible

Chef Miller: Très bien. Donc, comme je vous le disais, j’ai un autre dossier pour vous. # character=CHEF_MILLER_NO_CIGAR expression=satisfaction

Fred: Très bien, lequel? # character=FRED_GALLANT invisible

Chef Miller: Voilà, vous travaillerez avec Moore là-dessus. Il s’agit d’une plainte concernant le 530 rue Mcleod. On soupçonne une activité illégale de distribution de jeux. Les voisins ont alerté la police hier. Moore nous a dit que cette adresse avait déjà figuré dans un rapport. Grâce à la plainte, vous pourrez aller y jeter un coup d’œil tous les deux. Faites-moi votre rapport d’ici demain midi. Autre chose? # character=CHEF_MILLER_NO_CIGAR expression=neutral

Fred: Pas pour l’instant. Je suis différentes pistes. Mais cette adresse est liée à Young. # character=FRED_GALLANT invisible

Chef Miller: Parfait. Je ne vous retiens donc pas. Bonne journée. # character=CHEF_MILLER_NO_CIGAR expression=neutral
-
~cacher_tout_personnages()
TODO=Transition - Image non définie encore
->scene_16

=scene_16
~jouer_musique(theme_news)

{points_fin_1 > points_fin_2 and points_fin_1 > points_fin_3:
          ~ afficher_fond(chapitre_1_gros_titres_1)
          }

{points_fin_2 > points_fin_1 and points_fin_2 > points_fin_3:
          ~ afficher_fond(chapitre_1_gros_titres_2)
          }

{points_fin_3 > points_fin_1 and points_fin_3 > points_fin_2:
          ~ afficher_fond(chapitre_1_gros_titres_3)
          }

TODO=Transition - Image non définie encore

-> chapitre_2.scene_1
