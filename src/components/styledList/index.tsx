import React, {useEffect, useContext} from 'react';

import JobListContext from '../../app/context/jobListContext'

import {
  RootCtn,
  ListCtn,
  MainElements,
  ListElement
} from "./index.style";

const StyledList: React.FC<any> = (props) => {
  const { children } = props;

  return (
    <RootCtn>
      <ListCtn>
        {children}
      </ListCtn>
    </RootCtn>
  );
};

export const MainElementComponent = (props) => {
  const { children, data,value } = props;
  const { filtersSchedule } = useContext(JobListContext);

  return (
    <MainElements selected={data[value]}>
      {children}
    </MainElements>
  )
};

export const ListElementComponent = (props) => {
  const {children, onClick, value} = props;

  return (
    <ListElement onClick={onClick} value={value}>
      {children}
    </ListElement>
  )
};

export default StyledList;