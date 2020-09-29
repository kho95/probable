import React from 'react';

import {
  FormSection,
  FormNumber,
  FormSectionTitle,
} from "./index.style";

const FormInputSection: React.FC<any> = (props) => {

  const { children, number, title } = props;

  return (
    <FormSection>
      <FormSectionTitle>{title}</FormSectionTitle>
      <FormNumber>{number}</FormNumber>
      {children}
    </FormSection>
  )
};

export default FormInputSection;