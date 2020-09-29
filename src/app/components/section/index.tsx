/* eslint-disable no-alert */
import React from 'react';

import { ContentCtn, SectionCtn } from './index.style';

interface TextWithImageProps {
  children: React.ReactChild[];
  backgroundColor?: string,
  id?: string;
}

const Section: React.FC<TextWithImageProps> = ({ children, backgroundColor, id }): React.ReactElement => {
  return (
    <SectionCtn id={id} backgroundColor={backgroundColor}>
      <ContentCtn>
        {children}
      </ContentCtn>
    </SectionCtn>
  );
};

export default Section;
