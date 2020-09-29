/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import axios from 'axios';
import AppStateContext from '../app/context/appStateContext';

const CENTER_CODES_URL = '/.netlify/functions/ServiceGetCallActionCodes';

const GetActionCodes = (callback: any) => {
  const { token } = useContext(AppStateContext);

  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      try {
        const response = await axios({
          method: 'POST',
          url: CENTER_CODES_URL,
          headers: {
            'Content-Type': 'application/json',
            'X-Pronto-Token': token,
          },
          data: `<ServiceGetCallActionCodesResponse />`,
        });

        if (response.status === 200) {
          callback(response.data.ServiceGetCallActionCodesResponse.ServiceCallActionCodes.ServiceCallActionCode);
        } else {
          callback([]);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
};

export default GetActionCodes;
