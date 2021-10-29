VAR quiz_started = false

=== function demarrer_quiz() ===
    ~ quiz_started = true

=== function terminer_quiz() === 
    ~ quiz_started = false
    ~ current_document = none
    
=== function generer_mauvaise_reponse_retroaction() ===
    {~Ça me semble être la mauvaise réponse, je devrais revérifier le document|Non, ce n'est définitivement pas ça, je devrais revérifier le document|Hum, je ne suis pas certaine de cette réponse, je devrais revérifier le document}