import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/11 - Christopher Young/alertness.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="alertness" />;

export default CharacterImage;
        