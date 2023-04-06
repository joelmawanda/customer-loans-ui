import axios from "axios";


const encodedCredentials = Buffer.from('admin:admin').toString('base64');


export default axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic ' + encodedCredentials
    }
  });
  
