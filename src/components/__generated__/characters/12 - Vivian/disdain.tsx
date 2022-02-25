import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/12 - Vivian/disdain.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="disdain" />;

export default CharacterImage;
        