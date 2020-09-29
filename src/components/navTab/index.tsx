import React from 'react';

import { TabCtn, TabText } from './index.style';

interface NavTabProps {
  text: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const NavTab: React.FC<NavTabProps> = ({
  handleClick,
  text,
}): React.ReactElement => {
  return (
    <TabCtn onClick={handleClick}>
      <TabText>{text}</TabText>
    </TabCtn>
  );
};

export default NavTab;
