import styled, { css, SimpleInterpolation } from 'styled-components';

import Media from '../../assets/styles/media';

interface Rating {
  search: boolean;
}

export const RatingCtn = styled.div<Rating>`
  flex: 1 0 auto;
  display: flex;
  height:40px;
  ${(props): SimpleInterpolation => 
  !props.search &&
    css`
      justify-content: flex-end
    `
  }
`;

export const SvgCtn = styled.div<Rating>`
  width: auto;
  height: 17.9px;
  display: flex;
  justify-content: flex-end;
  margin: 0 8px 0 8px;
  transition: all 0.5s linear;
  ${Media.Below.desktop`
    height: 18px;
  `}

  ${Media.Below.tablet`
    height: 14px;
  `}

  > svg {
      stroke-width: 2px;
      ${(props): SimpleInterpolation =>
      props.color != undefined &&  
      css &&
        `
          stroke: ${props.color};
        `
      }
      
      ${(props): SimpleInterpolation =>
      props.color == '' &&
      css && 
        `
          opacity: 0.3;
        `
      }
      
      ${(props): SimpleInterpolation =>
    props.search && 
    css`
        height: 40.4px;
       `
    }
  }
`;