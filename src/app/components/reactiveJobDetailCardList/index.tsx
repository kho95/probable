import React, { useContext, useEffect, useState } from 'react';

import CardsList from '../Lists/cardList';
import AssetDetailModal from '../assetDetailModal';

import AssetListContext from '../../context/assetListContext';

const ReactiveJobDetailCardList: React.FC<any> = props => {
  const { assetList, location, clickControl } = props;

  const { selectedAsset, clearAssetDetails } = useContext(AssetListContext);

  const [modalActive, setModalActive] = useState();

  const handleClick = () => {
    setModalActive(!modalActive);
  };

  useEffect(() => {

    if(selectedAsset.SerialNo) {
      clearAssetDetails();
    }

  },[]);

  useEffect(() => {
    if (!modalActive && modalActive != undefined) {
      clearAssetDetails();
    }
  }, [modalActive]);

  return (
    <div>
      <CardsList itemList={assetList} page={location} type="asset" clickControl={handleClick}/>
      {modalActive && <AssetDetailModal data={selectedAsset} active={modalActive} handleModal={handleClick}/>}
    </div>
  );
};

export default ReactiveJobDetailCardList;
