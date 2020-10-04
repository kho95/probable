import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';

export const HeroCtn = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 72px);
  margin-bottom: 56px;
  overflow: hidden;

  ${Media.Below.desktop`
    background-size: cover;
  `}

  ${Media.Below.tablet`
    height: calc(100vh - 64px);

    > .slider-ctn {
      height: calc(100vh - 64px);
    }
  `}

  > .slider-ctn {
    height: calc(100vh - 72px);
  }
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
  top: 0;

  ${(props): SimpleInterpolation =>
    css && props.overlayColor &&
    `
      background-color: ${props.overlayColor};
    `}
`;
