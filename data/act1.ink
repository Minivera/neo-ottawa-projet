=== act_1 ===

= prologue

~ afficher_fond(data_glitch)
~ jouer_musique(audioblocks_menace)
Néo-Ottawa, 2047. La loi game-over est en vigueur depuis 25 ans. Il est interdit de concevoir, de distribuer, de vendre ou de jouer à quelque jeux vidéo que ce soit. # center
Que la loi soit vous semble justifiée ou non, vous devrez la défendre. # center
Vous êtes maintenant l’agent FRED GALLANT, jeune recrue à la brigade. # center
C’est votre première journée. # center
Vous êtes un peu nerveux (se). Vous avez quelques appréhensions, mais vous devrez aller jusqu’au bout, prendre des risques. Faire des choix. Des choix qui changeront l’avenir. Des choix qui détermineront le type d’agent que vous serez. Un agent dont l’histoire se souviendra, peut-être. Vous devrez prendre des notes, effectuer des recherches. # center
Préparez-vous. Respirez. Inspirez. Expirez. Fermez les yeux. Ouvrez-les. Commencez. # center
~ arreter_musique()
~ cacher_fond()
-> scene_1

= scene_1
~ jouer_effet_sonore(big_exhale)
Fred Gallant: Tiens-t’en à ton plan : suivre les ordres; avancer; faire les choses proprement; avoir de l’initiative. # character=FRED_GALLANT invisible
-> scene_2

= scene_2
~ activer_pda()
~ afficher_fond(police)
~ afficher_personnage(GABRIEL_SAND, "fade_in")
???: Eh! Le (la) nouveau(elle)! # character=GABRIEL_SAND expression=joy phone
Fred Gallant: Où dois-je me rapporter? # character=FRED_GALLANT invisible
???: Directement au CHEF MILLER. # character=GABRIEL_SAND expression=neutral
???: Gallant, c’est ça? # character=GABRIEL_SAND expression=amusement
Fred Gallant: C’est ça. À qui ai-je l’honneur? # character=FRED_GALLANT invisible
Gabriel Sand: Agent Sand. Gab. # character=GABRIEL_SAND expression=joy
Ils se serrent la main
~ ajouter_contact(GABRIEL_SAND)
~ cacher_tout_personnages()
<b>Fred</b> se dirige directement vers le bureau du <b>CHEF MILLER</b>.
Il (elle) frappe à la porte.
-> scene_3

= scene_3
~ afficher_fond(bureau_chef_miller)
~ afficher_personnage(CHEF_MILLER, "move_up")
~ ajouter_contact(CHEF_MILLER)
Chef Miller: Entrez. # character=CHEF_MILLER
Fred Gallant: Agent Gallant, au rapport. # character=FRED_GALLANT invisible
Chef Miller: Détendez-vous, Fred. Le protocole, on s’y tiendra bien assez tôt. Comment vous sentez-vous? # character=CHEF_MILLER
Fred Gallant: Prêt (e). # character=FRED_GALLANT invisible
Chef Miller: J’aime votre attitude, Gallant. Assoyez-vous. # character=CHEF MILLER
Fred Gallant: Merci # character=FRED_GALLANT invisible
<b>Fred</b> s'assoit.
Chef Miller: Un café? # character=CHEF_MILLER
Fred Gallant: Merci, j’ai déjeuné. # character=FRED_GALLANT invisible
Chef Miller: Très bien. J’ai une seule autre question pour vous Gallant. Qu’est-ce qui vous amène dans la brigade anti-jeux vidéo? # character=CHEF_MILLER
Fred Gallant: J’ai… pendant mes études, j’ai… # character=FRED_GALLANT invisible
Chef Miller: Comprenez-moi bien : peu de gens demandent à être affectés ici lorsqu’ils sortent de l’Académie. Ce n’est pas la brigade la plus sexy, cependant, ici, on prend les choses au sérieux ou on a de sérieux problèmes avec moi. # character=CHEF_MILLER
Fred Gallant: Oui, chef. # character=FRED_GALLANT invisible
Chef Miller: Répondez à la question, agent Gallant. # character=CHEF_MILLER
Fred Gallant: J’ai été…j’ai demandé à être affecté à la brigade anti-jeux vidéo, chef. # character=FRED_GALLANT invisible
Chef Miller: Je sais. Mais pourquoi? # character=CHEF_MILLER
Fred Gallant: C’est une cause qui m’intéresse. # character=FRED_GALLANT invisible
Chef Miller: Allez droit au but, agent Gallant. Dites-moi la vérité. Je veux savoir qui j’envoie sur le terrain. # character=CHEF_MILLER
Fred Gallant: La loi… # character=FRED_GALLANT invisible
Le téléphone du <b>chef Miller</b> vibre.
Le <b>chef Miller</b> refuse l’appel sans regarder.
Il fixe <b>Fred</b> dans les yeux, d’un air de défi.
Fred Gallant: Les contrevenants sont encore nombreux, parfois fanatiques. Je pense qu’il y a place à amélioration. Je voulais… # character=FRED_GALLANT invisible
Chef Miller: Vous voulez innover? Vous démarquez? Dans un secteur où c’est encore possible? # character=CHEF_MILLER
Fred Gallant: Je…	 # character=FRED_GALLANT invisible
Chef Miller: Vous n’avez pas à rougir de votre ambition. J’aime bien votre pragmatisme. On a besoin d’éléments comme vous, Gallant. Bienvenue dans l’équipe. # character=CHEF_MILLER
-> scene_4

