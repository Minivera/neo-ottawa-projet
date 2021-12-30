EXTERNAL animate_character(character, animation)
=== function animate_character(character, animation) ===
    ~ return ""

LIST Characters = GABRIEL_SAND, CHEF_MILLER, AGENT_LUCAS, AGENT_MOORE, ENQUETEUR, BRIGHTON, BONNIE_RANDLE, TEACHER, LEIGH_KANE, CHRISTOPHER_YOUNG

VAR shown_characters = ()


=== function afficher_personnage(personnage, animation) ===
    ~ shown_characters += personnage
    ~ animate_character(personnage, animation)
    
=== function cacher_personnage(personnage, animation) ===
    ~ shown_characters -= personnage
    ~ animate_character(personnage, animation)

=== function cacher_tout_personnages() === 
    ~ shown_characters = ()
