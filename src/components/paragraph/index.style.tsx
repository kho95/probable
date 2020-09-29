import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

interface ParagraphProps {
  align?: string;
}

export const StyledParagraph = styled.span<ParagraphProps>`
  display: flex;
  margin-bottom: ${THEME.spacing.spacing['05']};

  ${(props): SimpleInterpolation =>
    css && props.align &&
    `
    text-align: ${props.align};
  `}

  ${Media.Below.mobile`
    margin-bottom: ${THEME.spacing.spacing['04']};
  `}
`;