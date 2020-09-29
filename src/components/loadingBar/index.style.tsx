import styled, {keyframes} from 'styled-components';

const expand = keyframes`
  0% {
    top: 8px;
    height: 64px;
  }
  
  50%, 100% {
    top: 24px;
    height: 32px;
  }
`;

export const Bar = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  
  > div {
    width: 16px;
    background: #3ea0cd;
    position: absolute;
  }
`;

export const Child1 = styled.div`
  left: 8px;
  animation: ${expand} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  animation-delay: -0.24s;
`;

export const Child2 = styled.div`
  left: 32px;
  animation: ${expand} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  animation-delay: -0.12s;
`;

export const Child3 = styled.div`
  left: 56px;
  animation: ${expand} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
`;