import React from 'react'
import moment from "moment";

const apiStatus = {
  CALLING: 0,
  POPULATED: 1,
  EMPTY: 2,
};

export const getNewDate = (dates: object, selectedTab: string, chosenDate: any, command: string) => {
  let currentIndex = dates[selectedTab].indexOf(chosenDate);
  let newDate;
  switch (command) {
    case 'next':
      if (currentIndex < dates[selectedTab].length - 1) {
        newDate = dates[selectedTab][currentIndex + 1];
      } else {
        newDate = dates[selectedTab][0];
      }
      break;
    case 'previous':
      if (currentIndex > 0) {
        newDate = dates[selectedTab][currentIndex - 1];
      } else {
        newDate = dates[selectedTab][dates[selectedTab].length - 1];
      }
      break;
  }
  return newDate;
};

export const filterData = (reactiveData: [any], plannedData: [any], currentDate: string) => {
  let jobsList = {
    reactive: {},
    planned: {},
  };

  let reactiveDatesInData = [];
  let plannedDatesInData = [];

  const filterIntoMonths = (type: string) => {
    let jobByType;
    let data;
    let datesInData;
    switch (type) {
      case 'reactive':
        data = reactiveData;
        jobByType = jobsList.reactive;
        datesInData = reactiveDatesInData;
        break;
      case 'planned':
        data = plannedData;
        jobByType = jobsList.planned;
        datesInData = plannedDatesInData;
        break;
    }
    for (let i = 0; i < data.length; i++) {
      let dateMomentObject =
        type === 'reactive'
          ? moment(data[i].SLAOnsiteEstimated + ' ' + data[i].SLAOnsiteEstimatedTime, 'YYYY-MM-DD H:mm:ss')
          : moment(data[i].RoutineDueDate);
      let date = dateMomentObject.format('MMMM') + ' ' + dateMomentObject.format('YYYY');
      let jobInMonth;
      let oldList = jobByType[date];
      if (oldList === undefined) {
        jobInMonth = [data[i]];
        datesInData.push(date);
      } else {
        jobInMonth = oldList.concat(data[i]);
      }
      jobByType[date] = jobInMonth;
    }
  };

  filterIntoMonths('reactive');
  filterIntoMonths('planned');

  let chosenDate;

  if (reactiveDatesInData.includes(currentDate)) {
    chosenDate = currentDate;
  } else {
    chosenDate = reactiveDatesInData[0];
  }

  let dates ={
    reactive: reactiveDatesInData,
    planned: plannedDatesInData,
  };

  let api;

  if (reactiveDatesInData.length || plannedDatesInData.length) api = apiStatus.POPULATED;
  else api = apiStatus.EMPTY;

  return {
    apiStatus: api,
    chosenDate: chosenDate,
    dates: dates,
    jobsList: jobsList,
  };
};