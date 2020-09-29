import React, { useContext, useState } from 'react';
import { navigate } from '@reach/router';
import AppStateContext from '../../context/appStateContext';

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
  const {
    setAppPageDetails,
  } = useContext(AppStateContext);
  const [showNavDropdown, setNavDropdown] = useState(false);

  return (
    <React.Fragment>
      <NavCtn>
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
                text="Products"
                handleClick={(e): void => {
                  e.preventDefault();
                  navigate(`/#products`);
                }}
              />
              <NavTab
                text="Partners"
                handleClick={(e): void => {
                  e.preventDefault();
                  navigate(`/partners`);
                }}
              />
              <NavTab
                text="Contact Us"
                handleClick={(e): void => {
                  e.preventDefault();
                  navigate(`/contact-us`);
                }}
              />
              <NavTab
                text="Shop"
                handleClick={(e): void => {
                  e.preventDefault();
                  window.open('https://www.google.com', '_blank');
                }}
              />
            </TabsCtn>
          </MobileNavCtn>
        </ContentCtn>
      </NavCtn>
      <NavSpacer />
    </React.Fragment>
  );
};

export default Nav;
