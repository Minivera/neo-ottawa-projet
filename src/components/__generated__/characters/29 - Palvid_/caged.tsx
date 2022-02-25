import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/29 - Palvid_/caged.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="caged" />;

export default CharacterImage;
        