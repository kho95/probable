import React, { useContext, useEffect, useState } from 'react';

import AssetListContext from '../../context/assetListContext';
import AppStateContext from "../../context/appStateContext";
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import useAssetFilterForm from '../../../hooks/useAssetFilterForm';

import BuildingList from '../../../components/buildingList';
import ConditionRatingStar from '../../../components/conditionRatingStar';
import ConditionRatingBar from "../../../components/conditionRatingBar";
import SearchTab from "../../../components/searchTab";
import FilterSection from '../../../components/filterSection';

import {
  ClearBtn,
  CloseXBtn,
  Divider,
  FilterFormCtn,
  FilterHead,
} from './index.style';

import THEME from '../../../assets/styles/config';
import ICONS from '../../../assets/icons';
import {FiltersCtn} from "../searchTabRm/index.style";

const AssetSearchTab: React.FC<any> = (): React.ReactElement => {
  const { assetFilters, openAssetDetails, updateOpenAssetDetails } = useContext(AssetListContext);
  const { contractList, selectedCustomerId } = useContext(AppStateContext);

  const [searchRating, setSearchRating] = useState(assetFilters.conditionFilter);
  const { width } = useWindowDimensions();
  const [showSearchTab, setShowSearchTab] = useState(!(width < THEME.layout.desktopLarge.breakpoint));

  const { handleSubmit, clearFilter, handleBuildingChange, buildingFilters } = useAssetFilterForm();

  const toggleSearchTab = () => {
    if (!showSearchTab) {
      updateOpenAssetDetails(true);
    }
    setShowSearchTab(!showSearchTab);
  };

  const clearFilterInfo = () => {
    clearFilter();
    setSearchRating(0);
  };

  useEffect(() => {
    setSearchRating(assetFilters.conditionFilter);
  }, [assetFilters]);

  useEffect(() => {
    if (openAssetDetails) {
      setShowSearchTab(false);
    }
  }, [openAssetDetails]);

  return (
      <SearchTab submitFilter={handleSubmit} asset={true} showTab={showSearchTab}>
        <FilterFormCtn>
          <FiltersCtn>
            <FilterHead>
              <span>Search Criteria</span>
              <ClearBtn onClick={clearFilterInfo}>Clear</ClearBtn>
              <CloseXBtn onClick={toggleSearchTab}>
                <ICONS.x />
              </CloseXBtn>
            </FilterHead>
            <FilterSection title="CONDITION RATING">
              <ConditionRatingBar selectedRating={searchRating} search={true}/>
            </FilterSection>
            <Divider />
            <FilterSection title="BUILDING">
              <BuildingList
                item={contractList[selectedCustomerId]}
                change={handleBuildingChange}
                filter={buildingFilters}
              />
            </FilterSection>
          </FiltersCtn>
        </FilterFormCtn>
      </SearchTab>
  );
};

export default AssetSearchTab;
