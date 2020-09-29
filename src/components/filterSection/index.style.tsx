import styled, {css, SimpleInterpolation} from "styled-components";
import Media from "../../assets/styles/media";

export const FilterSectionCtn = styled.div`
  padding-top: 20px;

  ${Media.Below.mobileLarge`
    padding-top: 15px;
  `}
`;

export const FilterHeadingCtn = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 5px;

  ${Media.Below.mobileLarge`
    margin-bottom: 0;
  `}

  > span {
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.5px;

    ${Media.Below.mobileLarge`
      font-size: 12px;
    `}
  }
`;

interface ShowHideBtnProps {
  hide?: boolean;
}

export const ShowHideBtn = styled.div<ShowHideBtnProps>`
  > svg {
    transition: transform 0.3s linear;

    ${(props): SimpleInterpolation =>
  css &&
  props.hide &&
  `
      transform: rotate(180deg);
    `};
  }
`;

export const FilterButtons = styled.div<ShowHideBtnProps>`
  display: flex;
  flex-wrap: wrap;
  transition: max-height 0.3s ease-in-out;
  max-height: 350px;
  overflow: hidden;

  ${(props): SimpleInterpolation =>
  css &&
  props.hide &&
  `
      max-height: 0;
    `};
`;

