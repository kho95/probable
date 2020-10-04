import styled from 'styled-components';
import { keyframes } from 'styled-components';

import Media from '../../../assets/styles/media';
import THEME from '../../../assets/styles/config';

const rotate = keyframes`
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
  animation: ${rotate} 2s infinite;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: ${THEME.spacing.spacing['05']};

  ${Media.Below.mobileLarge`
    text-align: center;
    font-size: 18px;
    margin-bottom: ${THEME.spacing.spacing['04']};
  `}
`;

export const Header = styled.h1`
  font-size: 40px;
  color: #FFFFFF;

  ${Media.Below.mobileLarge`
    font-size: 32px;
  `}
`;

export const ContactInfoCtn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-bottom: 32px;

  ${Media.Below.tablet`
    padding: 0 7vw 32px;
  `}

  ${Media.Below.mobileLarge`
    flex-direction: column;
    padding: 0 3vw 32px;
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