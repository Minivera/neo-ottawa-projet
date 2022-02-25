import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/11 - Christopher Young/fear.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="fear" />;

export default CharacterImage;
        