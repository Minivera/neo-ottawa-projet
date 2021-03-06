/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FunctionComponent } from 'react';

import { IconButton } from './iconButton';

import NextIcon from '../assets/ui/icons/FlecheNEXT.svg?component';

export const NextButton: FunctionComponent = () => (
  <IconButton>
    Continuer
    <NextIcon />
  </IconButton>
);
