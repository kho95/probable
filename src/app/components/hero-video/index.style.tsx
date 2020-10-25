import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';

interface HeaderProps {
  backgroundImg?: string;
}

export const HeaderCtn = styled.div<HeaderProps>`
  display: flex;
  position: relative;
  width: 100%;
  max-height: 680px;
  height: 55vh;
  background-position: center center !important;
  background-size: contain !important;
  background-color: white;

  ${(props): SimpleInterpolation =>
    css &&
    `
      background: url(${props.backgroundImg}) no-repeat;
    `}

  ${Media.Below.desktop`
    max-height: 580px;
    min-height: 300px;
    background-size: cover;
  `}
`;

interface HeaderContentProps {
  overlayColor?: string;
}

export const HeaderContent = styled.div<HeaderContentProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0;

  ${(props): SimpleInterpolation =>
    css && props.overlayColor &&
    `
      background-color: ${props.overlayColor};
    `}
`;
