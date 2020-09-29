import styled, {css, SimpleInterpolation} from 'styled-components';

interface DropDownCtnProps {
  open: boolean;
}

export const DropDownCtn = styled.div<DropDownCtnProps>`
  max-height: 20px;
  width: auto;
  cursor: pointer;
  margin: 10px 10px 10px 10px;
  border-radius: 30px;
  
  > div:nth-child(1) {
    height: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
      
    > svg {
      stroke: white;
      transition: all 0.5s ease-in-out;
      transform: rotate(0deg);
      
      ${(props): SimpleInterpolation => props.open
      && css`
        transform: rotate(180deg)
      `}
    }
  }
  
  > div:nth-child(2) {
    max-height: 0px;
    margin-top: 10px;
    transition: all 0.5s ease-in-out;
    overflow-y: hidden;
    overflow-x: visible;
  }
  
  ${(props): SimpleInterpolation => props.open
  && css`
    > div:nth-child(2) {
      max-height:500px;
      overflow-y: visible;
    }
  `
  }
 
`;

