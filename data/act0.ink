=== prologue ===

= scene_0

~ afficher_fond(data_glitch)
~ jouer_musique(theme_intro)
Néo-Ottawa, 2047. La <i>Loi Game Over</i> est en vigueur depuis 25 ans. Au Canada et dans de nombreux autres pays, il est interdit de concevoir, de distribuer, de vendre ou de jouer à quelque jeu vidéo que ce soit. # center
Que la loi soit vous semble justifiée ou non, vous devrez la défendre. Vous êtes maintenant l’agent FRED GALLANT, jeune recrue. # center
C’est votre première journée. Vous êtes un peu nerveuse. #center
Vous avez quelques appréhensions, mais vous devrez aller jusqu’au bout, prendre des risques. Faire des choix. Des choix qui changeront l’avenir. Des choix qui détermineront le type d’agent que vous serez. Un agent dont l’histoire se souviendra, peut-être. Vous devrez prendre des notes, effectuer des recherches. # center
~ arreter_musique()
~ cacher_fond()
Préparez-vous. Respirez. Inspirez. Expirez. Fermez les yeux. Ouvrez-les. Commencez. # center
~ jouer_effet_sonore(respiration)
-> scene_1

= scene_1
~ afficher_fond (brigade_outside)
~ jouer_musique(theme_police)
Fred: Tiens-t’en à ton plan : suivre les ordres; avancer; faire les choses proprement; avoir de l’initiative. # character=FRED_GALLANT invisible
~ arreter_musique()
~ activer_pda()
-> scene_2

= scene_2
~ afficher_fond(brigade)
~ jouer_musique(theme_police)
???: Eh! La nouvelle! # character=GABRIEL_SAND expression=amusement
~ afficher_personnage(GABRIEL_SAND, "slideInUp")
Fred: Où dois-je me rapporter? # character=FRED_GALLANT invisible
???: Directement au CHEF MILLER. # character=GABRIEL_SAND expression=neutral
???: Gallant, c’est ça? # character=GABRIEL_SAND expression=neutral
Fred: C’est ça. À qui ai-je l’honneur? # character=FRED_GALLANT invisible
Gabriel: Agent Sand. Gab. # character=GABRIEL_SAND expression=joy
~ afficher_personnage(GABRIEL_SAND, "slideOutDown")
~ ajouter_contact(GABRIEL_SAND)
~ cacher_tout_personnages()
-> scene_3

= scene_3

<b>Fred</b> se dirige directement vers le bureau du <b>CHEF MILLER</b>.
~ afficher_fond (porte_chef_miller)
Elle tape à la porte.

Chef Miller: Entrez. # character=CHEF_MILLER
~ jouer_effet_sonore (opening_door)
~ afficher_fond(bureau_chef_miller)
~ afficher_personnage(CHEF_MILLER, "slideInUp")
Fred: Agent Gallant, au rapport. # character=FRED_GALLANT invisible
Chef Miller: Détendez-vous, Gallant. Le protocole, on s’y tiendra bien assez tôt. Comment vous sentez-vous? # character=CHEF_MILLER expression=sterness
Fred: Prête. # character=FRED_GALLANT invisible
Chef Miller: J’aime votre attitude, Gallant. Assoyez-vous. # character=CHEF_MILLER expression=satisfaction
Fred: Merci # character=FRED_GALLANT invisible
<b>Fred</b> s'assoit.
Chef Miller: Un café? # character=CHEF_MILLER expression=neutral
Fred: Merci, j’ai déjeuné. # character=FRED_GALLANT invisible
Chef Miller: Très bien. J’ai une seule autre question pour vous Gallant. Qu’est-ce qui vous amène dans la brigade anti-jeux vidéo? # character=CHEF_MILLER expression=wtf
Fred: J’ai… pendant mes études, j’ai… # character=FRED_GALLANT invisible
Chef Miller: Comprenez-moi bien : peu de gens demandent à être affectés ici lorsqu’ils sortent de l’Académie. Ce n’est pas la brigade la plus sexy, cependant, ici, on prend les choses au sérieux ou on a de sérieux problèmes avec moi. # character=CHEF_MILLER expression=aversion
Fred: Oui, chef. # character=FRED_GALLANT invisible
Chef Miller: Répondez à la question, agent Gallant. # character=CHEF_MILLER expression=aversion
Fred: J’ai été…j’ai demandé à être affectée à la brigade anti-jeux vidéo, chef. # character=FRED_GALLANT invisible
Chef Miller: Je sais. Mais pourquoi? # character=CHEF_MILLER expression=sterness
Fred: C’est une cause qui m’intéresse. # character=FRED_GALLANT invisible
Chef Miller: Allez droit au but, agent Gallant. Dites-moi la vérité. Je veux savoir qui j’envoie sur le terrain. # character=CHEF_MILLER expression=wtf
Fred: La loi… Les contrevenants sont encore nombreux, parfois fanatiques. Je pense qu’il y a place à amélioration. Je voulais… # character=FRED_GALLANT invisible
Chef Miller: Vous voulez innover? Vous démarquez? Dans un secteur où c’est encore possible? # character=CHEF_MILLER expression=sterness
Fred: Je…	 # character=FRED_GALLANT invisible
Chef Miller: Vous n’avez pas à rougir de votre ambition. J’aime bien votre pragmatisme. On a besoin d’éléments comme vous, Gallant. Bienvenue dans l’équipe. # character=CHEF_MILLER expression=satisfaction
Chef Miller: Tenez Gallant, votre premier dossier. # character=CHEF_MILLER expression=neutral

*   <b>Fred</b> choisit de prendre le dossier immédiatement et de l’ouvrir devant le <b>chef Miller</b>.
    Chef Miller: Eh bien Fred? C’est mon bureau ici. Allez faire vos lectures ailleurs. # character=CHEF_MILLER expression=sterness
