import { createContext } from 'react';
import {defaultAsset} from "./defaultContext";

const assetListContext = createContext({
  currentPage: '',
  openAssetDetails: false,
  sortBy: '',
  selectedAsset: defaultAsset,

  assetList: [],
  filteredAssetList: [],
  assetFilters: {
    conditionFilter: -1,
    buildingFilter: [],
    underMaintenanceFilter: [],
  },

  updateOpenAssetDetails: open => {},
  updateAssetList: newAssetList => {},
  setAssetDetails: newAsset => {},
  clearAssetDetails: () => {},
  updateSort: sort => {},
  updateFilters: filters => {},
  deleteFilters: () => {},
  clearAssetList: () => {},
  updateFilteredAssetList: newFilteredAssetList => {},
  deleteAllAssetInfo: ()=> {},
  updateAssetAttributes: (attrbutes: []) => {},
});

export default assetListContext