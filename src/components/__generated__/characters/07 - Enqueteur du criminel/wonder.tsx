import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/07 - Enqueteur du criminel/wonder.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="wonder" />;

export default CharacterImage;
        