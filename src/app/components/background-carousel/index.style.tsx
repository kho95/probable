import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';

interface SlideProps {
  backgroundImg?: string;
}

export const BackgoundImage = styled.div<SlideProps>`
  display: block;
  margin: 0 auto;
  height: calc(100vh - 72px);
  width: 100%;
  background-position: center center !important;
  background-size: cover !important;

    ${(props): SimpleInterpolation =>
    css &&
    `
      background: url(${props.backgroundImg}) no-repeat;
    `}

  ${Media.Below.tablet`
    height: calc(100vh - 64px);
  `}
`;