import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

interface SlaProps {
  active?: boolean;
}

export const StyledButton = styled.button<SlaProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 1 auto;
  padding: 5px 12px;
  margin: 0 10px 10px 0;
  color: ${THEME.colors.primaryFontColor};
  border: ${THEME.colors.tertiaryFontColor} 1px solid;
  border-radius: 40px;
  background-color: white;

  ${Media.Below.desktopLarge`
      padding: 3px 10px;
    `}

  ${Media.Below.mobileLarge`
      font-size: 14px;
    `}

  :focus {
    outline: 0;
  }

  > span {
    font-weight: bold;
    margin-left: 5px;
    font-size: 18px;

    ${Media.Below.desktopLarge`
      font-size: 16px;
    `}

    ${Media.Below.mobileLarge`
      font-size: 14px;
    `}
  }

  > svg {
    cursor: pointer;
    margin-left: 5px;
  }
`;

export const StyledButton2 = styled.div``;
