import styled, {SimpleInterpolation, css} from 'styled-components';
import Media from "../../../assets/styles/media";

export const BodyCtn = styled.div`
  height: 100%;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const WarningHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  display:flex;
  flex-direction: column;
  align-items: center;
  
  > svg {
    width: 40px;
    height: 40px;
    margin-bottom: 30px;
  }
  
  ${Media.Below.desktop`
    font-size:15px;
  `}
  
  ${Media.Below.tablet`
    font-size: 20px;
  `}
`;

export const MainCtn = styled.div`
  font-size: 20pt;
`;

export const CloseBtn = styled.button`
  width: 40%;
  height: 10%;
  cursor: pointer;
  border: 2px solid #0082bd;
  
  ${Media.Below.desktop`
    width: 100%;
    height: 80%;
    margin: 3px;
  `}
  
  ${Media.Below.tablet`
    height: 10%;
    margin: 10px;
  `}
  
  ${(props): SimpleInterpolation => css
  &&
  `
  background-color: #0082bd;
  color: white;
  `}
`;