import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/06 - Leigh Kane/anger.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="anger" />;

export default CharacterImage;
        