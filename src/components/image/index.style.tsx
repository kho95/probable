import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';

interface ImageProps {
  height?: string,
  width?: string,
}

export const StyledImage = styled.img<ImageProps>`
  padding-bottom: 24px;

  ${Media.Below.tablet`
    padding-bottom: 16px;
  `}

  ${(props): SimpleInterpolation =>
    css && props.height &&
    `
    height ${props.height};
  `}

  ${(props): SimpleInterpolation =>
    css && props.width &&
    `
    width: ${props.width};
  `}
`;