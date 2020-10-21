import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

export const InputBox = styled.input`
  margin-bottom: 20px;
  padding: 5px;
  font-size: 18px;
  width: 100%;
  background-color: ${THEME.colors.extraLightGrey};

  &:focus {
    border: 1px solid ${THEME.colors.primaryColor};
  }
`;

export const ShowButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  left: 82%;
  top: 37%;
  background-color: transparent;
  font-size: 14px;

  &:focus {
    outline: 0px;
  }

  ${Media.Below.tablet`
    left: 76%;
  `}

  ${Media.Below.mobileLarge`
    left: 78%;
  `}

  > span {
    color: ${THEME.colors.primaryFontColor};
    margin-left: 5px;
  }
`;

export const SubmitButton = styled.input`
  height: ${THEME.button.height};
  padding: 0 ${THEME.button.padding};
  font-size: ${THEME.button.fontSize};
  font-weight: ${THEME.button.fontWeight};
  border: solid 1px ${THEME.colors.secondaryColor};
  border-radius: 0;
  background-color: ${THEME.colors.white};
  transition: background-color 300ms ease-in-out;

  ${Media.Below.mobile(css`
    width: 100%;
  `)}
  
  &:hover {
    cursor: pointer;
    background-color: ${THEME.colors.primaryColor};
    color: #FFFFFF;
  }
`;