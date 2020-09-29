import React, {useState} from 'react';

import ICONS from '../../assets/icons'

import {
  DropDownCtn
} from "./index.style";

const FilterDropDown = (props) => {
  const [ open, setOpen ] = useState(false);
  const { children } = props;

  return (
    <DropDownCtn open={open} onClick={() => setOpen(!open)}>
      <div><ICONS.chevronDown/></div>
      <div onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </DropDownCtn>
  )
};

export default FilterDropDown;