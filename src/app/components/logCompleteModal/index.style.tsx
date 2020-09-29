import styled, {css, SimpleInterpolation} from "styled-components";
import Media from "../../../assets/styles/media";

export const ContinueCtn = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: space-evenly;
  
  ${Media.Below.desktop`
    height: 30%;
    flex-direction: column;
  `}
`;

export const CallNumber = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`;

export const CallNumberCtn = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #0082bd;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: space-between;
  
  ${Media.Below.desktop`
    width: 60%;
    > span {
      font-size: 35px;
    }
  `}
`;

export const CopyButton = styled.button`
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  
  > span {
    font-size: 12px;
    color: #0082bd;
  }
  > svg {
    stroke: #0082bd;
  }
`;

export const CopyMessage = styled.div`
  background-color: #0082bd;
  color: white;
  width: 80%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextArea = styled.p`
  text-align: center;
`;

export const InfoBoxHeader = styled.div`
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

export const BodyCtn = styled.div`
  display: flex;
  height: 75%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  
  ${Media.Below.tablet`
    height: 80%;
  `}
`;

export const ContinueButton = styled.button`
  width: 40%;
  height: 100%;
  cursor: pointer;
  border: 2px solid #0082bd;
  
  ${Media.Below.desktop`
    width: 100%;
    height: 80%;
    margin: 3px;
  `}
  
  ${Media.Below.tablet`
    height: 50%;
    margin: 10px;
  `}
  
  ${(props): SimpleInterpolation => css
  &&
  `
  background-color: ${props.backgroundColor};
  color: ${props.color};
  `}
`;