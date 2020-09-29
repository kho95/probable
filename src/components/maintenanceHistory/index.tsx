import React, {useContext, useState} from 'react'

import AssetListContext from '../../app/context/assetListContext';
import ICONS from "../../assets/icons";

import {
  Arrow,
  DateCtn,
  JobListCtn,
  MaintanenceTabText,
  MaintenanceHistoryCtn,
  MaintenanceHistoryTabCtn,
  MaintenanceTab,
  NumberOfJob,
  SelectedDate
} from "./index.style";

interface maintenanceHistory {
  currentApiStatus: number,
  selectedTab: string,
  handleTabChange: any,
  updateDate: any,
  numJobs: number,
  jobsList: object,
  chosenDate: string,
  getJobsList: any,
}

const TABS = ['REACTIVE','PLANNED'];

const MaintenanceHistory: React.FC<maintenanceHistory> = ({currentApiStatus, handleTabChange, updateDate, numJobs,chosenDate, jobsList, getJobsList}) => {
  const [ selectedTab, setSelectedTab ] = useState('reactive');
  const { openAssetDetails } = useContext(AssetListContext);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
    handleTabChange(tab);
  };

  return (
    <MaintenanceHistoryCtn>
      <MaintenanceHistoryTabCtn>
        {TABS.map(tab => <MaintenanceTab selected={selectedTab === tab.toLowerCase()} onClick={() => handleTabClick(tab.toLowerCase())}>
          <MaintanenceTabText>{tab}</MaintanenceTabText>
        </MaintenanceTab>)}
      </MaintenanceHistoryTabCtn>
      {openAssetDetails && jobsList != undefined && Object.keys(jobsList[selectedTab]).length > 0 && (
        <DateCtn>
          <Arrow direction="left" onClick={() => updateDate('previous')}>
            <ICONS.chevronRight />
          </Arrow>
          <SelectedDate>
            {chosenDate}
            <br />
            <NumberOfJob>
              <b>
                {numJobs}&nbsp;{selectedTab}&nbsp;
              </b>
              <p>maintenance</p>
            </NumberOfJob>
          </SelectedDate>
          <Arrow direction="right" onClick={() => updateDate('next')}>
            <ICONS.chevronRight />
          </Arrow>
        </DateCtn>
      )}
      {openAssetDetails && jobsList != undefined && <JobListCtn>{getJobsList()}</JobListCtn>}
    </MaintenanceHistoryCtn>
  );
};

export default MaintenanceHistory;