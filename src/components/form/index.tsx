import React from 'react'; // importing FunctionComponent
import { StyledForm } from './index.style';

const Form: React.FC = ({ children = 'defaultLayout' }): React.ReactElement => {
  return <StyledForm>{children}</StyledForm>;
};

export default Form;
