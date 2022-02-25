import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../../assets/__generated__/characters/18 - Carl White/with cigarette/aversion.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="aversion" />;

export default CharacterImage;
        