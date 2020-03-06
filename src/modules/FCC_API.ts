import axios from 'axios';
// import * as API_RESPONSE from './@types/api/API_RESPONSE';

export default class FCC_API{
  
  static getMetaLink : Function = async(endpoint: string): Promise<string | undefined> => {
    const API_Endpoints = {
      dev: 'http://localhost:5001/which-bms/us-central1',
      prod: ''
    };

    const result = await axios({
      method: 'GET',
      url: `${API_Endpoints['dev']}/metalink`,
      params: {
        endpoint: endpoint
      }
    });

    return result.data.URL;  
  };
  
}