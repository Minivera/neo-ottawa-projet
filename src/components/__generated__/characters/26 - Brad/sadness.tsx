import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/26 - Brad/sadness.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="sadness" />;

export default CharacterImage;
        