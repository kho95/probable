import styled, {css, SimpleInterpolation} from "styled-components";

export const MaintanenceTabText = styled.span`
  width: 86px;
  height: 17px;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: 1.5px;
  padding-bottom: 36px;
`;

interface MaintanenceTab {
  selected:boolean,
}

export const MaintenanceTab = styled.div<MaintanenceTab>`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 2px rgb( 86, 86, 91,0.1);
  transition: border 300ms ease-out;
  
  ${(props): SimpleInterpolation =>
  css &&
  props.selected &&
  `
        border-color: rgb( 86, 86, 91,1);
      `
}
`;

export const MaintenanceHistoryTabCtn = styled.div`
  display: flex;
  width: 100%;
`;

export const MaintenanceHistoryCtn = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Arrow {
  direction: string;
}

export const Arrow = styled.div<Arrow>`
  transform: rotate(0deg);
  > svg {
    stroke-width: 2px;
  }
  ${(props): SimpleInterpolation =>
  css &&
  props.direction=='left' &&
  `
        > svg {
          transform: rotate(180deg);
        }
      `
}
`;

export const DateCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 29px 0px 51px 0px;
`;


export const SelectedDate = styled.span`
  width: 273px;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
`;

export const NumberOfJob = styled.span`
  display: flex;
  justify-content: center;
  
  > p {
    font-size: 14px;
    font-weight: normal
  }
  
  > b {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const JobListCtn = styled.div`
  margin-bottom: 100px;
`;
