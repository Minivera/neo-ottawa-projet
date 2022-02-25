import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/33 - Boris/sadness.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="sadness" />;

export default CharacterImage;
        