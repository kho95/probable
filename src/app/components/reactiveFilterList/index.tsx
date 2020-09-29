/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import JobListContext from '../../context/jobListContext';
// eslint-disable-next-line import/no-extraneous-dependencies
import FilterDeleteButton from '../../../components/filterDeleteButton';

import { ErrorBox, FilterListCtn } from './index.style';

import Icons from '../../../assets/icons';

const ReactiveFilterList: React.FC<any> = (...restProps): React.ReactElement => {
  const { periodFilter, slaFilters, priortiyFilters, statusFilters } = useContext(JobListContext);
  const [serviceCalls, setFilterList] = useState([]);

  const testFunction = () => {
    console.log('testing');
  };

  const FilterButtonList = slaFilters.map(filter => (
    <FilterDeleteButton key={filter} text={filter} handleClick={testFunction} />
  ));

  return (
    <FilterListCtn>
      <div>List of filters</div>
      {FilterButtonList}
    </FilterListCtn>
  );
};

export default ReactiveFilterList;
