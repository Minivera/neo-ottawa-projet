import React, { FunctionComponent } from 'react';
import Slider, { SliderProps } from 'rc-slider';
import styled from '@emotion/styled';
import { ifProp, theme } from 'styled-tools';

import NextIcon from '../../assets/ui/icons/FlecheNEXT.svg?component';

const SliderContainer = styled.div<{ disabled?: boolean }>`
  ${ifProp('disabled', 'opacity: 0.3;', '')}

  display: flex;
  align-items: center;
`;

const SliderDec = styled(NextIcon)<{ disabled?: boolean }>`
  ${ifProp('disabled', '', 'cursor: pointer;')}

  fill: ${theme('colors.secondary')};
  height: 1rem;
  transform: rotate(180deg);
  margin-right: 0.5rem;
`;

const SliderInc = styled(NextIcon)<{ disabled?: boolean }>`
  ${ifProp('disabled', '', 'cursor: pointer;')}

  fill: ${theme('colors.secondary')};
  height: 1rem;
  margin-left: 0.5rem;
`;

const StyledSlider = styled(Slider)`
  background: none;

  & .rc-slider-rail {
    border: none;
    border-radius: 0;
    height: 2px;
    background-color: ${theme('colors.text')};
  }

  & .rc-slider-track {
    border: none;
    border-radius: 0;
    height: 2px;
    background-color: ${theme('colors.text')};
  }

  & .rc-slider-handle {
    margin-top: -6px;
    height: 15px;
    width: 6px;
    background-color: ${theme('colors.yellow')};
    border: none;
    border-radius: 0;
  }
`;

export interface SettingsSliderProps extends SliderProps {
  onChange: (newVal: number) => void;
}

export const SettingsSlider: FunctionComponent<SettingsSliderProps> = ({
  onChange,
  disabled,
  min = 0,
  max = 0,
  step = 1,
  value = 0,
  ...rest
}) => {
  const handleDecrement = () => {
    if (disabled) {
      return;
    }

    onChange(Math.max(min, value - (step || 1)));
  };

  const handleIncrement = () => {
    if (disabled) {
      return;
    }

    onChange(Math.min(max, value + (step || 1)));
  };

  return (
    <SliderContainer disabled={disabled}>
      <SliderDec onClick={handleDecrement} disabled={disabled} />
      <StyledSlider
        disabled={disabled}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        value={value}
        {...rest}
      />
      <SliderInc onClick={handleIncrement} disabled={disabled} />
    </SliderContainer>
  );
};
