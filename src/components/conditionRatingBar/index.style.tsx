import styled, {css, SimpleInterpolation} from 'styled-components';

import Media from '../../assets/styles/media'

interface Rating {
  search: boolean;
}

export const RatingCtn = styled.div<Rating>`
  display: flex;
  height:40px;
  font-size: 10px;
  text-align: center;
  width: 100%;
  
  ${(props): SimpleInterpolation =>
  !props.search &&
  css`
      justify-content: flex-end;
      width: 70%;
      
    `
  }
  
  ${Media.Below.desktopLarge`
    font-size: 8px;
  `}
`;

interface RatingBar {
  selected: boolean;
  color: string,
}

export const RatingBar = styled.div<RatingBar>`
  width: 100%;
  height: 70%;
  font-size: 1.2rem;
  font-weight: bold;
  
  ${(props):SimpleInterpolation => css`
    background-color: ${props.color};
  `}
`;

export const RatingBody = styled.div`
  width: 20%;
  position: relative;
  
  > p {
    word-break: break-word;
  }
  
  @media only screen and (min-width: 1439px) and (max-width: 2000px) {
    > p {
      font-size: 8px;
    }
  }
`;

interface ArrowProps {
  selected: boolean;
  search: boolean;
}

export const Arrow = styled.div<ArrowProps>`
  position: absolute;
  z-index:10;
  width: 100%;
  top: -30%;
  height: 70%;
  display:none;
  
  > svg {
    stroke: black;
    fill: white;
    transform: rotate(180deg);
  }
  
  ${(props):SimpleInterpolation => props.selected && css`
    display: flex;
    justify-content: center;
    top: 0;
  `}
  
    ${(props): SimpleInterpolation =>
  !props.search &&
  css`
      top: -30%;
    `
  }
`;

export const SliderBar = styled.div`
  width: 20%;
  height:100%;
  background-color: white;
  border: 1px black solid;
`;
