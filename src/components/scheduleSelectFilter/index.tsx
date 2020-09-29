import React,{ useMemo, useContext} from 'react';
import JobListContext from '../../app/context/jobListContext'

import StyledList, {
  ListElementComponent,
  MainElementComponent
} from "../styledList";

import {
  FilterText
} from './index.style'

import ICONS from "../../assets/icons";

const ScheduleSelectFilter = ({column: {
  setFilter,
  preFilteredRows,
  id
}}) => {

  const { filtersSchedule, updateScheduleFilters } = useContext(JobListContext);

  const handleFilterChange = (filter) => {
    let newFilterSchedule = _.cloneDeep(filtersSchedule);
    let newFilter = _.cloneDeep(newFilterSchedule[id]);
    newFilter[filter] = !newFilter[filter];

    setFilter(newFilter);
    newFilterSchedule[id] = newFilter;
    updateScheduleFilters(newFilterSchedule);
  };

  const itemList = useMemo(() => {
    let filterItems = new Set();
    let filterList = [];
    let filterStatus = _.cloneDeep(filtersSchedule[id]);

    preFilteredRows.map((item) => {
      filterItems.add(
        item.values[id]
      )
    });

    filterItems.forEach(item => {
      filterList.push(
        <ListElementComponent onClick={() => handleFilterChange(item)}>
          <MainElementComponent selected={false} value={item} data={filtersSchedule[id]}>
            <FilterText>{item}</FilterText>
            <ICONS.check />
          </MainElementComponent>
        </ListElementComponent>
      );

      if(filterStatus[item] == undefined)filterStatus[item] = false;
    });

    let newScheduleFilter = _.cloneDeep(filtersSchedule);
    newScheduleFilter[id] = filterStatus;
    updateScheduleFilters(newScheduleFilter);

    return filterList;
  },[id, preFilteredRows]);

  return (
    <StyledList>
      {itemList}
    </StyledList>
  )
};

export const selectFilterMethod = (rows, id, filterValue) => {

  if (_.keys(_.pickBy(filterValue)).length == 0) {
    return rows;
  }

  return rows.filter(row => {
    return filterValue[row.values[id]];
  })
};


export default ScheduleSelectFilter;