import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/17 - Olivia Paul/alertness.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="alertness" />;

export default CharacterImage;
        