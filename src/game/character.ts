import React from 'react';

export interface Character {
  id: string;
  name: string;
  images: Record<string, React.FunctionComponent>;
}
