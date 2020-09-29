import React, {useState} from 'react';

import { FilterSectionCtn, FilterHeadingCtn, ShowHideBtn, FilterButtons } from "./index.style";
import ICONS from "../../assets/icons";

interface filterSection {
  title: string,
}

const FilterSection: React.FC<filterSection> = (props) => {

  const [ tabHide, setTabHide ] = useState(true);
  const { title } = props;

  return (
    <FilterSectionCtn>
      <FilterHeadingCtn
        onClick={(e): void => {
          e.preventDefault();
          setTabHide(!tabHide);
        }}
        >
        <span>{title}</span>
      <ShowHideBtn hide={tabHide}>
        <ICONS.chevronUp />
      </ShowHideBtn>
      </FilterHeadingCtn>
      <FilterButtons hide={tabHide}>
        {props.children}
      </FilterButtons>
    </FilterSectionCtn>
  )
};

export default FilterSection;