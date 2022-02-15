LIST QUIZES = QUIZ_1, QUIZ_2, QUIZ_3, QUIZ_4, QUIZ_5, QUIZ_6, QUIZ_2_1, QUIZ_2_2, QUIZ_2_3, QUIZ_2_4, QUIZ_2_5, QUIZ_2_6, QUIZ_2_7, QUIZ_3_1, QUIZ_3_2, QUIZ_3_3, QUIZ_4_1, QUIZ_4_2, QUIZ_5_1

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
    {~Ça me semble être la mauvaise réponse, je devrais revérifier le document|Non, ce n'est définitivement pas ça, je devrais revérifier le document|Hum, je ne suis pas certaine de cette réponse, je devrais revérifier le document} # retroaction mauvaise_retroaction