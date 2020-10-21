import styled from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const HeroImageLayout = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 25%;
  width: 70%;

  ${Media.Below.tablet`
    flex: 1 0 50%;
    flex-direction: column;
    width: 80%;
  `}

  ${Media.Below.mobileLarge`
    flex: 1 0 100%;
  `}

  > div {
    padding-bottom: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: ${THEME.spacing.spacing['05']};

 ${Media.Below.tablet`
    text-align: center;
    justify-content: center;
  `}

  ${Media.Below.mobileLarge`
    text-align: center;
    font-size: 18px;
    margin-bottom: ${THEME.spacing.spacing['04']};
  `}
`;

export const HeroImage = styled.img`
  height: 15vw;
  min-height: 100px;
  max-height: 280px;
`;

export const LogoImage = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 40px;

  ${Media.Below.tablet`
    margin-left: 0px;
    margin-bottom: 16px;
  `}
`;

export const LogoParagraph = styled.div`
  display: flex;
  padding-bottom: 32px;

  ${Media.Below.tablet`
    flex-direction: column-reverse;
    align-items: center;
  `}
`;

export const MineralsParagraph = styled.span`
   display: block;
  padding-top: 32px;
  text-align: center;
`;

export const HeroText = styled.h1`
  text-align: center;
`;

export const WhiteTitle = styled.h2`
  font-size: 24px;
  color: #B4ACA6;
  margin-bottom: ${THEME.spacing.spacing['05']};

  ${Media.Below.tablet`
    text-align: center;
    justify-content: center;
  `}

  ${Media.Below.mobileLarge`
    text-align: center;
    font-size: 18px;
    margin-bottom: ${THEME.spacing.spacing['04']};
  `}
`;