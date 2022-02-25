import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/14 - Tom/eeww.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="eeww" />;

export default CharacterImage;
        