import React, {useContext, useMemo, useState} from 'react';
import moment from "moment";

import AppStateContext from "../../app/context/appStateContext";

import Asset from '../../app/interfaces/asset'
import ScheduleSelectFilter, {selectFilterMethod} from "../scheduleSelectFilter";
import ScheduleFuzzyFilter, {fuzzyFilterMethod} from "../scheduleFuzzyFilter";

const mapping = {
  D1: {
    display: 'D',
    difference: 1,
  },
  D7: {
    display: 'W',
    difference: 1,
  },
  F1: {
    display: 'F',
    difference: 1,
  },
  M1: {
    display: 'M',
    difference: 1,
  },
  M2: {
    display: 'M2',
    difference: 2,
  },
  M3: {
    display: 'Q',
    difference: 3,
  },
  M4: {
    display: 'M4',
    difference: 4,
  },
  M6: {
    display: 'H',
    difference: 6,
  },
  Y1: {
    display: 'A',
    difference: 12,
  },
  Y2: {
    display: 'Y2',
    difference: 24,
  },
  Y3: {
    display: 'Y3',
    difference: 36,
  },
  Y4: {
    display: 'Y4',
    difference: 48,
  },
  Y5: {
    display: 'Y5',
    difference: 60,
  },
  Y6: {
    display: 'Y6',
    difference: 72,
  }
};

const priority = {
  D1: -3,
  D7: -2,
  F1: -1,
  M1: 0,
  M2: 2,
  M3: 3,
  M4: 4,
  M6: 5,
  Y1: 6,
  Y2: 7,
  Y3: 8,
  Y4: 9,
  Y5: 10,
  Y6: 11,
};

const DATERANGE = 13;

export const getMonths = () => {
  let monthArray = [];
  let currentMonth = moment().month()+1;
  let currentYear = moment().year();

  for(let i =0; i<DATERANGE;i++) {

    if(currentMonth <= 11) {
      let date = moment.monthsShort(currentMonth) + " " + currentYear;
      monthArray.push({
        Header: date,
        accessor: date,
      });
      currentMonth++;
    } else {
      currentYear = moment().year() + 1;
      let date = moment.monthsShort(0) + " " + currentYear;
      monthArray.push({
        Header: date,
        accessor: date,
      });
      currentMonth = 1;
    }
  }
  return monthArray;
};

export const getColumns = () => {
  const [ months, setMonths ] = useState(() => {return getMonths()});

  return useMemo(() => [
    {
      Header: 'Information',
      columns: [
        {
          Header: 'Contract Number',
          accessor: 'ContractNo',
          Filter: ScheduleSelectFilter,
          filter: selectFilterMethod,
        },
        {
          Header: 'Item Description',
          accessor: 'ItemDescription',
          Filter: ScheduleSelectFilter,
          filter: selectFilterMethod,
        },
        {
          Header: 'Serial Number',
          accessor: 'SerialNo',
          Filter: ScheduleFuzzyFilter,
          filter: fuzzyFilterMethod,
        },
        {
          Header: 'Location',
          accessor: 'UnitLocation',
          Filter: ScheduleFuzzyFilter,
          filter: fuzzyFilterMethod,
        },
        {
          Header: 'Area Served',
          accessor: 'SerialLocationText',
          Filter: ScheduleFuzzyFilter,
          filter: fuzzyFilterMethod,
        }
      ]
    },
    {
      Header: 'Schedule',
      columns: months,
    }
  ],[]);
};

export const getAssetData = (assetData: Asset[]) => {

  const { contractList, selectedCustomerId } = useContext(AppStateContext);

  const computeSchedule = (nextServices: {
    ContractNo: string,
    RoutineCode: string,
    NextServiceDate: string,
  }[]) => {
    let scheduleTable = [[],[],[],[],[],[],[],[],[],[],[],[],[]];
    let result = ["","","","","","","","","","","","",""];

    if(nextServices != undefined) {

      if (!_.isArray(nextServices)) nextServices = [nextServices];
      //Next 11 months
      nextServices.map(service => {

        let monthDifference = moment(service.NextServiceDate.substr(0,7),'YYYY-MM').diff(moment().add(1,'month').startOf('month'), 'months', true);
        let newMonthDifference = monthDifference > 0 && monthDifference < 1? 0: Math.ceil(monthDifference);

        if (Number.isNaN(newMonthDifference)) return;

        if(newMonthDifference < 0) return;

        for (let i = newMonthDifference; i < DATERANGE; i += mapping[service.RoutineCode].difference) {
          if (i > DATERANGE-1) break;

          let existingSchedule = scheduleTable[i];

          if(priority[service.RoutineCode] < 0) {
            scheduleTable[i].push(service.RoutineCode);
          } else if(['D1','D7','F1'].includes(existingSchedule[existingSchedule.length-1])) {
            scheduleTable[i].push(service.RoutineCode);
          } else if(priority[existingSchedule[existingSchedule.length-1]] < priority[service.RoutineCode]) {
            scheduleTable[i][scheduleTable[i].length-1] = service.RoutineCode;
          } else if(!existingSchedule.length) {
            scheduleTable[i][scheduleTable[i].length] = service.RoutineCode;
          }
        }
      });
    }

    for(let i =0; i<scheduleTable.length;i++) {
      let toSort = scheduleTable[i].sort((a: string, b: string) => {
        return priority[a]> priority[b];
      });
      for (let j =0; j<scheduleTable[i].length;j++) {
        result[i] = result[i] +  mapping[scheduleTable[i][j]].display + (j!=scheduleTable[i].length-1? ",":"");
      }
    }

    return result;
  };

  return useMemo(() => {

    if(assetData.length == 0) return [];

    let filteredData = assetData.filter((asset,index) => {

      if(asset.SerialFlag == "N" || asset.ContractUnitNextServices == "") return false;

      let routines = asset.ContractUnitNextServices.ContractUnitNextService;

      if(!_.isArray(routines)) routines = [routines];
      for(let i =0;i<routines.length;i++) {
        if(!Object.keys(priority).includes(routines[i].RoutineCode)) return false;
      }

      return Object.keys(contractList[selectedCustomerId]).includes(asset.ContractNo);
    });

    return filteredData.map(asset => {
      let schedule = computeSchedule(asset.ContractUnitNextServices.ContractUnitNextService);
      let scheduleObject = {};

      getMonths().map((item, index) => {
        scheduleObject[item.Header] = schedule[index];
      });

      return {
        SerialNo: asset.SerialNo,
        ItemDescription: asset.ItemDescription,
        UnitLocation: asset.UnitLocation,
        SerialLocationText: asset.SerialLocationText,
        ContractNo: contractList[selectedCustomerId][asset.ContractNo].Description,
        ...scheduleObject,
      }
    });
  },[assetData]);
};
