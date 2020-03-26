import axios from 'axios';

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

  static getHead : Function = async(endpoint: string): Promise<Object | undefined> => {
    const result = await axios({
      method: 'GET',
      url: `${FCC_API.API_Endpoints['dev']}/head`,
      params: {
        endpoint: endpoint
      }
    });
    return result.data;
  };
}