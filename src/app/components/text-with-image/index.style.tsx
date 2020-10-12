import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const Image = styled.img`
`;

export const ImageCtn = styled.div<TextWithImageProps>`
  display: flex;
  justify-content: center;
  min-height: 130px;
  width: 50%;
  margin-right: 40px;
  overflow: hidden;

  ${Media.Below.tablet`
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 24px;
  `}

  ${Media.Below.mobileLarge`
    margin-bottom: 16px;
  `}

  ${(props): SimpleInterpolation =>
    css && props.imgRight &&
    `
      margin-left: 40px;
      margin-right: 0px;
    `}
`;

interface TextWithImageProps {
  imgRight?: boolean;
}

export const TextCtn = styled.div<TextWithImageProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin-left: 40px;

  ${Media.Below.tablet`
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
  `}

  ${(props): SimpleInterpolation =>
    css && props.imgRight &&
    `
      margin-left: 0px;
      margin-right: 40px;
    `}
`;

export const TextWithImageCtn = styled.div<TextWithImageProps>`
  display: flex;
  position: relative;
  width: 100%;

  ${Media.Below.tablet`
    flex-direction: column;
  `}

  ${(props): SimpleInterpolation =>
    css && props.imgRight &&
    `
      flex-direction: row-reverse;
    `}
`;