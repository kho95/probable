import React from 'react'; // importing FunctionComponent
import { StyledButton } from './index.style';

interface ButtonProps {
  text: string;
  children?: React.ReactChild;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  active?: boolean;
}

const FilterButton: React.FC<ButtonProps> = ({
  active,
  children,
  handleClick,
  text,
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton active={active} onClick={handleClick}>
      {children}
      <span>{text}</span>
    </StyledButton>
  );
};

export default FilterButton;
