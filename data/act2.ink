=== chapitre_2 ===

= scene_1
~afficher_fond(transition_2)
<center><titre>Chapitre 2</titre></center><br/><center>Au-delà des évidences</center> # transition
~ afficher_fond(art_house_cafe)
<b>Fred</b> attend <b>Bonnie</b> dans un café. 
~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: L’agent Gallant s’enfonce. Qui croire? Qui a raison, qui a tort? Est-ce que la vérité réside entre les deux camps? Le gouvernement ou la résistance? À qui pouvez-vous faire confiance? Vous devrez continuer d’investiguer et de tirer vos propres conclusions. Ne perdez pas une minute, allez voir par vous-mêmes. Ne vous perdez pas en chemin, restez concentré sur votre objectif. Gallant, réveille-toi maintenant et ne triche pas. # character=NARRATEUR invisible center
~arreter_musique()
<b>Fred</b> se réveille de sa torpeur.
~afficher_fond(art_house_cafe)
~jouer_musique(theme_general)

<b>Bonnie</b> arrive au rendez-vous.
~afficher_personnage(BONNIE_RANDLE_V2, "zoomIn")
Bonnie: Qu’en est-il de l’aide que vous m’avez promise? # character=BONNIE_RANDLE_V2 expression=default

Fred: J’y travaille. # character=FRED_GALLANT invisible

Bonnie: Ça commence à ne plus être suffisant comme réponse. # character=BONNIE_RANDLE_V2 expression=aversion

Fred: Je sais. Il n’y a pas de possibilités de relocalisation ni de changement d’identité. # character=FRED_GALLANT invisible

Bonnie: Mais je ne peux pas changer d’identité! Je veux que mon père ignore que j’ai fait partie de la résistance, mais je veux rester la même personne, sa fille. Je ne veux pas de casier judiciaire, mais je veux garder mon nom. Je veux juste être protégée au cas où ça tournerait mal avec la résistance. Vous n’allez pas faire de descente? # character=BONNIE_RANDLE_V2 expression=wonder
~jouer_musique(theme_choix_cruciaux)
*<b>Fred</b> décide d’expliquer à Bonnie qu’il n’y aura pas de descente tant qu’elle sera en charge.
  ~ points_fin_A2 += 4
  ~jouer_musique(theme_general)
Fred: Ça n’arrivera pas tant que je serai en train d’étudier la résistance. Lorsque le moment sera venu, lorsque j’aurai assez d’informations, par exemple, je vous préviendrai. De toute façon, vous êtes mineure et n’aurez aucune charge contre vous. # character=FRED_GALLANT invisible

Bonnie: Peu importe. Je ne veux pas que mes parents le sachent et je veux étudier en droit, je vous l’ai dit. Donc, pas de trace. C’était ma condition. # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Je sais. Votre frère m’a bien aidée. Je vais négocier pour lui aussi. # character=FRED_GALLANT invisible

Bonnie: Merci. # character=BONNIE_RANDLE_V2 expression=default

Fred: Tout de même, j’ai été surprise de vous voir au grenier le jour où on m’a initiée. # character=FRED_GALLANT invisible

Bonnie: En attendant d’avoir de vos nouvelles, je dois faire comme si de rien n’était, non? # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Bien sûr. # character=FRED_GALLANT invisible

Bonnie: C’est bien ce qui m’inquiète. # character=BONNIE_RANDLE_V2 expression=wonder

Fred: Ne soyez pas inquiète. On m’a confié une nouvelle mission. # character=FRED_GALLANT invisible

Bonnie: Laquelle? # character=BONNIE_RANDLE_V2 expression=default

Fred: Investiguer au 530 McLeod… # character=FRED_GALLANT invisible

Bonnie: Mais c’est catastrophique! # character=BONNIE_RANDLE_V2 expression=shock

Fred: Non, puisque c’est à moi qu’on a confié la mission. # character=FRED_GALLANT invisible

Bonnie: Vous allez mentir à votre chef? # character=BONNIE_RANDLE_V2 expression=wonder

Fred: Un instant, ce n’est pas ce que j’ai dit. J’ai seulement sous-entendu que les dégâts seraient limités. # character=FRED_GALLANT invisible

Bonnie: D’accord, c’est bon. Mais vous attendez quoi pour arrêter les gars de la résistance? # character=BONNIE_RANDLE_V2 expression=default

Fred: D’abord, un accès à des haut placés, et ensuite des preuves et des informations qu’on n’avait pas déjà. # character=FRED_GALLANT invisible

Bonnie: Je crois que vous n’avez pas le bon contact.# character=BONNIE_RANDLE_V2 expression=default

Fred: Ne vous inquiétez pas, j’ai compris ça dès le début de notre petite association. # character=FRED_GALLANT invisible

Bonnie: Est-ce que je peux vous poser une question? # character=BONNIE_RANDLE_V2 expression=default

Fred: Vous pouvez toujours essayer. # character=FRED_GALLANT invisible

Bonnie: Croyez-vous vraiment que les jeux vidéo soient aussi dangereux qu’ils le disent? # character=BONNIE_RANDLE_V2 expression=dejection

Fred: Je ne sais pas. # character=FRED_GALLANT invisible

Bonnie: Mais alors pourquoi êtes-vous devenue policière dans cette brigade? # character=BONNIE_RANDLE_V2 expression=dejection

Fred: Je… les jeux vidéo comportent des dangers, c’est évident. # character=FRED_GALLANT invisible

Bonnie: Bon, je comprends, vous ne voulez pas répondre. Tout de même, je me serais attendue à une réponse plus claire et surtout, plus convaincante. # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Ce que je sais, c’est qu’une jeune fille qui veut étudier en droit ne devrait pas avoir d’activités illégales. # character=FRED_GALLANT invisible

Bonnie: Oui, j’ai compris. En plus, je n’y tiens pas tellement. J’ai traîné avec eux parce que ce sont les amis de mon frère.# character=BONNIE_RANDLE_V2 expression=default

Fred: Est-ce que votre frère va parfois au 530 McLeod? # character=FRED_GALLANT invisible

Bonnie: Non, pas depuis longtemps. Mon frère ne joue pas. Il voit Christopher et parfois Ronny, mais il ne se mêle plus des activités de la résistance. # character=BONNIE_RANDLE_V2 expression=default

Fred: Si jamais il avait l’intention d’y aller, il faudra me prévenir au plus tôt. Avez-vous une photo de lui sur vous? # character=FRED_GALLANT invisible
~ cacher_tout_personnages()
~afficher_fond(telephone_photo_john_randle)

Bonnie: Oui, en voici une. # character=BONNIE_RANDLE_V2 invisible

~afficher_fond(art_house_cafe)
~afficher_personnage(BONNIE_RANDLE_V2, "slideInUp") 
Fred: Merci. Alors, jusqu’à nouvel ordre, ne faites rien d’inhabituel. Vous pouvez espacer vos visites au 530, mais pas trop, rien de suspect. # character=FRED_GALLANT invisible

Bonnie: Oui, agent Gallant, bien compris. # character=BONNIE_RANDLE_V2 expression=neutral
~cacher_tout_personnages()

*<b>Fred</b> rassure Bonnie sans lui donner d’information.
  ~ points_fin_A2 += 2
  ~jouer_musique(theme_general)
Fred: Ça n’arrivera pas tant que je serai en train d’étudier la résistance. Lorsque le moment sera venu de procéder à des arrestations, je vous préviendrai. De toute façon, vous êtes mineures et n’aurez aucune charge contre vous. # character=FRED_GALLANT invisible

Bonnie: Peu importe. Je ne veux pas que mes parents le sachent et je veux étudier en droit, je vous l’ai dit. Donc, pas de trace. C’était ma condition. # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Je sais. Votre frère m’a bien aidée. Je vais négocier pour lui aussi. # character=FRED_GALLANT invisible

Bonnie: Merci. # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Tout de même, j’ai été surprise de vous voir au grenier le jour où on m’a initiée. # character=FRED_GALLANT invisible

Bonnie: En attendant d’avoir de vos nouvelles, je dois faire comme si de rien n’était, non? # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Bien sûr. # character=FRED_GALLANT invisible

Bonnie: C’est bien ce qui m’inquiète. # character=BONNIE_RANDLE_V2 expression=wonder

Fred: Ne soyez pas inquiète. Je m’occupe de votre sécurité. # character=FRED_GALLANT invisible

Bonnie: D’accord, c’est bon. Mais vous attendez quoi pour arrêter les gars de la résistance? # character=BONNIE_RANDLE_V2 expression=sterness

Fred: Le bon moment. # character=FRED_GALLANT invisible

Bonnie: Est-ce que je peux vous poser une question? # character=BONNIE_RANDLE_V2 expression=default

Fred: Vous pouvez toujours essayer. # character=FRED_GALLANT invisible

Bonnie: Croyez-vous vraiment que les jeux vidéo soient aussi dangereux qu’ils le disent? # character=BONNIE_RANDLE_V2 expression=dejection

Fred: Oui, les jeux vidéo comportent des dangers, c’est évident. Est-ce que votre frère va parfois au 530 McLeod? # character=FRED_GALLANT invisible

