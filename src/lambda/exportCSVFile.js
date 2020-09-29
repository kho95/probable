// const { Parser } = require('json2csv');
// require('dotenv').config();

// export async function handler(event, context, callback) {

//   let requestBody = (JSON.parse(event.body));
//   let headers = requestBody.headers;

//   console.log(headers);

//   const json2csvParser = new Parser({headers});
//   const generatedCSV = json2csvParser.parse(requestBody.data);

//   return {
//     statusCode: 200,
//     headers: {
//       "Content-Disposition": "attachment;filename=exported_report.csv",
//       "Content-Type": "text/csv"
//     },
//     body: generatedCSV,
//   };
// }