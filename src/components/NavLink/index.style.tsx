import styled, { css, keyframes, SimpleInterpolation } from 'styled-components';
import { Link } from '@reach/router';
import { fadeInLeft } from 'react-animations';
import Media from '../../assets/styles/media';
import THEME from '../../assets/styles/config';

const fadeAnimation = keyframes`${fadeInLeft}`;

interface TabProps {
  active?: boolean;
}

export const LinkCtn = styled(Link) <TabProps>`
  display: flex;
  width: 100%;
  padding: 15px 0;
  margin: 10px 0;
  font-size: 15px;
  cursor: pointer;
  border-bottom: transparent 1px solid;

  ${Media.Below.mobileLarge`
    padding: 0;
    margin: 0;
    width: unset;
    align-items: center;
    height: 54px;
    transition: width 300ms ease-in-out;
  `}

  > span {
    ${(props): SimpleInterpolation =>
    props.active &&
    css`
        color: ${THEME.colors.primaryColor};
        display: unset;
        transition: color 200ms ease-in-out;

        animation: 500ms ${fadeAnimation};
      `}
  }
  > div {
    > svg {
      stroke: ${THEME.colors.baseIconColor};
      transition: stroke 200ms ease-in-out;
      width: 100%;
      margin-right: 22px;

      ${Media.Below.mobileLarge`
        margin-right: 10px;
      `}

      ${(props): SimpleInterpolation =>
    props.active &&
    css`
          stroke: ${THEME.colors.primaryColor};
        `}
    }
  }

  ${(props): SimpleInterpolation =>
    props.active &&
    css`
      box-sizing: border-box;
      border-bottom: ${THEME.colors.primaryColor} 1px solid;
      transition: border-bottom 200ms ease-in-out;
    `}
`;
