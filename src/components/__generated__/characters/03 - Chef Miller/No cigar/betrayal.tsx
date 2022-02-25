import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../../assets/__generated__/characters/03 - Chef Miller/No cigar/betrayal.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="betrayal" />;

export default CharacterImage;
        