import styled, { css, SimpleInterpolation } from 'styled-components';

import ButtonReset from '../inputResets/buttonReset';
import DefaultTheme from '../../assets/styles/config';

import Media from '../../assets/styles/media';

interface ButtonStyleProps {
  disabled?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
}

export const StyledButton = styled(ButtonReset) <ButtonStyleProps>`
  text-align: center;
  
  &:hover {
    cursor: pointer;
  }

  ${(props): SimpleInterpolation =>
    props.isPrimary &&
    css`
      height: ${props.theme.button.height};
      padding: 0 ${props.theme.button.padding};
      font-size: ${props.theme.button.fontSize};
      font-weight: ${props.theme.button.fontWeight};
      color: ${props.theme.colors.primaryColor};
      background-color: ${props.theme.colors.primaryBackgroundColor};

      ${Media.Below.mobile(css`
        width: 100%;
      `)}

      &:hover {
        background-color: #E2E2E2;
      }
    `}

  ${(props): SimpleInterpolation =>
    props.isSecondary &&
    css`
      height: ${props.theme.button.height};
      padding: 0 ${props.theme.button.padding};
      font-size: ${props.theme.button.fontSize};
      font-weight: ${props.theme.button.fontWeight};
      color: white;
      background-color: #5596FC;

      ${Media.Below.mobile(css`
        width: 100%;
      `)}

      &:hover {
        background-color: #4B82D8;
      }
    `}
`;

StyledButton.defaultProps = {
  theme: DefaultTheme,
};

export const temp = 'temp';
