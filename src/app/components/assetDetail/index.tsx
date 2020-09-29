import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';

import LocationLabel from '../../../components/locationLabel';
import ConditionRatingBar from "../../../components/conditionRatingBar";
import AssetDetailJobCardList from '../Lists/assetDetailJobCardList';
import DetailsTable from '../../../components/detailsTable';
import MaintenanceHistory from "../../../components/maintenanceHistory";
import ApiStatus, {CALLING,EMPTY,POPULATED} from "../../../components/apiStatus";
import {tableData} from "../../../hooks/useFilterHelper";
import APIHelper from "../../../hooks/useAPIHelper";

import AssetListContext from '../../context/assetListContext';
import AppStateContext from '../../context/appStateContext';
import GetServiceCallFunction from '../../../functions/GetServiceCallsFunction';
import useTextCorrection from '../../../hooks/useTextCorrection';
import GetPMCallsFunction from '../../../functions/GetPMServiceCallsFunction';
import GetAssetAttributes from "../../../functions/GetAssetAttributes";

import {
  ContentCtn,
  HeadingDescCtn,
  HeadingDesc,
  AssetDetailCtn,
  AssetTitle,
  SectionTitle,
  ButtonCtn,
} from './index.style';
import { filterData, getNewDate } from "./helperFunctions";
import ExportButton from "../../../components/exportButton";

interface ServiceProps {
  location?: string;
}

const currentDate = moment().format('MMMM') + ' ' + moment().format('YYYY');


const AssetDetails: React.FC<ServiceProps> = (jobDetails): React.ReactElement => {
  const { selectedAsset, clearAssetDetails, updateAssetAttributes } = useContext(AssetListContext);
  const { token, selectedCustomerId } = useContext(AppStateContext);

  const [selectedTab, updateSelectedTab] = useState('reactive');
  const [numJobs, setNumJobs] = useState(0);
  const [chosenDate, setChosenDate] = useState();
  const [detailJobsList, setDetailJobsList] = useState({
    planned: {},
    reactive: {},
  });
  const [dates, setDates] = useState({});
  const [currentApiStatus, setCurrentApiStatus] = useState(CALLING);

  const { filterText} = useTextCorrection();
  const getReactivePlannedData = APIHelper();
  const tableHeadings = tableData['assets'];

  const updateDate = (command: string) => {
    let newDate = getNewDate(dates,selectedTab,chosenDate,command);
    setChosenDate(newDate);
    setNumJobs(detailJobsList[selectedTab][newDate].length);
  };

  const handleTabClick = (tab: string) => {
    updateSelectedTab(tab);
    setChosenDate(dates[tab][0]);
  };

  const populateJobData = async () => {
    let filter = `<SerialNo><Like>${selectedAsset.SerialNo}</Like></SerialNo>`;
    setCurrentApiStatus(CALLING);
    let reactiveData = [];
    let plannedData = [];
    await getReactivePlannedData.run(GetServiceCallFunction, (data: []) => {reactiveData = data}, [`<Filters>` + filter + `</Filters>`, token, selectedCustomerId]);
    await getReactivePlannedData.run(GetPMCallsFunction, (data: []) => {plannedData = data},[filter, token, selectedCustomerId]);
    await getReactivePlannedData.run(GetAssetAttributes, (data: []) => updateAssetAttributes(data), [token, selectedAsset.SerialNo] );
    return {
      reactiveData: reactiveData,
      plannedData: plannedData,
    }
  };

  const getJobList = () => {
    if (Object.keys(detailJobsList[selectedTab]).length == 0) {
      return <p>There are no jobs for this asset.</p>;
    }
    let jobList = <AssetDetailJobCardList type={selectedTab} jobList={detailJobsList[selectedTab][chosenDate]} />;
    if (detailJobsList[selectedTab][chosenDate] != undefined) return jobList;
  };

  useEffect(() => {
    setNumJobs(0);
    updateSelectedTab('reactive');

    if (selectedAsset.SerialNo == '') {
      setCurrentApiStatus(EMPTY);
      return;
    };
    setDetailJobsList({
      planned: {},
      reactive: {},
    });

    populateJobData().then(data => {

      let filteredData = filterData(data.reactiveData, data.plannedData, currentDate);
      setDetailJobsList(filteredData.jobsList);
      setChosenDate(filteredData.chosenDate);
      setDates(filteredData.dates);
      setCurrentApiStatus(filteredData.apiStatus);

    });

  }, [selectedAsset.SerialNo]);

  useEffect(() => {
    updateJobNumDetail();
  }, [detailJobsList, chosenDate]);

  useEffect(() => {
    updateJobNumDetail();
  },[chosenDate, selectedTab]);

  useEffect(() => {
    return () => {
      clearAssetDetails();
    }
  },[]);

  const updateJobNumDetail = () => {
    if (
      detailJobsList != undefined &&
      detailJobsList[selectedTab] != undefined &&
      detailJobsList[selectedTab][chosenDate] != undefined
    ) {
      setNumJobs(detailJobsList[selectedTab][chosenDate].length);
    }
  };

  return (
    <AssetDetailCtn>
      <ContentCtn>
        {window.innerWidth> 1024 && <React.Fragment>
          <AssetTitle>{filterText(selectedAsset.ItemDescription)}</AssetTitle>
          <HeadingDescCtn>
            <HeadingDesc>
              <LocationLabel
                location={
                  selectedAsset.SerialLocationText == ''
                    ? selectedAsset.ContractSiteDesc
                    : selectedAsset.SerialLocationText
                }
              />
            </HeadingDesc>
          <HeadingDesc>
            <ConditionRatingBar selectedRating={selectedAsset.Condition} search={false}/>
          </HeadingDesc>
        </HeadingDescCtn>
        </React.Fragment>}
        <div>
          <SectionTitle>Maintenance History</SectionTitle>
          <ApiStatus status={currentApiStatus} type="bar" disable={false}>
            <MaintenanceHistory
              currentApiStatus={currentApiStatus}
              handleTabChange={handleTabClick}
              updateDate={updateDate}
              numJobs={numJobs}
              jobsList={detailJobsList}
              chosenDate={chosenDate}
              getJobsList={getJobList}/>
          </ApiStatus>
        </div>
        <div>
          <SectionTitle>Asset details</SectionTitle>
          <DetailsTable headings={tableHeadings} tableData={selectedAsset}/>
        </div>
        <ButtonCtn>
          <ExportButton data={selectedAsset} columns={Object.values(tableHeadings)}/>
        </ButtonCtn>
      </ContentCtn>
    </AssetDetailCtn>
  );
};

export default AssetDetails;
