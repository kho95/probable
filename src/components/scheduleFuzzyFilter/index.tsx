import React, { useEffect, useContext } from 'react';
import JobListContext from '../../app/context/jobListContext';

import InputText from "../inputText";

const ScheduleFuzzyFilter = ({column: {
    setFilter,
    id,
  }
}) => {
  const { filtersSchedule } = useContext(JobListContext);

  const handleFilterChange = (e) => {
    let inputText = e.target.value;

    setFilter(inputText);
  };

  return <InputText text="" placeholder="E.g Level" value={filtersSchedule[id]} name={id} missing={false} onChange={handleFilterChange}/>

};

export const fuzzyFilterMethod = (rows, id, filterValue) => {

  return rows.filter(row => {
    return row.values[id].toString().toLowerCase().indexOf(filterValue.toString().toLowerCase()) >= 0
  })
};

export default ScheduleFuzzyFilter
