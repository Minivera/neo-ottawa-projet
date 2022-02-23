import React from 'react';

export type CharacterThemes = 'player' | 'police' | 'resistance' | 'other' | 'narrateur';

export type CharacterState = 'phone';

export interface Character {
  id: string;
  name: string;
  images: Record<string, React.FunctionComponent>;
  imagePaths: Record<string, string>;
  theme?: CharacterThemes;
}
