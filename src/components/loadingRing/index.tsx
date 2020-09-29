import React from 'react';

import { LoadingRingCtn, Ring } from './index.style';

const LoadingRing: React.FC<any> = (props): React.ReactElement => {
  return (
    <LoadingRingCtn>
      <Ring></Ring>
    </LoadingRingCtn>
  );
};

export default LoadingRing;
