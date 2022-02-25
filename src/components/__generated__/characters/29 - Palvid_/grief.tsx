import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/29 - Palvid_/grief.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="grief" />;

export default CharacterImage;
        