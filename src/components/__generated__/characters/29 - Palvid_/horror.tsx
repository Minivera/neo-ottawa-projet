import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/29 - Palvid_/horror.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="horror" />;

export default CharacterImage;
        