/* eslint-disable no-alert */
import React from 'react';

import { TextWithImageCtn, TextCtn, Image, ImageCtn } from './index.style';

interface TextWithImageProps {
  children: React.ReactChild[];
  img: string;
  imgRight?: boolean;
  textColor?: string;
}

const TextWithImage: React.FC<TextWithImageProps> = ({ children, img, imgRight, textColor }): React.ReactElement => {
  return (
    <TextWithImageCtn imgRight={imgRight}>
      <ImageCtn imgRight={imgRight}>
        <Image src={img}></Image>
      </ImageCtn>
      <TextCtn imgRight={imgRight} textColor={textColor}>{children}</TextCtn>
    </TextWithImageCtn>
  );
};

export default TextWithImage;
