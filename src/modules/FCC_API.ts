import axios from 'axios';
// import * as API_RESPONSE from './@types/api/API_RESPONSE';

export default class FCC_API{
  private static API_Endpoints = {
    dev: 'http://localhost:5001/which-bms/us-central1',
    prod: ''
  };

  static getMetaLink : Function = async(endpoint: string): Promise<string | undefined> => {

    const result = await axios({
      method: 'GET',
      url: `${FCC_API.API_Endpoints['dev']}/metalink`,
      params: {
        endpoint: endpoint
      }
    });

    return result.data.URL;  
  };
  
}