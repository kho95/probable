import React from 'react';
import ICONS from '../../../assets/icons';
import ReactiveJob from "../../interfaces/reactiveJob";

export const slaUpcoming = {
  upcoming: {
    count: 0,
    title: "Upcoming",
    icon: <ICONS.arrowUpRight/>,
    primaryColor: "#1f1f90",
    secondaryColor: "#e3e5f1",
  },
  upcomingToday: {
    count: 0,
    title: "Upcoming today",
    icon: <ICONS.disc/>,
    primaryColor: "#d69822",
    secondaryColor: "#f6f2e5",
  },
  urgentlyUpcoming: {
    count: 0,
    title: "Urgently upcoming",
    icon: <ICONS.zap/>,
    primaryColor: "#e05c16",
    secondaryColor: "rgba(224, 92, 22, 0.1)",
  },
  total: 0,
};

export const slaPassed = {
  missedDeadline: {
    count: 0,
    title: 'Missed deadline',
    icon: <ICONS.x />,
    primaryColor:"#a81c1c",
    secondaryColor:"#f1e4e4",
  },
  doneOnTime: {
    count: 0,
    title: 'Done on time',
    icon: <ICONS.check/>,
    primaryColor:"#31af6b",
    secondaryColor:"#e5f4ed",
  },
  total:0,
};

export const computeSlaSummary = (jobs: ReactiveJob[], type: string) => {
  let slaSummaryStats = {};
  let accessor;

  if(type == 'upcoming') {
    slaSummaryStats = _.cloneDeep(slaUpcoming);
    accessor = 'SLAOnsite';
  } else if(type == 'onsite') {
    slaSummaryStats = _.cloneDeep(slaPassed);
    accessor = 'SLAOnsite';
  } else if (type == 'complete') {
    slaSummaryStats = _.cloneDeep(slaPassed);
    accessor = 'SLAComplete';
  }

  jobs.map(job => {
    if(!Object.keys(slaSummaryStats).includes(job[accessor])) return;
    slaSummaryStats[job[accessor]].count += 1;
    slaSummaryStats['total'] += 1;
  });

  return slaSummaryStats;
};