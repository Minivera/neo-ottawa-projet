import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/17 - Olivia Paul/laughter.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="laughter" />;

export default CharacterImage;
        