import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/34 - John Randle/wtf.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="wtf" />;

export default CharacterImage;
        