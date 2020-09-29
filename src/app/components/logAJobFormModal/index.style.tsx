import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const Background = styled.div`
  position: fixed;
  background-color: rgb(256,256,256,0.7);
  height: 100%;
  width: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ModalBox {
  active?: boolean;
}

export const InfoBox = styled.div<ModalBox>`
  position:fixed;
  background-color: rgb(256,256,256,1);
  box-shadow: 0 0px 0px 0 grey;
  height: 60%;
  width: 40%;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s linear;
  -webkit-transition: background-color 0.5s linear;
  -moz-transition: background-color 0.5s linear;
  -o-transition: background-color 0.5s linear;
  -ms-transition: background-color 0.5s linear;
  
  ${Media.Below.tablet`
    width:100%;
    height:100%;
  `}
  
  ${(props): SimpleInterpolation =>
  props.active && css &&
  `
      background-color: rgb(256,256,256,1);
      box-shadow: 0 3px 10px 0 grey;
    `
}
`;

export const InfoBoxCtn = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  flex-direction: column;
  
  ${Media.Below.tablet`
    height: 90%;
  `}
  
  ${Media.Below.desktop`
    height: 90%
  `}
`;

interface Divider {
  vertical?: boolean;
}

export const Divider = styled.div<Divider>`
  height: 1px;
  width: 100%;
  opacity: 0.3;
  background-color: ${THEME.colors.tertiaryFontColor};
  margin-top: 15px;

  ${Media.Below.mobileLarge`
    display: none;
  `}
  
  ${(props): SimpleInterpolation =>
  css &&
  props.vertical &&
  `
    margin-top: 0;
    width: 1px;
    height: 100%;
  `}
`;

export const CloseButton = styled.div`
  height: 23px;
  width: 23px;
  position: absolute;
  right: 0px;
  top: 0px;
  cursor: pointer;
  
  > svg {
    height: 30px;
    width: 30px;
  }
`;
