import React, { useEffect, useRef, useState, useCallback } from 'react';

import { PageCtn } from './index.style';

interface PageLayoutProps {
  children: React.ReactChild[];
  handleBottom?: () => {} | undefined;
  list?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, handleBottom, list }): React.ReactElement => {
  const pageReference = useRef() as React.MutableRefObject<HTMLDivElement>;

  const detectBottomPage = useCallback(() => {
    if (Math.floor(pageReference.current.getBoundingClientRect().bottom) - window.innerHeight <= 1) {
      handleBottom();
    }
  }, []);


  useEffect(() => {
    if (list) {
      document.addEventListener("scroll", detectBottomPage, false);
      return () => {
        document.removeEventListener("scroll", detectBottomPage);
      }
    }
  }, []);

  return (
    <PageCtn ref={pageReference}>
      {children}
    </PageCtn>
  );
};

export default PageLayout;