*   <b>Fred</b> choisit de prendre le dossier sans l’ouvrir.
    Chef Miller: Bien. Ce sera tout. # character=CHEF_MILLER expression=neutral
*   <b>Fred</b> choisit de ne pas bouger et d’attendre d’autres ordres.
    Chef Miller: Qu’est-ce que vous attendez, Fred? Ma bénédiction? Des mots d’encouragement # character=CHEF_MILLER expression=wtf
- Chef Miller: Un instant Gallant. Avant que vous ne partiez, je veux vous préciser quelque chose sur ce dossier. Prenez-en rapidement connaissance. On a retrouvé un enfant de 13 ans en très mauvais état. # character=CHEF_MILLER expression=concern
Chef Miller: On a examiné plusieurs avenues, mais les parents ont des soupçons quant à des jeux vidéo auxquels on l’aurait initié. Ils pensent qu’il a été exposé à un jeu conçu après l’entrée en vigueur de la Loi Game Over. Un jeu à forte dépendance. On pense qu’il est possible que les concepteurs de ce jeu l’aient sciemment programmé de façon à ce qu’il crée chez les joueurs une dépendance permanente, une pathologie. #character=CHEF_MILLER expression=concern
Fred: Comme les dépendances aux drogues dures. # character=FRED_GALLANT invisible
Chef Miller: Exact. Sa vie est peut-être en danger. Et s’il arrivait un malheur, on nous en tiendrait probablement responsable. On doit mettre la main sur les créateurs du jeu. Mais d’abord, établissez hors de tout doute la responsabilité du jeu. Les parents ne sont pas toujours conscients de qui sont vraiment leurs enfants. # character=CHEF_MILLER expression=sterness
Fred: Oui, Chef. # character=FRED_GALLANT invisible
Chef Miller: On ne peut pas interroger l’enfant pour l’instant, il est médicamenté et hors-circuit à ce qu’il semble. Vous devrez vous débrouiller pour trouver une piste qui pourrait nous mener au distributeur, puis au concepteur. Avant que ce jeu ne fasse d’autres victimes. Commencez par les parents, mais méfiez-vous de ce qu’ils racontent. Selon mon expérience, les parents sont rarement des témoins fiables. # character=CHEF_MILLER expression=neutral
Fred: Oui, Chef. # character=FRED_GALLANT invisible
Chef Miller: Je compte sur vous. Vous travaillerez seule sur cette première mission. Ensuite, vous aurez peut-être ma confiance. # character=CHEF_MILLER expression=aversion

*   <b>Fred</b> pose la question suivante au chef Miller :
    Fred: Pourquoi me confier une mission si importante dès mon premier jour? # character=FRED_GALLANT invisible
    Chef Miller: Vous avez une occasion de faire vos preuves. Une seule occasion. Ne la bousillez pas. # character=CHEF_MILLER expression=sterness
*   <b>Fred</b> remercie le chef Miller.
    Chef Miller: Allez faire ce pour quoi on vous paye. # character=CHEF_MILLER expression=sterness
*   <b>Fred</b> décide de sortir du bureau sans rien dire.
    Chef Miller: ... # character CHEF_MILLER expression=sterness

- Chef Miller: Vous passerez au bureau 403 pour récupérer votre badge et votre arme. Bonne chance et bienvenue. # character=CHEF_MILLER expression=neutral
~ ajouter_contact(CHEF_MILLER)
~ ajouter_document(LOI_GAME_OVER)
~ cacher_tout_personnages()
-> scene_4

= scene_4
~ afficher_fond(bureau_fred)
~ afficher_personnage(AGENT_LUCAS, "slideInLeft")
~ afficher_personnage(AGENT_MOORE, "slideInRight")
D’un côté il y a <b>l’AGENT MOORE</b> et de l’autre, <b>l’AGENT LUCAS</b>.
Agent Lucas: Hey, la nouvelle! Tu as reçu un dossier? # character=AGENT_LUCAS expression=neutral
Fred: Comme tu vois. # character=FRED_GALLANT invisible

*   <b>Fred</b> entame une conversation spontanément avec ses collègues.
    Fred: Alors, vos noms? # character=FRED_GALLANT invisible
    Agent Lucas: Lucas. Lui, c’est Moore. Attention, il n’est pas très bavard, mais il entend tout. # character=AGENT_LUCAS expression=amusement
    Agent Moore: Regarde qui parle. Ne fais pas confiance à Lucas. On ne sait pas toujours où il traîne. # character=AGENT_MOORE expression=neutral
    Agent Lucas: On t’a confié le dossier du petit Leigh Kane? # character=AGENT_LUCAS expression=concern
    Fred: Je… # character=FRED_GALLANT invisible
    ~ ajouter_contact(AGENT_LUCAS)
    ~ ajouter_contact(AGENT_MOORE)
    ~ arreter_musique()
    ~ afficher_fond(ouverture_dossier_kane)
    <b>Fred</b> ouvre le dossier, car elle n’a pas pris connaissance du nom encore. </br> Elle aperçoit la photo d’un jeune homme cerné et maigre, blême à faire peur avec un regard complètement vide et maladif. #center
    ~ ajouter_contact(LEIGH_KANE)
    ~ afficher_fond(bureau_fred)
    ~ jouer_musique(theme_fred)
    Fred: Oui, Leigh Kane. # character=FRED_GALLANT invisible
    Agent Lucas: Merde! # character=AGENT_LUCAS expression=concern
    Agent Moore: Lucas, laisse-la tranquille. # character=AGENT_MOORE expression=neutral
    Agent Lucas: Tout ce que je dis, c’est que tu vas en baver. Un enfant catatonique, c’est du bonbon pour les médias. Si la corrélation est établie, bien sûr! # character=AGENT_LUCAS expression=sterness
    Fred: Je vois. # character=FRED_GALLANT invisible
