import styled, { css, SimpleInterpolation } from 'styled-components';

import THEME from '../../assets/styles/config';
import Media from '../../assets/styles/media';

export const LocCtn = styled.div`
  display: flex;
  flex: 0 1 auto;

  > span {
    font-size: 14px;
    margin-left: 5px;
    width: auto;
    white-space: nowrap;
    color: ${THEME.colors.secondaryFontColor};

    ${Media.Below.desktop`
      font-size: 10px;
      margin-left: 3px;
    `}
  }
`;

export const SvgCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;

  ${Media.Below.desktop`
    height: 14px;
  `}

  > svg {
    height: 100%;
  }

  > img {
    height: 100%;
  }
`;
