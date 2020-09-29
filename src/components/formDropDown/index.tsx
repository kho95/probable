import React from 'react';

import {
  DropDown
} from "./index.style";

const FormDropDown = (props) => {

  const { children, name, id, value, onChange } = props;

  return (
    <DropDown name={name} id={id} value={value} onChange={onChange}>
      {children}
    </DropDown>
  )
};

export default FormDropDown;