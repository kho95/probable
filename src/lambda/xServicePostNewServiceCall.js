// /* eslint-disable  */
// import axios from 'axios';
// import parser from 'fast-xml-parser';
// require('dotenv').config();

// export async function handler(event, context, callback) {
//   const GETSERVICECALLS_URL = process.env.API_URL + '.customerportal/api/xServicePostNewServiceCall';

//   console.log(event.body);
//   try {
//     const response = await axios({
//       method: 'post',
//       url: GETSERVICECALLS_URL,
//       headers: {
//         'X-Pronto-Content-Type': 'application/xml',
//         'X-Pronto-Token': event.headers['x-pronto-token']
//       },
//       data:
//         '<XServicePostNewServiceCallRequest>' +
//         '<ServiceCalls>' +
//         '<ServiceCall>' +
//         event.body +
//         '</ServiceCall>' +
//         '</ServiceCalls>' +
//         '</XServicePostNewServiceCallRequest>',
//     });

//     // parses XML to json for front end
//     const jsonData = await parser.parse(response.data)
//     console.log('jsonData ', jsonData)

//     return {
//       statusCode: response.status,
//       body: JSON.stringify(jsonData)
//     };

//   } catch (err) {
//     console.log('RESPONSE: ', err.response);
//     return {
//       statusCode: err.response.status,
//       body: JSON.stringify({ msg: err.response.statusText })
//     }
//   }
// }