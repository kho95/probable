import React from 'react';

import { Bar, Child1, Child2, Child3 } from './index.style';

const LoadingBar: React.FC<any> = (props): React.ReactElement => {
  return (
    <Bar>
      <Child1 />
      <Child2 />
      <Child3 />
    </Bar>
  );
};

export default LoadingBar;
