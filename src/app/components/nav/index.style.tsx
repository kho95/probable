import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const ContentCtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: ${THEME.layout.contentWidth};
  padding: 0 ${THEME.layout.gutter.desktop};

  ${Media.Below.tablet`
    padding: 0 ${THEME.layout.gutter.mobile};
  `}
`;

export const ImageCtn = styled.button`
  display: flex;
  height: 35px;

  :hover {
    cursor: pointer;
  }

  ${Media.Below.desktop`
    height: 24px;
  `}
`;

export const ImageLogo = styled.img`
  height: 100%;
`;

export const LogAJobBtn = styled.button`
  border: solid 1px ${THEME.colors.primaryColor};
  background-color: white;
  height: 45px;
  width: 100%;
  margin-top: 4vh;
  cursor: pointer;

  > div {
    color: ${THEME.colors.primaryColor};
    font-size: 15px;
    font-weight: bold;

    ${Media.Below.desktop`
      white-space: nowrap;
      transform: rotate(-90deg);
    `}
  }

  ${Media.Below.desktop`
    display: flex;
    justify-content: center;
    margin-top: 0;
    height: 118px;
  `}

  ${Media.Below.tablet`
    display: none;
  `}
`;

export const LogAJobBtnMobileCtn = styled.div`
  display: none;
  position: fixed;
  padding: 15px;
  width: 100%;
  bottom: 10px;
  z-index: 200;

  ${Media.Below.tablet`
    display: initial;
  `}

  > div {
    display: flex;
    justify-content: center;
    background-color: white;
    border: ${THEME.colors.primaryColor} 1px solid;
    box-shadow: 0 3px 20px 0 rgba(0, 130, 189, 0.2);
    height: 7vh;
    max-height: 44px;
    width: 100%;
    cursor: pointer;

    > span {
      align-self: center;
      color: ${THEME.colors.primaryColor};
    }
  }
`;

export const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

interface FooterLogo {
  logo?: string;
  smallLogo?: string;
}

export const LogoCtn = styled.div<FooterLogo>`
  width: 90%;
  align-self: center;
  margin-top: auto;
  flex: 1 1 100%;
  height: 55px;
  min-height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  ${(props): SimpleInterpolation =>
    css`
      background-image: url(${props.logo});

      @media screen and (max-width: ${THEME.layout.tablet.breakpoint}px) {
        width: 90%;
        background-image: url(${props.smallLogo});
      }

      @media screen and (max-width: ${THEME.layout.mobileLarge.breakpoint}px) {
        background-image: url(${props.logo});
        height: 40px;
        min-height: 40px;
        margin-top: 0;
        width: unset;
        order: 2;
        flex: 1 1 50%;
      }
    `}
`;

export const MobileBtn = styled.button`
  width: 0;
  color: #B4ACA6;
  background-color: #14150F;

  :hover{
    cursor: pointer;
  }

  ${Media.Below.tablet`
    width: 40px;
  `}
`;

interface NavigationProps {
  open?: Boolean;
}

export const MobileNavCtn = styled.div<NavigationProps>`
  position: relative;
  width: 50%;

  ${Media.Below.tablet`
    position: absolute;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
    top: 55px;
    right: 0;
    width: 100%;
    align-items: center;
    background-color: #14150F;
    flex-direction: column;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.6);
  `}

  ${(props): SimpleInterpolation =>
    css && !props.open && `
      @media screen and (max-width: ${THEME.layout.tablet.breakpoint}px) {
        max-height:0;
      }
  `}

  ${(props): SimpleInterpolation =>
    css && props.open && `
      @media screen and (max-width: ${THEME.layout.tablet.breakpoint}px) {
        max-height: 280px
      }
  `}
`;

export const NavCtn = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #14150F;
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  box-shadow: ${THEME.etc.primaryBorderShadow};
  z-index: 80;

  ${Media.Below.tablet`
    height: 64px;
    padding: 10px;
  `}
`;

export const NavSpacer = styled.div`
  height: 72px;
  
  ${Media.Below.tablet`
    height: 64px;
  `}
`;

export const TabsCtn = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  align-items: center;

  ${Media.Below.tablet`
    flex-direction: column;
  `}
`;
