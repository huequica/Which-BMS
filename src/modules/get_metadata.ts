import axios from "axios";

/**
 * Getting Header JSON from Dificulty Table Page
 * 
 * @author huequica
 * @param string endpoint URL of Dificulty table Page
 */
const get_MetaData: Function = async (endpoint: string): Promise<string | null | undefined> => {
  try{
    // Get html document from url
    const result = await axios({
      method: 'GET',
      url: endpoint,
      params: {},
      responseType: 'document'
    });
    // create html document & pick header tag
    const html: Document = result.data;
    const heads:HTMLCollection = html.head.children;
    
    // return bmsInfo(header) json.
    // That has`<meta name='bmstable' content='hoge'>`
    return heads.namedItem('bmstable')?.getAttribute('content');
  }
  catch(error) {
    return error;
  }
};

export default get_MetaData;