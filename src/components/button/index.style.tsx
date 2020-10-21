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
      background-color: ${props.theme.colors.primaryBackgroundColor};
      transition: background-color 300ms ease-in-out;
      border: solid 1px ${props.theme.colors.secondaryColor};

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
      border: solid 1px ${props.theme.colors.secondaryColor};
      background-color: ${props.theme.colors.white};
      transition: background-color 300ms ease-in-out;

      ${Media.Below.mobile(css`
        width: 100%;
      `)}

      &:hover {
        color: #FFFFFF;
        background-color: ${props.theme.colors.primaryColor};
      }
    `}
`;

StyledButton.defaultProps = {
  theme: DefaultTheme,
};

export const temp = 'temp';
