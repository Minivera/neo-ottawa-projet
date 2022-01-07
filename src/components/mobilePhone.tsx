/* @jsx jsx */
import { jsx, css, Theme } from '@emotion/react';
import { FunctionComponent } from 'react';
import { Interpolation } from '@emotion/serialize';

export const MobilePhone: FunctionComponent<{
  css?: Interpolation<Theme>;
}> = ({ children, ...rest }) => (
  <div
    css={theme => css`
      z-index: 1;
      width: 17rem;
      height: 37rem;
      padding: 0 0.5rem;
      border: 2px solid ${theme.colors.black};
      border-radius: 15px;
      display: flex;
      flex-direction: column;
      background-color: ${theme.colors.white};
      box-shadow: 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
      transition: all 0.3s;
    `}
    {...rest}
  >
    <div
      css={theme => css`
        height: 0.25rem;
        width: 4rem;
        margin: 1rem auto;
        border-radius: 999rem;
        background-color: ${theme.colors.darkGray};
      `}
    />
    <div
      css={theme => css`
        flex: 1;
        background-color: ${theme.colors.darkGray};
        overflow: hidden;
        padding: 3rem 1rem 0 1rem;
      `}
    >
      {children}
    </div>
    <div
      css={theme => css`
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid ${theme.colors.darkGray};
        border-radius: 50%;
        margin: 1rem auto;
      `}
    />
  </div>
);
