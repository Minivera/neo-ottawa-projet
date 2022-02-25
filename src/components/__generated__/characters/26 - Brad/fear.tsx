import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/26 - Brad/fear.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="fear" />;

export default CharacterImage;
        