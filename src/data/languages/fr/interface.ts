export const interfaceTerms = {
  // Start screen
  start_game: 'Commencer le jeu',
  continue_game: 'Charger une partie',
  start_settings: 'Paramètres',

  // Game menu
  menu_minimize: 'minimiser',
  menu_maximize: 'maximiser',
  menu_save: 'sauvegarder',

  // Interface
  pda: 'Accéder au PDA',
  settings: 'Paramètres',
  game_log: 'Historique',
  saveSlots: 'Sauvegardes',
  loading: 'Chargement',
  preparing: 'Préparation',
  pdf_page: 'Page {{pageNumber}} de {{numPages}}',
  pdf_download: 'Télécharger le document PDF',
  pdf_download_mobile:
    'Télécharger le document PDF sur votre tablette ou appreil mobile, le document sera référencé tout au cours de ce questionnaire.',
  expander_expand: 'Ouvrir le contenu pour {{name}}',

  // PDA
  pda_menu: 'Menu',
  pda_home: 'Accueil',
  pda_documents: 'Notes',
  pda_contacts: 'Contacts',
  pda_evidence: 'Documents',
  pda_return: 'Retour au jeu',
  pda_none: '[VIDE]',
  pda_document_description: 'Notes de Fred',
  pda_document_feedback: 'Réponse de Fred',
  pda_document_question_no: 'question {{number}}',
  pda_prev_tab: 'Précédent',

  // PDA - Home tab
  pda_home_welcome: `
    <p>Bonjour <strong>Agent</strong>.</p>
    <p>Je suis l'assistant virtuel de votre <strong>appareil PDA</strong>.</p>
    <p>Je vous guiderai dans vos recherches alors que vous entreprendrez la collecte de preuves et le suivi de pistes.</p>
    <p>Veuillez prendre quelques instants pour vous familiariser avec mes fonctions : <strong>Notes</strong>, <strong>Contacts</strong> et <strong>Documents</strong>.</p>
  `,
  pda_home_first_visit: `
    <p>Bonjour <strong>Agent</strong>. Bienvenue dans la brigade.</p>
    <p>Je suis l'assistant virtuel de votre <strong>appareil PDA</strong>. J'ai pris l'initiative d'ouvrir automatiquement votre assistant virtuel afin de vous introduire à ses fonctionnalités.</p>
    <p>Je vous guiderai dans vos recherches alors que vous entreprendrez la collecte de preuves et le suivi de pistes.</p>
    <p>Veuillez prendre quelques instants pour vous familiariser avec mes fonctions en accédant au onglets : <strong>Notes</strong>, <strong>Contacts</strong> et <strong>Documents</strong>.</p>
`,

  // PDA - Quizzes
  pda_documents_first_visit: `
    <p>Cet onglet contiendra les <strong>notes</strong> prises sur les documents au cours de votre enquête. J'ajouterai automatiquement les notes que vous aurez prises après une séance de notes dans cette liste. Vous pouvez cliquer sur les éléments de cette liste pour accéder à un résumé de votre séance.</p>
    <p>Lors d'une séance de prise de notes, vous aurez la chance de répondre à des questions reliées aux documents obtenus durant votre enquête. Chaque question affichera une liste de réponses possibles et il vous sera demandé de répondre aux questions en utilisant ces choix. Si vous répondez à une question du premier coup, une <strong>étoile</strong> sera ajoutée au résumé de la séance.</p>
    <p>Veuillez prendre quelques instants pour vous familiariser avec mes autres fonctions en accédant au onglets : <strong>Contacts</strong> ou <strong>Documents</strong>.</p>
`,

  // PDA - Contacts
  pda_contacts_first_visit: `
    <p>Cet onglet contiendra les <strong>contacts</strong> que vous aurez rencontrés durant votre enquête. J'ajouterai automatiquement les contacts dans cette liste lorsque vous aurez rencontré une personne important à votre enquête.</p>
    <p>Chaque contact dans cette liste sera associé à vos <strong>contacts à la brigade</strong> ou à vos <strong>contacts de la résistance</strong>. Revisitez cet onglet si vous avez oublié un ou plusieurs contacts.</p>
    <p>Veuillez prendre quelques instants pour vous familiariser avec mes autres fonctions en accédant au onglets : <strong>Notes</strong> ou <strong>Documents</strong>.</p>
`,

  // PDA - Documents
  pda_evidence_first_visit: `
    <p>Cet onglet contiendra les <strong>documents</strong> obtenus au cours de votre enquête. J'ajouterai automatiquement à cette liste les documents obtenus à la suite d'une séance de prise des notes ou au fil de votre enquête. Vous pouvez cliquer sur un de ces documents pour le visualiser et le relire.</p>
    <p>Veuillez prendre quelques instants pour vous familiariser avec mes autres fonctions en accédant au onglets : <strong>Notes</strong> ou <strong>Contacts</strong>.</p>
`,

  // Settings
  settings_font_size: 'Taille de la police',
  settings_animation_speed: 'Vitesse des animations',
  settings_sound_effects: 'Volume des effets sonores',
  settings_music: 'Volume des musiques',

  // Save slots
  save_slot_name: 'sauvegarde {{number}}',
  empty_save_slot: '[VIDE]',
  save_slot_saving_instruction:
    'Cliquez sur un des emplacements de sauvegarde pour sauvegarder la partie.',
  save_slot_loading_instruction:
    'Cliquez sur un des emplacements de sauvegarde pour charger la partie sauvegardée, vous reprendrez votre partie au moment exact de cette sauvegarde.',
};
