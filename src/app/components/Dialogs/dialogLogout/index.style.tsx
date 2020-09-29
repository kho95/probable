import styled from 'styled-components';
import Media from '../../../../assets/styles/media';

import THEME from '../../../../assets/styles/config';

export const DialogBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(256, 256, 256, 0.7);
  z-index: 100;
`;

export const DialogCtn = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 30%;
  min-width: 500px;
  max-width: 690px;
  padding: 35px;
  background-color: ${THEME.colors.secondaryBackgroundColor};
  box-shadow: ${THEME.etc.secondaryBorderShadow};

  ${Media.Below.tablet`
    min-width: 300px;
    width: 90%;
  `}

  ${Media.Below.mobileLarge`
    min-width: 200px;
    width: 90%;
  `}
`;

export const DialogWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const MessageCtn = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;

  ${Media.Below.desktop`
    font-size: 18px;
  `}

  ${Media.Below.tablet`
    font-size: 15px;
  `}
`;

export const SvgCtn = styled.div`
  height: 40px;
  width: 40px;
  margin-bottom: 35px;

  > svg {
    height: 100%;
    width: 100%;
  }

  ${Media.Below.tablet`
    height: 30px;
    width: 30px;
    margin-bottom: 25px;
  `}
`;
