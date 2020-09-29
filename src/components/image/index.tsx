import React from 'react';

import {
  StyledImage,
} from "./index.style";

interface ImageProps {
  src: string,
  alt: string,
  height?: string,
  width?: string,
}


const Image: React.FC<ImageProps> = ({ src, alt, height, width }): React.ReactElement => {
  return (
    <StyledImage src={src} alt={alt} height={height} width={width}></StyledImage>
  );
};

export default Image;