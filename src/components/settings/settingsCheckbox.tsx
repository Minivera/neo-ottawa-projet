import React, { FunctionComponent, InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { theme } from 'styled-tools';

const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  height: 1.5rem;
  width: 1.5rem;
  user-select: none;

  &:hover input ~ span {
    background-color: ${theme('colors.gray')};
  }
  
  & input:checked ~ span {
    border-color: ${theme('colors.yellow')};
    background-color: ${theme('colors.yellow')};
  }
  
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  &  input:checked ~ span:after {
    display: block;
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const CheckboxCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 1.5rem;
  width: 1.5rem;
  background-color: transparent;
  border: solid 1px ${theme('colors.lightGray')};

  &:after {
    display: none;
    content: " ";
    position: relative;
    left: 7px;
    top: 1px;
    width: 0.45rem;
    height: 1.1rem;
    border: solid ${theme('colors.black')};
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export interface SettingsCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  onChecked: (val: boolean) => void;
  checked: boolean;
}

export const SettingsCheckbox: FunctionComponent<SettingsCheckboxProps> = ({ onChecked, checked, ...rest }) => (
  <CheckboxContainer>
    <CheckboxInput type="checkbox" onChange={() => onChecked(!checked)} checked={checked} {...rest} />
    <CheckboxCheckmark />
  </CheckboxContainer>
);
