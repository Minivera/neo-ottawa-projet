import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/14 - Tom/joy.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="joy" />;

export default CharacterImage;
        