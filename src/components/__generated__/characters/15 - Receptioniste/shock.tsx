import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/15 - Receptioniste/shock.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="shock" />;

export default CharacterImage;
        