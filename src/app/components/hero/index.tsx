/* eslint-disable no-alert */
import React from 'react';

import { HeroCtn, HeaderContent } from './index.style';

import BackgroundCarousel from '../background-carousel';

interface HeroProps {
  children: React.ReactChild[];
  overlayColor?: string;
}

const Hero: React.FC<HeroProps> = ({ children, overlayColor }): React.ReactElement => {
  return (
    <HeroCtn>
      <BackgroundCarousel></BackgroundCarousel>
      <HeaderContent overlayColor={overlayColor}>{children}</HeaderContent>
    </HeroCtn>
  );
};

export default Hero;
