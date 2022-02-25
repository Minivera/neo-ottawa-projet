import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../../assets/__generated__/characters/18 - Carl White/with cigarette/concern.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="concern" />;

export default CharacterImage;
        