import React from "react";

import LocationLabel from "../../../components/locationLabel";
import DateLabel from "../../../components/dateLabel";
import SlaStatusBubble from "../../../components/slaStatusBubble";
import StatusBubble from "../../../components/statusBubble";
import GenericBubble from "../../../components/genericBubble";
import MaintenanceTypeBubble from "../../../components/maintenanceTypeBubble";

import useTextCorrection from "../../../hooks/useTextCorrection";

import {BodyHead, BubbleSection, BubbleTitle, InfoBoxHeader} from "./index.style";
import PlannedStatusBubble from "../../../components/plannedStatusBubble";

const computeComponent = (data,type,headers) => {
  const { filterEmpty, filterText } = useTextCorrection();

  const getHeading = () => {
    let header;
    let location;
    let dateLabel;
    let sla;

    if(type == 'reactive') {
      header = data.CallDescription;
      location = data.CallLocations != ""? data.CallLocations.CallLocation.LocationDesc: data.AddressName;
      dateLabel = data.SLAOnsiteEstimated + ' ' + data.SLAOnsiteEstimatedTime;
      sla = data.SLAOnsite;
    } else if(type=='planned') {
      header = data.ItemDescription;
      location = data.UnitLocation;
      dateLabel = data.RoutineDueDate;
      sla = data.StatusCode == "F"? 'doneOnTime':'upcoming';
    }

    return (<InfoBoxHeader>
      <h2>{header}</h2>
      <BodyHead>
        <LocationLabel location={location}/>
        <DateLabel slaStatus={sla} date={dateLabel}/>
      </BodyHead>
    </InfoBoxHeader>);
  };
  
  const getTableContent = () => {
      return (
        <React.Fragment>
          {Object.keys(headers).map(header => {
            return <tr>
              <th>{header}</th>
              {filterEmpty(data[headers[header]])}
            </tr>
          })}
          {type == 'reactive' &&
          <React.Fragment>
            <tr>
              <th>SLA Actual Onsite Date and Time</th>
              {filterEmpty(data.SLAOnsiteActual + " " + data.SLAOnsiteActualTime)}
            </tr>
            <tr>
              <th>SLA Expected Complete Date and Time</th>
              {filterEmpty(data.SLACompleteEstimated + " " + data.SLACompleteEstimatedTime)}
            </tr>
            <tr>
              <th>SLA Actual Complete Date and Time</th>
              {filterEmpty(data.SLACompleteActual + " " + data.SLACompleteActualTime)}
            </tr>
          </React.Fragment>}
        </React.Fragment>
      )
  };

  const getBubbleSection = (criticalCode: {}) => {
    if(type == 'reactive') {
      let PMQU = criticalCode[data.PriorityCode] != undefined;

      return (
        <React.Fragment>
          <div>
            <BubbleTitle>SLA (Onsite)</BubbleTitle>
            <SlaStatusBubble slaStatus={data.SLAOnsite} />
          </div>
          <div>
            <BubbleTitle>SLA (Complete)</BubbleTitle>
            <SlaStatusBubble slaStatus={data.SLAComplete} />
          </div>
          <div>
            <BubbleTitle>Status</BubbleTitle>
            <StatusBubble status={data.Status} />
          </div>
          <div>
            <BubbleTitle>Critical Code</BubbleTitle>
            <GenericBubble letter={(PMQU? criticalCode[data.PriorityCode].CriticalCode:"")} text={PMQU? criticalCode[data.PriorityCode].Details:""} />
          </div>
        </React.Fragment>
      )
    } else if(type == 'planned') {
        return (
          <React.Fragment>
            <div>
              <BubbleTitle>Status</BubbleTitle>
              <PlannedStatusBubble status={data.Status}/>
            </div>
            <div>
              <BubbleTitle>Maintenance type</BubbleTitle>
              <MaintenanceTypeBubble type={data.RoutineCode}/>
            </div>
        </React.Fragment>)
    }
  };

  return {
    getHeading,
    getTableContent,
    getBubbleSection,
  }

};

export default computeComponent;
