/* eslint-disable no-alert */
import React from 'react';

import { HeaderCtn, HeaderContent } from './index.style';

interface HeroVideoProps {
  children: React.ReactChild[];
  backgroundImg: string;
  overlayColor?: string;
}

const HeroVideo: React.FC<HeroVideoProps> = ({ children, backgroundImg, overlayColor }): React.ReactElement => {
  return (
    <HeaderCtn backgroundImg={backgroundImg}>
      <HeaderContent overlayColor={overlayColor}>{children}</HeaderContent>
    </HeaderCtn>
  );
};

export default HeroVideo;
