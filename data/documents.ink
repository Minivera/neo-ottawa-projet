LIST Documents = LOI_GAME_OVER, JEUX_INTERDITS_WIKIPEDIA, ABOUT_ESRB, LISTE_ANCIENS_EMPLOYES, POCHETTES_JEUX, GAME_STOP_RESPECT_RATINGS, LOI_2005_CLASSEMENT, ESRB_FLAWS, RATING_PROCESS, STEAMWORKS, GAMING_DISORDER, MODELES_ECONOMIQUES, LOOT_BOXES, DECLARATIONS_INDUSTRIES, GAME_PATENTS, REGLEMENTATION_LOOT_BOXES, POLICY_RESPONSES

VAR current_document = none
VAR known_documents = ()
VAR last_added_document = false
    
=== function afficher_document(document) ===
    ~ current_document = document
    ~ last_added_document = document
    ~ known_documents += document
    
=== function ajouter_document(document) ===
    ~ last_added_document = document
    ~ known_documents += document