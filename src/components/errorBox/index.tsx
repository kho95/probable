import React from 'react'

import { ErrorBoxCtn, ErrorCtn, ErrorText } from './index.style'

interface errorBox {
  text: string,
  active: boolean,
}

const ErrorBox: React.FC<errorBox> = ({ text, active }) => {
  return <ErrorCtn>
    <ErrorBoxCtn active={active}>
      <ErrorText>
        {text}
      </ErrorText>
    </ErrorBoxCtn>
  </ErrorCtn>
};

export default ErrorBox;