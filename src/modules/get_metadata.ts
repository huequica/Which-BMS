import axios from "axios";

/**
 * Getting Header JSON from Dificulty Table Page
 * 
 * @author huequica
 * @param string endpoint URL of Dificulty table Page
 */
const get_MetaData: Function = async (endpoint: string): Promise<string | null | undefined> => {
  const result = await axios({
    method: 'GET',
    url: endpoint,
    params: {},
    responseType: 'document'
  });
  const html: Document = result.data;
  const heads:HTMLCollection = html.head.children;
  const json_url : string | null | undefined = heads.namedItem('bmstable')?.getAttribute('content');
  return json_url;
};

export default get_MetaData;