import React from 'react'; // importing FunctionComponent
import { InputCtn, InputTextBox, InputTitle, DataList } from './index.style';

interface CheckBoxProps {
  text: string;
  placeholder: string;
  value: string;
  onChange?: (event: React.InputHTMLAttributes<HTMLInputElement>) => void;
  id: string;
}

const DataListInput: React.FC<CheckBoxProps> = (props): React.ReactElement => {
  const { onChange, text, placeholder, value, id } = props;

  return (
    <InputCtn>
      <InputTitle>{text}</InputTitle>
      <InputTextBox type="text" name={id} value={value} onChange={onChange} list={id} />
      <DataList id={id}>{props.children}</DataList>
    </InputCtn>
  );
};

export default DataListInput;
