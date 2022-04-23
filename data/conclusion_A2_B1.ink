=== conclusion_A2_B1 ===

= scene_1
~ afficher_fond(transition_conclusion)
<center><titre>Chapitre 10</titre></center><br/><center>Dissociation</center> # transition
~afficher_fond(rue_mcleod_liberte)
~jouer_musique(theme_fin)

C’est le jour de l’événement. La résistance a lancé son jeu et a rendu public, grâce aux nombreux streamers et joueurs professionnels, le lien vers la plateforme qui n’est désormais plus sur le Dark Web.

~afficher_fond(grenier_foule) 
<b>Fred</b>, <b>Christopher</b>, <b>Boris</b>, <b>Teacher</b>, <b>Bonnie</b>, <b>Jen</b>, <b>Palvid_</b>, <b>Jonathan</b>, <b>Christian</b>, <b>Vivian</b>, <b>Ronny</b> et <b>Tom</b> et tous les autres joueurs et streamers impliqués sont présents et célèbrent en jouant. Le tournoi bat son plein et <b>Palvid_</b> est en tête avec une partie sans faute.
~jouer_effet_sonore(encouragements)

L’équipe de la résistance va gagner le tournoi et les jeux vidéo rayonnent à nouveau au Canada.

Tous les intervenants de la résistance sont au comble de la joie.  L’événement se déroule pour le moment sans accroc, c’est un véritable succès…

<b>Bonnie</b> et <b>Palvid_</b> développent même une certaine complicité…

~afficher_fond(brigade)

Le <b>chef Miller</b>, l’<b>agent Moore</b>, <b>l’agent Sand</b> et l’<b>agent Lucas</b> attendent les ordres.

~afficher_personnage(CHEF_MILLER, "slideInUp")

Chef Miller: Gallant n’a rien vu venir, mais c’est maintenant que ça se passe et il y a eu assez de dégâts comme ça. On n’attend pas de ses nouvelles. De toute façon, selon le dernier rapport de Brighton, elle est toujours au 530 McLeod, on la cueillera là-bas. # character=CHEF_MILLER expression=cruel

Chef Miller: Je veux une équipe au 530 McLeod immédiatement. On embarque tout ce qui s’y trouve. Ensuite, on laisse mijoter et on les cuisinera plus tard. Gallant a des pistes intéressantes, des gros noms. Il n’y a plus à hésiter, c’est maintenant qu’on va récolter! Go! Go! Go! # character=CHEF_MILLER expression=sterness

Le téléphone du <b>chef Miller</b> sonne.

Cabinet du premier ministre, au téléphone: Miller? Arrêtez tout. Le premier ministre recule. # character=PREMIER_MINISTRE invisible

Chef Miller: Quoi? # character=CHEF_MILLER expression=surprise

Cabinet du premier ministre, au téléphone: Oui. Les gens descendent dans la rue. Les foules sont en faveur du retour des jeux. Il faut attendre avant de procéder à des arrestations. Le gouvernement veut négocier la fin de l’événement dans le calme et ouvrir des pourparlers avec la résistance. # character=PREMIER_MINISTRE invisible

Chef Miller: Nom d’un chien! Non! Pas ça! # character=CHEF_MILLER expression=wtf

Cabinet du premier ministre, au téléphone: Je suis désolé. # character=PREMIER_MINISTRE invisible
~cacher_tout_personnages()
-> scene_2

= scene_2
~afficher_fond(bureau_chef_miller)
~jouer_musique(theme_fin)
~afficher_personnage(CHEF_MILLER, "slideInUp")

À la suite de l'évènement de la résistance, <b>Fred</b> est convoquée par le <b>chef Miller</b>.

Chef Miller: Où irez-vous, Gallant? # character=CHEF_MILLER expression=neutral

Fred: Aucune idée. Je ne sais pas si je resterai agent de police. # character=FRED_GALLANT invisible

Chef Miller: Moore, moi et les autres, on s’en va au criminel. # character=CHEF_MILLER expression=melancholy

Chef Miller: J’avoue que pendant un certain temps, je vous ai sous-estimée. Si j’avais su qu’à vous toute seule, vous démantèleriez la brigade, je ne vous aurais pas confié cette mission. # character=CHEF_MILLER expression=disdain

Fred: Je n’ai pas démantelé la brigade à moi toute seule. # character=FRED_GALLANT invisible

Chef Miller: Mais si. Ne soyez pas trop modeste. Votre travail a déclenché un véritable tsunami. Les adeptes des jeux vidéo ont refusé de demeurer dans l’ombre. Le gouvernement n’a plus eu le choix de réagir. # character=CHEF_MILLER expression=sterness 

Fred: Je n’ai fait que mon devoir. # character=FRED_GALLANT invisible

