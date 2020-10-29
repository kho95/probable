import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

interface ParagraphProps {
  align?: string;
  column?: boolean;
  small?: boolean;
}

export const StyledParagraph = styled.span<ParagraphProps>`
  display: flex;
  margin-bottom: ${THEME.spacing.spacing['05']};

  ${(props): SimpleInterpolation =>
    css && props.align &&
    `
    text-align: ${props.align};
  `}

  ${(props): SimpleInterpolation =>
    css && props.column &&
    `
    flex-direction: column;
  `}

  ${(props): SimpleInterpolation =>
    css && props.small &&
    `
    font-size: 14px;
  `}

  ${Media.Below.tablet`
    text-align: center;
    justify-content: center;
  `}

  ${Media.Below.mobile`
    margin-bottom: ${THEME.spacing.spacing['04']};
  `}
`;