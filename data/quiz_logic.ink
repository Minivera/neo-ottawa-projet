LIST QUIZES = QUIZ_1, QUIZ_2, QUIZ_3, QUIZ_4, QUIZ_5, QUIZ_6, QUIZ_2_1, QUIZ_2_2, QUIZ_2_3, QUIZ_2_4, QUIZ_2_5, QUIZ_2_6, QUIZ_2_7, QUIZ_3_1, QUIZ_3_2, QUIZ_3_3, QUIZ_4_1, QUIZ_4_2, QUIZ_5_1, QUIZ_5_2, QUIZ_6_1, QUIZ_6_2, QUIZ_6_3, QUIZ_7_1, QUIZ_7_2, QUIZ_7_3, QUIZ_7_4, QUIZ_7_5, QUIZ_7_6, QUIZ_7_7, QUIZ_7_8, QUIZ_8_1, QUIZ_8_2, QUIZ_8_3, QUIZ_8_4, QUIZ_9_1, QUIZ_9_2

VAR current_quiz = false
VAR quiz_question_count = 0
    VAR completed_quizzes = ()

VAR quiz_save_data = "\{\}"

=== function demarrer_quiz(name, count) ===
    ~ current_quiz = name
    ~ quiz_question_count = count

=== function terminer_quiz() === 
    ~ completed_quizzes += current_quiz
    ~ current_quiz = none
    ~ current_document = none
    
=== function generer_mauvaise_reponse_retroaction() ===
    {~Ça n’est pas la bonne réponse. Il faut continuer la recherche pour aider Fred.|Ne laissez pas tomber Fred comme ça. Poursuivez vos efforts!|Vous pouvez mieux faire. Les choix de Fred en dépendent!|Essayez encore, Fred a besoin de vous.|Non, ça n’est pas ça. Fred est encore égarée dans ses pensées.|Ça n’a pas l’air d’être le bon choix. Les réflexions de Fred sont encore confuses.|Encore un effort, vous allez réussir à démêler tout ça et aider Fred.|Les erreurs ne sont pas des échecs. Persévérez, comme Fred.|L’erreur est un détour, pas une rue sans issue. Aidez Fred à trouver son chemin.|On passe toujours de l’échec au succès. Au bon succès de Fred!|Les erreurs sont les portes de la découverte. Fred se rapproche de la vérité.|L’échec est le condiment qui donne au succès sa saveur. Les pensées de Fred sont goûteuses!|L’erreur est humaine. Ceci est un jeu, mais l’avenir de Fred en dépend.|L'erreur agite ; la vérité repose. Fred a besoin de calme.|L’échec fait tomber le perdant. L’échec inspire le gagnant. À quel camp Fred appartiendra-t-elle?|Ceux qui tombent le plus souvent sont souvent ceux qui se relèvent le plus rapidement. Fred est résiliente.|La première crêpe est toujours ratée. Le meilleur est à venir pour Fred.|Dans la vie, il n’y a pas d’échec que des leçons. Aidez Fred à faire ses devoirs.|Un échec n’est qu’une invitation à une nouvelle tentative plus sagement entreprise. Respirez. Fred compte sur vous.|De l’erreur naît le succès. Fred est sur la bonne voie!} # retroaction mauvaise_retroaction