import React, { useState } from 'react';

import LoginRequest from '../../../hooks/loginRequest';
import {
  InputArea,
  InputBox,
  Form,
  SubmitButton,
} from './index.style';

const ContactForm: React.FC<any> = (...restProps): React.ReactElement => {

  // const [errorDisp, setErrorDisp] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const callback = (success: boolean) => {
    if (!success) {
      //setErrorDisp(true);
      console.log('Error!');
    } else {
      console.log('Email sent!');
    }
  };

  const { handleInputChange, handleSubmit } = LoginRequest(callback);

  const submit = async (event: any) => {
    setSubmitted(true);
    await handleSubmit(event);
    setSubmitted(false);
  };

  return (
    <Form onSubmit={submit}>
      <InputBox type="text" name="fullName" placeholder="Full name" onChange={handleInputChange} />
      <InputBox type="email" name="email" placeholder="Email" onChange={handleInputChange} />
      <InputBox type="tel" name="phoneNumber" placeholder="Phone number" onChange={handleInputChange} />
      <InputArea type="text" name="message" placeholder="Message" onChange={handleInputChange} />
      <SubmitButton type="submit" value="Send Message" disabled={submitted} />
    </Form>
  );
};

export default ContactForm;
