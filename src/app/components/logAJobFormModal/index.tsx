import React, { useState } from 'react';
import { navigate } from 'gatsby';

import ICONS from '../../../assets/icons';

import {
  Background,
  InfoBox,
  InfoBoxCtn,
  CloseButton,
} from './index.style';

const LogAJobFormModal: React.FC<any> = props => {
  const { active, close, children } = props;

  const handleClose = () => {
    close();
  };

  return (
    <Background>
      <InfoBox active={active}>
        <InfoBoxCtn>
          <CloseButton onClick={handleClose}>
            <ICONS.x />
          </CloseButton>
          {children}
        </InfoBoxCtn>
      </InfoBox>
    </Background>
  );
};

export default LogAJobFormModal;