= scene_4
Le téléphone vibre à nouveau.
Le <b>Chef Miller</b> refuse l’appel sans regarder.
Il tend un dossier à <b>Fred</b>, mais le laisse tomber sur le bureau.

*   Vous choisissez de prendre le dossier immédiatement et de l’ouvrir devant le <b>chef Miller</b>.
    ~ ajouter_preuve(DOSSIER_LEIGH_KANE)
    Chef Miller: Eh bien Fred? C’est mon bureau ici. Allez faire vos lectures ailleurs. # character=CHEF_MILLER
*   Vous choisissez de prendre le dossier sans l’ouvrir.
    ~ ajouter_preuve(DOSSIER_LEIGH_KANE)
    Chef Miller: Bien. Ce sera tout. # character=CHEF_MILLER
*   (pas_pris_dossier) Vous choisissez de ne pas bouger et d’attendre d’autres ordres.
    Chef Miller: Qu’est-ce que vous attendez, Fred? Ma bénédiction? Des mots d’encouragement # character=CHEF_MILLER

-   -> scene_5

= scene_5
Chef Miller: Un instant. J’oubliais. Avant que vous ne partiez, je veux vous préciser quelque chose. Prenez rapidement connaissance de ce dossier Agent Gallant. On a retrouvé cet enfant de 13 ans en très mauvais état. On a examiné plusieurs avenues, mais les parents ont des soupçons quant à des jeux vidéo auxquels on l’aurait initié. Ils pensent qu’il a été exposé à un jeu conçu après l’entrée en vigueur de la loi. Un jeu à forte dépendance. On pense qu’il est possible que les concepteurs de ce jeu l’aient sciemment programmé de façon à ce qu’il crée chez les joueurs une dépendance permanente, une pathologie. # character=CHEF_MILLER
Fred Gallant: Comme les dépendances aux drogues dures. # character=FRED_GALLANT invisible
Chef Miller: Exact. Sa vie est peut-être en danger. Et s’il arrivait un malheur, on nous en tiendrait probablement responsable.<br/>On doit mettre la main sur les créateurs du jeu. Mais d’abord, établissez hors de tout doute la responsabilité du jeu. Les parents ne sont pas toujours conscients de qui sont vraiment leurs enfants. # character=CHEF_MILLER
Fred Gallant: Oui, Chef. # character=FRED_GALLANT invisible
Chef Miller: On ne peut pas interroger l’enfant pour l’instant, il est médicamenté et hors-circuit à ce qu’il semble. <br/>Vous devrez vous débrouiller pour trouver une piste qui pourrait nous mener au distributeur, puis au concepteur. Avant que ce jeu ne fasse d’autres victimes. Commencez par les parents, mais méfiez-vous de ce qu’ils racontent. Selon mon expérience, les parents sont rarement des témoins fiables. # character=CHEF_MILLER
Fred Gallant: Oui, Chef. # character=FRED_GALLANT invisible
-> scene_6

= scene_6
Fred se lève et se dirige vers la porte {scene_4.pas_pris_dossier: <br/><b>Fred</b> prend le dossier sur le bureau, un peu embarrassé {~ ajouter_preuve(DOSSIER_LEIGH_KANE)}.|avec le dossier déjà en main.}
Chef Miller: Je compte sur vous. Vous travaillerez seul(e) sur cette première mission. Ensuite, vous aurez peut-être ma confiance. # character=CHEF_MILLER

*   Vous posez la question suivante au chef Miller :
    Fred Gallant: Pourquoi me confier une mission si importante dès mon premier jour? # character=FRED_GALLANT invisible
    Chef Miller: Vous avez une occasion de faire vos preuves. Une seule occasion. Ne la bousillez pas. # character=CHEF_MILLER
*   Vous remerciez le chef Miller.
    Chef Miller: Allez faire ce pour quoi on vous paye. # character=CHEF_MILLER
*   Vous sortez sans rien dire.
    Le chef Miller regarde Fred d’un air interrogateur. Il semble suspicieux.

- Chef Miller: Vous passerez au bureau 403 pour récupérer votre badge et votre arme. Bonne chance et bienvenue. # character=CHEF_MILLER
~ cacher_tout_personnages()
-> scene_7

= scene_7
~ afficher_fond(bureaux_police)
~ afficher_personnage(AGENT_LUCAS, "move_up")
~ afficher_personnage(AGENT_MOORE, "move_up")
<b>Fred</b> est à son bureau.<br/>D’un côté il y a <b>l’AGENT MOORE</b> et de l’autre, <b>l’AGENT LUCAS</b>.
Agent Lucas: Hey, le (la) nouveau(elle)! Tu as reçu un dossier? # character=AGENT_LUCAS
Fred Gallant: Comme tu vois. # character=FRED_GALLANT invisible

