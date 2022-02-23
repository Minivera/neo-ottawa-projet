import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/05 - Agent Moore/cruel.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="cruel" />;

export default CharacterImage;
        