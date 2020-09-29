import styled, {SimpleInterpolation, css} from 'styled-components';

export const CalenderCtn = styled.div`
  overflow: hidden;
  position: absolute;
  max-height: 0px;
  transition: all 0.5s ease-in-out;
  
  ${(props): SimpleInterpolation => css && props.show &&
  `
    overflow: visible;
  `}
`;

export const DatePickerCtn = styled.div`
  width: 55%;
`;