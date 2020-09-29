import React from 'react'; // importing FunctionComponent
import { StyledLayout } from './index.style';

interface LayoutContainerProps {
  children?: any;
  disabled?: boolean;
  isPrimary?: boolean;
  padding?: boolean;
}

const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children = 'defaultLayout',
  isPrimary = false,
  padding = false,
  disabled = false,
}: LayoutContainerProps): React.ReactElement => {
  return (
    <StyledLayout isPrimary={isPrimary} padding={padding} disabled={disabled}>
      {children}
    </StyledLayout>
  );
};

export default LayoutContainer;
