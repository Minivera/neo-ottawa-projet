import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/26 - Brad/anxiety.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="anxiety" />;

export default CharacterImage;
        