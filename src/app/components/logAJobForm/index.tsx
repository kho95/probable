/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useContext, useState } from 'react';

import useLogJobForm from '../../../hooks/useLogJobForm';
import LogCompleteModal from "../logCompleteModal";
import PriorityWarningModal from "../priorityWarningModal";
import MainInfoFormInput from "../mainInfoFormInput";
import AssetFormInput from "../assetFormInput";

import {
  Form,
  SubmitBtn,
  WarningMessage,
} from './index.style';
import UserInfoFormInput from "../userInfoFormInput";

const LogAJobForm: React.FC<any> = (): React.ReactElement => {
  const [error, setError] = useState(false);
  const [priorityWarningActive, setPriorityWarningActive] = useState(false);
  const [callNumber, setCallNumber] = useState('');

  const logForm = (callCode: string) => {
    if (callCode == 'empty') {
      setError(true);
    } else {
      resetInputs();
      setCallNumber(callCode);
      setError(false);
    }
  };

  const { handleInputChange, handleSubmit, inputs, handleMultipleInput, resetInputs } = useLogJobForm(logForm);

  const handleClose = () => {
    setCallNumber('');
    setPriorityWarningActive(false);
  };

  return (
    <React.Fragment>
      {callNumber!='' && <LogCompleteModal callNumber={callNumber} close={handleClose} active={priorityWarningActive}/>}
      {priorityWarningActive && <PriorityWarningModal active={priorityWarningActive} close={() => setPriorityWarningActive(false)}/>}
      <Form onSubmit={handleSubmit}>
        <MainInfoFormInput error={error} handleInputChange={handleInputChange} inputs={inputs} setWarningActive={() => {setPriorityWarningActive(true)}}/>
        <UserInfoFormInput inputs={inputs} handleMultipleInput={handleMultipleInput} handleInputChange={handleInputChange}/>
        {error && <WarningMessage>You have Mandatory fields (*) that are missing</WarningMessage>}
        <SubmitBtn type="submit" value="LOG THE JOB" />
      </Form>
    </React.Fragment>
  );
};

export default LogAJobForm;
