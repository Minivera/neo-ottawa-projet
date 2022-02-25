import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/04 - Agent Lucas/eeww.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="eeww" />;

export default CharacterImage;
        