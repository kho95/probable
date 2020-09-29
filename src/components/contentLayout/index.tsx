import React from 'react';

import {
  StyleLayout,
} from "./index.style";

interface ContentLayoutProps {
  children: any;
  desktopWidth?: string,
  tabletWidth?: string,
  mobileLargeWidth?: string,
  mobileWidth?: string,
  column?: boolean,
  align?: string,
  justify?: string,
}


const ContentLayout: React.FC<ContentLayoutProps> = ({ children, desktopWidth, tabletWidth, mobileLargeWidth, mobileWidth, column, align, justify }): React.ReactElement => {
  return (
    <StyleLayout desktop={desktopWidth} tablet={tabletWidth} mobileLarge={mobileLargeWidth} mobile={mobileWidth} column={column} align={align} justify={justify}>
      {children}
    </StyleLayout>
  );
};

export default ContentLayout;