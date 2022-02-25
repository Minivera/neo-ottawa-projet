import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/25 - Trevor/joy.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="joy" />;

export default CharacterImage;
        