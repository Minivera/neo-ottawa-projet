import { Theme } from '@emotion/react';
import { lighten } from 'polished';

export const theme: Theme = {
  colors: {
    primary: '#e725d5',
    secondary: '#28bdc5',
    text: '#999899',
    white: '#fefffe',
    gray: '#394145',
    lightGray: lighten(0.3, '#394145'),
    darkGray: '#1a1b1b',
    black: '#1b1c1e',
    darkGreen: '#002626',
    yellow: '#cfd047',
  }
};

