import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/33 - Boris/sterness.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="sterness" />;

export default CharacterImage;
        