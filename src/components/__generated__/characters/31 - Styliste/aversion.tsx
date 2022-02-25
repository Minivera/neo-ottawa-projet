import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/31 - Styliste/aversion.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="aversion" />;

export default CharacterImage;
        