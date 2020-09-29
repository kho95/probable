import styled from 'styled-components';
import THEME from '../../../../assets/styles/config';

export const BtnCtn = styled.div`
  width: 20%;
  min-width: 170px;
`;

export const DialogBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(256, 256, 256, 0.7);
  z-index: 100;
`;

export const DialogCtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  min-width: 500px;
  max-width: 690px;
  padding: 35px;
  background-color: white;
  box-shadow: ${THEME.etc.secondaryBorderShadow};
`;

export const MessageCtn = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;

export const InstructionCtn = styled.div`
  font-size: 21px;
  margin-bottom: 65px;
`;

export const SvgCtn = styled.div`
  height: 40px;
  margin-bottom: 35px;

  > svg {
    height: 100%;
  }
`;
