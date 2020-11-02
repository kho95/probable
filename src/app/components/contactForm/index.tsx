import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import LoginRequest from '../../../hooks/sendContactUsRequest';
import {
  ErrorMessage,
  InputArea,
  InputBox,
  Form,
  SubmitButton,
} from './index.style';

const ContactForm: React.FC<any> = (...restProps): React.ReactElement => {

  const [errorDisp, setErrorDisp] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const callback = (success: boolean) => {
    if (!success) {
      setErrorDisp(true);
      console.log('Error!');
    } else {
      setErrorDisp(false);
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
      {errorDisp ?
        <ErrorMessage>Unable to send your message. Please check if all fields have been filled or try again later.</ErrorMessage> :
        <></>
      }
      <InputBox type='text' name='fullName' placeholder='Full name' onChange={handleInputChange} />
      <InputBox type='email' name='email' placeholder='Email' onChange={handleInputChange} />
      <InputBox type='tel' name='phoneNumber' placeholder='Phone number' onChange={handleInputChange} />
      <InputArea name='message' placeholder='Message' onChange={handleInputChange} />
      <ReCAPTCHA
        name='captcha'
        sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY}
        onChange={handleInputChange}
      />
      <SubmitButton type='submit' value='Send Message' disabled={submitted} />
    </Form>
  );
};

export default ContactForm;
