import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import { useTheme } from '@emotion/react';

import { HexagonButton } from './hexagonButton';

export const MultipleChoices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const MultipleChoiceElement: FunctionComponent<HTMLAttributes<HTMLButtonElement>> = props => {
  const theme = useTheme();

  return (
    <HexagonButton
      color={theme.colors.text}
      backgroundColor="transparent"
      borderColor={theme.colors.secondary}
      hoverColor={lighten(0.4, theme.colors.text)}
      hoverBackgroundColor={theme.colors.secondary}
      {...props}
    />
  );
};
