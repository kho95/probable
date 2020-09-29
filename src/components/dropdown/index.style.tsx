import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

interface DropdownProps {
  open?: boolean;
}

export const DropdownBtn = styled.div<DropdownProps>`
  display: flex;
  position: relative;
  justify-content: space-between;
  border-bottom: ${THEME.colors.tertiaryFontColor} 1px solid;
  width: 100%;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  ${Media.Below.tablet`
    font-size: 15px;
  `}

  ${Media.Below.mobileLarge`
    font-size: 14px;
  `}

  > img {
    ${(props): SimpleInterpolation =>
      props.open &&
      css &&
      `
        transform: rotate(180deg);
      `}
  }
`;

export const DropdownDraw = styled.div<DropdownProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  display: flex;
  height: 0;
  overflow: hidden;
  background-color: white;
  font-weight: bold;
  font-size: 16px;
  z-index: 20;
  margin-top: 5px;

  ${(props): SimpleInterpolation =>
    props.open &&
    css &&
    `
      height: unset;
      box-shadow: 0 3px 30px 0 rgba(0, 0, 0, 0.16);
    `}
`;

interface DropdownOptionsProps {
  active?: boolean;
}

export const DropdownOptions = styled.div<DropdownOptionsProps>`
  padding: 5px 10px;
  cursor: pointer;

  ${(props): SimpleInterpolation =>
    css &&
    props.active &&
    `
      color: ${THEME.colors.primaryColor};
    `}
`;

export const DropdownCtn = styled.div`
  display: flex;
  justify-content: space-between;
`;
