import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../../assets/__generated__/characters/03 - Chef Miller/No cigar/fear.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="fear" />;

export default CharacterImage;
        