import React, { useContext } from 'react'; // importing FunctionComponent
import { StyledButton } from './index.style';

import JobListContext from '../../app/context/jobListContext';
import FilterText from './filter';
import Icons from '../../assets/icons';
import filterHelper from "../../hooks/useFilterHelper";
import moment from "moment";

interface ButtonProps {
  filterCategory: string;
  filter:
    | 'D'
    | 'W'
    | 'M-3'
    | 'M-6'
    | 'missedDeadline'
    | 'upcoming'
    | 'upcomingToday'
    | 'urgentlyUpcoming'
    | 'doneOnTime'
    | 'missedDeadline'
    | '1'
    | '2'
    | '3'
    | '4'
    | 'new'
    | 'inProgress'
    | 'onHold'
    | 'finished'
    | 'workCompleted'
    | 'cancelled'
    | 'completed'
    | 'open'
    | 'monthly'
    | 'quarterly'
    | 'halfYearly'
    | 'annual';
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterButton: React.FC<ButtonProps> = ({
  filterCategory,
  filter,
  handleClick,
  datePeriod,
}: ButtonProps): React.ReactElement => {
  const {
    filtersReactive,
    reactiveJobList,
    filtersPlanned,
    plannedJobList,
    updateReactiveFilters,
    updatePlannedFilters,
    updateFilteredReactiveJobList,
    updateFilteredPlannedJobList,
  } = useContext(JobListContext);
  const { getDatePeriod } = filterHelper();

  const deleteFilter = (filterCategoryToDelete: string, filterToDelete: string) => {

    let newPeriodFilter = filtersReactive.periodFilter;
    let newSlaFilters = filtersReactive.slaFilters;
    let newPriorityFilters = filtersReactive.priortiyFilters;
    let newStatusFilters = filtersReactive.statusFilters;
    let newDateFilters = filtersReactive.dateFilter;
    let newMaintenanceFilters = filtersPlanned.maintenanceFilter;
    let newPlannedStatusFilters = filtersPlanned.statusFilter;
    let newPlannedDateFilter = filtersPlanned.dateFilter;
    let newPlannedPeriodFilter = filtersPlanned.periodFilter;
    let newActionFilters = filtersReactive.actionFilters;

    if (filterCategoryToDelete === 'periodFilter') {
      newPeriodFilter = '';
    } else if (filterCategoryToDelete === 'slaFilters') {
      newSlaFilters = '';
    } else if (filterCategoryToDelete === 'priorityFilters') {
      newPriorityFilters = '';
    } else if (filterCategoryToDelete === 'statusFilters') {
      newStatusFilters = '';
    } else if (filterCategoryToDelete === 'maintenanceFilters') {
      newMaintenanceFilters = '';
    } else if (filterCategoryToDelete === 'plannedStatusFilters') {
      newPlannedStatusFilters = '';
    } else if (filterCategoryToDelete == 'dateFilter') {
      newDateFilters = {}
    } else if (filterCategoryToDelete == 'actionFilter') {
      newActionFilters = newActionFilters.filter(e => e !== filterToDelete);
    } else if (filterCategoryToDelete === 'plannedDateFilter') {
      newPlannedDateFilter = {};
    } else if(filterCategoryToDelete === 'plannedPeriodFilter') {
      newPlannedPeriodFilter = '';
    }

    updateReactiveFilters({
      periodFilter: newPeriodFilter,
      slaFilters: newSlaFilters,
      priortiyFilters: newPriorityFilters,
      statusFilters: newStatusFilters,
      dateFilter: newDateFilters,
      actionFilters: newActionFilters
    });

    updatePlannedFilters({
      maintenanceFilter: newMaintenanceFilters,
      statusFilter: newPlannedStatusFilters,
      dateFilter: newPlannedDateFilter,
      periodFilter: newPlannedPeriodFilter,
    });

    if (newPeriodFilter !== '' || newSlaFilters != '' || newPriorityFilters != '' || newStatusFilters != '' ||  newActionFilters.length || newDateFilters != undefined && Object.keys(newDateFilters).length) {

      updateFilteredReactiveJobList(
        reactiveJobList.filter(job => {
          let finalBoolean = true;

          if(newSlaFilters !='') finalBoolean = finalBoolean && (newSlaFilters == job.SLAOnsite ||
            job.SLAOnsite == 'missedDeadline' && newSlaFilters == 'onsiteMissedDeadline' ||
            job.SLAOnsite == 'doneOnTime' && newSlaFilters == 'onsiteDoneOnTime' ||
            job.SLAComplete == 'missedDeadline' && newSlaFilters == 'completionMissedDeadline' ||
            job.SLAComplete == 'doneOnTime' && newSlaFilters == 'completionDoneOnTime');

          if(newStatusFilters != '') finalBoolean = finalBoolean && newStatusFilters == job.Status;
          if(newPriorityFilters != '') finalBoolean = finalBoolean && newPriorityFilters == job.PriorityCode.toString();
          if(newActionFilters.length) finalBoolean = finalBoolean && newActionFilters.includes(job.Action);

          if (newPeriodFilter != '') finalBoolean = finalBoolean && moment(moment(job.ReceivedDatetime.split('+')[0], 'YYYY-MM-DDThh:mm:ss'))
            .isBetween(getDatePeriod(newPeriodFilter).startDate, getDatePeriod(newPeriodFilter).endDate);

          if(newDateFilters != undefined && Object.keys(newDateFilters).length) finalBoolean = finalBoolean && moment(job.ReceivedDatetime.split('+')[0], 'YYYY-MM-DDThh:mm:ss')
            .isBetween(newDateFilters.startDate, newDateFilters.endDate);

          return finalBoolean;
        })
      );
    } else {
      updateFilteredReactiveJobList(reactiveJobList);
    }

    if (newMaintenanceFilters.length || newPlannedStatusFilters.length || newPlannedPeriodFilter != '' || newPlannedDateFilter != undefined && Object.keys(newPlannedDateFilter).length) {
      updateFilteredPlannedJobList(
        plannedJobList.filter(job => {
          let finalBoolean = true;

          if(newMaintenanceFilters != '') finalBoolean = finalBoolean && newMaintenanceFilters == job.RoutineCode;
          if(newPlannedStatusFilters != '') finalBoolean = finalBoolean && (job.Status == 'Completed' && newPlannedStatusFilters == "completed" ||
            job.Status == 'Open' && newPlannedStatusFilters == "open" ||
            job.Status == 'Incomplete' && newPlannedStatusFilters == "incomplete");
          if(newPlannedPeriodFilter != '') finalBoolean = finalBoolean && moment(job.RunDueDate, 'YYYY-MM-DD').isBetween(getDatePeriod(newPlannedPeriodFilter).startDate, getDatePeriod(newPlannedPeriodFilter).endDate);
          if( newPlannedDateFilter != undefined && Object.keys(newPlannedDateFilter).length) finalBoolean = finalBoolean &&  moment(job.RunDueDate,'YYYY-MM-DD').isBetween(newPlannedDateFilter.startDate, newPlannedDateFilter.endDate);

          return finalBoolean;
        })
      );
    } else {
      updateFilteredPlannedJobList(plannedJobList);
    }
  };
  
  return (
    <StyledButton onClick={handleClick}>
      {filterCategory == 'actionFilter'? <span>{filter}</span>
        :
      filterCategory == 'priorityFilters'? <span>Critical Code: {filter}</span>
        :
      <span>{FilterText[filter]}{datePeriod}</span>}
      <Icons.x
        onClick={(e): void => {
          e.preventDefault();
          deleteFilter(filterCategory, filter);
        }}
      />
    </StyledButton>
  );
};

export default FilterButton;
