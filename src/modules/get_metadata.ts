import axios from "axios";

/**
 * Getting Header JSON from Dificulty Table Page
 * 
 * @author huequica
 * @param string endpoint URL of Dificulty table Page
 * @return {Promise<string>}
 */
const get_MetaData: Function = async (endpoint: string = 'https://lite.stellabms.xyz/table.html') => {
  const result = await axios({
    method: 'GET',
    url: endpoint,
    params: {},
    responseType: 'document'
  });
  const html: Document = result.data;
  const heads:HTMLCollection = html.head.children;
  return heads.namedItem('bmstable')?.getAttribute('content');    
};

export default get_MetaData;