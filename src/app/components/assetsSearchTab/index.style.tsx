import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const ClearBtn = styled.div`
  font-size: 14px;
  height: 20px;
  border-bottom: ${THEME.colors.tertiaryFontColor} 1px solid;
  cursor: pointer;

  :hover {
    font-weight: bold;
    border-bottom: ${THEME.colors.tertiaryFontColor} 2px solid;
  }

  ${Media.Below.desktopLarge`
    margin-left: 34px;
  `}
`;

interface SearchTabProps {
  show?: boolean;
}

export const CloseXBtn = styled.div<SearchTabProps>`
  display: none;

  ${Media.Below.desktopLarge`
    display: initial
    margin-left: auto;
    cursor: pointer;
  `}
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${THEME.colors.tertiaryFontColor};
  margin-top: 15px;

  ${Media.Below.mobileLarge`
    display: none;
  `}
`;

export const FilterFormCtn = styled.form`
  min-width: 300px;

  ${Media.Below.desktop`
    min-width: 250px;
  `}
`;

export const FilterHead = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    font-size: 23px;
    font-weight: bold;

    ${Media.Below.tablet`
      font-size: 22px;
    `}
  }

  ${Media.Below.desktopLarge`
    justify-content: normal;
    align-items: center;
  `}
`;