*   (agent_amicaux) Vous entamez une conversation spontanément avec vos collègues.
    Fred Gallant: Alors, vos noms? # character=FRED_GALLANT invisible
    Agent Lucas: Lucas. Lui, c’est Moore. Attention, il n’est pas très bavard, mais il entend tout. # character=AGENT_LUCAS
    Agent Moore: Regarde qui parle. Ne fais pas confiance à Lucas. On ne sait pas toujours où il traîne. # character=AGENT_MOORE
    Agent Lucas: On t’a confié le dossier du petit Leigh Kane? # character=AGENT_LUCAS
    Fred Gallant: Je… # character=FRED_GALLANT invisible
    Fred Gallant: Oui, Leigh Kane. # character=FRED_GALLANT invisible
    Agent Lucas: Merde! # character=AGENT_LUCAS
    Agent Moore: Laisse-le (la) tranquille. # character=AGENT_MOORE
    Agent Lucas: Tout ce que je dis, c’est que tu vas en baver. Un enfant catatonique, c’est du bonbon pour les médias. Si la corrélation est établie, bien sûr! # character=AGENT_LUCAS
    Fred Gallant: Je vois. # character=FRED_GALLANT invisible
    Les deux agents se détournent et fixent leur regard sur leurs propres dossier.
*   Vous ouvrez votre dossier et faites mine d’avoir besoin de toute votre concentration et donc, que vous ne pouvez pas socialiser.
    Agent Lucas: Hey princesse! Ici, on travaille en équipe. Tu te crois meilleur que nous? Mais tu sais, on est gentil, on t’attendra. # character=AGENT_LUCAS
    Agent Moore: Laisse-le (la). Il (elle) va apprendre. # character=AGENT_MOORE
    Agent Lucas: Oui, et dès maintenant. On lui a confié Kane. # character=AGENT_LUCAS
    Agent Moore: Hahahaha! Bienvenue! Hahahaha! # character=AGENT_MOORE
    Les deux agents se détournent et fixent leur regard sur leurs propres dossier.
*   Vous ne souhaitez pas parler à vos collègues.
    Agent Lucas: Tu as entendu, Moore? On a affaire à un mal élevé. # character=AGENT_LUCAS
    Agent Moore: J’ai entendu. # character=AGENT_MOORE
    Agent Lucas: Moore? # character=AGENT_LUCAS
    Agent Moore: Quoi? # character=AGENT_MOORE
    Agent Lucas: Tu veux un café? Je sors, ça pue ici. # character=AGENT_LUCAS
    Agent Moore: Ouais, je te suis. # character=AGENT_MOORE
    Les deux agents sortent.

- ~ cacher_tout_personnages()
~ ajouter_contact(AGENT_LUCAS)
~ ajouter_contact(AGENT_MOORE)
~ afficher_personnage(CHEF_MILLER, "move_up")
Le <b>chef Miller</b> apparaît devant le bureau de Fred.
Chef Miller: Il y a du nouveau. Viens. # character=CHEF_MILLER
-> scene_8

= scene_8
~ afficher_fond(bureau_chef_miller)
Chef Miller: Écoute, ça va mal : le garçon est disparu. Jusqu’à nouvel ordre, c’est une fugue ou un enlèvement. Vous lirez le dossier en chemin<br/>Vous partez immédiatement. Vous devez trouver le moyen de fouillez sa chambre. Vous aurez les gars du criminel dans les pattes. Dépêchez-vous. On ignore comment il a pu se sauver avec tous les sédatifs qu’il a reçu! # character=CHEF_MILLER
~ cacher_tout_personnages()
-> scene_9

= scene_9
~ afficher_fond(bureaux_police)
Fred Gallant: C’est pas le moment de t’énerver. Focus. # character=FRED_GALLANT invisible
~ cacher_fond()
L’agent Gallant n’a pas connaissance de cette conversation. Vous ne pouvez plus l’aider. Présentement, il (elle) est éteint(e), en pause.<br/>Il (elle) se souviendra de ce moment comme de ce qu’il (elle) appellera plus tard, une absence. Et ces absences ont précisément commencé aujourd’hui, à cet instant. Au même moment où vous ferez une mission pour moi, à son insu. Pour que l’agent Gallant puisse se réveiller de son hypnose, vous devrez trouver une définition de la cyberdépendance ainsi que trois conséquences possibles de cette dépendance. Inscrivez ces informations dans le PDA de l’agent Gallant. Dors Fred, dors. # character=NARRATEUR center
~ afficher_fond(voiture_fred)
Fred se réveille, nous sommes dans sa voiture. Il (elle) démarre, incertain(e) de ce qui vient de se passer, mais il (elle) ne s’inquiète pas trop puisque c’est la première fois que ça lui arrive.
Fred Gallant: Montre-moi ce que tu as dans le ventre! # character=FRED_GALLANT invisible
-> scene_10

= scene_10
Le joueur peut essayer d’obtenir l’accès aux conversations par message texte de <b>Kane</b> en conversant avec <b>L’ENQUÊTEUR DU CRIMINEL.</b>

