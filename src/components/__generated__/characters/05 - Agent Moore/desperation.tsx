import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/05 - Agent Moore/desperation.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="desperation" />;

export default CharacterImage;
        