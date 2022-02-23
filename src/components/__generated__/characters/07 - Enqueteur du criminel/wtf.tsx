import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/07 - Enqueteur du criminel/wtf.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="wtf" />;

export default CharacterImage;
        