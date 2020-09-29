import React, { useState } from 'react'; // importing FunctionComponent
import { StyledLabel } from './index.style';

interface CheckBoxProps {
  text: string;
  value: string;
  children?: React.ReactChild;
  onChange?: (event: React.InputHTMLAttributes<HTMLInputElement>) => void;
  checked?: boolean;
}

const FilterCheckbox: React.FC<CheckBoxProps> = ({
  checked,
  children,
  onChange,
  text,
  value,
}: CheckBoxProps): React.ReactElement => {
  return (
    <StyledLabel active={checked}>
      <input type="checkbox" checked={checked} name="filterCriteria" value={value} onChange={onChange} />
      {children}
      <span>{text}</span>
    </StyledLabel>
  );
};

export default FilterCheckbox;
