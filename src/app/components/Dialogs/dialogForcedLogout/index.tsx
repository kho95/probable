import React, {useContext} from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { navigate } from '@reach/router';
import AppStateContext from "../../../context/appStateContext";
import JobListContext from '../../../context/jobListContext';
import AssetListContext from '../../../context/assetListContext';


import ButtonSmall from '../../../../components/buttonSmall';
import ICONS from '../../../../assets/icons';

import { BtnCtn, DialogBackground, DialogCtn, InstructionCtn, MessageCtn, SvgCtn } from './index.style';

const DialogForcedLogout: React.FC<any> = ({message}): React.ReactElement => {
  const { deleteUserRelatedState } = useContext(AppStateContext);
  const { deleteAllAssetInfo } = useContext(AssetListContext);
  const { deleteAllJobInfo } = useContext(JobListContext);

  return (
    <DialogBackground>
      <DialogCtn>
        <SvgCtn>
          <ICONS.alertTriangle />
        </SvgCtn>
        <MessageCtn>{message}</MessageCtn>
        <InstructionCtn>Please log in again</InstructionCtn>
        <BtnCtn>
          <ButtonSmall
            isPrimary
            handleClick={(e): void => {
              e.preventDefault();
              deleteUserRelatedState();
              deleteAllAssetInfo();
              deleteAllJobInfo();
              navigate('/');
            }}
          >
            GO TO LOGIN
          </ButtonSmall>
        </BtnCtn>
      </DialogCtn>
    </DialogBackground>
  );
};

export default DialogForcedLogout;
