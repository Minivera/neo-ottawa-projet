import React, { ImgHTMLAttributes } from 'react';

import image from '/src/assets/__generated__/characters/03 - Chef Miller/No cigar/anger.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="anger" />;

export default CharacterImage;
        