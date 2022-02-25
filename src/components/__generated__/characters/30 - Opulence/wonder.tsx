import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/30 - Opulence/wonder.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="wonder" />;

export default CharacterImage;
        