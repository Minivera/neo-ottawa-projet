/** @jsx jsx */
import { FunctionComponent, useState } from 'react';
import { jsx, css, Theme } from '@emotion/react';
import { Interpolation } from '@emotion/serialize';
import { transparentize } from 'polished';

import ExpandIcon from '../assets/ui/pda/FlecheNEXT.svg?component';

export interface ExpanderProps {
  title: string;
  css?: Interpolation<Theme>
}

export const Expander: FunctionComponent<ExpanderProps> = ({
  title,
  children,
  ...rest
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div
      {...rest}
      css={css`
        overflow: visible;
      `}
    >
      <div
        css={theme => css`
          padding: 1.2rem;
          border: solid 0.4rem ${theme.colors.purple};
          background-color: ${transparentize(0.2, theme.colors.darkGray)};
        `}
      >
        <div
          onClick={() => setExpanded(!expanded)}
          css={css`
            font-size: 1.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            ${expanded ? 'padding-bottom: 1.2rem;' : ''}
          `}
        >
          <h3
            css={theme => css`
              margin: 0;
              text-transform: uppercase;
              color: ${theme.colors.yellow};
            `}
          >
            {title}
          </h3>
          <span
            css={theme => css`
              svg {
                fill: ${theme.colors.yellow};
                height: 1rem;
                transform: rotate(${expanded ? '-90deg' : '90deg'});
              }
            `}
          >
            <ExpandIcon />
          </span>
        </div>
        {expanded && (
          <div
            css={theme => css`
              border-top: 1px solid ${theme.colors.lightGray};
              padding-top: 1.2rem;
              font-size: 1.2rem;
              color: ${theme.colors.lightGray};
            `}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
