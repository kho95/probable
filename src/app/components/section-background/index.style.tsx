import styled, { css, SimpleInterpolation } from 'styled-components';

import { ContentWidth } from '../../../assets/styles/config/bundles';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

interface SectionProps {
  backgroundSrc?: string;
}

export const ContentCtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  ${ContentWidth};
`;

export const SectionCtn = styled.div<SectionProps>`
  display: flex;
  position: relative;
  width: 100%;
  height: 58vw;
  max-height: 600px;
  min-height: 300px;
  padding: ${THEME.layout.section.desktop} ${THEME.layout.gutter.desktop};

  ${Media.Below.tablet`
      padding: 40px 24px;
  `}

  ${Media.Below.mobile`
      padding: 24px 24px;
  `}

  ${(props): SimpleInterpolation =>
    css && props.backgroundSrc &&
    `
      background: url('${props.backgroundSrc}') no-repeat #a0a0a0;
      background-position: center;
      background-size: contain;
    `}
`;