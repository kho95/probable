import React, {useEffect} from 'react'; // importing FunctionComponent
import { InputCtn, InputTextBox, InputTitle } from './index.style';

interface CheckBoxProps {
  text: string;
  placeholder: string;
  value: string;
  onChange?: (event: React.InputHTMLAttributes<HTMLInputElement>) => void;
  active?: boolean;
  name: string;
  value: string;
  missing: boolean;
}

const InputText: React.FC<CheckBoxProps> = ({
  onChange,
  text,
  placeholder,
  value,
  name,
  missing,
}: CheckBoxProps): React.ReactElement => {

  return (
    <InputCtn>
      <InputTitle missing={missing}>{text}</InputTitle>
      <InputTextBox
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        missing={missing}
      />
    </InputCtn>
  );
};

export default InputText;
