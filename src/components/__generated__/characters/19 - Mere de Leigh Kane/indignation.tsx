import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/19 - Mere de Leigh Kane/indignation.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="indignation" />;

export default CharacterImage;
        