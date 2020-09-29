import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

export const InputCtn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputTextBox = styled.input`
  border-bottom: #56565b 2px solid;
  padding: 5px;
  ::placeholder { 
    color: #56565b;
    opacity: 0.3;
  }
  
  ${(props): SimpleInterpolation => 
  css &&
  props.missing &&
  `
    border-color: red;
  `
}
`;

export const InputTitle = styled.span`
  font-size: 18px;
  margin-bottom: 10px;
  
    ${(props): SimpleInterpolation =>
  css &&
  props.missing &&
  `
    color: red;
  `}
`
