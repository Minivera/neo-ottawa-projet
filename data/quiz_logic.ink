VAR quiz_started = false
VAR quiz_name = ""
VAR quiz_question_count = 0

=== function demarrer_quiz(name, count) ===
    ~ quiz_started = true
    ~ quiz_name = name
    ~ quiz_question_count = count

=== function terminer_quiz() === 
    ~ quiz_started = false
    ~ current_document = none
    
=== function generer_mauvaise_reponse_retroaction() ===
    {~Ça me semble être la mauvaise réponse, je devrais revérifier le document|Non, ce n'est définitivement pas ça, je devrais revérifier le document|Hum, je ne suis pas certaine de cette réponse, je devrais revérifier le document}