import styled from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: ${THEME.spacing.spacing['05']};

  ${Media.Below.mobileLarge`
    text-align: center;
    font-size: 18px;
    margin-bottom: ${THEME.spacing.spacing['04']};
  `}
`;

export const LogoImage = styled.img`
  height: 100px;
  width: 100px;
  margin-left: 40px;
`;

export const HeroImage = styled.img`
  height: 10vw;
  min-height: 100px;
`;

export const LogoParagraph = styled.div`
  display: flex;
  padding-bottom: 32px;
`;

export const HeroText = styled.h1`
  text-align: center;
`;