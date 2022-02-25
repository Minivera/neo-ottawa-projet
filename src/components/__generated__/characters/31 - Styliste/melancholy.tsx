import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/31 - Styliste/melancholy.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="melancholy" />;

export default CharacterImage;
        