*   <b>Fred</b> ouvre son dossier et fait mine d’avoir besoin de toute sa concentration et donc, qu'elle ne peut pas socialiser.
    Agent Lucas: Hey princesse! Ici, on travaille en équipe. Tu te crois meilleure que nous? Mais tu sais, on est gentil, on t’attendra. # character=AGENT_LUCAS expression=aversion
    Agent Moore: Laisse-la. Elle va apprendre. # character=AGENT_MOORE expression=neutral
    ~ ajouter_contact(AGENT_LUCAS)
    ~ ajouter_contact(AGENT_MOORE)
    ~ arreter_musique()
    ~ afficher_fond (ouverture_dossier_kane)
     <b>Fred</b> ouvre le dossier, car elle n’a pas pris connaissance du nom encore. </br> Elle aperçoit la photo d’un jeune homme cerné et maigre, blême à faire peur avec un regard complètement vide et maladif. #center
    ~ ajouter_contact(LEIGH_KANE)
    ~ afficher_fond(bureau_fred)
    ~ jouer_musique(theme_fred)
    Agent Lucas: Oui, et dès maintenant. On lui a confié Kane. # character=AGENT_LUCAS expression=aversion
    Agent Moore: Hahahaha! Bienvenue! Hahahaha! # character=AGENT_MOORE expression=laughing
*   Fred ne souhaite pas parler à vos collègues.
    Fred: Je ne me cherche pas d’amis. Et vous m’excuserez, mais j’ai du travail. # character=FRED_GALLANT invisible
    Agent Lucas: Tu as entendu, Moore? On a affaire à une mal élevée. # character=AGENT_LUCAS expression=aversion
    Agent Moore: J’ai entendu. # character=AGENT_MOORE expression=sterness
    ~ ajouter_contact(AGENT_LUCAS)
    ~ ajouter_contact(AGENT_MOORE)
    ~ arreter_musique()
    ~ afficher_fond (ouverture_dossier_kane)
     <b>Fred</b> ouvre le dossier, car elle n’a pas pris connaissance du nom encore. </br> Elle aperçoit la photo d’un jeune homme cerné et maigre, blême à faire peur avec un regard complètement vide et maladif. #center
     ~ ajouter_contact(LEIGH_KANE)
     ~ afficher_fond(bureau_fred)
     ~ jouer_musique(theme_fred)
    Agent Lucas: Moore? # character=AGENT_LUCAS expression=neutral
    Agent Moore: Quoi? # character=AGENT_MOORE expression=neutral
    Agent Lucas: Tu veux un café? Je sors, ça pue ici. # character=AGENT_LUCAS expression=aversion
    Agent Moore: Ouais, je te suis. # character=AGENT_MOORE expression=sterness
- ~ cacher_tout_personnages()
~ afficher_personnage(CHEF_MILLER, "slideInUp")
Le <b>chef Miller</b> apparaît devant le bureau de Fred.
Chef Miller: Il y a du nouveau. Viens. # character=CHEF_MILLER expression=neutral
-> scene_5

= scene_5
~ afficher_fond(corridor_poste_police)
~ jouer_musique (theme_police)
Chef Miller: Écoute, ça va mal : le garçon est disparu. Jusqu’à nouvel ordre, c’est une fugue ou un enlèvement. Vous partez immédiatement. Vous devez trouver le moyen de fouiller sa chambre. Vous aurez les gars du criminel dans les pattes. Dépêchez-vous. On ignore comment il a pu se sauver avec tous les sédatifs qu’il a reçus! # character=CHEF_MILLER expression=concern
~ cacher_tout_personnages()
-> scene_6

= scene_6
~ afficher_fond(voiture_fred)
Fred: C’est pas le moment de t’énerver. Focus. # character=FRED_GALLANT invisible
~ jouer_effet_sonore(respiration)
~ cacher_fond()
~ jouer_musique(theme_narrateur)
L'écran devient noir. #center
Narrateur: L’agent Gallant n’a pas connaissance de cette conversation. Vous ne pouvez plus l’aider. Présentement, elle est éteinte, en pause. Elle se souviendra de ce moment comme de ce qu’elle appellera plus tard, une absence. Et ces absences ont précisément commencé aujourd’hui, à cet instant # character=NARRATEUR center
~ ajouter_contact(NARRATEUR)
// TODO: (Animation: transition du fond noir vers le lieu avec “des yeux qui s’ouvrent” / cligner des yeux?)
~ arreter_musique()
~ afficher_fond(voiture_fred)
Fred: Qu’est-ce qui m’est arrivée…? Allez, au travail. # character=FRED_GALLANT invisible
-> scene_7

= scene_7
~ afficher_fond(chambre_leigh_kane)
~ jouer_musique(theme_enquete)
~ afficher_personnage(ENQUETEUR_BEAULIEU, "slideInUp")
L’enquêteur du criminel est présent. # center
*   <b>Fred</b> aborde directement <b>l’enquêteur du criminel</b>.
    Fred: Fred Gallant, brigade anti-jeux vidéo. # character=FRED_GALLANT invisible
    Enquêteur Beaulieu: Rien à foutre que vous soyez la fille du premier ministre ou l’éboueur sur appel. Sortez de cette chambre ou je vous jure que vous le regretterez.	# character=ENQUETEUR_BEAULIEU expression=wtf
    Fred: J’ai une enquête à faire moi aussi. Je n’aurais besoin que de l’accès à son téléphone et à son ordinateur. # character=FRED_GALLANT invisible
    Enquêteur Beaulieu: Mais c’est merveilleux! Vous allez trouver le petit? Gallant vous avez dit? # character=ENQUETEUR_BEAULIEU expression=cruel
    Fred: Oui. # character=FRED_GALLANT invisible
    Enquêteur Beaulieu: Vous êtes nouvelle) c’est ça? # character=ENQUETEUR_BEAULIEU expression=aversion
    Enquêteur Beaulieu: BRIGHTON? # character=ENQUETEUR_BEAULIEU
    ~ afficher_personnage(BRIGHTON, "slideInUp")
    Brighton: Oui chef? # character=BRIGHTON expression=neutral
     ~ ajouter_contact(BRIGHTON)
    Enquêteur Beaulieu: Sors-moi cette clown d’ici tout de suite. J’appelle Miller ! #character=ENQUETEUR_BEAULIEU expression aversion
     ~ jouer_effet_sonore(sonnerie_telephone)
    Enquêteur Beaulieu: Miller? Ton agent, là, Gallant, elle veut les accès au téléphone et quoi d’autre? Tu lui expliqueras comment ça marche si tu veux qu’elle survive dans le métier. # character=ENQUETEUR_BEAULIEU expression=wtf
