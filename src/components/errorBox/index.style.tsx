import styled, {css, SimpleInterpolation} from "styled-components";
import THEME from "../../assets/styles/config";
import Media from "../../assets/styles/media";

interface ErrorProps {
  active?: boolean;
}

export const ErrorBoxCtn = styled.div<ErrorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${THEME.colors.errorBackground};
  padding: 16px;
  color: ${THEME.colors.errorPrimary};
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${Media.Below.tablet`
    padding: 10px;
  `}

  ${(props): SimpleInterpolation =>
  css &&
  props.active &&
  `
      opacity: 1;
     
    `}
    
    > svg {
      width: 30px;
      height: 30px;
      stroke: 2px;
    }
`;

export const ErrorCtn = styled.div`
  margin-bottom: 20px;
  min-height: 80px;
  
  ${Media.Below.tablet`
    min-height: 35px;
  `}
`;

export const ErrorText = styled.span`
  color: ${THEME.colors.errorPrimary};

  > b {
    color: ${THEME.colors.errorPrimary};
  }
`;