import React, {useState, useEffect, useContext} from 'react';

import AppStateContext from "../../context/appStateContext";

import FormInputSection from '../../../components/formInputSection';
import FormInput from '../../../components/formInput';
import FormDropDown from "../../../components/formDropDown";
import GetContractUnitsFunction from "../../../functions/GetContractUnitsFunction";
import ApiStatus, {CALLING,POPULATED,EMPTY} from "../../../components/apiStatus";

interface AssetFormInputProps {
  inputs: {
    asset,
    contractNo,
  },
  handleMultipleInput: (selectedAsset, name) => {},
}

const AssetFormInput: React.FC<AssetFormInputProps> = ({inputs, handleMultipleInput}) => {
  const [ filteredAssets, setFilteredAssets ] = useState([]);
  const [ assets, setAssets ] = useState([]);
  const [apiStatus, setApiStatus] = useState(CALLING);
  const { token, selectedCustomerId } = useContext(AppStateContext);

  const changeAssetInfo = event => {
    let selectedAsset;

    if (event.target.value != '') {
      selectedAsset = assets.filter(asset => {
        return asset.SerialNo == event.target.value;
      })[0];
    } else {
      selectedAsset = { ItemCode: '', ItemDescription: '', SerialLocationText: '', SerialNo: '', UnitLocationCode: '' };
    }

    handleMultipleInput(selectedAsset, 'asset');
  };

  const updateFilteredAssets = data => {
    let assetArray = data.filter(item => {
      return item.ContractNo == inputs.contractNo;
    });
    assetArray.push({ ItemCode: '', ItemDescription: 'Asset details unknown', SerialLocationText: '', SerialNo: '', UnitLocationCode: '' });
    return assetArray;
  };

  const contractUnitsCallback = data => {

    if(data == 'timeout') {
      setAssets([]);
      setFilteredAssets([]);
      setApiStatus(EMPTY);
      return;
    }

    let assetData;
    let filteredData;

    if(_.isArray(data)) {
      assetData = data;
      filteredData = updateFilteredAssets(data)
    }else {
      assetData = [data];
      filteredData = updateFilteredAssets([data])
    }

    setAssets(assetData);
    setFilteredAssets(filteredData);

    setApiStatus(POPULATED);
  };

  useEffect(()=> {
    GetContractUnitsFunction('', token, selectedCustomerId, contractUnitsCallback);
  },[]);

  useEffect(() => {
    setFilteredAssets(updateFilteredAssets(assets));
  },[inputs.contractNo]);

  return (
    <FormInputSection title='Asset' number={2}>
      <ApiStatus status={apiStatus} disable='' type='bar' message='Retrieving Asset information'>
        <FormInput title='Asset serial number & name'>
          <FormDropDown name="asset" id="asset" value={inputs.asset} onChange={changeAssetInfo} disabled={filteredAssets.length == 0}>
            {filteredAssets.map((item, index) => {
              return <option value={item.SerialNo}>{item.SerialNo}: {item.ItemDescription}</option>;
            })}
          </FormDropDown>
        </FormInput>
      </ApiStatus>
    </FormInputSection>
  )
};

export default AssetFormInput;