*   <b>Fred</b> tente d’être la plus discrète possible tout en observant le travail des agents présents.
    Enquêteur Beaulieu: Qui croyez-vous être pour enter ici pendant qu’on y est? # character=ENQUETEUR_BEAULIEU expression=aversion
    Fred: Fred Gallant, brigade anti-jeux vidéo. # character=FRED_GALLANT invisible
    Enquêteur Beaulieu: Oooh! Quelle chance! Je vous attendais! # character=ENQUETEUR_BEAULIEU expression=cruel
    Enquêteur Beaulieu: Sortez d’ici avant que je vous fasse arrêter. Vous aurez accès à la chambre une fois que nous aurons déterminé s’il s’agit d’une fugue ou d’un enlèvement. # character=ENQUETEUR_BEAULIEU expression=rage
    Fred: Je n’aurais besoin que de l’accès à son téléphone et à son ordinateur. # character=FRED_GALLANT invisible
    Enquêteur Beaulieu: Mais c’est que nous avons affaire à un génie! Vous l’aurez. Maintenant, sortez d’ici. Et ne touchez à rien. # character=ENQUETEUR_BEAULIEU expression=wtf
    <b>Fred</b> attend quelques minutes…
*    <b>Fred</b> choisit d’attendre dans le cadre de porte et de voir ce qui se passe avant d’intervenir.
    Enquêteur Beaulieu: Mais où est l'abruti de la brigade anti-jeux vidéo? Pas encore arrivé? # character=ENQUETEUR_BEAULIEU expression=rage
    Fred: Je suis ici. # character=FRED_GALLANT invisible
    Enquêteur Beaulieu: J’aurais dû m’en douter. Tu attends sagement ton tour. # character=ENQUETEUR_BEAULIEU expression=wtf
    Fred: Je n’ai besoin que d’un accès à son téléphone et à son ordinateur. Puis à sa chambre quand vous aurez terminé. # character=FRED_GALLANT invisible
    Enquêteur Beaulieu: Mais elle est bien élevée cette idiote. Brighton? # character=ENQUETEUR_BEAULIEU expression=aversion
    ~ afficher_personnage(BRIGHTON, "slideInUp")
    Brighton: Oui chef? # character=BRIGHTON animation=slideInUp expression=neutral
     ~ ajouter_contact(BRIGHTON)
    Enquêteur Beaulieu: Donne-lui l’accès. Puis, qu'elle dégage. J’appelle Miller en attendant.  # character=ENQUETEUR_BEAULIEU expression=aversion
 ~ jouer_effet_sonore(sonnerie_telephone)
    Enquêteur Beaulieu: Félicitations, ton agent ne m’est pas encore tombée sur les nerfs. Oui, elle a son accès. # character=ENQUETEUR_BEAULIEU expression=aversion
- 	Enquêteur Beaulieu: La chambre est à vous. # character=ENQUETEUR_BEAULIEU expression=aversion
~ ajouter_contact(ENQUETEUR_BEAULIEU)
~ cacher_tout_personnages()
<b>Fred</b> explore la chambre de fond en comble. Une chambre d’adolescent tout ce qu’il y a de plus normal. Rien sur une éventuelle dépendance aux jeux vidéo. <b>Fred</b> met la main sur le téléphone de <b>Leigh Kane</b>, mais impossible de trouver son ordinateur.
-> scene_8

