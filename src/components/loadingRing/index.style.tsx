import React from 'react';
import styled, {keyframes} from 'styled-components';

export const LoadingRingCtn = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const rotate = keyframes`
  0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(360deg);
    }
`;
export const Ring = styled.div`
  width: 64px;
  height:64px;
  margin: 8px;
  border: 8px solid #3ea0cd;
  border-radius: 50%;
  animation: ${rotate} 1.2s linear infinite;
  border-color: #3ea0cd transparent transparent transparent;
`;