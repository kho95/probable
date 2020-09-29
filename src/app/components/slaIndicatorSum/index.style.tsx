import styled from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const ContentCtn = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-size: 15px;
  }

  > div {
    display: flex;
    flex-direction: column;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 166px;
  background-color: ${THEME.colors.tertiaryFontColor};
  align-self: center;

  ${Media.Below.tablet`
    display: none;
  `}
  
    ${Media.Below.desktop`
      display:none;
  `}
`;

export const DropdownCtn = styled.div`
  display: flex;
  align-items: center;

  > span {
    font-size: 16px;
    padding-right: 10px;

    ${Media.Below.tablet`
      font-size: 14px;
    `}
  }

  > div {
    width: 140px;
  }

  ${Media.Below.desktop`
    justify-content: flex-end;
  `}

  ${Media.Below.tablet`
    justify-content: flex-start;
  `}
`;

export const GraphCtn = styled.div`
  flex: 0 1 45%;

  > span {
    font-size: 15px;
    font-weight: bold;
  }

  > div {
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
  }

  ${Media.Below.mobileLarge`
    width: 100%;
  `}
`;

export const HeadingCtn = styled.div`
  display: flex;
  justify-content: space-between;

  ${Media.Below.desktop`
    flex-direction: column;
  `}
`;

export const HeadingDropdownCtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  min-width: 600px;

  ${Media.Below.desktop`
    width: 100%;
    min-width: 450px;
  `}

  ${Media.Below.tablet`
    flex-direction: column;
    min-width: 0px;
  `}

  > span {
    font-size: 30px;
    font-weight: bold;

    ${Media.Below.desktop`
      font-size: 24px;
    `}

    ${Media.Below.tablet`
      font-size: 22px;
    `}

    ${Media.Below.mobileLarge`
      font-size: 20px;
    `}
  }
`;

export const SummaryList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 100px;

  ${Media.Below.desktop`
    flex-direction: column;
    margin: 30px 0 70px;
    
  `}

  ${Media.Below.mobileLarge`
    flex-direction: column;
  `}
`;
