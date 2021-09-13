import styled from '@emotion/styled';
import { transparentize } from 'polished';

export const DialogBox = styled.div`
  grid-row-start: 2;
  grid-column: 1;
  padding: 2rem;
  background-color: ${transparentize(0.5, 'black')};
  color: white;
  border-color: #b71666;
  border-width: 0.4rem;
  border-top-style: solid;
  border-bottom-style: solid;
  z-index: 2;
  
  & h1 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
  }
`;