Bonnie: Non, pas depuis longtemps. Mon frère ne joue pas. Il voit Christopher et parfois Ronny, mais il ne se mêle plus des activités de la résistance. # character=BONNIE_RANDLE_V2 expression=default

Fred: Si jamais il avait l’intention d’y aller, il faudra me prévenir au plus tôt. Avez-vous une photo de lui sur vous? # character=FRED_GALLANT invisible

~afficher_fond(telephone_photo_john_randle)

Bonnie: Oui, en voici une. # character=BONNIE_RANDLE_V2 expression=neutral

~afficher_fond(art_house_cafe)

Fred: Merci. Alors, jusqu’à nouvel ordre, ne faites rien d’inhabituel. Vous pouvez espacer vos visites au 530, mais pas trop, rien de suspect. # character=FRED_GALLANT invisible

Bonnie: Oui, agent Gallant, bien compris. # character=BONNIE_RANDLE_V2 expression=neutral
~cacher_tout_personnages()

*<b>Fred</b> ne dit rien à Bonnie à ce sujet. 
  ~ points_fin_A1 += 4
   ~jouer_musique(theme_general)

Fred: Ça n’arrivera pas tant que je serai en train d’étudier la résistance. De toute façon, vous êtes mineures et n’aurez aucune charge contre vous. # character=FRED_GALLANT invisible

Bonnie: Peu importe. Je ne veux pas que mes parents le sachent et je veux étudier en droit, je vous l’ai dit. Donc, pas de trace. C’était ma condition. # character=BONNIE_RANDLE_V2 expression=neutral

Fred: Je sais. Votre frère m’a bien aidée. Je vais négocier pour lui aussi. # character=FRED_GALLANT invisible

Bonnie: Merci. Est-ce que je peux vous poser une question? # character=BONNIE_RANDLE_V2 expression=default

Fred: Vous pouvez toujours essayer. # character=FRED_GALLANT invisible

Bonnie: Croyez-vous vraiment que les jeux vidéo soient aussi dangereux qu’ils le disent? # character=BONNIE_RANDLE_V2 expression=dejection

Fred: Oui, les jeux vidéo comportent des dangers, c’est évident. Est-ce que votre frère va parfois au 530 McLeod? # character=FRED_GALLANT invisible

Bonnie: Non, pas depuis longtemps. Mon frère ne joue pas. Il voit Christopher et parfois Ronny, mais il ne se mêle plus des activités de la résistance. # character=BONNIE_RANDLE_V2 expression=default

Fred: Si jamais il avait l’intention d’y aller, il faudra me prévenir au plus tôt. Avez-vous une photo de lui sur vous? # character=FRED_GALLANT invisible

~afficher_fond(telephone_photo_john_randle)

Bonnie: Oui, en voici une. # character=BONNIE_RANDLE_V2 expression=neutral

~afficher_fond(art_house_cafe)

Fred: Merci. Alors, jusqu’à nouvel ordre, ne faites rien d’inhabituel. Vous pouvez espacer vos visites au 530, mais pas trop, rien de suspect. # character=FRED_GALLANT invisible

Bonnie: Oui, agent Gallant, bien compris.# character=BONNIE_RANDLE_V2 expression=neutral
~cacher_tout_personnages()
- ->scene_2

= scene_2
~afficher_fond(bureau_fred) 
~jouer_musique(theme_general)
~afficher_personnage(AGENT_MOORE, "slideInUp")

Agent Moore: Eh bien! Encore du travail tard? # character=AGENT_MOORE expression=neutral

Fred: Ouais. Je pense que je suis zélée! # character=FRED_GALLANT invisible

Agent Moore: Tu m’étonnes! Dis-moi, pour le 530, tu comptes procéder comment? # character=AGENT_MOORE expression=neutral

Fred: Éplucher toutes les plaintes qui impliquent cette adresse. # character=FRED_GALLANT invisible

Agent Moore: Oui, j’ai déjà quelques dossiers qui mentionnent cette adresse. On n’a jamais rien trouvé malheureusement. Et tes nouveaux amis? Ils ne connaissent pas cette adresse? J’ai le dossier Morris qui mentionne aussi le pseudo de Teacher, mais on ne trouve jamais rien qui relie ce pseudo à une identité réelle.# character=AGENT_MOORE expression=neutral

Fred: C’est un début. Quoi d’autre? # character=FRED_GALLANT invisible

Agent Moore: Je pensais t’avoir posé une question. Comment va ton infiltration? # character=AGENT_MOORE expression=neutral
~jouer_musique(theme_choix_cruciaux)
*<b>Fred</b> ne lui donne aucune information sur ses découvertes ni ses contacts.
~ points_fin_A1 += 4
 ~jouer_musique(theme_general)
Fred: Bah! Je n’arrive pas à rencontrer les personnes qui compteraient. # character=FRED_GALLANT invisible

Agent Moore: On a tout essayé! # character=AGENT_MOORE expression=concern

*<b>Fred</b> lui transmet certaines informations.
~ points_fin_A1 += 2
 ~jouer_musique(theme_general)
Fred: Bah! Je n’arrive pas à rencontrer les personnes qui compteraient. # character=FRED_GALLANT invisible

Agent Moore: On a tous essayé! # character=AGENT_MOORE expression=concern

Fred: Ouais, mais tout de même, je gagne la confiance d’un membre qui est très convaincu et qui a accès à quelqu’un de plus haut placé que lui : justement, Teacher. # character=FRED_GALLANT invisible 

Agent Moore: Vraiment? # character=AGENT_MOORE expression=surprise

Fred: Oui. Et j’ai entendu parler du 530, mais ils ne m’y ont pas encore invitée…  # character=FRED_GALLANT invisible

Agent Moore: Bon. Si tu entends quelque chose, dis-le-moi. En attendant, je vais éplucher le dossier Morris au cas où une info m’aurait échappé et je vais aller faire un petit tour au 530. # character=AGENT_MOORE expression=neutral

Fred: Je ne peux pas y aller, tu en es conscient? # character=FRED_GALLANT invisible

Agent Moore: Bien sûr. Je te tiens au courant! # character=AGENT_MOORE expression=neutral

*<b>Fred</b> lui raconte ce qu’elle sait sur le 530 McLeod.
~ points_fin_A1 += 4
 ~jouer_musique(theme_general)
Fred: Bah! Je n’arrive pas à rencontrer les personnes qui compteraient. Mais ce n’est qu’une question de temps. # character=FRED_GALLANT invisible

Agent Moore: On a tous essayé! # character=AGENT_MOORE expression=concern

Fred: Ouais, mais tout de même, je gagne la confiance d’un membre qui est très convaincu et qui a accès à quelqu’un de plus haut placé que lui : justement, Teacher. # character=FRED_GALLANT invisible 

Agent Moore: Vraiment? # character=AGENT_MOORE expression=surprise

Fred: Oui. Et je suis allé au 530. # character=FRED_GALLANT invisible

Agent Moore: Sérieusement? # character=AGENT_MOORE expression=surprise

Fred: Oui. C’est un genre de quartier général où ils se retrouvent pour jouer, mais je ne sais rien d’autre.  # character=FRED_GALLANT invisible

Agent Moore: Bon. Si tu entends quelque chose, dis-le-moi. En attendant, je vais éplucher le dossier Morris au cas où une info m’aurait échappé et je vais aller faire un petit tour au 530. # character=AGENT_MOORE expression=neutral

Fred: Je ne peux pas y aller, tu en es conscient? # character=FRED_GALLANT invisible

Agent Moore: Bien sûr. Je te tiens au courant! # character=AGENT_MOORE expression=neutral

- <b>L’agent Moore</b> quitte le bureau. 
~afficher_personnage(AGENT_MOORE, "slideOutDown")
~cacher_tout_personnages()
~jouer_effet_sonore(claquement_porte)

~jouer_effet_sonore(composer_numero)
<b>Fred</b> en profite pour téléphoner aux parents du petit <b>Leigh Kane</b>, malgré les ordres de son chef. <b>Madame Kane</b> apparaît sur le téléphone de <b>Fred</b>.

Fred: Madame Kane? Agent Gallant. # character=FRED_GALLANT invisible

~afficher_personnage(MERE_DE_LEIGH_KANE, "fadeIn")
Madame Kane: Je n’ai pas eu l’occasion de vous remercier pour la lettre. # character=MERE_DE_LEIGH_KANE expression=default phone

Fred: C’est inutile. J’aurais aimé faire plus. Mais j’ai une dernière piste à explorer… Est-ce que vous pouvez me donner l’adresse de la cousine à Leigh? # character=FRED_GALLANT invisible
~cacher_tout_personnages()
-> scene_3

= scene_3
 ~afficher_fond(chambre_cousine_leigh_kane)
~jouer_musique(theme_general)
~afficher_personnage(LEIGH_KANE, "bounceIn")

Fred: Tu as tout de même donné la trouille à tes parents, tu sais. # character=FRED_GALLANT invisible

Leigh: Je sais. # character=LEIGH_KANE expression=melancholy

