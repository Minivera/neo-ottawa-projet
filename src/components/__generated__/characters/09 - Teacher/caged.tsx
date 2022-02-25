import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/09 - Teacher/caged.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="caged" />;

export default CharacterImage;
        