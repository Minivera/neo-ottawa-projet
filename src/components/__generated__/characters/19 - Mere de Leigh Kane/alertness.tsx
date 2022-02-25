import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/19 - Mere de Leigh Kane/alertness.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="alertness" />;

export default CharacterImage;
        