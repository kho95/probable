import styled, { css, SimpleInterpolation } from 'styled-components';

import { ContentWidth } from '../../../assets/styles/config/bundles';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

interface SectionProps {
  backgroundColor?: string;
}

export const ContentCtn = styled.div`
  width: 100%;
  ${ContentWidth};
`;

export const SectionCtn = styled.div<SectionProps>`
  display: flex;
  position: relative;
  width: 100%;
  padding: ${THEME.layout.section.desktop} ${THEME.layout.gutter.desktop};

  ${Media.Below.tablet`
      padding: 40px 24px;
  `}

  ${Media.Below.mobile`
      padding: 24px 24px;
  `}

  ${(props): SimpleInterpolation =>
    css && props.backgroundColor &&
    `
      background-color: ${props.backgroundColor};
    `}
`;