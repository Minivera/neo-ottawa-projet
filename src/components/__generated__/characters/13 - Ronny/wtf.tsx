import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/13 - Ronny/wtf.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="wtf" />;

export default CharacterImage;
        