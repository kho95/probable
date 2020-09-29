/* eslint-disable no-alert */
import React from 'react';

import { TextWithImageCtn, TextCtn, Image, ImageCtn } from './index.style';

interface TextWithImageProps {
  children: React.ReactChild[];
  img: string;
  imgRight?: boolean;
}

const TextWithImage: React.FC<TextWithImageProps> = ({ children, img, imgRight }): React.ReactElement => {
  return (
    <TextWithImageCtn imgRight={imgRight}>
      <ImageCtn imgRight={imgRight}>
        <Image src={img}></Image>
      </ImageCtn>
      <TextCtn imgRight={imgRight}>{children}</TextCtn>
    </TextWithImageCtn>
  );
};

export default TextWithImage;
