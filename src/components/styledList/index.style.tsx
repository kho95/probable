import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

interface ListOpen {
  opened?: boolean
}

export const RootCtn = styled.label<ListOpen>`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  cursor: pointer;
  height: auto;
  min-height: 52px;
  width: 100%;
  min-width: 320px;
  border-radius: 35px;
  padding: 18px 18px;
  margin: 0 10px 10px 0;
  border: ${THEME.colors.quaternaryFontColor} 1px solid;
  transition: border 0.2s ease-in-out;
  background-color: white;
  flex-direction: column;
  height: 300px;
  overflow-y: scroll;
`;

interface ShowHideBtnProps {
  hide?: boolean;
}

export const ListElement = styled.div`
  text-align: left;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: #56565b 1px solid;
`;

export const Divider = styled.div<MainElement>`
  height: 1px;
  width: 100%;
  background-color: ${THEME.colors.tertiaryFontColor};
  opacity: 50%;
  margin-top: 8px;
  transition: opacity 0.3s ease-in-out;

  ${Media.Below.mobileLarge`
    display: none;
  `}
  
  ${(props): SimpleInterpolation =>
  props.selected &&
  css`
     background-color:#0082bd;
     opacity: 100%;
    `}
`;

interface MainElement {
  selected: boolean;
}

export const MainElements = styled.div<MainElement>`
  display: flex;
  justify-content: space-between;
  transition: stroke 0.3s ease-in-out;
  color: black;
  font-size: 14pt;
  
  > svg {
        stroke: #56565b;
        stroke-opacity: 0.2;
        stroke-width: 2px;
      }
  
  ${(props): SimpleInterpolation =>
  props.selected &&
  css`
      > svg {
        stroke: #0082bd;
        stroke-opacity: 1;
      }
      
      > p {
        color: #0082bd;
        font-weight: bold;
      }
    `}
`;

interface List {
  opened?: boolean
}

export const ListCtn = styled.div<List>`
  width: 100%;
  height: auto;
  transition: max-height 0.5s ease-in-out;
  
`;