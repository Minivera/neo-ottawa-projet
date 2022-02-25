import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/05 - Agent Moore/indignation.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="indignation" />;

export default CharacterImage;
        