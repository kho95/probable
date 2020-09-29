import React, {useContext, useState} from 'react';

import AppStateContext from "../../context/appStateContext";

import FormInputSection from "../../../components/formInputSection";
import FormInput from "../../../components/formInput";
import InputText from "../../../components/inputText";
import FormDropDown from "../../../components/formDropDown";

import {
  ReadOnly,
  PriorityCtn,
  CriticalCodeToolTip,
  CriticalCode,
} from "./index.style";

import InputRadio from "../../../components/filterRadio";

interface MainInfoFormProps {
  inputs: {
    issueTitle,
    location,
    customerReference,
    contractNo,
    priorityCode,
  },
  error: boolean,
  handleInputChange: (event)=>{},
  setWarningActive: () => {},
}

const MainInfoFormInput:React.FC<MainInfoFormProps> = ({inputs, error, handleInputChange, setWarningActive}) => {

  const { contractList, contractCriticalCode, selectedCustomerId } = useContext(AppStateContext);

  const handleHighPriority = (event: any) => {
    setWarningActive();
    handleInputChange(event);
  };

  return (
    <FormInputSection title='Main Information' number={1}>
      <FormInput title='Issue title *'>
        <InputText text='' placeholder='E.g. The access keypad is not working' value={inputs.issueTitle} name='issueTitle' missing={inputs.issueTitle == '' && error} onChange={handleInputChange}/>
      </FormInput>
      <FormInput title='Location *'>
        <InputText text='' placeholder='E.g. Room 1, Level 2' value={inputs.location} name='location' missing={inputs.location == '' && error} onChange={handleInputChange}/>
      </FormInput>
      <FormInput title='Customer Reference *'>
        <InputText text='' placeholder='' value={inputs.customerReference} name='customerReference' missing={inputs.customerReference == '' && error} onChange={handleInputChange}/>
      </FormInput>
      <FormInput title='Customer code *'>
        <ReadOnly>{selectedCustomerId}</ReadOnly>
      </FormInput>
      <FormInput title='Contract number *'>
        <FormDropDown name="contractNo" id="contractNumber" value={inputs.contractNo} onChange={handleInputChange}>
          {Object.keys(contractList[selectedCustomerId]).map((item) => {
            return <option value={item}>{contractList[selectedCustomerId][item].Description}</option>
            })
          }
        </FormDropDown>
      </FormInput>
      <FormInput title='Call type *'>
        <ReadOnly>RM</ReadOnly>
      </FormInput>
      <FormInput title='Critical code'>
        <PriorityCtn>
        {
          Object.keys(contractCriticalCode).map((level) => {
            if (level == 'PM' || level == 'QU') return;
              const [ hovering, setHovering ] = useState(false);
              return (
                <CriticalCode>
                  <InputRadio
                    active={inputs.priorityCode == contractCriticalCode[level].PriorityCode}
                    text={contractCriticalCode[level].PriorityCode + ' ' + contractCriticalCode[level].Details}
                    groupName="priorityCode"
                    value={contractCriticalCode[level].PriorityCode}
                    onClick={contractCriticalCode[level].PriorityCode == 1 || contractCriticalCode[level].PriorityCode == 2? handleHighPriority: handleInputChange}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  />
                  <CriticalCodeToolTip active={hovering}>Within {contractCriticalCode[level].ResponseTime} hours</CriticalCodeToolTip>
                </CriticalCode>
              );
          })
        }
        </PriorityCtn>
      </FormInput>
    </FormInputSection>
  )
};

export default MainInfoFormInput;