Fred: Je te comprends. Ne t’en fais pas. Mais il faudra penser à revenir. # character=FRED_GALLANT invisible

Leigh: Comment vous m’avez trouvé? # character=LEIGH_KANE expression=concern

Fred: Ta mère m’a parlé de ton petit côté solitaire. Elle n’avait pas d’idée où tu aurais pu aller. L’enquête au criminel piétinait et j’ai décidé de tenter ma chance.# character=FRED_GALLANT invisible

Leigh: Vous n’êtes pas du criminel? # character=LEIGH_KANE expression=concern

Fred: Non. # character=FRED_GALLANT invisible

Leigh: Vous êtes qui? # character=LEIGH_KANE expression=concern

Fred: Je suis de la brigade anti-jeux vidéo. J’ai aussi trouvé ta lettre. # character=FRED_GALLANT invisible

Leigh: Je n’ai jamais joué à des jeux vidéo! J’étais pas certain… # character=LEIGH_KANE expression=anxiety

Fred: Ne te fatigue pas. Je sais que tu as joué sur le Dark Web. # character=FRED_GALLANT invisible

Leigh: Comment vous…? # character=LEIGH_KANE expression=anxiety

Fred: Écoute, est-ce que je peux jouer cartes sur table avec toi? # character=FRED_GALLANT invisible

Leigh: Pour ce que ça va changer. Vous allez m’obliger à rentrer? # character=LEIGH_KANE expression=disdain

Fred: Non. Mais je crois que c’est ce que tu souhaites, non? # character=FRED_GALLANT invisible

Leigh: Rentrer? # character=LEIGH_KANE expression=surprise

Fred: Oui, mais surtout, qu’on t’oblige à le faire. # character=FRED_GALLANT invisible

Leigh: Je n’ai pas à répondre à ça! # character=LEIGH_KANE expression=anxiety

Fred: Non, voilà. Je t’ai trouvé parce que les seuls messages texte récents à part ton échange avec Teacher, c’est avec ta cousine. Au départ, je n’y croyais pas parce que je me disais qu’elle aurait appelé pour signaler ton arrivée. # character=FRED_GALLANT invisible

Leigh: Elle n’est pas comme ça.# character=LEIGH_KANE expression=neutral

Fred: J’ai compris. Elle t’a couvert. Pour quelque temps, n’est-ce pas? # character=FRED_GALLANT invisible

Leigh: Puisque vous savez déjà tout, pourquoi me posez-vous des questions? # character=LEIGH_KANE expression=concern

Fred: Je veux juste que tu admettes toi-même que cette situation était forcément temporaire. # character=FRED_GALLANT invisible

Leigh: C’est elle qui m’a montré les jeux sur le Dark Web. Vous allez l’arrêter? # character=LEIGH_KANE expression=concern

Fred: Non, et toi non plus. On n’arrête pas les gens pour une demi-heure de jeux sur Friv.# character=FRED_GALLANT invisible

Leigh: Alors, qu’est-ce que vous me voulez? # character=LEIGH_KANE expression=sterness

Fred: Je te l’ai dit, je pense que tu devrais rentrer chez toi, tout simplement.# character=FRED_GALLANT invisible

Leigh: Vous cherchez une promotion? # character=LEIGH_KANE expression=sterness

Fred: Non. Je repars sans toi. Je te laisse rentrer tout seul. Ou alors, appelle. Donne des nouvelles. Tes parents ne t’en veulent pas, tu as de la chance. Ils seront juste heureux que tu sois revenu. # character=FRED_GALLANT invisible

Leigh: Pourquoi faites-vous ça? # character=LEIGH_KANE expression=neutral

Fred: Je vois qu’on ne te la fait pas… En effet, j’ai une faveur à te demander. # character=FRED_GALLANT invisible 

Leigh: Quoi? # character=LEIGH_KANE expression=concern

Fred: Comme je te l’ai dit, il n’y aura pas d’arrestation au sujet des jeux vidéo pour ta cousine et toi. Mais j’aimerais savoir où tu as eu le contact de Teacher.# character=FRED_GALLANT invisible

Leigh: Connais pas de Teacher. # character=LEIGH_KANE expression=dejection

Fred: C’est dans ton téléphone. Tu avais rendez-vous avec lui pour acheter un jeu et un jeu assez dispendieux. Ça ne te rappelle rien? # character=FRED_GALLANT invisible

Leigh: C’est pas quelqu’un que je connais. # character=LEIGH_KANE expression=dejection

Fred: Je veux bien, mais tu sais que cette personne est difficile à joindre? Comment as-tu eu ce numéro? # character=FRED_GALLANT invisible

Leigh: Je ne me souviens pas. # character=LEIGH_KANE expression=dejection

Fred: Connais-tu Bonnie? Christopher? Ronny? Vivian? Tom? # character=FRED_GALLANT invisible

Leigh: Non, aucun de ces noms ne me dit quelque chose. # character=LEIGH_KANE expression=dejection

Fred: Tu protèges quelqu’un? Tu peux au moins me dire par quel moyen tu as eu ce numéro, sans nommer personne? # character=FRED_GALLANT invisible

Leigh: J’ignorais que c’était quelqu’un d’important, moi.# character=LEIGH_KANE expression=neutral

Fred: D’accord, pas de problème, je ne t’accuse de rien. # character=FRED_GALLANT invisible

Leigh: Ouais, et comment je peux vous faire confiance, moi? # character=LEIGH_KANE expression=concern

Fred: Tu ne peux pas. Tu dois décider si tu as envie de me faire confiance ou non. Il n’y a pas de garanties. Je ne te mens pas. # character=FRED_GALLANT invisible

Leigh: Après, si je vous le dis, vous allez repartir? # character=LEIGH_KANE expression=concern

Fred: Absolument. # character=FRED_GALLANT invisible

Leigh: C’était juste pour voir. Je ne le connais pas, ce gars. # character=LEIGH_KANE expression=neutral

Fred: Je comprends. # character=FRED_GALLANT invisible

Leigh: C’est un gars à l’école. C’est son père qui lui a donné le numéro. # character=LEIGH_KANE expression=neutral

Fred: Son père? # character=FRED_GALLANT invisible

Leigh: Oui, son père est en prison. Pas à cause des jeux. Mais il joue pas mal. Kevin se vantait que son père connaissait de gros caïds qui vendent des jeux vidéo. Puis, ça a dégénéré. On l’a… forcé à prouver ce qu’il disait. # character=LEIGH_KANE expression=neutral

Fred: Je vois. # character=FRED_GALLANT invisible

Leigh: Il est arrivé avec un jeu à l’école. Ça s’est su et on lui a confisqué. Mais quand l’école a appelé les parents, la mère de Kevin était vraiment très fâchée et elle a empêché Kevin d’aller voir son père pendant plusieurs mois.# character=LEIGH_KANE expression=neutral

Leigh: Quand il est retourné, il lui a demandé le numéro du gars qui lui avait vendu ses jeux pour faire une blague à l’école. Je ne sais pas comment il a fait pour le convaincre, mais son père a dit oui. On a tous écrit au gars, mais on n’a rien acheté. # character=LEIGH_KANE expression=neutral

Fred: Teacher n’a pas vérifié pourquoi tu n’étais jamais venu chercher le jeu. Pourquoi? # character=FRED_GALLANT invisible

Leigh: Parce qu’il a parlé au père de Kevin, je crois. Le père de Kevin lui a tout expliqué. # character=LEIGH_KANE expression=neutral

Fred: Tu veux bien me donner le nom du père de Kevin? Il est déjà en taule, il ne risque rien! # character=FRED_GALLANT invisible

Leigh: Faut pas me prendre pour un débile. J’ai dit tout ce que je savais. Je ne connais pas personnellement le père de Kevin, moi. # character=LEIGH_KANE expression=horror

Fred: Non, bien sûr. Ne t’inquiète pas. Je te laisse réfléchir. Tu vas appeler ta mère, dis-moi? # character=FRED_GALLANT invisible

Leigh: Je n’ai plus tellement le choix. # character=LEIGH_KANE expression=melancholy

Fred: En effet, maintenant qu’on sait où tu es, il vaut mieux que tu te rendes toi-même et l’affaire sera close. # character=FRED_GALLANT invisible

Leigh: Vous ne direz pas à mes parents que j’ai joué à des jeux vidéo? # character=LEIGH_KANE expression=dejection

Fred: Tes parents croyaient que c’était pour ça que tu étais parti. # character=FRED_GALLANT invisible

Leigh: C’est pas vrai. Mais l’histoire avec le père de Kevin, ça nous a bien stressés. On n’était pas concentrés cette année. # character=LEIGH_KANE expression=dejection

Fred: Tu peux encore te reprendre. Oublie un peu les jeux vidéo et pratique un sport, le badminton par exemple. Tu sais, il y a une raison pour laquelle c’est interdit.# character=FRED_GALLANT invisible

Leigh: Je sais. # character=LEIGH_KANE expression=melancholy

Fred: Allez, bonne chance. # character=FRED_GALLANT invisible

Leigh: Agent Gallant? # character=LEIGH_KANE expression=neutral

Fred: Oui? # character=FRED_GALLANT invisible

