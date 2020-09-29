import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

interface HeaderProps {
  backgroundImg?: string;
}

export const AngleSvg = styled.svg`
  height: 100%;
  width: 120px;

  ${Media.Below.mobileLarge`
    display: none;
  `}
`;

export const HeaderCtn = styled.div<HeaderProps>`
  display: flex;
  position: relative;
  width: 100%;
  max-height: 245px;
  height: 28vh;
  background-position: right center !important;
  background-size: auto 100%;
  ${(props): SimpleInterpolation =>
    css &&
    `
      background: url(${props.backgroundImg}) no-repeat;
    `}

  ${Media.Below.desktop`
    height: 150px;
  `}

  ${Media.Below.mobileLarge`
    justify-content: center;
    background: none;
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 32vw;
  min-width: 384px;
  background-color: ${THEME.colors.primaryBackgroundColor};
  padding-left: 4vw;

  ${Media.Below.desktop`
    width: 25vw;
    min-width: 255px;
    padding-left: 30px;
  `}

  ${Media.Below.mobileLarge`
    padding-left: 0px;
  `}
`;
