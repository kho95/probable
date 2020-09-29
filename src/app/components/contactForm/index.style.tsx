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
  padding: 5px 0;
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
  text-shadow: none;
  height: 3rem;
  text-align: center;
  padding: 0 3rem;
  font-size: 1rem;
  color: ${THEME.colors.white};
  background-color: #5596FC;

  ${Media.Below.mobile(css`
    width: 100%;
  `)}

  &:hover {
    background-color: #4B82D8;
  }
`;