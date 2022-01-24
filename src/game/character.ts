import React from 'react';

export type CharacterThemes = 'police' | 'resistance' | 'other' | 'narrateur';

export interface Character {
  id: string;
  name: string;
  images: Record<string, React.FunctionComponent>;
  theme?: CharacterThemes;
}
