LIST Evidence = DOSSIER_LEIGH_KANE, TELEPHONE_LEIGH_KANE

VAR known_evidence = ()
VAR last_added_evidence = false
VAR known_contacts = ()
VAR last_added_contact = false
VAR pda_activated = false

VAR history = "[]"

=== function activer_pda() ===
    ~ pda_activated = true

=== function desactiver_pda() ===
    ~ pda_activated = false
    
=== function ajouter_preuve(preuve) ===
    ~ last_added_evidence = preuve
    ~ known_evidence += preuve
    
=== function ajouter_contact(personnage) ===
    ~ last_added_contact = personnage
    ~ known_contacts += personnage