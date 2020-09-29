/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { DropdownBtn, DropdownDraw, DropdownOptions } from './index.style';
import _ from 'lodash'

import OPTIONS from './options';

import ICONS from '../../assets/icons';

interface DropdownProps {
  optionList: 'sort' | 'dateFilter';
  defaultVal: number;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ optionList, defaultVal, onChange }): React.ReactElement => {
  const [selectedVal, setSelectedVal] = useState();
  const [selected, setSelected] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [dropDownList, setDropDownList] = useState(() => {

    let currentOptions;

    if(typeof optionList == "string") {
      currentOptions = OPTIONS[optionList];
      setSelectedVal(currentOptions[defaultVal].value);
      setSelected(currentOptions[defaultVal].label);
    } else {
      currentOptions = optionList;
      setSelectedVal(currentOptions[defaultVal]);
      setSelected(currentOptions[defaultVal]);
    }

    return currentOptions.map(option => {
      let key, active, label;
      if(_.isObject(option)) {
        key = option.value;
        active = option.value == selectedVal;
        label = option.label;
      } else {
        key = option;
        active = option== selectedVal;
        label = option;
      }

      return <DropdownOptions
        key={key}
        active={active}
        onClick={(e): void => {
          e.preventDefault();
          setSelected(label);
          setSelectedVal(key);
        }}
      >
        {label}
      </DropdownOptions>
    });
  });

  useEffect(() => {
    onChange(selectedVal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedVal]);


  return (
    <React.Fragment>
      <DropdownBtn
        open={openDropdown}
        onClick={(e): void => {
          e.preventDefault();
          setOpenDropdown(!openDropdown);
        }}
      >
        {selected}
        <ICONS.chevronDown />
      </DropdownBtn>
      <DropdownDraw
        open={openDropdown}
        onClick={(e): void => {
          e.preventDefault();
          setOpenDropdown(false);
        }}
      >
        {dropDownList}
      </DropdownDraw>
    </React.Fragment>
  );
};

export default Dropdown;
