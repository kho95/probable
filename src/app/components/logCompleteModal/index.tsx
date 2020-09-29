import React, {useState} from 'react';
import LogAJobFormModal from "../logAJobFormModal";
import {
  InfoBoxHeader,
  BodyCtn,
  CallNumber,
  TextArea,
  CallNumberCtn,
  CopyMessage,
  CopyButton,
  ContinueCtn,
  ContinueButton
} from './index.style'
import ICONS from "../../../assets/icons";
import {navigate} from "gatsby-link";

interface LogCompleteModalProps {
  active: boolean,
  callNumber: string,
  close: () => {},
}

const LogCompleteModal: React.FC<LogCompleteModalProps> = ({active, callNumber, close }) => {

  const [copied, setCopied] = useState(false);

  const copyToClipBoard = () => {
    const copyText = document.createElement('textarea');
    copyText.value = callNumber;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand('copy');
    setCopied(true);
    document.body.removeChild(copyText);
  };

  const handleClose = () => {
    close();
  };

  const handleBackHome = () => {
    navigate('/app/home');
  };

  return (
    <LogAJobFormModal active={active} close={close}>
      <InfoBoxHeader>
        <ICONS.checkCircle />
        Your call has been logged successfully and will be attended to shortly
      </InfoBoxHeader>
      <BodyCtn>
        <CallNumber>
          <TextArea>Here is your call number</TextArea>
          <CallNumberCtn>
            <span id="callNumber">{callNumber}</span>
            <CopyButton onClick={copyToClipBoard}>
              <ICONS.copy />
              <span>Copy</span>
            </CopyButton>
          </CallNumberCtn>
        </CallNumber>
        {copied && (
          <CopyMessage>
            <TextArea>* You call number is now copied to your clipboard!</TextArea>
          </CopyMessage>
        )}
        <ContinueCtn>
          <ContinueButton color="white" backgroundColor="#0082bd" onClick={handleClose}>
            LOG ANOTHER JOB
          </ContinueButton>
          <ContinueButton color="#0082bd" backgroundColor="white" onClick={handleBackHome}>
            BACK TO HOME
          </ContinueButton>
        </ContinueCtn>
      </BodyCtn>
    </LogAJobFormModal>
  );
};

export default LogCompleteModal;