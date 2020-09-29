import React from 'react';

import LoadingRing from "../loadingRing";
import LoadingBar from "../loadingBar";

import { ElementContainer } from './index.style'

export const CALLING = 0;
export const POPULATED = 1;
export const EMPTY = 2;
export const TIMEOUT = 3;

interface APIStatus {
  status?: number,
  type?: string,
  disable?: string,
}

const ApiStatus: React.FC<APIStatus> = (props) => {
  const { children, status , type, disable, message} = props;
  const loadingElement = type == 'ring'? <LoadingRing/>: type == 'bar'? <LoadingBar/>: <div/>;

  return (
    <React.Fragment>
      {(status == CALLING || status == EMPTY) && <ElementContainer>
        {status == CALLING && loadingElement}
        {disable != 'empty' && status == EMPTY && <h2>There were no records found!</h2>}
        {status == CALLING && message != undefined && <h2>{message}</h2>}
      </ElementContainer>}
      {status == POPULATED && children}
    </React.Fragment>
  )
};

export default ApiStatus;