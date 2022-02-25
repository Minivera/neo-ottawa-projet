import React, { ImgHTMLAttributes } from 'react';

import image from '../../../../assets/__generated__/characters/38 - Premier Ministre/revulsion.png';

export const CharacterImage: React.FunctionComponent<
  ImgHTMLAttributes<HTMLImageElement>
> = props => <img {...props} src={image} alt="revulsion" />;

export default CharacterImage;
        