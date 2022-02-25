import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/04 - Agent Lucas/terror.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="terror" />;

export default CharacterImage;
        