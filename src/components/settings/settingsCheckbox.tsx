/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FunctionComponent, InputHTMLAttributes } from 'react';

export interface SettingsCheckboxProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onChecked: (val: boolean) => void;
  checked: boolean;
  id: string;
}

export const SettingsCheckbox: FunctionComponent<SettingsCheckboxProps> = ({
  onChecked,
  checked,
  id,
  ...rest
}) => (
  <label
    htmlFor={id}
    css={theme => css`
      display: block;
      position: relative;
      cursor: pointer;
      font-size: 22px;
      height: 1.5rem;
      width: 1.5rem;
      user-select: none;

      &:hover input ~ span,
      &:focus input ~ span,
      &:active input ~ span {
        outline: ${theme.colors.secondary} 2px solid;
      }

      & input:checked ~ span {
        border-color: ${theme.colors.yellow};
        background-color: ${theme.colors.yellow};
      }

      &:after {
        content: '';
        position: absolute;
        display: none;
      }

      & input:checked ~ span:after {
        display: block;
      }
    `}
  >
    <input
      css={theme => css`
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:focus ~ span,
        &:active ~ span {
          outline: ${theme.colors.secondary} 2px solid;
        }
      `}
      id={id}
      type="checkbox"
      onChange={() => onChecked(!checked)}
      checked={checked}
      {...rest}
    />
    <span
      css={theme => css`
        position: absolute;
        top: 0;
        left: 0;
        height: 1.5rem;
        width: 1.5rem;
        background-color: transparent;
        border: solid 1px ${theme.colors.lightGray};

        &:after {
          display: none;
          content: ' ';
          position: relative;
          left: 7px;
          top: 1px;
          width: 0.45rem;
          height: 1.1rem;
          border: solid ${theme.colors.black};
          border-width: 0 3px 3px 0;
          transform: rotate(45deg);
        }
      `}
    />
  </label>
);
