/* eslint-disable no-alert */
import React from 'react';

import { AngleSvg, HeaderCtn, HeaderContent } from './index.style';

interface PageHeaderProps {
  children: React.ReactChild[];
  backgroundImg: string;
}

const PageHeaderHome: React.FC<PageHeaderProps> = ({ children, backgroundImg }): React.ReactElement => {
  return (
    <HeaderCtn backgroundImg={backgroundImg}>
      <HeaderContent>{children}</HeaderContent>
      <AngleSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="#f9fbfc" points="0,0 0,100 100,100" />
      </AngleSvg>
    </HeaderCtn>
  );
};

export default PageHeaderHome;
