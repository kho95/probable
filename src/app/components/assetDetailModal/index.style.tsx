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
  
  ${Media.Below.tablet`
    z-index: 201;
  `}
`;

interface ModalBox {
  active?: boolean;
}

export const InfoBox = styled.div<ModalBox>`
  position:fixed;
  background-color: rgb(256,256,256,0);
  box-shadow: 0 0px 0px 0 grey;
  height: 80%;
  width: 80%;
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 2s linear;
  -webkit-transition: background-color 2s linear;
  -moz-transition: background-color 2s linear;
  -o-transition: background-color 2s linear;
  -ms-transition: background-color 2s linear;
  flex-direction: column;
  
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
  
  ${Media.Below.tablet`
    height: 90%;
  `}
`;

export const BodyHead = styled.div`
  display: flex;
  margin: 23.5px 0 23.5px 0;
  justify-content: space-between;
  
  ${Media.Below.tablet`
    flex-direction: column;
    
    > div {
      justify-content: center;
      margin: 10px;
    }
  `}
`;

export const BodyCtn = styled.div`
  margin: 30.5px 0 0 0;
  display: flex;
  height: 75%;
  overflow-y: scroll;
  
  ${Media.Below.tablet`
    height: 80%;
    flex-direction: column;
    align-items: center;
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

export const SectionTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  display: block;

  ${Media.Below.desktopLarge`
    font-size: 20px;
  `}
`;

export const DetailsTable = styled.table`
  width: 100%;
  > tbody {
    > tr {
      > th {
        font-weight: normal;
        font-size: 16px;
        text-align: start;
        vertical-align: top;
        width: 55%;
        color: ${THEME.colors.secondaryFontColor};
        padding-bottom: 20px;

        ${Media.Below.desktopLarge`
          font-size: 14px;
        `}
      }

      > td {
        font-size: 16px;
        padding-bottom: 20px;

        ${Media.Below.desktopLarge`
          font-size: 14px;
        `}
      }
    }
  }
  
  ${Media.Below.tablet`
    width: 100%;
  `}
`;

export const ExportButton = styled.span`
  height: 44px;
  border: solid 1px #56565b;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  margin-top: 15px;
  position: absolute;
  right: 30px;
  bottom: 30px;
  
  &:hover {
    background-color: #dbdbdb;
    cursor: pointer;
  }
  
  ${Media.Above.tablet`
    width: 20%;
  `}
`;

export const InfoBoxHeader = styled.div`
  height:auto;
  width:100%;
  ${Media.Below.tablet`
    h2 {
    font-size: 1.0rem
    }
  `}
`;

export const CloseButton = styled.div`
  height: 23px;
  width: 23px;
  position: absolute;
  right: 32px;
  top: 32px;
  cursor: pointer;
`;

export const ConditionBody = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  ${Media.Below.tablet`
    width: 100%;
  `}
`;
