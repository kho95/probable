import React, {useState, useContext, useEffect} from 'react';

import AssetListContext from '../../app/context/assetListContext';

import COLORS from '../../assets/styles/config/colors'
import ICON from '../../assets/icons'

import {
  RatingCtn,
  RatingBar,
  RatingBody,
  Arrow,
  SliderBar,
} from "./index.style";

interface RatingBarProps {
  selectedRating: number,
  search: boolean,
}

const RatingConditions = {
  "5 (VERY POOR)": {
    name: 'VERY POOR',
    color: "#EF2015",
    rating: 1,
  },
  "4 (POOR)": {
    name: 'POOR',
    color: COLORS.slaPrimary.urgentlyUpcoming,
    rating: 2,
  },
  "3 (MODERATE)": {
    name: 'MODERATE',
    color: "#FBE019",
    rating: 3,
  },
  "2 (GOOD)":{
    name: 'GOOD',
    color: "#6BD45B",
    rating: 4,
  },
  "1 (VERY GOOD)": {
    name: "VERY GOOD",
    color: COLORS.slaPrimary.doneOnTime,
    rating: 5,
  }
};

const mapping = {
  1 : "5 (VERY POOR)",
  2 : "4 (POOR)",
  3: "3 (MODERATE)",
  4 : "2 (GOOD)",
  5: "1 (VERY GOOD)",
};

const ConditionRatingBar:React.FC<RatingBarProps> = ({selectedRating, search}) => {

  const { assetFilters, updateFilters } = useContext(AssetListContext);

  return (
    <RatingCtn search={search}>
      {Object.keys(RatingConditions).map((rating, index) => {
        const assetRating = selectedRating == rating;
        const [ searchSelected, setSearchSelected ] = useState(rating == selectedRating);

        const setConditionRating = (rating: number) => {
          if(!search) return;
          let newRating = rating;
          if(assetFilters.conditionFilter == rating) newRating = -1;
          
          updateFilters({
            ...assetFilters,
            conditionFilter: newRating,
          })
        };

        useEffect(() => {
          setSearchSelected(mapping[assetFilters.conditionFilter] == rating)
        },[assetFilters.conditionFilter]);

        return (
          <RatingBody onClick={() => setConditionRating(RatingConditions[rating].rating)} selected={search? searchSelected: assetRating}>
            <Arrow selected={search? searchSelected: assetRating} search={search}>
              {!search && <ICON.navigation/>}
              {search && <SliderBar/>}
            </Arrow>
            <RatingBar color={RatingConditions[rating].color} selected={search? searchSelected: assetRating}><span>{5-index}</span></RatingBar>
            <p>{RatingConditions[rating].name}</p>
          </RatingBody>);
      })}
    </RatingCtn>
  )

};

export default ConditionRatingBar;