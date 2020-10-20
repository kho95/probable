import styled from 'styled-components';

import THEME from '../../../assets/styles/config';
import Media from '../../../assets/styles/media';

import { CmpSpacing, ContentWidth } from '../../../assets/styles/config/bundles';

export const ContentCtn = styled.div`
  ${ContentWidth}
  display: flex;
  justify-content: space-between;

  ${Media.Below.tablet`
    flex-direction: column;
  `}
`;

export const FooterLink = styled.a`
  color: #B4ACA6;
`;

export const FooterCtn = styled.footer`
  background-color: #14150F;
  ${CmpSpacing}
  box-shadow: inset ${THEME.etc.primaryBorderShadow};
`;

export const FooterText = styled.span`
  color: #B4ACA6;
`;

export const SectionCtn = styled.div`
  ${Media.Below.tablet`
    margin-bottom: 32px;
  `}
`;

export const EndCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const SocialIcon = styled.div`
  height: 48px;
  color: #B4ACA6;

  >svg {
    height: 100%;
  }

  :hover {
    cursor: pointer;
  }
`;

export const SocialIconCtn = styled.div`
  display: flex;
`;