Leigh: Merci. # character=LEIGH_KANE expression=neutral

Fred: C’est bon, je fais juste mon boulot. # character=FRED_GALLANT invisible
~cacher_tout_personnages()


-> scene_4

=scene_4
~afficher_fond(centre_rehabilitation_couloir)
~jouer_musique(theme_general)

<b>Fred</b> entre au centre. Elle a rendez-vous avec un médecin spécialiste des dépendances.
~afficher_personnage(MEDECIN, "slideInUp")

Fred: Merci beaucoup de me recevoir, docteur. Je me suis dit que je devais mieux comprendre les dépendances au jeu.# character=FRED_GALLANT invisible

Médecin: Je ferai de mon mieux pour vous aider, mais comme vous pouvez vous en douter, je n’ai pas beaucoup de temps. # character=MEDECIN expression=concern

Fred: Je comprends. Je n’abuserai pas de votre générosité. Mais dites-moi, tout bonnement, je me demande pourquoi les dépendances au jeu étaient si intenses et pourquoi il était si difficile de s’en guérir? # character=FRED_GALLANT invisible

Médecin: Ça dépendait des cas. Le système de récompense était conçu pour créer de l’anxiété en alternance avec le plaisir et ce, sans qu’on puisse vraiment déterminer de constante.# character=MEDECIN expression=concern

Fred: Je vois. # character=FRED_GALLANT invisible

~jouer_effet_sonore(sonnerie_telephone)
Le <b>médecin</b> reçoit un appel urgent.

Médecin: Je suis vraiment désolé, je dois absolument prendre cet appel. Voici des données internes sur la dépendance… Attention, c’est confidentiel, mais prenez-en connaissance. Nous pourrions terminer cette conversation plus tard. Je peux également vous donner la permission d’aller voir Al, notre abonné à vie. # character=MEDECIN expression=concern

Fred: Al? Il est ici? # character=FRED_GALLANT invisible

Médecin: Oui, ma secrétaire va vous montrer le chemin. # character=MEDECIN expression=neutral

Le <b>médecin</b> donne deux documents à <b>Fred</b>. L’un porte sur les troubles du jeu vidéo et l’autre sur la maximisation des revenus par l’industrie du jeu vidéo. # center
~cacher_tout_personnages()
~ajouter_document(GAMING_DISORDER)
// Description: L’Organisation mondiale de la santé (OMS) s’était intéressée à la pratique des jeux vidéo. Mais quel est le rapport entre la santé et les jeux vidéo... ? 
-> quiz_2_1

=quiz_2_1
~ demarrer_quiz(QUIZ_2_1, 4)
~afficher_document(GAMING_DISORDER)
~jouer_musique(theme_quiz)
-> quiz_2_1_question_1

