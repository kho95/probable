import { useState } from 'react';
import axios from 'axios';

const LOGIN_URL = '/.netlify/functions/login';

const LoginRequest = (callback: any) => {
  const [inputs, setInputs] = useState({ fullName: '', email: '', phoneNumber: '', message: '' });

  const fetchData = async () => {
    try {
      const response = await axios({
        method: 'POST',
        url: LOGIN_URL,
        headers: {
          'fullName': inputs.fullName,
          'email': inputs.email,
          'phoneNumber': inputs.phoneNumber,
          'message': inputs.message,
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
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default LoginRequest;
