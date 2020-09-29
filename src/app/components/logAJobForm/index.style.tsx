import styled from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const Form = styled.form`
  width: 50%;
  max-width: 580px;
   
  ${Media.Below.desktop`
    width: 100%;
  `}
  
  ${Media.Below.tablet`
    display: flex;
    align-items:center;
    flex-direction: column;
  `}
`;

export const SubmitBtn = styled.input`
  font-weight: bold;
  color: white;
  text-align: center;
  height: 74px;
  background-color: ${THEME.colors.primaryColor};
  width: 50%;
  letter-spacing: 1.5px;
  
  ${Media.Below.desktop`
    width: 100%;
  `}
`;

export const WarningMessage = styled.p`
  color: red;
  margin-bottom: 50px;
`;