= quiz_2_1_question_1
1 – L'OMS reconnaissait-elle des troubles pouvant être associés à la pratique des jeux vidéo ? # question index=1
*   (2_1_1_a) [BON--{2_1_1_a: VISITE--}Oui] Oui
L’OMS reconnaissait bien le trouble du jeu vidéo. L’OMS fournissait également différents critères pour définir ce trouble. # retroaction
-> quiz_2_1_question_2
*   (2_1_1_b) [{2_1_1_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_1_question_1

= quiz_2_1_question_2
2 – Si des troubles pouvaient être associés à la pratique des jeux vidéo, après combien de temps la dépendance pouvait-elle être diagnostiquée? # question index=2
+   (2_1_2_a) [BON--{2_1_2_a: VISITE--}1 an] 1 an
Selon l’OMS, les pratiques problématiques devaient s’être déroulées sur une période d’un moins douze mois pour qu’un diagnostic soit établi. Néanmoins, cette période pouvait être plus courte si les tous les éléments de diagnostic étaient observables et si les symptômes étaient graves. Il me semble que 12 mois pour établir un diagnostic, c’est long... Je peux comprendre pourquoi le gouvernement a décidé de prendre les devants avec la <i>Loi Game Over</i>. # retroaction
-> quiz_2_1_question_3
+   (2_1_2_b) [{2_1_2_b: VISITE--}6 mois] 6 mois
+   (2_1_2_c) [{2_1_2_c: VISITE--}1 mois] 1 mois
+   (2_1_2_d) [{2_1_2_d: VISITE--}2 ans] 2 ans
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_1_question_2

= quiz_2_1_question_3
3 - Je me demande si la dépendance aux jeux vidéo ne concernait que les jeux qui se jouaient en ligne ? # question index=3
+   (2_1_3_a) [{2_1_3_a: VISITE--}Vrai] Vrai
+   (2_1_3_b) [BON--{2_1_3_b: VISITE--}Faux] Faux
Selon l’OMS, un trouble du jeu vidéo pouvait survenir aussi bien avec les jeux en ligne que les jeux hors ligne. On dirait bien qu’une interdiction de tous les jeux vidéo était donc légitime pour lutter contre les dépendances... # retroaction
-> quiz_2_1_question_4
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_1_question_3

= quiz_2_1_question_4
4 – L’OMS avait apparemment défini un certain nombre de critères permettant d’établir un diagnostic de trouble du jeu vidéo. Je me demande si tous les critères suivants étaient reconnus… Il y a sûrement un intrus. # question index=4
+   (2_1_4_a) [{2_1_4_a: VISITE--}Consommation excessive de jeux vidéo.] Consommation excessive de jeux vidéo.
+   (2_1_4_b) [{2_1_4_b: VISITE--}Priorité donnée au jeu face à d’autres activités quotidiennes.] Priorité donnée au jeu face à d’autres activités quotidiennes.
+   (2_1_4_c) [{2_1_4_c: VISITE--}Perte de contrôle en matière de jeu.] Perte de contrôle en matière de jeu.
+   (2_1_4_d) [{2_1_4_d: VISITE--}Consommation de jeux vidéo en dépit de l’accumulation de conséquences négatives.] Consommation de jeux vidéo en dépit de l’accumulation de conséquences négatives.
+   (2_1_4_e) [{2_1_4_e: VISITE--}Comportement continu ou épisodique.] Comportement continu ou épisodique.
+   (2_1_4_f) [BON--{2_1_4_f: VISITE--}Douleurs articulaires chroniques.] Douleurs articulaires chroniques.
Tous les critères de la liste étaient pris en considération par l’OMS à l’exception des douleurs articulaires chroniques. Pourtant, je suis sûr que les joueurs qui passaient des heures à jouer devaient dans certains cas ressentir des douleurs ou se blesser. Mais après tout, ces douleurs pourraient rentrer dans la catégorie « Consommation de jeux vidéo en dépit de l’accumulation de conséquences négatives ». # retroaction
-> quiz_2_1_fin
+   (2_1_4_g) [{2_1_4_g: VISITE--}Tous les critères mentionnés] Tous les critères mentionnés
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_1_question_4

=quiz_2_1_fin
~ terminer_quiz()
->scene_4_suite

= scene_4_suite
~afficher_fond(centre_rehabilitation_autre_piece)
~jouer_musique(theme_general)
~afficher_personnage(AL, "slideInUp")
<b>Fred</b> s’assoit à une table avec <b>Al</b>.

Fred: Merci d’avoir accepté de me voir. # character=FRED_GALLANT invisible

Al: C’est rien. Je ne sors jamais et je ne reçois pas beaucoup de visiteurs. Vous allez bien jouer une petite partie de cartes avec moi? # character=AL expression=amusement

Fred: Une autre fois, peut-être. # character=FRED_GALLANT invisible

Al: Oh, je sais bien qu’il n’y aura pas d’autres fois. Mais ne vous inquiétez pas. Je sais aussi pourquoi j’ai accepté de vous parler. # character=AL expression=neutral

Fred: Puis-je le savoir? # character=FRED_GALLANT invisible

Al: C’est parce que je sais qu’un jour ou l’autre, l’interdiction sera levée. # character=AL expression=amusement

Fred: Qu’est-ce qui vous fait dire ça? # character=FRED_GALLANT invisible

Al: C’est toujours pareil. La prohibition n’est pas une solution à long terme. Elle apaise un peu, puis d’autres problèmes naissent et on ne se souvient plus pourquoi on avait interdit. Alors, on rend à nouveau disponible. # character=AL expression=neutral

Fred: Je comprends. Alors, vous seriez contre un retour des jeux vidéo? # character=FRED_GALLANT invisible

Al: Contre! Sur ma vie! # character=AL expression=horror

Fred: C’est pour ça que vous voulez me parler? # character=FRED_GALLANT invisible

Al: Oui. Je vais tout vous dire. Tout. # character=AL expression=disdain

Fred: Très bien, je vous écoute. # character=FRED_GALLANT invisible

Al: Je sais, ils vont commencer à dire que c’est exagéré, que les jeux vidéo sont inoffensifs et parce que depuis un certain temps, ce sont des criminels qui ont les mêmes problèmes que j’ai eus, on oublie, ils passent inaperçus. Mais je vais vous dire une chose, je n’irai pas par quatre chemins : j’ai gâché ma vie avec le jeu. Mais voulez-vous savoir mon record sur Fortnite? # character=AL expression=neutral

Fred: Si vous voulez. # character=FRED_GALLANT invisible

Al: 2 457$ en un seul mois! # character=AL expression=wonder

Fred: D’argent dépensé? # character=FRED_GALLANT invisible

Al: Oui, j’achetais tout. J’étais devenu obsédé. Je n’allais plus travailler. Je voulais tous les skins, tous les passes de combat, tous les fonds d’écran, tout. # character=AL expression=wonder


Fred: Mais pourquoi? Est-ce que ça améliorait le plaisir de jouer? # character=FRED_GALLANT invisible

Al: J’étais devenu fou. J’ai aussi mis beaucoup sur Steam. J’avais deux X-Box et une PS5, Stadia, Switch. Je voulais tous les jeux exclusifs. C’était morbide. # character=AL expression=anxiety

Fred: Mais ça me semble extrême! Y a-t-il d’autres personnes dans le même cas que vous? Qu’est-ce que vous faisiez comme boulot? # character=FRED_GALLANT invisible

Al: Bah, un p’tit boulot dans un entrepôt. Vous ne connaissez pas les principes de dépendance? Avez-vous étudié? Tenez! Les documents ont un peu vieilli, mais bon… # character=AL expression=neutral

~ajouter_document(MODELES_ECONOMIQUES)
~ajouter_document(LOOT_BOXES)
~ajouter_document(DECLARATIONS_INDUSTRIES)

Al: Vous avez besoin de savoir cela. Moi, mon secondaire, je l’ai passé sur Minecraft. Pendant que mes parents payaient des accès Internet sur toutes mes consoles, je séchais les cours. J’étais en grave dépression déjà à 17 ans. Je n’avais pas d’autres sujets de conversation, pas d’autres pensées. Je ne lisais pas, je ne faisais pas de sport. Toute ma vie, c’était le jeu. # character=AL expression=neutral

Fred: Et vos parents, qu’est-ce qu’ils disaient? # character=FRED_GALLANT invisible

Al: Ils ne voulaient pas me contrarier. Je menaçais de partir de la maison. Je leur chantais sur tous les tons qu’ils ne comprenaient rien, qu’ils étaient dépassés. # character=AL expression=melancholy

Fred: Et puis comment ça s’est terminé? # character=FRED_GALLANT invisible

Al: Terminé? Mais ça ne s’est pas terminé! Je suis ici, non? # character=AL expression=anger

Fred: Qu’est-ce qui s’est passé? # character=FRED_GALLANT invisible

Al: Mes parents m’ont donné un ultimatum. Je devais quitter la maison ou arrêter de jouer. J’ai quitté la maison et j’ai créché chez des gars. Ils savaient que la loi allait tomber. Ils s’organisaient. # character=AL expression=melancholy

Fred: La résistance? # character=FRED_GALLANT invisible

Al: Ah non! Au début, c’était juste pour jouer. Ce n’était pas de mauvais gars. Maintenant, la résistance, ce sont des inconscients! # character=AL expression=indignation

Fred: Parce qu’ils veulent ramener la légalité des jeux vidéo? # character=FRED_GALLANT invisible

Al: Ils sont irresponsables! Vous croyez que je suis le seul dans ma situation? # character=AL expression=indignation

Fred: Non, je sais. J’ai vu des cas. # character=FRED_GALLANT invisible

Al: À l’école? Bah! Regardez-moi bien! Qu’est-ce que vous voyez? Un pauvre type n’est-ce pas? Ne répondez pas. Je sais très bien qui je suis. Ce qu’ils vous ont montré à l’école n’est rien, vraiment, c’est même inquiétant. Alors, vous voulez connaître la suite de mon histoire oui ou non? # character=AL expression=melancholy

Fred: Oui, bien sûr! # character=FRED_GALLANT invisible

Al: Eh bien, voilà! Je suis parti vivre avec ces gars, ils étaient comme moi, des paumés. On a fait notre vie, on est allé au bout de nos idées. Puis, elle est arrivée : la <i>Loi Game Over</i>. On a tous été arrêtés. # character=AL expression=melancholy

Fred: Avez-vous fait de la prison? # character=FRED_GALLANT invisible

Al: Oui! Pour vol! # character=AL expression=sterness

Fred: Mais pour les jeux? # character=FRED_GALLANT invisible

Al: Je fais partie des fondateurs de ce que vous appelez la résistance, vous savez! Mais on a eu des circonstances atténuantes. On était déjà accro avant la loi. Pour assurer la transition et aider les gens de manière humaine, on nous a placés. Dans des maisons comme celle-ci. # character=AL expression=neutral

Fred: Êtes-vous retenu ici? # character=FRED_GALLANT invisible

Al: Vous me prenez pour qui? J’ai été traité comme un être humain par les thérapeutes fédéraux. Je ne me plains de rien. Les jeux vidéo étaient un fléau, il ne faut pas l’oublier. On m’a rendu ma dignité, on m’a redonné de l’espoir. # character=AL expression=melancholy

Al: Bien que je sois toujours un pauvre type, j’ai eu de meilleures années. Ça fait 3 ans que je n’ai pas joué. Mais ce n’est pas ma plus longue période sans jeu. J’ai passé 13 ans sans jouer après l’arrivée de la loi. # character=AL expression=melancholy

Fred: Félicitations. # character=FRED_GALLANT invisible

Al: Oh! Gardez vos félicitations! # character=AL expression=melancholy

Fred: J’aurais encore besoin d’un petit renseignement… # character=FRED_GALLANT invisible

<b>Al</b> s’endort.

~ajouter_contact(AL)
~cacher_tout_personnages()
-> quiz_2_2

=quiz_2_2
~ demarrer_quiz(QUIZ_2_2, 5)
~afficher_document(MODELES_ECONOMIQUES)
~jouer_musique(theme_quiz)

//Description document:On dirait bien qu’il y avait plusieurs modèles d’exploitation des jeux vidéo par le passé. Il semblait exister plusieurs façons de tirer des profits des jeux vidéo.
-> quiz_2_2_question_1

= quiz_2_2_question_1
1- Il y avait de grosses productions, appelées les triples AAA. Mais un modèle d’exploitation alternatif aurait eu beaucoup de succès… Lequel ? # question index=1
+   (2_2_1_a) [{2_2_1_a: VISITE--}Des productions AAAA (impliquant plus d’effets visuels saisissants).] Des productions AAAA (impliquant plus d’effets visuels saisissants). 
+   (2_2_1_b) [{2_2_1_b: VISITE--}Des jeux sérieux ou serious games.] Des jeux sérieux ou serious games.
+   (2_2_1_c) [BON--{2_2_1_c: VISITE--}Des jeux gratuits ou Free-to-play.] Des jeux gratuits ou Free-to-play. 
Les jeux gratuits ou Free-to-play étaient des jeux auxquels les joueurs avaient accès en général sans limites de durée sans payer quoique ce soit. Il était néanmoins proposé aux joueurs d’effectuer des achats une fois le jeu installé. Ses achats pouvaient concerner des éléments cosmétiques ne modifiant pas le gameplay. D’autres jeux proposaient des achats pouvant permettre aux joueurs d’obtenir des avantages dans le gameplay… On parlait alors du modèle pay-to-win. # retroaction
-> quiz_2_2_question_2
+   (2_2_1_d) [{2_2_1_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_2_question_1

=quiz_2_2_question_2
2 - Du point de vue de leur exploitation, les jeux vidéo pouvaient être décrits comme des produits. Il y avait-il une autre façon de les décrire? # question index=2
+   (2_2_2_a) [{2_2_2_a: VISITE--}Tentations] Tentations 
+   (2_2_2_b) [BON--{2_2_2_b: VISITE--}Services] Services
Certains jeux étaient vendus à l’unité et constituaient des œuvres achevées. Ils pouvaient parfois être complétés par des extensions. D’autres modèles ont émergé et certains jeux vidéo, en particulier en ligne, ont été considérés comme des services proposés aux joueurs. Les jeux évoluaient d’année en année ou de saison en saison. L’objectif des créateurs était alors de créer une communauté et de continuer à l'étendre. # retroaction
-> quiz_2_2_question_3
+   (2_2_2_c) [{2_2_2_c: VISITE--}Distractions] Distractions
+   (2_2_2_d) [{2_2_2_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_2_question_2

=quiz_2_2_question_3
3- Je me demande si ces jeux vidéo gratuits ou free-to-play rapportaient beaucoup d'argent à leurs créateurs… # question index=3
+  (2_2_3_a) [BON--{2_2_3_a: VISITE--}Oui] Oui
Les jeux gratuits ou free-to-play pouvaient rapporter beaucoup d’argent à leurs créateurs. Le développement de certains d’entre eux pouvait être moins coûteux que les jeux AAA. De plus, les micro-transactions, au cœur du modèle économique, étaient omniprésentes et offraient beaucoup de possibilités de renouvellement.  # retroaction
-> quiz_2_2_question_4
+   (2_2_3_b) [{2_2_3_b: VISITE--}Non] Non
+   (2_2_3_c) [{2_2_3_c: VISITE--}Rarement] Rarement
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_2_question_3

= quiz_2_2_question_4
4- Donc, de quelle manière les jeux gratuits pouvaient-ils rapporter de l’argent à leurs créateurs ? # question index=4
+   (2_2_4_a) [{2_2_4_a: VISITE--}Par des subventions publiques en soutien au secteur des jeux vidéo.] Par des subventions publiques en soutien au secteur des jeux vidéo. 
+   (2_2_4_b) [{2_2_4_b: VISITE--}Par des dons de la part des joueurs.] Par des dons de la part des joueurs.
+   (2_2_4_c) [BON--{2_2_4_c: VISITE--}Par des micro-transactions présentes dans le jeu.] Par des micro-transactions présentes dans le jeu.
Certains joueurs (une minorité au sein des grandes communautés) pouvaient dépenser beaucoup d’argent en jouant à un jeu « gratuit » qu’il s’agisse d’obtenir des éléments graphiques qui leur permettaient de se distinguer des autres joueurs ou d’obtenir des avantages dans le jeu. # retroaction 
-> quiz_2_2_question_5
+   (2_2_4_d) [{2_2_4_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_2_question_4

= quiz_2_2_question_5
5- Est-ce que les jeux gratuits pouvaient coûter plus cher aux joueurs que les jeux dits AAA? # question index=5
*  (2_2_5_a) [BON--{2_2_5_a: VISITE--}Oui] Oui
Pour certains jeux, débloquer l’ensemble du contenu payant pouvait coûter plusieurs milliers de dollars... Quand on pense qu’un jeu AAA était vendu à l’unité pour environ 80 dollars... Tous les joueurs ne dépensaient pas des sommes importantes pour les jeux gratuits. Seule une minorité de joueurs le faisait. # retroaction
-> quiz_2_2_fin
*   (2_2_5_b) [{2_2_5_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_2_question_5

=quiz_2_2_fin
~ terminer_quiz()
-> scene_4_1

=scene_4_1
~afficher_fond(centre_rehabilitation_autre_piece)
~jouer_musique(theme_general)
Fred, à elle-même: Je vais maintenant examiner l'autre document. # character=FRED_GALLANT invisible
-> quiz_2_3

= quiz_2_3
~ demarrer_quiz(QUIZ_2_3, 1)
~afficher_document(LOOT_BOXES)
~jouer_musique(theme_quiz)

//Description document: Qu’est-ce que c’est que cette histoire de loot boxes ? Du contenu aléatoire parfois en vente ? Les joueurs ont dû hurler au scandale… 
-> quiz_2_3_question_1

=quiz_2_3_question_1

1 - Les loot boxes étaient-elles populaires auprès des joueurs ? # question index=1
*  (2_3_1_a) [BON--{2_3_1_a: VISITE--}Vrai] Vrai
Selon les archives d’époque, les loot boxes étaient de plus en plus employées dans les jeux, et ce malgré plusieurs critiques. En particulier, leur similarité avec les jeux de hasard et les problèmes de dépendance qu’elles pouvaient potentiellement entraîner étaient largement pointés du doigt. # retroaction 
-> quiz_2_3_fin
*   (2_3_1_b) [{2_3_1_b: VISITE--}Faux] Faux
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_3_question_1

=quiz_2_3_fin
~ terminer_quiz()
-> scene_4_2

=scene_4_2
~afficher_fond(centre_rehabilitation_autre_piece)
~jouer_musique(theme_general)
Fred, à elle-même: Je vais maintenant examiner le dernier document. # character=FRED_GALLANT invisible

-> quiz_2_4
=quiz_2_4
~ demarrer_quiz(QUIZ_2_4, 1)
~afficher_document(DECLARATIONS_INDUSTRIES)
~jouer_musique(theme_quiz)
// Description document: Ce document devrait me permettre de déterminer l’attitude des acteurs du milieu des jeux vidéo vis-à-vis des loot boxes.
-> quiz_2_4_question_1

= quiz_2_4_question_1
1 - Quelle était la position des acteurs de l’industrie des jeux vidéo à propos des loot boxes et de leur réglementation ? # question index=1
+   (2_4_1_a) [{2_4_1_a: VISITE--}Les États devraient légiférer.] Les États devraient légiférer.
+   (2_4_1_b) [BON--{2_4_1_b: VISITE--}Le choix appartient aux consommateurs.] Le choix appartient aux consommateurs. 
La réponse des acteurs de l’industrie des jeux vidéo peut paraître un peu cynique... Mais il semble que selon eux le choix appartenait aux consommateurs. Si les loot boxes étaient consommées par les joueurs, pourquoi les interdire ? Je peux comprendre cette position, mais les consommateurs avaient vraiment le choix compte tenu des pratiques cherchant à les inciter à obtenir des loot boxes ? # retroaction
-> quiz_2_4_fin
+   (2_4_1_c) [{2_4_1_c: VISITE--}Les acteurs du milieu vidéoludiques devraient se concerter pour adopter des règles communes.] Les acteurs du milieu vidéoludiques devraient se concerter pour adopter des règles communes.
+   (2_4_1_d) [{2_4_1_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_4_question_1

=quiz_2_4_fin
~ terminer_quiz()

-> scene_5

= scene_5
~afficher_fond(centre_rehabilitation_couloir)
~jouer_musique(theme_general)
Voyant que son interlocuteur s’est endormi, <b>Fred</b> quitte la chambre. Elle cherche à revoir le <b>médecin</b>, mais il est trop occupé pour la recevoir. Elle croise un intervenant en uniforme et l’apostrophe.
~afficher_personnage(INTERVENANT, "zoomIn") 
Fred: Bonjour, je m’excuse de vous déranger. # character=FRED_GALLANT invisible

Intervenant: Oui? # character=INTERVENANT expression=wonder

Fred: Je cherche des informations sur la dépendance au jeu. # character=FRED_GALLANT invisible

Intervenant: Quel genre d’information? # character=INTERVENANT expression=concern

Fred: Désolée, agent Gallant, brigade anti-jeux vidéo. Je voudrais comprendre comment on devient dépendant à un jeu… # character=FRED_GALLANT invisible

Intervenant: C’est difficile à comprendre quand on n’a pas le profil. # character=INTERVENANT expression=neutral

Fred: Je crois que je ne saisis pas comment on peut en arriver à détruire sa vie pour jouer. # character=FRED_GALLANT invisible

Intervenant: Ça arrivait souvent lorsqu’ils étaient jeunes, les joueurs. Ils n’ont pas encore de responsabilité, puis ça dégénère. # character=INTERVENANT expression=neutral

Fred: Je comprends.# character=FRED_GALLANT invisible

Intervenant: Vous êtes certaine? Vous n’en avez pas l’air? # character=INTERVENANT expression=concern

Fred: J’avoue, je ne suis pas certaine. Je voudrais savoir quels éléments rendent dépendants. Y a-t-il des éléments qui sont plus dangereux que d’autres? # character=FRED_GALLANT invisible

Intervenant: Certainement! Écoutez, de nombreuses recherches ont été effectuées avant la <i>Loi Game Over</i>. Voici une copie d’un document d’époque. # character=INTERVENANT expression=neutral
~ajouter_document(GAME_PATENTS)
Fred : Et les gouvernements n’ont rien tenté à l’époque pour endiguer ces phénomènes de dépendance ? # character=FRED_GALLANT invisible

Intervenant: À ma connaissance, les gouvernements sont restés trop longtemps les bras croisés et la seule solution viable était l’interdiction pure et simple. # character=INTERVENANT expression=neutral
~cacher_tout_personnages()
-> quiz_2_5

= quiz_2_5
~ demarrer_quiz(QUIZ_2_5, 4)
~afficher_document(GAME_PATENTS)
~jouer_musique(theme_quiz)
// Description du document 3 : On dirait bien que les acteurs de l’industrie des jeux vidéo cherchaient des méthodes pour maximiser les revenus tirés de leur production (voir en particulier aux pages 134-135 et 138 à 140). Et si ces méthodes de ventes avaient un impact sur la dépendance aux jeux vidéo? 
-> quiz_2_5_question_1

= quiz_2_5_question_1
1- Cet article sur lequel j’ai mis la main est une mine d’or… quelle était la méthode de vente la plus utilisée par les exploitants de jeux vidéo ? # question index=1
+   (2_5_1_a) [{2_5_1_a: VISITE--}Divulgation limitée des produits.] Divulgation limitée des produits.
+   (2_5_1_b) [{2_5_1_b: VISITE--}La manipulation des prix des éléments en vente.] La manipulation des prix des éléments en vente. 
+   (2_5_1_c) [BON--{2_5_1_c: VISITE--}L'exploitation des données des joueurs.] L'exploitation des données des joueurs.
Plusieurs techniques étaient employées, mais selon l’article obtenu (voir les pages 134 et 135), la plus utilisée était celle de l’exploitation des données des joueurs.Il semble donc que les joueurs étaient observés de près durant leurs sessions de jeu. # retroaction
-> quiz_2_5_question_2
+   (2_5_1_d) [{2_5_1_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_5_question_1

= quiz_2_5_question_2
2 – Maintenant que je connais la méthode la plus utilisée, je me demande quel était l’objectif principal des méthodes employées par les exploitants de jeux vidéo ? # question index=2
+   (2_5_2_a) [BON--{2_5_2_a: VISITE--}Stimuler des achats répétés de la part des joueurs.] Stimuler des achats répétés de la part des joueurs.
Les brevets analysés dans l’article visaient à stimuler des achats répétés de la part des joueurs (voir les pages 138 et 139). Il s’agissait de faire en sorte de leur proposer les offres les plus adaptées à leur profil et à leur expérience de jeu. # retroaction
-> quiz_2_5_question_3
+   (2_5_2_b) [{2_5_2_b: VISITE--}Offrir la meilleure expérience de jeu possible aux joueurs. ] Offrir la meilleure expérience de jeu possible aux joueurs. 
+   (2_5_2_c) [{2_5_2_c: VISITE--}Responsabiliser les joueurs.] Responsabiliser les joueurs.
+   (2_5_2_d) [{2_5_2_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_5_question_2

= quiz_2_5_question_3
3 - Mais alors, qu’est-ce qui différencie les mécanismes employés dans les jeux vidéo des mécanismes employés dans les jeux de hasard ? # question index=3
+   (2_5_3_a) [BON--{2_5_3_a: VISITE--}La possibilité de modifier l’expérience de jeu en fonction du comportement du joueur ou d’une population de joueurs.] La possibilité de modifier l’expérience de jeu en fonction du comportement du joueur ou d’une population de joueurs. 
Selon l’article que j’ai réussi à obtenir (voir la page 138), ce qui distingue les mécanismes identifiés dans les brevets et les mécanismes de jeux de hasard étaient : “the ability to modify the play experience based on individual player and/or population behavioral data”. Quels pouvaient être les effets de ces techniques ? # retroaction
-> quiz_2_5_question_4
+   (2_5_3_b) [{2_5_3_b: VISITE--}Ils sont plus amusants.] Ils sont plus amusants.
+   (2_5_3_c) [{2_5_3_c: VISITE--}Ils sont appréciés des joueurs.] Ils sont appréciés des joueurs. 
+   (2_5_3_d) [{2_5_3_d: VISITE--}Aucune de ces propositions.] Aucune de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_5_question_3

= quiz_2_5_question_4
4 – Je comprends mieux ces méthodes maintenant… Mais quels pouvaient être les effets de ces techniques sur les joueurs ? Les techniques employées étaient-elles de nature à entraîner une forme de dépendance ? # question index=4
*  (2_5_4_a) [BON--{2_5_4_a: VISITE--}Oui] Oui
 Selon l’article sur lequel j’ai mis la main, les systèmes identifiés peuvent entraîner une dépendance chez certains joueurs (voir la page 140). Fait intéressant pointé par les auteurs de l’article, l’OMS ne considérait pas les aspects financiers liés à la pratique des jeux vidéo comme un facteur permettant de diagnostiquer un trouble du jeu vidéo. # retroaction 
-> quiz_2_5_fin
*   (2_5_4_b) [{2_5_4_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_5_question_4

=quiz_2_5_fin
~terminer_quiz()
-> scene_6

=scene_6
~afficher_fond(bureau_chef_miller)
 ~jouer_musique(theme_general)
~afficher_personnage(CHEF_MILLER, "slideInUp")

Chef Miller: Gallant, êtes-vous au courant? Le petit Leigh Kane est de retour! # character=CHEF_MILLER expression=joy

Fred: Ah bon? # character=FRED_GALLANT invisible

Chef Miller: Non seulement il est de retour, mais il est revenu par lui-même! C’était bien une fugue. # character=CHEF_MILLER expression=joy

Fred: Content d’apprendre qu’il est de retour. # character=FRED_GALLANT invisible

Chef Miller: Je suis terriblement déçu. # character=CHEF_MILLER expression=aversion

Fred: Déçu chef? # character=FRED_GALLANT invisible

Chef Miller: Vous jouez les innocentes, mais je vous ai coincée, c’est inutile. # character=CHEF_MILLER expression=cruel

Fred: Coincée? # character=FRED_GALLANT invisible

Chef Miller: Je m’attendais à plus de transparence de votre part, Gallant. Mais le pire, c’est que vous désobéissez à mes ordres. Je pourrais vous suspendre. Sur-le-champ! # character=CHEF_MILLER expression=anger
~jouer_musique(theme_choix_cruciaux)
*<b>Fred</b> reste stoïque et ne dit rien au chef Miller.
 ~ points_fin_A2 += 4
 ~jouer_musique(theme_general)

Fred: Je ne comprends pas! # character=FRED_GALLANT invisible

Chef Miller: Ah vous voulez jouer à ça! # character=CHEF_MILLER expression=disdain

Chef Miller: Dans ce cas, Gallant, je vous retire l’enquête du 530 McLeod. Moore va s’en charger. Je veux un rapport demain matin sur mon bureau faisant état de vos progrès dans le dossier d’infiltration de la résistance. Et je vous conseille de ne rien oublier. # character=CHEF_MILLER expression=disdain

*<b>Fred</b> fait l’innocente, mais tente de se justifier en expliquant au chef Miller que ça faisait partie de son plan d’infiltration.
 ~ points_fin_A2 += 2
 ~jouer_musique(theme_general)
Fred: Je ne comprends pas pourquoi vous vous mettez dans tous ces états. J’ai simplement manqué de temps pour vous mettre au courant des développements! # character=FRED_GALLANT invisible

Chef Miller: Des développements? Déballez! Ça presse! # character=CHEF_MILLER expression=anxiety

Fred: Eh bien si j’ai appelé la mère du petit Kane, c’est pour avoir des renseignements sur Teacher! Je dois m’en rapprocher, je pense qu’il contrôle une bonne partie des activités de la résistance. Et on me dénie l’accès pour le moment. C’est trop lent. Des vies sont en jeu! # character=FRED_GALLANT invisible

Chef Miller: Des vies sont en jeu? # character=CHEF_MILLER expression=anxiety

Fred: Bien sûr! Je suis allé faire un tour au centre de réhabilitation d’Ottawa aujourd’hui, ce que j’y ai vu m’a fait peur. Il faut agir vite et stopper la prolifération des jeux illégaux avant qu’il n’y ait de vraies victimes. # character=FRED_GALLANT invisible

Chef Miller: Je vous arrête tout de suite, Gallant. Je ne vous laisserai pas attraper la folie des grandeurs! Vous ne stopperez pas le marché noir à vous toute seule! # character=CHEF_MILLER expression=anger

Fred: Je sais. Mais on peut limiter les dégâts. J’ai fait ça pour me rapprocher de Teacher. # character=FRED_GALLANT invisible

Chef Miller: Des résultats? # character=CHEF_MILLER expression=concern

Fred: J’ai un contact. Je travaille là-dessus. Il est en prison. # character=FRED_GALLANT invisible

Chef Miller: Bon, alors, il ne se sauvera pas. Mais attention, Gallant! Vous voulez coincer les salauds qui vendent des jeux, d’accord. Moi aussi. Mais si vous ne respectez pas les règles, vous devrez répondre de vos actes. Ce n’est qu’un avertissement officieux, mais entendez-le. # character=CHEF_MILLER expression=concern

Fred: Merci chef. J’ai compris. # character=FRED_GALLANT invisible

Chef Miller: Je vous retire tout de même l’enquête du 530 McLeod. Moore va s’en charger. Et je veux un rapport demain matin sur mon bureau faisant état de vos progrès dans le dossier d’infiltration de la résistance. Je vous conseille de ne rien oublier. # character=CHEF_MILLER expression=disdain

*<b>Fred</b> fait un rapport circonstancié au <b>chef Miller</b>.
 ~ points_fin_A1 += 4
  ~jouer_musique(theme_general)
 Fred: Chef! Je suis désolée! J’ai cru bien faire! Je voulais simplement obtenir des informations sur Teacher, je crois qu’il est important dans la résistance. Il vend des jeux à n’importe qui, des enfants. J’ai cru que c’était la chose à faire. Ça n’avance pas assez vite avec la résistance. Pour tout vous dire, j’ai même des cas de conscience. # character=FRED_GALLANT invisible

Chef Miller: Encore cette histoire d’informations cachées par le gouvernement? # character=CHEF_MILLER expression=disdain

Fred: Mais chef, il existait bel et bien des lois, j’ai rencontré des employés qui les appliquaient! # character=FRED_GALLANT invisible

Chef Miller: C’est à ça que vous occupez votre temps? En plus de travailler sur des enquêtes qu’on vous a retirées? # character=CHEF_MILLER expression=disdain

Fred: Je… j’ai parlé à une personne qui a contribué à fonder la résistance aujourd’hui. Un homme qui pourrait témoigner de la gravité de la situation. Il est au centre de réhabilitation d’Ottawa. # character=FRED_GALLANT invisible

Chef Miller: Bien. Mais ça n’efface pas vos bourdes. Je vous retire l’enquête du 530 McLeod. Moore va s’en charger. Et je veux un rapport demain matin sur mon bureau faisant état de vos progrès dans le dossier d’infiltration de la résistance. Je vous conseille de ne rien oublier. Et tâchez de dormir un peu, bon sang! # character=CHEF_MILLER expression=disdain

- ~cacher_tout_personnages() 
~cacher_fond()
~jouer_musique(theme_narrateur)

Narrateur: Qu’est-ce que l’agent Gallant va écrire dans son rapport? Est-ce que toute vérité est bonne à dire? Commencez-vous à comprendre les enjeux de cette mission? Est-ce qu’un loisir aussi controversé est un droit? Est-ce que l’état doit intervenir au nom de la santé publique? Les jeux vidéo sont-ils une menace? Vous avez la nuit pour y penser avant de découvrir de nouvelles informations qui pourraient bien être déterminantes. Prenez bien note de ce que vous découvrirez, vous aurez besoin de tous les éléments pour prendre votre décision finale, car un jour, il sera trop tard pour revenir en arrière. # character=NARRATEUR center

<b>Fred</b> se réveille de sa torpeur.
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
Le téléphone de <b>Fred</b> sonne.
~jouer_effet_sonore(sonnerie_telephone)

Fred: Allô? # character=FRED_GALLANT invisible
~afficher_personnage(CHRISTOPHER_YOUNG, "fadeIn") 
Christopher: Hey! Où es-tu? J’essaie de te joindre depuis des heures. # character=CHRISTOPHER_YOUNG expression=surprise phone

Fred: Je suis un peu occupée là tout de suite. Qu’y a-t-il? # character=FRED_GALLANT invisible

Christopher: Rien, je voulais seulement prendre de tes nouvelles. On t’a pas vu depuis un bout. # character=CHRISTOPHER_YOUNG expression=neutral phone

Fred: Non, je suis vraiment très prise. # character=FRED_GALLANT invisible

Christopher: As-tu joué à Skyrim au moins? # character=CHRISTOPHER_YOUNG expression=neutral phone

Fred: Oui, oui, un peu, mais j’avoue que je… j’ai un gros travail  à remettre et… # character=FRED_GALLANT invisible

Christopher: T’inquiètes, je te taquine. Je ne force personne. # character=CHRISTOPHER_YOUNG expression=amusement phone

Fred: Alors à plus, je te fais signe bientôt. Dès que je suis débarrassée de ce rap…travail. # character=FRED_GALLANT invisible

Christopher: Ouais. Écoute, on a mis la main sur des documents que le gouvernement gardait bien cachés… Ça donne une perspective différente du discours officiel. Peux-tu y jeter un coup d'œil et en faire l’analyse ? C’est sensible, alors reste discrète. # character=CHRISTOPHER_YOUNG expression=concern phone

Fred: Bien sûr, envoie-les-moi. # character=FRED_GALLANT invisible

~ajouter_document(REGLEMENTATION_LOOT_BOXES)
~ajouter_document(POLICY_RESPONSES)
~cacher_tout_personnages()
-> quiz_2_6

=quiz_2_6
~ demarrer_quiz(QUIZ_2_6, 2)
~afficher_document(REGLEMENTATION_LOOT_BOXES)
~jouer_musique(theme_quiz)

// Description document 5 :  On dirait un document qui montre comment les États ont réagi au phénomène des loot boxes. Je vais essayer d’analyser tout ça pour Christopher.
-> quiz_2_6_question_1

= quiz_2_6_question_1
1 – Certains États avaient-ils pris la décision d’interdire les loot boxes ? # question index=1 
*  (2_6_1_a) [BON--{2_6_1_a: VISITE--}Oui] Oui
Les documents nous permettent de constater que certains États avaient tenté d’agir. # retroaction
-> quiz_2_6_question_2
*   (2_6_1_b) [{2_6_1_b: VISITE--}Non] Non
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_6_question_1

= quiz_2_6_question_2
2 - Certains États avaient donc bien tenté de réglementer les loot boxes… Je me demande quel État de la liste suivante n’avait adopté aucune réglementation sur les loot boxes ? # question index=2
+   (2_6_2_a) [{2_6_2_a: VISITE--}Suisse] Suisse
+   (2_6_2_b) [{2_6_2_b: VISITE--}Belgique] Belgique
+   (2_6_2_c) [{2_6_2_c: VISITE--}Hollande] Hollande
+   (2_6_2_d) [BON--{2_6_2_d: VISITE--}Canada] Canada
Selon les archives de l’époque, plusieurs pays d’Europe avaient décidé d’agir. Par contre le Canada, lui, n’avait rien prévu. Serait-ce l'absence d’action qui a obligé plus tard le gouvernement à adopter la <i>Loi Game Over</i> ? # retroaction
-> quiz_2_6_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_6_question_2

= quiz_2_6_fin
~terminer_quiz()
-> scene_6_1

=scene_6_1
~afficher_fond(bureau_fred)
~jouer_musique(theme_general)
Fred, à elle-même: Je vais maintenant examiner l'autre document. # character=FRED_GALLANT invisible
-> quiz_2_7

=quiz_2_7
~ demarrer_quiz(QUIZ_2_7, 4)
~afficher_document(POLICY_RESPONSES)
~jouer_musique(theme_quiz)
// Description document 7 : Tiens, tiens… On dirait bien que les États et les acteurs du milieu des jeux vidéo ne sont pas restés les bras croisés en ce qui concerne le phénomène de dépendance aux jeux vidéo. Quelles sont les stratégies qu’ils ont développées ? Voir en particulier aux pp. 506 à 507 et 510 à 511.
-> quiz_2_7_question_1

= quiz_2_7_question_1
1 - Est-ce que les gouvernements sont restés inactifs dans le domaine de la lutte contre la dépendance aux jeux vidéo ? # question index=1
*  (2_7_1_a) [{2_7_1_a: VISITE--}Oui] Oui
*   (2_7_1_b) [BON--{2_7_1_b: VISITE--}Non] Non
Selon l’article que j’ai obtenu, tant les gouvernements que certains acteurs du milieu des jeux vidéo ont tenté d’agir pour limiter le phénomène de dépendance aux jeux vidéo (p. 507). # retroaction
-> quiz_2_7_question_2
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_7_question_1

= quiz_2_7_question_2
2- Est-ce que cette lutte contre la dépendance était globalisée? Dans quelle région du monde des mesures visant à prévenir ou traiter les troubles liés aux jeux vidéo ont-elles été principalement adoptées ? # question index=2
+   (2_7_2_a) [BON--{2_7_2_a: VISITE--}En Asie.] En Asie.
On dirait bien que, selon le tableau fourni à la page 507 de l’article, de nombreuses, sinon la plupart des initiatives ont été tentées en Asie. # retroaction
-> quiz_2_7_question_3
+   (2_7_2_b) [{2_7_2_b: VISITE--}En Europe.] En Europe. 
+   (2_7_2_c) [{2_7_2_c: VISITE--}En Océanie.] En Océanie. 
+   (2_7_2_d) [{2_7_2_d: VISITE--}En Amérique du Nord.] En Amérique du Nord.
+   (2_7_2_e) [{2_7_2_e: VISITE--}Aucune de ces propositions.] Aucun de ces propositions.
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_7_question_2

= quiz_2_7_question_3
3 - Quelle était donc la nature de ces initiatives ? Est-ce que les seules mesures envisageables étaient des mesures de traitement des joueurs qui souffraient de dépendance avérée aux jeux vidéo ? # question index=3
*  (2_7_3_a) [{2_7_3_a: VISITE--}Oui] Oui
*   (2_7_3_b) [BON--{2_7_3_b: VISITE--}Non] Non
Selon l’article sur lequel j’ai mis la main, trois types d’intervention ou de stratégies ont été tentées : (1) la limitation de l’accès aux jeux vidéo (par exemple, en limitant le temps de jeu par jour) (à la p. 506) ; (2) la réduction des risques et des dommages éventuels (par exemple, en prévoyant des messages d’avertissement) (à la p. 510) ; (3) et en fournissant des services aux joueurs (par exemple, des traitements dans des institutions spécialisées) (à la p. 511). Une panoplie d’actions, tant en amont qu’en aval, avait donc été envisagée. # retroaction
-> quiz_2_7_question_4
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_7_question_3

= quiz_2_7_question_4
4- Est-ce que les mesures envisagées ne concernaient que les mineurs ? # question index=4
*  (2_7_4_a) [{2_7_4_a: VISITE--}Oui] Oui
*   (2_7_4_b) [BON--{2_7_4_b: VISITE--}Non] Non
 Selon le tableau à la page 507, certaines mesures visaient spécifiquement les mineurs, mais d’autres visaient tous les joueurs, quel que soit leur âge. # retroaction
-> quiz_2_7_fin
- ~ generer_mauvaise_reponse_retroaction()
-> quiz_2_7_question_4

= quiz_2_7_fin
~terminer_quiz()
-> scene_7

= scene_7
~afficher_fond(news_room_chapitre_2)
~jouer_musique(theme_news)
Le petit Leigh Kane retrouvé. Les jeux vidéo n’étaient pas en cause!
~arreter_musique()
-> chapitre_3.scene_1