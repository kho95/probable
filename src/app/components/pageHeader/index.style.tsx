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
    width: 100%;
    min-height: 185px;
    padding-top: 165px;
  `}
`;

export const HeaderCtn = styled.div<HeaderProps>`
  display: flex;
  position: relative;
  width: 100%;
  max-height: 620px;
  height: 50vh;
  background-position: right center !important;
  background-size: auto 100%;

  ${(props): SimpleInterpolation =>
    css &&
    `
      background: url(${props.backgroundImg}) no-repeat;
    `}

  ${Media.Below.desktop`
    min-height: 130px;
  `}

  ${Media.Below.mobileLarge`
    justify-content: center;
    flex-direction: column-reverse;
    background-size: cover;
    margin-bottom: 100px;
  `}
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 32vw;
  min-width: 485px;
  background-color: ${THEME.colors.primaryBackgroundColor};
  padding-left: 4vw;

  ${Media.Below.desktop`
    width: 41vw;
    min-width: 280px;
    padding-left: 30px;
  `}
  
  ${Media.Below.tablet`
    width: 60vw;
  `}

  ${Media.Below.mobileLarge`
    width: 100%;
    padding: 15px;
  `}
`;
