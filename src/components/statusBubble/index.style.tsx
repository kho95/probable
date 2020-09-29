import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

interface SlaProps {
  slaColor?: string;
  slaBgColor?: string;
}

export const BubbleCtn = styled.div<SlaProps>`
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 14px 5px 10px;
  height: 32px;
  background-color: ${THEME.colors.quaternaryFontColor};

  ${Media.Below.desktop`
    padding: 3px 14px 3px 12px;
    height: 28px;
  `}

  ${Media.Below.tablet`
    padding: 3px 12px 3px 10px
    height: 21px;
  `}
`;

export const BubbleText = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding-left: 5px;
  width: auto;
  white-space: nowrap;

  ${Media.Below.desktop`
    font-size: 14px;
  `}

  ${Media.Below.tablet`
    font-size: 10px;
    padding-left: 5px;
  `}
`;

export const SvgCtn = styled.div<SlaProps>`
  height: 20px;
  align-items: center;
  justify-content: center;
  display: flex;

  ${Media.Below.desktop`
    height: 18px;
  `}

  ${Media.Below.tablet`
    height: 14px;
  `}

  > svg {
    height: 100%;
  }
`;
