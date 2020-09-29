import React, { useState, useEffect, useContext } from 'react';

import AssetListContext from '../../app/context/assetListContext';

import ICONS from '../../assets/icons';
import COLORS from '../../assets/styles/config/colors';

import { RatingCtn, SvgCtn } from './index.style';

interface conditionRating {
  rating?: string;
  search?: boolean;
}

const ConditionRatingStar: React.FC<conditionRating> = (props): React.ReactElement => {
  const { rating, search } = props;

  const { updateFilters, assetFilters } = useContext(AssetListContext);
  const [searchColor, setColor] = useState(COLORS.slaPrimary.doneOnTime);
  const [searchRateSelected, setSearchRateSelected] = useState(rating);

  const getColor = number => {
    if (number == 5 || number == 4) return COLORS.slaPrimary.doneOnTime;
    if (number === 3) return COLORS.slaPrimary.urgentlyUpcoming;
    if (number <= 2) return COLORS.slaPrimary.missedDeadline;
  };

  useEffect(() => {
    setSearchRateSelected(rating);
  }, [rating]);

  const handleFilterRating = number => {
    if (number != searchRateSelected) {
      updateFilters({
        conditionFilter: number,
      });
      setSearchRateSelected(number);
    } else {
      updateFilters({
        conditionFilter: number - 1,
      });
      setSearchRateSelected(number - 1);
    }
    if (number <= 1) setColor(COLORS.slaPrimary.missedDeadline);
    if (number >= 2 && number < 4) setColor(COLORS.slaPrimary.urgentlyUpcoming);
    if (number >= 4 && number < 6) setColor(COLORS.slaPrimary.doneOnTime);
  };

  const setColoredStars = () => {
    let elements = [];

    const getStar = (color, index) => {
      return (
        <SvgCtn
          color={color}
          search={search}
          onClick={() => {
            search ? handleFilterRating(index + 1) : null;
          }}
        >
          <ICONS.star />
        </SvgCtn>
      );
    };
    for (let i = 0; i < 5; i++) {
      let star;
      if (!search && i < rating) {
        star = getStar(getColor(rating), i);
      } else if (search && i < searchRateSelected) {
        star = getStar(searchColor, i);
      } else if (i >= rating || i >= searchRateSelected || rating == 0 || rating == undefined) {
        star = getStar('', i);
      }
      elements.push(star);
    }
    return elements;
  };

  return <RatingCtn search={search}>{setColoredStars()}</RatingCtn>;
};

export default ConditionRatingStar;
