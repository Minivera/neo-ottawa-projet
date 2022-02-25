import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/37 - Clear View/laughing.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="laughing" />;

export default CharacterImage;
        