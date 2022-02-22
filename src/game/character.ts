import React from 'react';

export type CharacterThemes = 'player' | 'police' | 'resistance' | 'other' | 'narrateur';

export type CharacterState = 'phone';

export interface Character {
  id: string;
  name: string;
  images: Record<string, React.FunctionComponent>;
  theme?: CharacterThemes;
}
