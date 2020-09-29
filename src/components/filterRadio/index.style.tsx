import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

interface SlaProps {
  active?: boolean;
}

export const StyledLabel = styled.label<SlaProps>`
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  cursor: pointer;
  height: 35px;
  border-radius: 35px;
  padding: 0 12px;
  margin: 0 10px 10px 0;
  border: ${THEME.colors.quaternaryFontColor} 1px solid;
  background-color: white;

  ${Media.Below.desktop`
    height: 32px;
    border-radius: 32px;
    padding: 0 8px;
  `}

  ${(props): SimpleInterpolation =>
    css &&
    props.active &&
    `
      border: ${THEME.colors.primaryColor} 1px solid;
      text-shadow: 0.5px 0px 0px black;
    `};

  > svg {
    padding-right: 5px;

    ${Media.Below.desktop`
      padding-right: 3px;
    `}
  }

  > span {
    font-size: 18px;

    ${Media.Below.desktop`
      font-size: 14px;
    `}
  }

  > div {
    padding-right: 5px;
    font-size: 23px;
    color: ${THEME.colors.tertiaryFontColor};

    ${Media.Below.desktop`
      font-size: 18px;
      padding-right: 3px;
    `}
  }

  > input {
    display: none;
  }
`;

export const placeholder = styled.div``;
