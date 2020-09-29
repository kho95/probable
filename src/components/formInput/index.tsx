import React from 'react';

import {
  InputTitle,
  InputCtn
} from "./index.style";

const FormInput: React.FC<any> = (props) => {

  const {children, title} = props;

  return (
    <InputCtn>
      <InputTitle>{title}</InputTitle>
      {children}
    </InputCtn>
  )
};

export default FormInput;