import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/33 - Boris/outrage.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="outrage" />;

export default CharacterImage;
        