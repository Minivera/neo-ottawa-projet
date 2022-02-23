import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/05 - Agent Moore/laughing.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="laughing" />;

export default CharacterImage;
        