= scene_8
~ afficher_fond(bureau_fred)
~ jouer_musique(theme_fred)
<b>Fred</b> parcourt les données du téléphone de <b>Leigh Kane</b>. Elle découvre deux conversations. L’une entre <b>Leigh Kane</b> et sa <b>cousine</b>. L’autre, avec un pseudo mystérieux… <b>TEACHER</b>.
~ afficher_fond(telephone_kane)
<b>Lundi, 18h37:</b>
TEACHER: Tu vas adorer # character=TEACHER_V1 invisible
Leigh Kane: Bah vous dites toujours ça # character=LEIGH_KANE invisible
TEACHER: Cette fois, il est au point. On est tous à fond sur le jeu. Tu pourras plus t’arrêter. Il est immersif, complexe, on s’y croirait, on oublie tout. # character=TEACHER_V1 invisible
Leigh Kane: Où et quand # character=LEIGH_KANE invisible
TEACHER: Tu peux l’avoir dès ce soir # character=TEACHER_V1 invisible
Leigh Kane: Combien # character=LEIGH_KANE invisible
TEACHER: 400 # character=TEACHER_V1 invisible
Leigh Kane: Où # character=LEIGH_KANE invisible
TEACHER: Je t’indique le lieu et l’heure plus tard # character=TEACHER_V1 invisible
Leigh Kane: (pouce en l'air) # character=LEIGH_KANE invisible
<b>Mercredi, 11h02:</b>
TEACHER: 23h, 5567 Flemming<br/>Tu cognes 4 coups secs<br/>Mot de passe : ratata02 # character=TEACHER_V1 invisible
Leigh Kane: (pouce en l’air) # character=LEIGH_KANE invisible
~ ajouter_contact(TEACHER_V1)
-> scene_9

= scene_9
~ afficher_fond(rue_flemming)
*   <b>Fred</b> décide de sonner à la porte.
~ afficher_fond(rue_flemming_porte)
~ jouer_effet_sonore(cris)
~ jouer_effet_sonore(aboiements)
    Voix d'homme, derrière la porte: Qui est là? # character=HOMME invisible
    Fred: Police, ouvrez. # character=FRED_GALLANT invisible
    Voix d'homme: Faites passer votre mandat sous la porte. Si vous n’avez pas de mandat, fichez le camp d’ici. C’est une maison privée. # character=HOMME invisible
	<b>Fred</b> n’a pas de mandat de perquisition. Elle fait demi-tour et se dirige vers sa voiture.
*   <b>Fred</b> décide de ne pas sonner à la porte, mais de faire le tour de la maison et de tenter de voir par les fenêtres.
    Il fait sombre et il y a peu de mouvement.
   <b>Fred</b> n’entend rien, mais elle voit qu’il y a des gens à l’intérieur. Rien de véritablement suspect. Elle se dirige vers sa voiture.
*   <b>Fred</b> reste dans la voiture pour observer.
    La maison semble banale.
    Il y a des gens à l’intérieur, mais <b>Fred</b> ne voit pas bien de là où elle est.
--> scene_10

= scene_10
~ afficher_fond(voiture_fred)
// TODO=Animation: Une silhouette obscure apparaît, sortant de derrière la maison
Au moment de démarrer la voiture, <b>Fred</b> voit une jeune femme sortir à l’arrière de la maison et qui semble fuir.
*   Fred décide d’aborder <b>la jeune femme</b>.
    ~ afficher_personnage(BONNIE_RANDLE_V1, "zoomIn")
    Fred: Mademoiselle, arrêtez-vous s’il vous plaît. # character=FRED_GALLANT invisible
    Jeune Femme: Ne me suivez pas! Ils vont nous voir. Attendez-moi au coin de la rue Arch. # character=BONNIE_RANDLE_V1 expression=sterness
	<b>Fred</b> roule jusqu'à la rue Arch et l'attend.
*   Fred suit discrètement <b>la jeune femme</b>.
    <b>La jeune femme</b> s’en aperçoit et accélère le pas. Rendue au coin de la rue Arch, elle s’arrête et s’approche du véhicule.
    ~ afficher_personnage(BONNIE_RANDLE_V1, "zoomIn")
- <b>La jeune femme</b> monte dans le véhicule.
	Jeune Femme: Je m’appelle Bonnie. Je fais partie de la résistance. Mais là, j’en ai marre. C’est pour ça que vous êtes là? Coincer la résistance? # character=BONNIE_RANDLE_V1 expression=sterness
~ ajouter_contact(BONNIE_RANDLE_V1)
~ cacher_tout_personnages()
-> scene_11

= scene_11
~ afficher_fond(art_house_cafe)
~ jouer_musique(theme_art_house_cafe)
~ afficher_personnage(BONNIE_RANDLE_V1, "fadeIn")
Fred: Qu’est-ce que je peux faire pour vous? # character=FRED_GALLANT invisible
Bonnie: Je voudrais sortir de la résistance. Je voudrais aussi qu’ils ne puissent plus me rejoindre. Je voudrais que mes parents ne sachent pas que j’en aie fait partie.  # character=BONNIE_RANDLE_V2 expression=sterness
Fred: Connaissez-vous Leigh Kane? # character=FRED_GALLANT invisible
Bonnie: Non. Je n’ai jamais entendu ce nom.  # character=BONNIE_RANDLE_V2 expression=default
<b>Fred</b> lui montre la photo de <b>Leigh Kane</b>.
Bonnie: Jamais vu. # character=BONNIE_RANDLE_V2 expression=default
Fred: Étiez-vous au 5567, Flemming le soir du 10 juillet dernier? # character=FRED_GALLANT invisible
Bonnie: Je ne sais pas, c’était quand ça, quel jour? # character=BONNIE_RANDLE_V2 expression=neutral
Fred: C’était un mercredi. # character=FRED_GALLANT invisible
Bonnie Randle, <i>mal à l'aise</i> : Peut-être, j’y traînais de temps en temps. # character=BONNIE_RANDLE_V2 expression=melancholy
Fred: Parlez-moi des activités de la résistance. # character=FRED_GALLANT invisible
Bonnie: Je ne sais presque rien. Ils ne veulent pas que des mineurs soient au courant de leurs manigances. J’avais seulement le droit de me trouver avec eux, mais ils parlent à mots couverts.  # character=BONNIE_RANDLE_V2 expression=neutral
Fred: Quel est leur but?  # character=FRED_GALLANT invisible
Bonnie: Jouer et faire en sorte que plus de monde continue à jouer. Et puis, ils croient qu’ils vont arriver à faire reculer le gouvernement  et à faire abroger la <i>Loi Game Over</i>. Ils préparent quelque chose, mais je ne sais pas quoi.  # character=BONNIE_RANDLE_V2 expression=neutral
Fred: D’accord, mais jouer à quoi? À des jeux dangereux?  # character=FRED_GALLANT invisible
Bonnie: Je croyais que tous les jeux étaient potentiellement dangereux selon vous. Écoutez, je rentre à la faculté de droit à l’automne. Si on apprend que j’ai côtoyé des gens qui ont une activité illégale, mon père va me tuer.  # character=BONNIE_RANDLE_V2 expression=sterness
Fred: Avez-vous joué? # character=FRED_GALLANT invisible
Bonnie: Non, jamais. Je n’arrive pas à contrôler les manettes! # character=BONNIE_RANDLE_V2 expression=alertness
*   <b>Fred</b> ne croit pas <b>Bonnie</b>.
    Fred: Si vous voulez que je vous aide, vous allez devoir me dire la vérité. J’ai besoin de savoir ce qui est arrivé au garçon dont je vous ai montré la photo.<br/>Ça urge. # character=FRED_GALLANT invisible
    Bonnie: D’accord, j’ai joué une ou deux fois, mais je ne connais pas ce garçon. Je vous jure que je ne l’ai jamais vu! # character=BONNIE_RANDLE_V2 expression=wonder
    Fred: Quel genre de jeux? # character=FRED_GALLANT invisible
    Bonnie: Des vieux jeux. Des jeux pour enfants. Ils les appellent les jeux d’arcade. Ça me semblait inoffensif! # character=BONNIE_RANDLE_V2 expression=neutral
    Fred: Vous allez m’aider. # character=FRED_GALLANT invisible
    Bonnie: Comment? # character=BONNIE_RANDLE_V2 expression=default
    Fred: Je vais infiltrer la résistance. # character=FRED_GALLANT invisible
*   <b>Fred</b> ne confronte pas <b>Bonnie</b> davantage, mais tente de l’amadouer autrement.
    Fred: Tu peux me dire tout ce que tu as sur le cœur. C’est mon travail de venir en aide aux gens qui ont des contacts avec des jeux. Je m’occupe de faire respecter la <i>Loi Game Over</i>, mais ça veut aussi dire apporter du soutien aux personnes qui sont prisonnières d’une dépendance. # character=FRED_GALLANT invisible
    Bonnie: Je ne peux pas avoir un casier judiciaire et je ne suis pas dépendante. # character=BONNIE_RANDLE_V2 expression=disdain
    Fred: J’ai compris. Mais pourquoi m’as-tu contactée réellement? Pourquoi tu veux quitter le groupe? # character=FRED_GALLANT invisible
    Bonnie: D’accord, j’ai joué une ou deux fois, mais je ne connais pas ce garçon. Je vous jure que je ne l’ai jamais vu! # character=BONNIE_RANDLE_V2 expression=wonder
    Fred: Quel genre de jeux? # character=FRED_GALLANT invisible
    Bonnie: Des vieux jeux. Des jeux pour enfants. Ils les appellent les jeux d’arcade. Ça me semblait inoffensif! # character=BONNIE_RANDLE_V2 expression=neutral
    Fred: Vous allez m’aider. # character=FRED_GALLANT invisible
    Bonnie: Comment? # character=BONNIE_RANDLE_V2 expression=default
    Fred: Je vais infiltrer la résistance. # character=FRED_GALLANT invisible
*   <b>Fred</b> abandonne. Ce témoin ne lui sera pas utile. Sauf pour l’idée qu’elle a désormais en tête. Celle d’infiltrer la résistance.
    Fred: Vous allez m’aider. # character=FRED_GALLANT invisible
Bonnie: Comment? # character=BONNIE_RANDLE_V2 expression=default
Fred: Je vais infiltrer la résistance. # character=FRED_GALLANT invisible
- <b>Bonnie</b> donne le nom et le numéro de téléphone d’une personne que <b>Fred</b> peut appeler en prétendant vouloir se procurer un jeu.
Bonnie: Vous pouvez dire que vous avez eu ces infos de moi. Dites que vous connaissez mon grand frère, <b>John Randle</b>, de l’Université d’Ottawa. Il a votre âge, il est nouvellement ingénieur. Ils le connaissent. Ce type, Young, lui fait entièrement confiance et c’est pour ça qu’ils me laissent jouer dans leurs locaux, même si je suis mineure. Mais ensuite vous m’aiderez? # character=BONNIE_RANDLE_V2 expression=default
Fred: Connaissez-vous quelqu’un qui utilise le pseudo de Teacher? # character=FRED_GALLANT invisible
Bonnie: Non, jamais entendu parler. # character=BONNIE_RANDLE_V2 expression=default

~ retirer_contact(BONNIE_RANDLE_V1)
~ ajouter_contact(BONNIE_RANDLE_V2)
~ ajouter_contact(JOHN_RANDLE)
~ ajouter_contact(CHRISTOPHER_YOUNG)
~ cacher_tout_personnages()
-> scene_12

= scene_12
~ afficher_fond(bureau_fred)
~ jouer_musique(theme_police)
~ afficher_personnage(CHEF_MILLER_NO_CIGAR, "slideInUp")
Chef Miller: Gallant, j’ai… # character=CHEF_MILLER_NO_CIGAR expression=neutral
~ cacher_fond()
~ cacher_tout_personnages()
~ arreter_musique()
L'écran devient noir. #center
~ jouer_musique(theme_narrateur)
Vous reconnaissez la croisée des chemins quand vous y faites face? Vous aimez sentir la pression jusque dans le battement de vos tempes? La sueur perle sur votre front. Le moment sera décisif. Serez-vous à la hauteur? Dors Fred, dors. Pendant qu’on s’occupe de ton avenir. # character=NARRATEUR invisible center
~ afficher_fond(bureau_fred)
~jouer_musique(theme_choix_finaux)
# Animation: transition du fond noir vers le lieu avec “des yeux qui s’ouvrent” / cligner des yeux?
~ afficher_personnage(CHEF_MILLER_NO_CIGAR, "none")
Chef Miller: Fred? Fred? Est-ce que vous manquez de sommeil? Secouez-vous! Reprenez vos esprits! # character=CHEF_MILLER_NO_CIGAR expression=anger
Chef Miller: Alors? Du nouveau? Qu’avez-vous trouvé sur les lieux?	# character=CHEF_MILLER_NO_CIGAR expression=sterness
Fred: Peu de choses. Il n’y a rien de frappant qui mène à la conclusion que cet enfant jouait de manière clandestine. Pas dans sa chambre. # character=FRED_GALLANT invisible
Chef Miller: Et ses conversations téléphoniques? Ses messages textes? Son ordinateur? Rien là non plus? # character=CHEF_MILLER_NO_CIGAR
*   <b>Fred</b> choisit de ne rien dire au <b>Chef Miller</b>.
  ~ points_fin_3 += 2
    Fred: Non, rien pour l’instant. # character=FRED_GALLANT invisible
    Chef Miller: Aucune piste? # character=CHEF_MILLER_NO_CIGAR expression=wtf
    Fred: Rien de sérieux. # character=FRED_GALLANT invisible
    Chef Miller: Le criminel a confirmé la cause de la disparition : tout indique que c’est une fugue. Je ne veux rien lire dans les médias sur un lien avec les jeux vidéo, Gallant. Vous m’entendez? Prouvez que ce n’est pas le cas. Si c’est le cas, je veux boucler ça sans publicité. # character=CHEF_MILLER_NO_CIGAR expression=neutral
    Fred: Certainement. Je vérifie encore quelques possibilités. # character=FRED_GALLANT invisible
    Chef Miller: Ne me laissez pas tomber sur ce coup, Gallant. C’est votre période d’essai, vous me suivez?	# character=CHEF_MILLER_NO_CIGAR expression=sterness
    Fred: Oui, chef. # character=FRED_GALLANT invisible
    Chef Miller: Et vous devriez consulter un médecin. Vous n’avez pas l’air d’aller bien. # character=CHEF_MILLER_NO_CIGAR expression=neutral
~ cacher_tout_personnages()
~ afficher_fond(telephone_fred)
<b>Fred</b> compose au numéro que <b>Bonnie</b> lui a donné.
~ jouer_effet_sonore(composer_numero)
     ???: Qui est-ce? # character=CHRISTOPHER_YOUNG invisible
     Fred: Bonjour Young, je m’appelle Fred. C’est John Randle qui m’a donné votre numéro. # character=FRED_GALLANT invisible
     Christopher: John qui? # character=CHRISTOPHER_YOUNG invisible
     Fred: Euh… Randle. # character=FRED_GALLANT invisible
     Christopher: Ah. Vous connaissez Randle? # character=CHRISTOPHER_YOUNG invisible
     Fred: Oui. # character=FRED_GALLANT invisible
     Christopher: Comment? # character=CHRISTOPHER_YOUNG invisible
     Fred: L’université. # character=FRED_GALLANT invisible
     Christopher: Et vous voulez quoi? # character=CHRISTOPHER_YOUNG invisible
     Fred: Jouer. # character=FRED_GALLANT invisible
*   <b>Fred</b> choisit de parler au <b>Chef</b> Miller et de lui dire une partie de la vérité.
~ points_fin_2 += 2
    Fred: Il y a un groupe. # character=FRED_GALLANT invisible
    Chef Miller: Un groupe? # character=CHEF_MILLER_NO_CIGAR expression=suprise
    Fred: Qui semble fournir des jeux vidéo à ceux qui en cherchent. # character=FRED_GALLANT invisible
    Chef Miller: Vous avez trouvé des informations sur ce groupe? Ça fait une éternité qu’on en cherche! La résistance, c’est ça? # character=CHEF_MILLER_NO_CIGAR expression=suprise
    Fred: Oui, mais très peu. Leigh Kane avait une adresse dans ses messages texte. Une adresse qui mène à ce groupe. Il cherchait à se procurer un jeu. # character=FRED_GALLANT invisible
    Chef Miller: Eh merde! Gallant, vous allez contacter ce groupe et voir ce que vous pouvez trouver au sujet de Kane. Vous allez vous faire passer pour quelqu’un qui veut un jeu. Vous allez pouvoir le faire? On ne fait pas souvent dans l’agent double ici, même si presque tous vos collègues ont déjà essayé. Tentez le coup. Convainquez-les, endormez-les. # character=CHEF_MILLER_NO_CIGAR expression=omg
    Fred: Oui, chef. Je peux les contacter et me faire passer pour une joueuse. # character=FRED_GALLANT invisible
    Chef Miller: Bien, j’espérais que je pouvais compter sur vous, Gallant. On avait besoin de sang neuf ici. Vous êtes jeune et vous pouvez encore passer pour une étudiante. Ne perdez pas une minute. # character=CHEF_MILLER_NO_CIGAR expression=satisfaction
    Fred: J’appelle immédiatement. # character=FRED_GALLANT invisible
- Chef Miller: Et vous devriez consulter un médecin. Vous n’avez pas l’air d’aller bien. # character=CHEF_MILLER_NO_CIGAR
~ cacher_tout_personnages()
~ afficher_fond(telephone_fred)
<b>Fred</b> compose au numéro que <b>Bonnie</b> lui a donné.
~ jouer_effet_sonore(composer_numero)
???: Qui est-ce? # character=CHRISTOPHER_YOUNG invisible
Fred: Je m’appelle Fred. C’est John Randle qui m’a donné votre numéro. # character=FRED_GALLANT invisible
  Christopher: John qui? # character=CHRISTOPHER_YOUNG invisible
Fred: Euuh...Randle. # character=FRED_GALLANT invisible
  Christopher: Ah. Vous connaissez Randle? # character=CHRISTOPHER_YOUNG invisible
Fred: Oui. # character=FRED_GALLANT invisible
  Christopher: Comment? # character=CHRISTOPHER_YOUNG invisible
Fred: L’université. # character=FRED_GALLANT invisible
  Christopher: Et vous voulez quoi? # character=CHRISTOPHER_YOUNG invisible
Fred: Jouer. # character=FRED_GALLANT invisible
-
-> scene_13

= scene_13
~ afficher_fond(britannia_park)
~ jouer_musique(theme_fred)
~ afficher_personnage(CHRISTOPHER_YOUNG, "slideInUp")
Christopher: Les jeux, ce n’est plus ce que c’était. # character=CHRISTOPHER_YOUNG animation=slideInUp expression=melancholy
Fred: Je suis née après l’arrivée de la loi. # character=FRED_GALLANT invisible
Christopher: Ha! Tu as tout manqué! Moi aussi, j'en ai seulement entendu parler. # character=CHRISTOPHER_YOUNG  expression=neutral
Fred: Je comprends. # character=FRED_GALLANT invisible
Christopher: Avant, il y avait un tel choix! On pouvait jouer à un jeu différent tous les jours. # character=CHRISTOPHER_YOUNG  expression=wonder
Fred:  C’était un gros marché. # character=FRED_GALLANT invisible
Christopher: C’est toujours un gros marché. Seulement maintenant, c’est hors taxes. Et plus difficile d’accès. # character=CHRISTOPHER_YOUNG  expression=amusement
Fred: Je vois. # character=FRED_GALLANT invisible
Christopher: Le seul danger, c’est de se faire pincer. Jouer n’implique pas de danger en soi. # character=CHRISTOPHER_YOUNG  expression=sterness
Fred: Merci de me rassurer, mais je sais à quoi m’en tenir. # character=FRED_GALLANT invisible
Christopher: Comment tu as commencé à jouer? # character=CHRISTOPHER_YOUNG  expression=neutral
Fred: Des amis m’ont initiée. # character=FRED_GALLANT invisible
Christopher: Randle? # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Entre autres. # character=FRED_GALLANT invisible
Christopher: Randle ne joue plus depuis au moins 8 ans. # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Je sais. Je n’ai jamais joué avec lui. Seulement, il en parle. # character=FRED_GALLANT invisible
Christopher: Pourquoi il ne m’a jamais parlé de toi si tu le connais depuis le début de son bac? # character=CHRISTOPHER_YOUNG expression=aversion
Fred: Faudra lui demander. # character=FRED_GALLANT invisible
Christopher: Tu joues sur PC? # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Oui, c’est ça. # character=FRED_GALLANT invisible
Christopher: Avec ce code-là, tu peux télécharger Skyrim. Ça va rouler comme un charme, il y a 300 modes sur la clé. Tu m’en donneras des nouvelles.  # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Cool. # character=FRED_GALLANT invisible
Christopher: Écoute, tu sais, on commence à se faire connaître. # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Ce n’est pas dangereux de vous faire trop connaître? # character=FRED_GALLANT invisible
Christopher: Non, personne ne sait qui on est ni où se tiennent nos activités.Le bruit circule qu’il y a un groupe qui s’occupe de fournir les gens en jeux vidéo, sans plus. Mais ce n’est pas notre principale activité. # character=CHRISTOPHER_YOUNG expression=sterness
Christopher: On veut dévoiler la vérité au public. # character=CHRISTOPHER_YOUNG expression=sterness
Fred: La vérité? # character=FRED_GALLANT invisible
Christopher: Oui. Le gouvernement nous ment. Ce n’est pas net cette loi. L’histoire de la loi, tu la connais? # character=CHRISTOPHER_YOUNG expression=indignation
Fred: Oui, comme tout le monde. # character=FRED_GALLANT invisible
Christopher: Personne ne la connaît. Ce qu’on en sait représente la pointe d’un iceberg. Sous l’eau, les choses sont plus troubles. # character=CHRISTOPHER_YOUNG expression=indignation
Fred: Qu’est-ce que tu veux dire? # character=FRED_GALLANT invisible
Christopher: Des infos ont disparu, il y a des trous, des incohérences, des histoires invraisemblables. # character=CHRISTOPHER_YOUNG expression=disdain
Fred: Pourquoi le gouvernement se priverait d’un revenu aussi important si les raisons de l’interdiction n’étaient pas fondées? # character=FRED_GALLANT invisible
Christopher: C’est plus compliqué que ça. Tu as connu John à l’université, tu disais? # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Oui. # character=FRED_GALLANT invisible
Christopher: T’as étudié en quoi? # character=CHRISTOPHER_YOUNG expression=neutral
*Sociologie avec mineure en droit
*Histoire avec mineure en droit
*Psychologie avec mineure en droit
-Christopher: Ça t’intéresserait de nous aider? # character=CHRISTOPHER_YOUNG expression=sterness
Fred: À quoi? # character=FRED_GALLANT invisible
Christopher: Il nous manque des informations. Elles sont rares et difficiles à trouver. # character=CHRISTOPHER_YOUNG expression=neutral
Fred: Je ne vois pas bien ce que je peux faire. # character=FRED_GALLANT invisible
Christopher: Tout le monde peut être utile. On va faire lever l’interdiction. Fini l’illégalité. On va jouer au grand jour, comme avant. # character=CHRISTOPHER_YOUNG expression=sterness
Fred: Tu penses? # character=FRED_GALLANT invisible
Christopher: J’en suis sûr. Tu ne veux pas faire l’histoire? # character=CHRISTOPHER_YOUNG expression=sterness
Fred: Bah à priori non! # character=FRED_GALLANT invisible
Christopher: Juste une petite mission. Si tu n’es pas convaincue après, on t’oublie. Tu continues à jouer, si tu veux. C’est tout. # character=CHRISTOPHER_YOUNG expression=wonder
Fred: Pourquoi moi? # character=FRED_GALLANT invisible
Christopher: Moi, je suis brûlé à bien des endroits. Ton visage n’est pas encore connu. Aucun soupçon ne pèse sur toi. # character=CHRISTOPHER_YOUNG expression=sterness
Fred: Qu’est-ce que tu as en tête? # character=FRED_GALLANT invisible
Christopher: Une petite enquête... # character=CHRISTOPHER_YOUNG expression=satisfaction
~ cacher_tout_personnages()
~ cacher_fond()
~ arreter_musique()

-> chapitre_1.scene_1
