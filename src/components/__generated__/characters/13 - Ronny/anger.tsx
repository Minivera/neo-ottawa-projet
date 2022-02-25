import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/13 - Ronny/anger.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="anger" />;

export default CharacterImage;
        