import React from 'react';
import get_MetaData from './modules/get_metadata';

const App: React.FC = () => {
  get_MetaData().then((response: string) => {
    console.log(response);
  });
  return(
    <h1>hello world</h1>
  );
};

export default App;