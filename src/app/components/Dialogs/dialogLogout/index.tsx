/* eslint-disable no-alert */
import React from 'react';
import ICONS from '../../../../assets/icons';

import { DialogBackground, DialogCtn, DialogWindow, MessageCtn, SvgCtn } from './index.style';

interface LogoutProps {
  children: React.ReactChild;
}

const DialogLogout: React.FC<LogoutProps> = ({ children }: LogoutProps): React.ReactElement => {
  return (
    <DialogBackground>
      <DialogWindow>
        <DialogCtn>
          <SvgCtn>
            <ICONS.alertTriangle />
          </SvgCtn>
          <MessageCtn>Do you really wish to log out?</MessageCtn>
          {children}
        </DialogCtn>
      </DialogWindow>
    </DialogBackground>
  );
};

export default DialogLogout;
