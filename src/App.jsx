import './App.css';
import React from 'react';
import Box1 from './Box1.jsx';
import {RecoilRoot} from 'recoil';

const App = () => {

  return (
    <RecoilRoot>
      <div className="App">
          <Box1/>
      </div>
    </RecoilRoot>
  );
}

export default App;
