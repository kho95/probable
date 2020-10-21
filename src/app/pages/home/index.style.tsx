import styled from 'styled-components';
import { keyframes } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

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

export const Header = styled.h1`
  font-size: 40px;
  color: ${THEME.colors.primaryColor};

  ${Media.Below.mobileLarge`
    font-size: 32px;
  `}
`;

export const HeroContentCtn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactInfoCtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-top: 32px;

  ${Media.Below.tablet`
    padding: 32px 7vw 0;
  `}

  ${Media.Below.mobileLarge`
    flex-direction: column;
    padding: 24px 3vw 0;
  `}
`;

export const FormCtn = styled.div`
  display: flex;
  width: 100%;
  min-width: 300px;
  padding-right: 7vw;
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