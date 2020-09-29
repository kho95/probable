import axios from 'axios';
import { unwatchFile } from "fs";

const EXPORT_CSV_FILE = '/.netlify/functions/exportCSVFile';
const EXPORT_PDF_FILE = '/.netlify/functions/exportPDFFile';

export const CSVTYPE = 'csv';
export const PDFTYPE = 'pdf';

const exportFile = async (data: {} | [], type: string, columns: []) => {

  const generateFile = async (): Promise<any> => {
    if (data == undefined || Object.keys(data).length == 0 || data.length == 0 || columns == undefined || columns.length == 0) return;
    let url, accept, filteredData = [];

    if (Array.isArray(data)) {
      data.map(item => {
        let dataInArray = {};
        columns.map(header => {
          dataInArray[header] = item[header]
        });
        filteredData.push(dataInArray);
      })
    } else if (typeof data == 'object') {
      let dataInArray = {};
      columns.map(header => {
        dataInArray[header] = data[header];
      });
      filteredData.push(dataInArray);
    } else {
      return;
    }

    if (type == CSVTYPE) {
      url = EXPORT_CSV_FILE;
      accept = 'text/csv';
    } else if (type == PDFTYPE) {
      url = EXPORT_PDF_FILE;
      accept = 'application/pdf'
    }

    try {
      let response = await axios.post(url, {
        data: filteredData,
        headers: columns,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': accept
        },
        responseType: 'blob'
      });

      let fileName = response.headers["content-disposition"].split("filename=")[1];

      if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE variant
        window.navigator.msSaveOrOpenBlob(response.data,
          fileName);
      } else {
        const url = window.URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', response.headers["content-disposition"].split("filename=")[1]);
        document.body.appendChild(link);
        link.click();
      }
    } catch (err) {

    }
  };

  return await generateFile();
};

export default exportFile;
