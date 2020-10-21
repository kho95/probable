import React, { useState } from 'react';

import LoginRequest from '../../../hooks/loginRequest';
import {
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
      <span>Full name</span>
      <InputBox type="text" name="fullName" onChange={handleInputChange} />
      <span>Email</span>
      <InputBox type="email" name="email" onChange={handleInputChange} />
      <span>Phone number</span>
      <InputBox type="tel" name="phoneNumber" onChange={handleInputChange} />
      <span>Message</span>
      <InputBox type="text" name="message" onChange={handleInputChange} />
      <SubmitButton type="submit" value="Submit" disabled={submitted} />
    </Form>
  );
};

export default ContactForm;
