// /* eslint-disable  */
// import axios from 'axios';
// import parser from 'fast-xml-parser';
// require('dotenv').config();

// export async function handler(event, context, callback) {
//   const GETCONTRACT_URL = process.env.API_URL+'.customerportal/api/CusGetCustomers';

//   let filter = '';
//   if (event.body) {
//     console.log(event.body)
//     filter = event.body;
//   }

//   try {
//     const response = await axios({
//       method: 'post',
//       url: GETCONTRACT_URL,
//       headers: {
//         'Content-Type': 'application/xml',
//         'X-Pronto-Token': event.headers['x-pronto-token']
//       },
//       data:
//         '<CusGetCustomersRequest>' +
//         filter +
//         '<RequestFields>' +
//         '<Customers>' +
//         '<Customer>' +
//         '<CustomerCode />' +
//         '<BillTo />' +
//         '<CustomerName />' +
//         '<TerritoryCode/>' +
//         '</Customer>' +
//         '</Customers>' +
//         '</RequestFields>' +
//         '</CusGetCustomersRequest>',
//     });

//     // parses XML to json for front end
//     const jsonData = await parser.parse(response.data)

//     return {
//       statusCode: response.status,
//       body: JSON.stringify(jsonData)
//     };

//   } catch (err) {
//     const jsonData = await parser.parse(err.response.data);
//     console.log('ERROR =================> ', jsonData);
//     return {
//       statusCode: jsonData.AuthInfo.AuthStatus.Id,
//       body: jsonData.AuthInfo.AuthStatus.Description
//     }
//   }
// }