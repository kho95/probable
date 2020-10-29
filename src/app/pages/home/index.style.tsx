import styled from 'styled-components';
import { keyframes } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

export const Bold = styled.span`
  font-weight: bold;
`;

export const ButtonCtn = styled.div`
  display: flex;

  ${Media.Below.tablet`
    justify-content: center;
  `}
`;

const bounce = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

export const FooterLink = styled.a`
  color: #4285f4;
`;

export const DownArrow = styled.div`
  position: absolute;
  bottom: 20px;
  width: 40px;
  height: 40px;
  color: white;
  animation: ${bounce} 2s infinite;
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

export const HeroContentCtn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactInfoCtn = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 32px;
  font-size: 14px;

  ${Media.Below.tablet`
    padding-bottom: 32px;
  `}

  ${Media.Below.mobileLarge`
    padding-bottom: 24px;
  `}
`;

export const FormCtn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 300px;
  padding-left: 7vw;
  padding-bottom: 80px;

  ${Media.Below.tablet`
    width: 100%;
    padding: 0 7vw 80px;
  `}
`;

export const SectionCtn = styled.div`
  ${Media.Below.tablet`
    margin-bottom: 32px;
  `}
`;