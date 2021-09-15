import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      text: string;
      white: string;
      gray: string;
      lightGray: string;
      darkGray: string;
      black: string;
      darkGreen: string;
      yellow: string;
    }
  }
}