Chef Miller: Non, Gallant. Votre devoir était de les arrêter. Pas de les faire gagner cette bataille. # character=CHEF_MILLER expression=disdain

Fred: Pourquoi m’avez-vous fait suivre? # character=FRED_GALLANT invisible

Chef Miller: Votre loyauté n’était pas très évidente. # character=CHEF_MILLER expression=disdain

Fred: J’ai eu mes moments de doute, à vrai dire. Mais maintenant, je suis à 100% avec eux. Je crois que je vais rester pour faire appliquer la nouvelle loi. # character=FRED_GALLANT invisible

Chef Miller: J’imagine que vous êtes dans l’air du temps. La population veut des réponses. L’interdiction ne passe plus. Le gouvernement va devoir céder pas mal de terrain. # character=CHEF_MILLER expression=neutral

Fred: Vous n’êtes pas d’accord? # character=FRED_GALLANT invisible

Chef Miller: Gallant, j’ai fondé cette brigade. Je me fais vieux pour changer mon fusil d’épaule. Je sers et protège la communauté. Je n’ai pas d’opinion sur les lois. Lorsqu’elles changent, je change. Mais cette fois, je préfère finir ma carrière dans une autre brigade, ça sera moins pénible. # character=CHEF_MILLER expression=melancholy

Fred: Je comprends. Je voulais vous dire… je n’avais rien contre vous, chef. Seulement, je ne me contente pas de me plier aux lois. Je veux les comprendre pour mieux les appliquer et là… ça ne collait pas. Vous comprenez? # character=FRED_GALLANT invisible

Chef Miller: Non. Mais quelle importance? # character=CHEF_MILLER expression=melancholy
~cacher_tout_personnages()
-> scene_3

= scene_3
~afficher_fond(parlement_positif)
~jouer_musique(theme_fin)

Colline du Parlement, Ottawa. # center
Allocution du premier ministre. # center

~afficher_fond(porte_rose_manette)
~afficher_personnage(PREMIER_MINISTRE, "slideInUp")

Premier ministre: Chers concitoyens, chères concitoyennes, # character=PREMIER_MINISTRE expression=neutral

Premier ministre: Je me présente devant vous, aujourd’hui, avec humilité. La tâche m’incombe de vous faire part des plus récentes découvertes sur les activités illicites liées à la distribution et à la consommation de jeux vidéo. Vous n’êtes sans doute pas sans savoir que des groupes organisés ont continué, malgré la <i>Loi Game</i> Over, de créer, de vendre, de distribuer et d’utiliser des jeux vidéo. # character=PREMIER_MINISTRE expression=neutral

Premier ministre: Nous constatons que les jeux vidéo et l’attrait du public pour ce média n'ont pas disparu bien au contraire. Nous nous devons d’écouter la voix du peuple et d’en tirer les conséquences. Le droit doit suivre les aspirations de la société. Nous constatons que le retour des jeux vidéo n’est pas seulement nécessaire, il est également voulu. # character=PREMIER_MINISTRE expression=neutral

Premier ministre: L’organisation qui se nommait elle-même la Résistance nous a prouvé qu’il était possible de créer des jeux et d’organiser des évènements de manière responsable et que les risques associés à la pratique des jeux vidéo n’étaient pas une fatalité. Au contraire, cette organisation nous a démontré le potentiel rassembleur que peuvent avoir les jeux vidéo, un potentiel que nous avions oublié depuis l’adoption de la <i>Loi Game Over</i>. # character=PREMIER_MINISTRE expression=neutral

Premier ministre: C’est pourquoi je vous annonce aujourd’hui l’abrogation de cette loi. J’ai les mêmes questions que vous au sujet de la transition nécessaire. Nous pourrons néanmoins nous appuyer sur l’expertise développée par le mouvement de résistance qui nous accompagnera dans la réintroduction progressive des jeux vidéo dans notre société. Cette transition ne doit pas nous effrayer. Elle doit au contraire nous réjouir : une nouvelle ère de découvertes et d’explorations virtuelles s’ouvre à nous. Vive les jeux vidéo, vive le Canada. # character=PREMIER_MINISTRE expression=neutral 
~cacher_tout_personnages()
~afficher_fond(blackout)

Narrateur: Vous croyez peut-être que l’agent Gallant ne s’en est pas trop mal tirée? Mais elle aurait fait quoi sans votre aide? Maintenant que vous connaissez mieux l’univers du droit des jeux vidéo, vous en pensez quoi? Quelle est la meilleure option selon vous? Comment gérer une activité aux multiples facettes? Vous avez tout en main pour vous faire votre propre opinion maintenant. Vous pouvez désormais vous dissocier une fois pour toutes de l’agent Gallant, car après tout, ce n’était qu’un jeu, n’est-ce pas? # character=NARRATEUR invisible
~arreter_musique()

-> fin