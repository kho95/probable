import styled, { css, SimpleInterpolation } from 'styled-components';
import Media from '../../assets/styles/media';

interface SlaProps {
  slaColor?: string;
  slaBold?: boolean;
}

export const DateCtn = styled.div<SlaProps>`
  display: flex;
  justify-content: flex-end;
  flex: 0 1 auto;

  > span {
    font-size: 14px;
    margin-left: 5px;
    width: auto;
    white-space: nowrap;
    font-weight: ${props => (props.slaBold ? 'bold' : 'initial')};

    ${(props): SimpleInterpolation =>
      css &&
      `
        color: ${props.slaColor};
      `}

    ${Media.Below.desktop`
      font-size: 10px;
      margin-left: 3px;
    `}
  }

  > div > svg {
    ${(props): SimpleInterpolation =>
      css`
        stroke: ${props.slaColor};
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
