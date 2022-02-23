import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/25 - Trevor/neutral.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="neutral" />;

export default CharacterImage;
        