~ afficher_fond(scene_crime)
~ afficher_personnage(ENQUETEUR, "move_up")
*   Vous abordez directement l’enquêteur.
    Fred Gallant: "Fred Gallant, brigade anti-jeux vidéo." Se présentant à l’enquêteur. # character=FRED_GALLANT invisible
    Enquêteur du Ciminel: Rien à foutre que vous soyez le fils du premier ministre ou l’éboueur sur appel. Sortez de cette chambre ou je vous jure que vous le regretterez.	# character=ENQUETEUR
    Fred Gallant: J’ai une enquête à faire moi aussi. # character=FRED_GALLANT invisible
    Enquêteur du Ciminel: Mais c’est merveilleux! Vous allez trouver le petit? Gallant vous avez dit? # character=ENQUETEUR
    Fred Gallant: Oui. # character=FRED_GALLANT invisible
    Enquêteur du Ciminel: Vous êtes nouveau(elle) c’est ça? # character=ENQUETEUR
	Ne lui laisse pas le temps de répondre.
    Enquêteur du Ciminel: BRIGHTON? # character=ENQUETEUR
    ~ afficher_personnage(BRIGHTON, "move_up")
    Brighton: Oui chef? # character=BRIGHTON
    ~ ajouter_contact(BRIGHTON)
    Enquêteur du Ciminel: Sors-moi ce(tte) clown d’ici tout de suite. # character=ENQUETEUR
	Il prend son téléphone
    Enquêteur du Ciminel: Miller? Ton agent, là, Gallant, il (elle) veut les accès au téléphone et quoi d’autre?<br/>Tu lui expliqueras comment ça marche si tu veux qu’il (elle) survive dans le métier. # character=ENQUETEUR
*   Vous tentez d’être le plus discret(e) possible tout en observant le travail des agents présents.
    Enquêteur du Ciminel: Qui croyez-vous être pour enter ici pendant qu’on y est? # character=ENQUETEUR
    Fred Gallant: Fred Gallant, brigade anti-jeux vidéo. # character=FRED_GALLANT invisible
    Enquêteur du Ciminel: Oooh! Quelle chance! Je vous attendais! # character=ENQUETEUR
    Enquêteur du Ciminel: Sortez d’ici avant que je vous fasse arrêter. Vous aurez accès à la chambre une fois que nous aurons déterminé s’il s’agit d’une fugue ou d’un enlèvement. # character=ENQUETEUR
    Fred Gallant: Je n’aurais besoin que de l’accès à son téléphone et à son ordinateur. # character=FRED_GALLANT invisible
    Enquêteur du Ciminel: Mais c’est que nous avons affaire à un génie! Vous l’aurez. Maintenant sortez d’ici. Et ne touchez à rien. # character=ENQUETEUR
*   Vous choisissez d’attendre dans le cadre de porte et de voir ce qui se passe avant d’intervenir.
    Enquêteur du Ciminel: Mais où est le connard de la brigade anti-jeux vidéo? Pas encore arrivé? # character=ENQUETEUR
    Fred Gallant: Je suis ici. # character=FRED_GALLANT invisible
    Enquêteur du Ciminel: "J’aurais dû m’en douter. Tu attends sagement ton tour." Se tournant vers Fred. # character=ENQUETEUR
    Fred Gallant: Je n’ai besoin que d’un accès à son téléphone et à son ordinateur. Puis à sa chambre quand vous aurez terminé. # character=FRED_GALLANT invisible
    Enquêteur du Ciminel: Mais il (elle) est bien élevé(e) ce(tte) con(ne). Brighton? # character=ENQUETEUR
    ~ afficher_personnage(BRIGHTON, "move_up")
    Brighton: Oui chef? # character=BRIGHTON animation=move_up
    ~ ajouter_contact(BRIGHTON)
    Enquêteur du Ciminel: Donne-lui l’accès. Puis, qu’il (elle) dégage. # character=ENQUETEUR
    Il appelle Miller.
    Enquêteur du Ciminel: Félicitations, ton agent(e) m’est pas encore tombé sur les nerfs. Oui, il (elle) a son accès. # character=ENQUETEUR
- 	L’enquêteur quitte la chambre et fait un sourire faux à Fred.
Enquêteur du Ciminel: La chambre est à vous. # character=ENQUETEUR
~ ajouter_contact(ENQUETEUR)
~ cacher_tout_personnages()
~ ajouter_preuve(TELEPHONE_LEIGH_KANE)
-> scene_11

