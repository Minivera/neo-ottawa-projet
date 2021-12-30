LIST Documents = JEUX_INTERDITS_WIKIPEDIA

VAR current_document = none
VAR known_documents = ()
VAR last_added_document = false
    
=== function afficher_document(document) ===
    ~ current_document = document
    ~ last_added_document = document
    ~ known_documents += document