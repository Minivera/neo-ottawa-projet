EXTERNAL show_pda()
=== function show_pda() ===
    ~ return ""
    
EXTERNAL fin_jeu()
=== function fin_jeu() ===
    ~ return ""

VAR known_contacts = ()
VAR last_added_contact = false
VAR pda_activated = false

VAR history = "[]"

=== function activer_pda() ===
    ~ pda_activated = true
    ~ show_pda()

=== function desactiver_pda() ===
    ~ pda_activated = false
    
=== function ajouter_contact(personnage) ===
    ~ last_added_contact = personnage
    ~ known_contacts += personnage
    
=== function retirer_contact(personnage) ===
    ~ known_contacts -= personnage