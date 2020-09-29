import React ,{useContext} from 'react'

import AppStateContext from "../../context/appStateContext";

import LogAJobFormModal from "../logAJobFormModal";
import ICONS from '../../../assets/icons'

import {
  WarningHeader,
  MainCtn,
  CloseBtn,
  BodyCtn,
} from "./index.style";

const PriorityWarningModal = ({active, close}) => {

  const { selectedCustomerId, customerInfoMap, callTime, defaultNumber } = useContext(AppStateContext);
  const customerNumber = customerInfoMap[selectedCustomerId] == undefined ||  customerInfoMap[selectedCustomerId].number != undefined? customerInfoMap[selectedCustomerId].number: defaultNumber;
  const time = callTime.split('to');
  const afterHoursCallTime = time[1] + ' to ' + time[0];

  return (
    <LogAJobFormModal active={active} close={close}>
      <BodyCtn>
        <WarningHeader>
          <ICONS.alertTriangle/>
          <h2>Warning!</h2>
        </WarningHeader>
        <MainCtn>
          Please note this Call will not be actioned after hours between the hours of {afterHoursCallTime} on weekdays.  If your call is of an Urgent Nature, please phone the Helpdesk on {customerNumber}.
        </MainCtn>
        <CloseBtn onClick={close}>Close</CloseBtn>
      </BodyCtn>
      </LogAJobFormModal>
  )
};

export default PriorityWarningModal;