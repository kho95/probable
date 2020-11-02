import React, { useState, useRef, useEffect } from 'react';
import { navigate } from '@reach/router';

import NavTab from '../../../components/navTab';

import { Menu } from '@styled-icons/heroicons-outline';

import {
  ContentCtn,
  ImageCtn,
  ImageLogo,
  MobileBtn,
  MobileNavCtn,
  NavCtn,
  NavSpacer,
  TabsCtn,
} from './index.style';

import logoImg from '../../../assets/images/probable-logo/logo.png';

const Nav: React.FC<any> = (): React.ReactElement => {
  const [showNavDropdown, setNavDropdown] = useState(false);

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target) && showNavDropdown) {
          setNavDropdown(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <NavCtn ref={wrapperRef}>
        <ContentCtn>
          <ImageCtn onClick={(e): void => {
            e.preventDefault();
            navigate(`/`);
          }}>
            <ImageLogo
              src={logoImg}
              alt="Probable logo" />
          </ImageCtn>
          <MobileBtn onClick={(e): void => {
            e.preventDefault();
            setNavDropdown(!showNavDropdown);
          }}>
            <Menu />
          </MobileBtn>
          <MobileNavCtn open={showNavDropdown}>
            <TabsCtn>
              <NavTab
                text="Otakiri"
                handleClick={(e): void => {
                  e.preventDefault();
                  navigate(`/otakiri`);
                  setNavDropdown(false);
                }}
              />
              <NavTab
                text="Contact Us"
                handleClick={(e): void => {
                  e.preventDefault();
                  navigate(`/#contact-us`);
                  setNavDropdown(false);
                }}
              />
              <NavTab
                text="Shop"
                handleClick={(e): void => {
                  e.preventDefault();
                  setNavDropdown(false);
                  window.open('https://m.smartstore.naver.com/probable', '_blank');
                }}
              />
            </TabsCtn>
          </MobileNavCtn>
        </ContentCtn>
      </NavCtn>
      <NavSpacer />
    </>
  );
};

export default Nav;