= scene_11
~ afficher_fond(glitch)
<b>Fred</b> parcourt les données du téléphone de Kane.
Il (elle) découvre une conversation entre <b>Kane</b> et un pseudo : <b>TEACHER</b>
TEACHER: Tu vas adorer # character=TEACHER invisible
Leigh Kane: Bah vous dites toujours ça # character=LEIGH_KANE invisible
TEACHER: Cette fois, il est au point. On est tous à fond sur le jeu. Tu pourras plus t’arrêter. Il est immersif, complexe, on s’y croirait, on oublie tout. # character=TEACHER invisible
Leigh Kane: Où et quand # character=LEIGH_KANE invisible
TEACHER: Tu peux l’avoir dès ce soir # character=TEACHER invisible
Leigh Kane: Combien # character=LEIGH_KANE invisible
TEACHER: 400 # character=TEACHER invisible
Leigh Kane: Où # character=LEIGH_KANE invisible
TEACHER: Je t’indique le lieu et l’heure plus tard # character=TEACHER invisible
Leigh Kane: (pouce en l'air) # character=LEIGH_KANE invisible
La conversation est datée du 10 juillet.
Elle se poursuit
TEACHER: 23h, 5567 Flemming<br/>Tu cognes 4 coups secs<br/>Mot de passe : ratata02 # character=TEACHER invisible
Leigh Kane: (pouce en l’air) # character=LEIGH_KANE invisible
~ ajouter_contact(LEIGH_KANE)
~ ajouter_contact(TEACHER)
-> scene_12

= scene_12
~ afficher_fond(rue_flemming)
Vous arrivez devant la porte du 5567 Flemming.
*   Vous décidez de sonner à la porte.
	Une lumière s’allume.
	Vous entendez des cris, puis des chuchotements.
	Des chiens aboient.
    Homme: "Qui est là?" Derrière la porte
    Fred Gallant: Police, ouvrez. # character=FRED_GALLANT invisible
    Homme: Faites passer votre mandat sous la porte.
    Après un temps.
    Homme: Si vous n’avez pas de mandat, fichez le camp d’ici. C’est une maison privée.
	Comme Fred n'a pas de mandat, il (elle) retourne à sa voiture.
*   Vous décidez de ne pas sonner à la porte, mais de faire le tour de la maison et de tenter de voir par les fenêtres.
    Il fait sombre et il y a peu de mouvement.
    On n'entend rien, mais on voit qu'il y a des gens à l'intérieur.
*   Vous restez dans la voiture à réfléchir.
    La maison semble banale.
    Il y a des gens à l’intérieur, mais on ne distingue pas bien.
- <b>Fred</b> décide de faire le tour de la maison.
<b>Fred</b> retourne vers sa voiture.
Au moment où il (elle) démarre la voiture, il (elle) voit une <b>JEUNE FEMME</b> qui arrive de derrière la maison et qui semble fuir.
<b>Fred</b> observe pour voir où elle va.
-> scene_13

= scene_13
~ afficher_fond(quartier)
*   Vous décidez d’aborder la jeune femme.
    ~ afficher_personnage(BONNIE_RANDLE, "move_up")
    Fred Gallant: Mademoiselle, arrêtez-vous s’il-vous-plaît. # character=FRED_GALLANT invisible
    Ne me suivez pas! Ils vont nous voir. Attendez-moi au coin de la rue Arch. # character=BONNIE_RANGLE move_up
	<b>Fred</b> roule jusqu'à la rue Arch et attend la <b>jeune femme</b>.
	Jeune Femme: Je m’appelle Bonnie. Je fais partie de la résistance. Mais là, j’en ai marre. C’est pour ça que vous êtes là? Coincer la résistance? # character=BONNIE_RANDLE
*   Vous suivez discrètement la jeune femme.
    Elle s’en aperçoit et accélère le pas. Rendue au coin de la rue Arch, elle s’arrête et s’approche du véhicule.
    ~ afficher_personnage(BONNIE_RANDLE, "move_up")
	Jeune Femme: Je m’appelle Bonnie. Je fais partie de la résistance. Mais là, j’en ai marre. C’est pour ça que vous êtes là? Coincer la résistance? # character=BONNIE_RANDLE
*   (pas_rencontre_bonnie) Vous notez une description physique de la jeune femme mais vous décidez de ne pas la poursuivre.
    À son retour au bureau, <b>Fred</b> a un message dans sa boîte vocale.
    Jeune Femme (Boîte vocale): Allô? Je vous ai vu hier soir sur Flemming. Je m’appelle Bonnie. Je suis de la résistance. J’aimerais vous parler. # character=BONNIE_RANDLE invisible
- ~ cacher_tout_personnages()
-> scene_14

= scene_14
~ afficher_fond(art_house_cafe)
{pas_rencontre_bonnie: 
    ~ afficher_personnage(BONNIE_RANDLE, "move_up")
- else:
    ~ afficher_personnage(BONNIE_RANDLE, "none")
}
<b>Fred</b> et <b>Bonnie</b> sont assis au Art House Café et discutent.
Bonnie Randle: Merci d’être venu(e). # character=BONNIE_RANDLE
~ ajouter_contact(BONNIE_RANDLE)
Fred Gallant: Qu’est-ce que je peux faire pour vous? # character=FRED_GALLANT invisible
Bonnie Randle: e voudrais sortir de la résistance. Je voudrais aussi qu’ils ne puissent plus me rejoindre. Je voudrais que mes parents ne sachent pas que j’en ai fait partie.  # character=BONNIE_RANDLE
Fred Gallant: Connaissez-vous Leigh Kane? # character=FRED_GALLANT invisible
Bonnie Randle: Non. Je n’ai jamais entendu ce nom.  # character=BONNIE_RANDLE
<b>Fred</b> lui montre la photo de Leigh Kane.
Bonnie Randle: Jamais vu. # character=BONNIE_RANDLE
Fred Gallant: Étiez-vous au 5567, Flemming le soir du 10 juillet dernier? # character=FRED_GALLANT invisible
Bonnie Randle: Je ne sais pas, c’était quand ça, quel jour? # character=BONNIE_RANDLE
Fred Gallant: C’était un mercredi. # character=BONNIE_RANDLE
Bonnie Randle: Peut-être, j’y traînais de temps en temps. # character=BONNIE_RANDLE
Fred Gallant: Parlez-moi des activités de la résistance. # character=FRED_GALLANT invisible
Bonnie Randle: Je ne sais presque rien. Ils ne veulent pas que des mineurs soient au courant de leurs manigances.<br/>J’avais seulement le droit de me trouver avec eux, mais ils parlent à mots couverts.  # character=BONNIE_RANDLE
Fred Gallant: Quel est leur but?  # character=FRED_GALLANT invisible
Bonnie Randle: Jouer et faire en sorte que plus de monde continue à jouer. Et puis, ils croient qu’ils vont arriver à faire reculer le gouvernement  et à faire abroger la loi game-over. Ils préparent quelque chose, mais je ne sais pas quoi.  # character=BONNIE_RANDLE
Fred Gallant: D’accord, mais jouer à quoi? À des jeux dangereux?  # character=FRED_GALLANT invisible
Bonnie Randle: Je croyais que tous les jeux étaient potentiellement dangereux selon vous. Écoutez, je rentre à la faculté de droit à l’automne.<br/>Si on apprend que j’ai côtoyé des gens qui ont une activité illégale, mon père va me tuer.  # character=BONNIE_RANDLE
Fred Gallant: Avez-vous joué? # character=FRED_GALLANT invisible
Bonnie Randle: Non, jamais. Je n’arrive pas à contrôler les manettes! # character=BONNIE_RANDLE
*   Vous ne croyez pas Bonnie.
    Fred Gallant: Si vous voulez que je vous aide, vous allez devoir me dire la vérité. J’ai besoin de savoir ce qui est arrivé au garçon dont je vous ai montré la photo.<br/>Ça urge. # character=FRED_GALLANT invisible
    Bonnie Randle: D’accord, j’ai joué une ou deux fois, mais je ne connais pas ce garçon. Je vous jure que je ne l’ai jamais vu! # character=BONNIE_RANDLE
    Fred Gallant: Quel genre de jeux? # character=FRED_GALLANT invisible
    Bonnie Randle: Des vieux jeux. Des jeux pour enfants. Ils les appellent les jeux d’arcade. Ça me semblait inoffensif! # character=BONNIE_RANDLE
*   Vous ne confrontez pas Bonnie davantage, mais tentez de l’amadouer autrement.
    Fred Gallant: Tu peux me dire tout ce que tu as sur le cœur. C’est mon travail de venir en aide aux gens qui ont des contacts avec des jeux. Je m’occupe de faire respecter la loi game-over, mais ça veut aussi dire apporter du soutien aux personnes qui sont prisonniers d’une dépendance. # character=FRED_GALLANT invisible
    Bonnie Randle: Je ne peux pas avoir un casier judiciaire et je ne suis pas dépendante. # character=BONNIE_RANDLE
    Fred Gallant: J’ai compris. Mais pourquoi m’as-tu contacté(e) réellement? Pourquoi tu veux quitter le groupe? # character=FRED_GALLANT invisible
    Bonnie Randle: D’accord, j’ai joué une ou deux fois, mais je ne connais pas ce garçon. Je vous jure que je ne l’ai jamais vu! # character=BONNIE_RANDLE
    Fred Gallant: Quel genre de jeux? # character=FRED_GALLANT invisible
    Bonnie Randle: Des vieux jeux. Des jeux pour enfants. Ils les appellent les jeux d’arcade. Ça me semblait inoffensif! # character=BONNIE_RANDLE
*   Vous abandonnez. Ce témoin ne vous sera pas utile. Sauf pour l’idée que vous avez désormais en tête. Celle d’infiltrer la résistance.
-    Fred Gallant: Vous allez m’aider. # character=FRED_GALLANT invisible
Bonnie Randle: Comment? # character=BONNIE_RANDLE
Fred Gallant: Je vais infiltrer la résistance. # character=FRED_GALLANT invisible
<b>Bonnie</b> donne le nom et le numéro de téléphone d’une personne que Fred peut appeler en prétendant vouloir se procurer un jeu.
Bonnie Randle: Vous pouvez dire que vous avez eu ces infos de moi. Dites que vous connaissez mon grand frère, John Randle, de l’Université d’Ottawa.<br/>Il a votre âge, il est nouvellement ingénieur. Ils le connaissent. Ce type, YOUNG, lui fait entièrement confiance et c’est pour ça qu’ils me laissent jouer dans leurs locaux, même si je suis mineure. Mais ensuite vous m’aiderez? # character=BONNIE_RANDLE
Fred Gallant: Connaissez-vous quelqu’un qui utilise le pseudo de teacher? # character=FRED_GALLANT invisible
Bonnie Randle: Non, jamais entendu parler. # character=BONNIE_RANDLE
~ cacher_tout_personnages()
-> scene_15

= scene_15
~ afficher_fond(bureaux_police)
~ afficher_personnage(CHEF_MILLER, "move_up")
Le <b>Chef Miller</b> arrive au bureau de <b>Fred</b>. # character=CHEF_MILLER
~ cacher_fond()
~ cacher_tout_personnages()
Vous reconnaissez la croisée des chemins quand vous y faites face? Vous aimez sentir la pression jusque dans le battement de vos tempes? La sueur perle sur votre front. Le moment sera décisif. Serez-vous à la hauteur? Dors Fred, dors. Pendant qu’on s’occupe de ton avenir. # character=NARRATEUR center
~ afficher_fond(bureaux_police)
~ afficher_personnage(CHEF_MILLER, "none")
Chef Miller: Fred? Fred? Est-ce que vous manquez de sommeil? Secouez-vous! Reprenez vos esprits! Alors? Du nouveau? Qu’avez-vous trouvé sur les lieux?	# character=CHEF_MILLER
Fred Gallant: Peu de choses. Il n’y a rien de frappant qui mène à la conclusion que cet enfant jouait de manière clandestine. Pas dans sa chambre. # character=FRED_GALLANT invisible
Chef Miller: Et ses conversations téléphoniques? Ces messages textes? Son ordinateur? Rien là non plus? # character=CHEF_MILLER
*   Vous choisissez de ne rien dire au chef Miller.
    Fred Gallant: Non, rien pour l’instant. # character=FRED_GALLANT invisible
    Chef Miller: Aucune piste? # character=CHEF_MILLER
    Fred Gallant: Rien de sérieux. # character=FRED_GALLANT invisible
    Chef Miller: Le criminel a confirmé la cause de la disparition : tout indique que c’est une fugue. Je ne veux rien lire dans les médias sur un lien avec les jeux vidéo, Gallant. Vous m’entendez? Prouvez que ce n’est pas le cas. Si c’est le cas, je veux boucler ça sans publicité. # character=CHEF_MILLER
    Fred Gallant: Certainement. Je vérifie encore quelques possibilités. # character=FRED_GALLANT invisible
    Chef Miller: Ne me laissez pas tomber sur ce coup, Gallant. C’est votre période d’essai, vous me suivez?	# character=CHEF_MILLER
    Fred Gallant: Oui, chef. # character=FRED_GALLANT invisible
*   Vous choisissez de parler au chef Miller et de lui dire une partie de la vérité.
    Fred Gallant: Il y a un groupe. # character=FRED_GALLANT invisible
    Chef Miller: Un groupe? # character=CHEF_MILLER
    Fred Gallant: Qui semble fournir des jeux vidéo à ceux qui en cherchent. # character=FRED_GALLANT invisible
    Chef Miller: Vous avez trouvé des informations sur ce groupe? Ça fait une éternité qu’on en cherche! La résistance, c’est ça? # character=CHEF_MILLER
    Fred Gallant: Oui, mais très peu. Leigh Kane avait une adresse dans ses messages texte. Une adresse qui mène à ce groupe. Il cherchait à se procurer un jeu, le 10 juillet dernier. # character=FRED_GALLANT invisible
    Chef Miller: Eh merde! Gallant, vous allez contacter ce groupe et voir ce que vous pouvez trouver au sujet de Kane. Vous allez vous faire passer pour quelqu’un qui veut un jeu. Vous allez pouvoir le faire?<br/>On ne fait pas souvent dans l’agent double ici, même si presque tous vos collègues ont déjà essayé. Tentez le coup. Convainquez-les, endormez-les. # character=CHEF_MILLER
    Fred Gallant: Oui, chef. Je peux les contacter et me faire passer pour un joueur. # character=FRED_GALLANT invisible
    Chef Miller: Bien, j’espérais que je pouvais compter sur vous, Gallant. On avait besoin de sang neuf ici. Vous êtes jeune et vous pouvez encore passer pour un étudiant. Ne perdez pas une minute. # character=CHEF_MILLER
    Fred Gallant: J’appelle immédiatement. # character=FRED_GALLANT invisible
- Chef Miller: Et vous devriez consulter un médecin. Vous n’avez pas l’air d’aller bien. # character=CHEF_MILLER
~ cacher_tout_personnages()
Le chef Miller quitte le bureau de Fred.
Fred appelle au numéro que Bonnie lui a donné.
Homme au téléphone (YOUNG): Qui est-ce? # character=CHRISTOPHER_YOUNG invisible
Fred Gallant: Je m’appelle Fred. C’est John Randle qui m’a donné votre numéro. # character=FRED_GALLANT invisible
Homme au téléphone (YOUNG): John qui? # character=CHRISTOPHER_YOUNG invisible
Fred Gallant: Randle.	Hésitant. # character=FRED_GALLANT invisible
Homme au téléphone (YOUNG): Ah. Vous connaissez Randle? # character=CHRISTOPHER_YOUNG invisible
Fred Gallant: Oui. # character=FRED_GALLANT invisible
Homme au téléphone (YOUNG): Comment? # character=CHRISTOPHER_YOUNG invisible
Fred Gallant: L’université. # character=FRED_GALLANT invisible
Homme au téléphone (YOUNG): Et vous voulez quoi? # character=CHRISTOPHER_YOUNG invisible
Fred Gallant: Jouer. # character=FRED_GALLANT invisible
-> scene_16

= scene_16
~ afficher_fond(universite)
~ afficher_personnage(CHRISTOPHER_YOUNG, "move_up")
<b>Fred</b> et <b>Christopher Young (l’homme au téléphone)</b> sont assis sur un banc et discutent.
Christopher Young: Les jeux, ce n’est plus ce que c’était. # character=CHRISTOPHER_YOUNG animation=move_up
Fred Gallant: Je suis né après l’arrivée de la loi. # character=FRED_GALLANT invisible
Christopher Young: Ha! Tu as tout manqué! Moi aussi, j'en ai seulement entendu parler. # character=CHRISTOPHER_YOUNG
Fred Gallant: Je comprends. # character=FRED_GALLANT invisible
Christopher Young: Avant, il y avait un tel choix! On pouvait jouer à un jeu différent tous les jours. # character=CHRISTOPHER_YOUNG
Fred Gallant:  C’était un gros marché. # character=FRED_GALLANT invisible
Christopher Young: C’est toujours un gros marché. Seulement maintenant, c’est hors taxes. Et plus difficile d’accès. # character=CHRISTOPHER_YOUNG
Fred Gallant: Je vois. # character=FRED_GALLANT invisible
Christopher Young: Le seul danger, c’est de se faire pincer. Jouer n’implique pas de danger en soi. # character=CHRISTOPHER_YOUNG
Fred Gallant: Merci de me rassurer, mais je sais à quoi m’en tenir. # character=FRED_GALLANT invisible
Christopher Young: Comment tu as commencé à jouer? # character=CHRISTOPHER_YOUNG
Fred Gallant: Des amis m’ont initié. # character=FRED_GALLANT invisible
Christopher Young: Randle? # character=CHRISTOPHER_YOUNG
Fred Gallant: Entre autres. # character=FRED_GALLANT invisible
Christopher Young: Randle ne joue plus depuis au moins 8 ans. # character=CHRISTOPHER_YOUNG
Fred Gallant: Je sais. Je n’ai jamais joué avec lui. Seulement, il en parle. # character=FRED_GALLANT invisible
Christopher Young: Pourquoi il ne m’a jamais parlé de toi si tu le connais depuis le début de son bac? # character=CHRISTOPHER_YOUNG
Fred Gallant: Faudra lui demander. # character=FRED_GALLANT invisible
Christopher Young: Tu joues sur PC? # character=CHRISTOPHER_YOUNG
Fred Gallant: Oui, c’est ça. # character=FRED_GALLANT invisible
Christopher Young: Avec ce code-là, tu peux télécharger Skyrim. Ça va rouler comme un charme, il y a 300 modes sur la clé. Tu m’en donneras des nouvelles.  # character=CHRISTOPHER_YOUNG
Fred Gallant: Cool. # character=FRED_GALLANT invisible
Christopher Young: Écoute, tu sais, on commence à se faire connaître. # character=CHRISTOPHER_YOUNG
Fred Gallant: Ce n’est pas dangereux de vous faire trop connaître? # character=FRED_GALLANT invisible
Christopher Young: Non, personne ne sait qui on est ni où se tiennent nos activités.<br/>Le bruit circule qu’il y a un groupe qui s’occupe de fournir les gens en jeux vidéo, sans plus. Mais ce n’est pas notre principale activité. # character=CHRISTOPHER_YOUNG
<b>Fred</b> ne répond rien pour ne pas avoir l’air trop intéressé(e).
Christopher Young: On veut dévoiler la vérité au public. # character=CHRISTOPHER_YOUNG
Fred Gallant: La vérité? # character=FRED_GALLANT invisible
Christopher Young: Oui. Le gouvernement nous ment. Ce n’est pas net cette loi. L’histoire de la loi, tu la connais? # character=CHRISTOPHER_YOUNG
Fred Gallant: Oui, comme tout le monde. # character=FRED_GALLANT invisible
Christopher Young: Personne ne la connaît. Ce qu’on en sait représente la pointe d’un iceberg. Sous l’eau, les choses sont plus troubles. # character=CHRISTOPHER_YOUNG
Fred Gallant: Qu’est-ce que tu veux dire? # character=FRED_GALLANT invisible
Christopher Young: Des infos ont disparu, il y a des trous, des incohérences, des histoires invraisemblables. # character=CHRISTOPHER_YOUNG
Fred Gallant: Pourquoi le gouvernement se priverait d’un revenu aussi important si les raisons de l’interdiction n’étaient pas fondées? # character=FRED_GALLANT invisible
Christopher Young: C’est plus compliqué que ça. Tu as connu John à l’université, tu disais? # character=CHRISTOPHER_YOUNG
Fred Gallant: Oui. # character=FRED_GALLANT invisible
Christopher Young: T’as étudié en quoi? # character=CHRISTOPHER_YOUNG
Fred Gallant: Sociologie. # character=FRED_GALLANT invisible
Christopher Young: Ça t’intéresserait de nous aider? # character=CHRISTOPHER_YOUNG
Fred Gallant: À quoi? # character=FRED_GALLANT invisible
Christopher Young: Il nous manque des informations. Elles sont rares et difficiles à trouver. # character=CHRISTOPHER_YOUNG
Fred Gallant: Je ne vois pas bien ce que je peux faire. # character=FRED_GALLANT invisible
Christopher Young: Tout le monde peut être utile. On va faire lever l’interdiction. Fini l’illégalité. On va jouer au grand jour, comme avant. # character=CHRISTOPHER_YOUNG
Fred Gallant: Tu penses? # character=FRED_GALLANT invisible
Christopher Young: J’en suis sûr. Tu ne veux pas faire l’histoire? # character=CHRISTOPHER_YOUNG
Fred Gallant: Bah à priori non! # character=FRED_GALLANT invisible
Christopher Young: Juste une petite mission. Si tu n’es pas convaincu(e) après, on t’oublie. Tu continues à jouer, si tu veux. C’est tout. # character=CHRISTOPHER_YOUNG
Fred Gallant: Pourquoi moi? # character=FRED_GALLANT invisible
Christopher Young: Moi, je suis brûlé à bien des endroits. Ton visage n’est pas encore connu. Aucun soupçon ne pèse sur toi. # character=CHRISTOPHER_YOUNG
Fred Gallant: Qu’est-ce que tu as en tête? # character=FRED_GALLANT invisible
Christopher Young: Une petite enquête. # character=CHRISTOPHER_YOUNG
~ ajouter_contact(CHRISTOPHER_YOUNG)

-> fin
