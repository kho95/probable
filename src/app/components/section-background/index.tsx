/* eslint-disable no-alert */
import React from 'react';

import { ContentCtn, SectionCtn } from './index.style';

interface TextWithImageProps {
  children: React.ReactChild[];
  backgroundSrc?: string,
}

const SectionBackground: React.FC<TextWithImageProps> = ({ children, backgroundSrc }): React.ReactElement => {
  return (
    <SectionCtn backgroundSrc={backgroundSrc}>
      <ContentCtn>
        {children}
      </ContentCtn>
    </SectionCtn>
  );
};

export default SectionBackground;
