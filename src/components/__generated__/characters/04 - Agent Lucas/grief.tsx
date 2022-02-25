import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/04 - Agent Lucas/grief.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="grief" />;

export default CharacterImage;
        