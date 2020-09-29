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
  padding: 5px 12px 5px 10px;
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

export const BubbleLetter = styled.span`
  font-size: 22px;
  line-height: 24px;
  color: ${THEME.colors.secondaryFontColor};

  ${Media.Below.desktop`
    font-size: 20px;
    line-height: 22px;
  `}

  ${Media.Below.tablet`
    font-size: 18px;
    line-height: 18px;
  `}
`;

export const BubbleText = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding-left: 8px;
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
