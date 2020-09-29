import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

interface SlaProps {
  active?: boolean;
}

export const StyledButton = styled.button<SlaProps>`
  padding: 5px 12px;
  margin: 0 10px 10px 0;
  color: ${THEME.colors.primaryFontColor};
  border: ${THEME.colors.tertiaryFontColor} 1px solid;
  border-radius: 40px;
  background-color: white;

  :focus {
    outline: 0;
  }

  ${(props): SimpleInterpolation =>
    css &&
    props.active &&
    `
      font-weight: bold;
      border: ${THEME.colors.primaryColor} 1px solid;
      text-shadow: 0.5px 0px 0px black;
    `};

  > svg {
    padding-right: 5px;
  }
`;

export const StyledButton2 = styled.div``;
