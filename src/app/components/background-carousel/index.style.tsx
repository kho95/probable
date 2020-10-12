import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';

interface SlideProps {
  backgroundImg?: string;
}

export const BackgoundImage = styled.div<SlideProps>`
  height: calc(100vh - 72px);
  width: 100%;
  background-position: center center !important;
  background-size: cover !important;
  background-repeat: no-repeat;

    ${(props): SimpleInterpolation =>
    css &&
    `
      background-image: url('${props.backgroundImg}');
    `}

  ${Media.Below.tablet`
    height: calc(100vh - 64px);
  `}
`;