import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/21 - Al/pain.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="pain" />;

export default CharacterImage;
        