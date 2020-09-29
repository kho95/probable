import styled, { css, SimpleInterpolation } from 'styled-components';
import DefaultTheme from '../../assets/styles/config';

import Media from '../../assets/styles/media';

interface LayoutStyleProps {
  disabled?: boolean;
  isPrimary?: boolean;
  padding?: boolean;
}

const maxWidth = 1256;
const gutterPadding = 50;

const LayoutContainer = styled.div`
  max-width: ${maxWidth}px !important;
  float: unset !important;
  margin: 0 auto !important;
  clear: both !important;
`;

export const StyledLayout = styled(LayoutContainer)<LayoutStyleProps>`
  ${(props): SimpleInterpolation =>
    props.isPrimary &&
    css`
      ${Media.Below.mobile(css`
        width: 100%;
      `)}
    `}

  ${(props): SimpleInterpolation =>
    props.padding &&
    css`
      padding: 100px ${gutterPadding}px;

      ${Media.Below.tablet(css`
        padding: 100px ${gutterPadding / 2}px;
      `)}
    `}
`;

StyledLayout.defaultProps = {
  theme: DefaultTheme,
};

export const temp = 'temp';
