import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../../assets/styles/media';

export const ContentCtn = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;

  ${Media.Below.tablet`
    min-width: unset;
  `}
`;

export const HeadingDescCtn = styled.span`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-bottom: 35px;
  
  @media only screen and (min-width: 2560px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-bottom: 10px;
  }
  
`;

export const HeadingDesc = styled.span`
  display: flex;
  width: 100%;
  padding-top: 20px;
  justify-content: center;
  
  @media only screen and (min-width: 2560px) { 
    width: 50%;
    justify-content: start;
  }
`;

export const AssetDetailCtn = styled.div`
  width: 100%;
`;

export const AssetTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height: 1;
  padding-bottom: 15px;
  display: block;
  margin: 0;

  ${Media.Below.desktopLarge`
    font-size: 22px;
  `}
`;

export const SectionTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  display: block;

  ${Media.Below.desktopLarge`
    font-size: 20px;
  `}
`;

export const ButtonCtn = styled.div`
  width:100%;
  display: flex;
  align-items:center;
  justify-content: center;
`;

