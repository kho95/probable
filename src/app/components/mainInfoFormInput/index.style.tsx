import styled, {SimpleInterpolation, css} from "styled-components";

export const ReadOnly = styled.p`
  font-weight: bold;
`;

export const PriorityCtn = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface ToolTipProps {
  active: boolean,
}

export const CriticalCodeToolTip = styled.div<ToolTipProps>`
  display:none;
  position: absolute;
  top: -150%;
  background-color: white;
  border: 1px black solid;
  height: auto;
  width: auto;
  
  ${(props):SimpleInterpolation => props.active && css`
    display: block;
  `}
`;

export const CriticalCode = styled.div`
  position: relative;
`;