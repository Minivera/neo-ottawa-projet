import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/04 - Agent Lucas/concern.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="concern" />;

export default CharacterImage;
        