EXTERNAL animate_character(character, animation)
=== function animate_character(character, animation) ===
    ~ return ""

LIST Characters = GABRIEL_SAND, CHEF_MILLER, CHEF_MILLER_NO_CIGAR, AGENT_LUCAS, AGENT_MOORE, ENQUETEUR_BEAULIEU, BRIGHTON, BONNIE_RANDLE_V1, BONNIE_RANDLE_V2, TEACHER_V1, LEIGH_KANE, CHRISTOPHER_YOUNG, NARRATEUR, HOMME, JOHN_RANDLE, VIVIAN, RONNY, TOM, RECEPTIONISTE, OLIVIA_PAUL, CARL_WHITE, MERE_DE_LEIGH_KANE, PERE_DE_LEIGH_KANE

VAR shown_characters = ()

=== function afficher_personnage(personnage, animation) ===
    ~ shown_characters += personnage
    ~ animate_character(personnage, animation)

=== function cacher_personnage(personnage, animation) ===
    ~ shown_characters -= personnage
    ~ animate_character(personnage, animation)

=== function cacher_tout_personnages() ===
    ~ shown_characters = ()
