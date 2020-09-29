import React, { useContext, useEffect, useState } from 'react';
import JobDetailModal from '../jobDetailModal';
import JobsCardList from '../Lists/cardList';

import JobListContext from '../../context/jobListContext';

const AssetDetailJobCardList: React.FC<any> = (props) => {
  const [ modalActive, setModalActive ] = useState(false);
  const { selectedReactiveJob, selectedPlannedJob, clearSelectedReactiveJob } = useContext(JobListContext);

  const { jobList, type } = props;
  const handleClick = () => {
    setModalActive(!modalActive);
  };

  useEffect(() => {
    if (!modalActive) {
      clearSelectedReactiveJob();
    }
  }, [modalActive]);

  return (
    <div>
      {type == 'reactive' ? (
        <JobsCardList itemList={jobList} page="assets" type={type} clickControl={handleClick}/>
      ) : (
        <JobsCardList itemList={jobList} page={'assets'} type={type} clickControl={handleClick}/>
      )}
      {modalActive && (
        <JobDetailModal
          active={modalActive}
          data={type == 'reactive' ? selectedReactiveJob : selectedPlannedJob}
          handleModal={handleClick}
          type={type}
          onClick={() => {}}
        />
      )}
    </div>
  );
};

export default AssetDetailJobCardList;
