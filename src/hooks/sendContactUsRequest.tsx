import { useState } from 'react';
import axios from 'axios';

const Email_URL = '/.netlify/functions/sendEmail';

const SendEmailRequest = (callback: any) => {
  const [inputs, setInputs] = useState({ fullName: '', email: '', phoneNumber: '', message: '', captcha: '' });

  const fetchData = async () => {
    console.log(inputs.captcha);
    if (!inputs.captcha) {
      return false;
    }

    try {
      const response = await axios({
        method: 'POST',
        url: Email_URL,
        data: {
          'fullName': inputs.fullName,
          'email': inputs.email,
          'phoneNumber': inputs.phoneNumber,
          'message': inputs.message,
          'captcha': inputs.captcha,
        },
      });

      if (response.status === 200) {
        console.log('hello');
        return true;
      }

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const handleSubmit = async (event: any) => {
    if (event) {
      event.preventDefault();
      const res = await fetchData();
      callback(res);
    }
  };

  const handleInputChange = (event: any) => {
    event.persist();
    setInputs(inputChange => ({ ...inputChange, [event.target.name]: event.target.value }));
    console.log(inputs);
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default SendEmailRequest;
