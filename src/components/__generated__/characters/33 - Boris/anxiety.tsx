import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/33 - Boris/anxiety.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="anxiety" />;

export default CharacterImage;
        