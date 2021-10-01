LIST Evidence = DOSSIER_LEIGH_KANE, TELEPHONE_LEIGH_KANE

VAR known_evidence = ()
VAR known_contacts = ()
VAR pda_activated = false

=== function activer_pda() ===
    ~ pda_activated = true

=== function desactiver_pda() ===
    ~ pda_activated = false
    
=== function ajouter_preuve(preuve) ===
    ~ known_evidence += preuve
    
=== function ajouter_contact(personnage) ===
    ~ known_contacts += personnage