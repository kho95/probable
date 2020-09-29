/* eslint-disable no-alert */
import React, { useState, useEffect, useContext } from 'react';
import {navigate} from "gatsby";

import JobListContext from '../../context/jobListContext';

import DropDown from '../../../components/dropdown';
import SlaGraph from '../../../components/slaGraph';
import IReactiveJob from '../../interfaces/reactiveJob';
import filterHelper from "../../../hooks/useFilterHelper";


import {computeSlaSummary, slaPassed, slaUpcoming} from "./helper";
import { Divider, DropdownCtn, HeadingCtn, HeadingDropdownCtn, GraphCtn, SummaryList } from './index.style';
import moment from "moment";

interface ServiceProps {
  reactiveJobList: IReactiveJob[];
}

const SlaIndictorSum: React.FC<ServiceProps> = ({ reactiveJobList }): React.ReactElement => {
  const { filtersReactive,updateReactiveFilters } = useContext(JobListContext);
  const [ period, setPeriod ] = useState({
    startDate: moment(),
    endDate: moment().add(7,'day')
  });
  const [slaStatistics, setSLAStatistics] = useState({
    upcoming: slaUpcoming,
    onsite: slaPassed,
    actual: slaPassed,
  });

  const { filterByDate, getDatePeriod } = filterHelper();

  const updateData = (newDate: string) => {
    let newJobList = filterByDate(newDate,reactiveJobList,'reactive');

    if(reactiveJobList.length > 0) {
      setSLAStatistics({
        upcoming: computeSlaSummary(newJobList, 'upcoming'),
        onsite: computeSlaSummary(newJobList, 'onsite'),
        actual: computeSlaSummary(newJobList, 'complete')
      })
    }
  }

  useEffect(() => {
    updateData('thisMonth');
  },[reactiveJobList]);

  const handleChange = (newValue: any) => {
    updateData(newValue);
    let datePeriod = getDatePeriod(newValue);
    setPeriod(datePeriod);
  };

  const handleClick = (sla: any) => {
    navigate('app/reactiveMaintenance');
    updateReactiveFilters({
      ...filtersReactive,
      slaFilters: sla,
      dateFilter: period,
    })
  };

  return (
    <React.Fragment>
      <HeadingCtn>
        <HeadingDropdownCtn>
          <span>SLA Indicator summary</span>
          <DropdownCtn>
            <span>Show results for</span>
            <div>
              <DropDown defaultVal={1} optionList="dateFilter" onChange={handleChange} />
            </div>
          </DropdownCtn>
        </HeadingDropdownCtn>
      </HeadingCtn>
      <SummaryList>
        <GraphCtn>
          <span>UPCOMING JOBS</span>
          <div>
            {Object.keys(slaStatistics.upcoming).map(status => {
              if(status == 'total') return;
              return <SlaGraph
                title={slaStatistics.upcoming[status].title}
                maxCount={slaStatistics.upcoming.total}
                count={slaStatistics.upcoming[status].count}
                primaryColor={slaStatistics.upcoming[status].primaryColor}
                secondaryColor={slaStatistics.upcoming[status].secondaryColor}
                onClick={() => handleClick(status)}
              >
                {slaStatistics.upcoming[status].icon}
              </SlaGraph>
            })}
          </div>
        </GraphCtn>
        <Divider />
        <GraphCtn>
          <span>ON SITE TIME SLA</span>
          <div>
            {Object.keys(slaStatistics.onsite).map(status => {
              if(status == 'total') return;
              return <SlaGraph
                title={slaStatistics.onsite[status].title}
                maxCount={slaStatistics.onsite.total}
                count={slaStatistics.onsite[status].count}
                primaryColor={slaStatistics.onsite[status].primaryColor}
                secondaryColor={slaStatistics.onsite[status].secondaryColor}
                onClick={() => {
                  if(status === 'missedDeadline') handleClick('onsiteMissedDeadline');
                  if(status === 'doneOnTime') handleClick('onsiteDoneOnTime');
                }}
              >
                {slaStatistics.onsite[status].icon}
              </SlaGraph>
            })}
          </div>
        </GraphCtn>
        <Divider />
        <GraphCtn>
          <span>COMPLETION TIME SLA</span>
          <div>
            {Object.keys(slaStatistics.actual).map(status => {
              if (status == 'total') return;
              return <SlaGraph
                title={slaStatistics.actual[status].title}
                maxCount={slaStatistics.actual.total}
                count={slaStatistics.actual[status].count}
                primaryColor={slaStatistics.actual[status].primaryColor}
                secondaryColor={slaStatistics.actual[status].secondaryColor}
                onClick={() => {
                  if(status === 'missedDeadline') handleClick('completionMissedDeadline');
                  if(status === 'doneOnTime') handleClick('completionDoneOnTime');
                }}
              >
                {slaStatistics.actual[status].icon}
              </SlaGraph>
            })}
          </div>
        </GraphCtn>
      </SummaryList>
    </React.Fragment>
  );
};

export default SlaIndictorSum;
