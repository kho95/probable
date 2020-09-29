import React from 'react'; // importing FunctionComponent
import { StyledLabel } from './index.style';

interface CheckBoxProps {
  active?: boolean;
  children?: React.ReactChild;
  text: string;
  value: string;
  groupName: string;
  onClick?: (event: React.InputHTMLAttributes<HTMLInputElement>) => void;
}

const FilterRadio: React.FC<CheckBoxProps> = ({
  active,
  children,
  groupName,
  onClick,
  text,
  value,
  onMouseEnter,
  onMouseLeave,
}: CheckBoxProps): React.ReactElement => {
  return (
    <StyledLabel active={active}  onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter} >
      <input type="radio" name={groupName} defaultChecked={active} value={value} onClick={onClick}/>
      {children}
      <span>{text}</span>
    </StyledLabel>
  );
};

export default FilterRadio;
