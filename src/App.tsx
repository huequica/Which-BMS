import React from 'react';
import FCC_API from './modules/FCC_API';

const App: React.FC = () => {
  FCC_API.getHead('http://rattoto10.jounin.jp/header.json').then((res : string) => {
    console.log(res);
  });

  return(
    <h1>hello world</h1>
  );
};

export default App;