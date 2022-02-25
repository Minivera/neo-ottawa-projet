import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/34 - John Randle/horror.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="horror" />;

export default CharacterImage;
        