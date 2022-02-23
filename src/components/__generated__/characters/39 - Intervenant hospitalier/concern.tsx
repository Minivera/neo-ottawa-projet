import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/39 - Intervenant hospitalier/concern.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="concern" />;

export default CharacterImage;
        