import React from 'react';
import './scss/main.scss';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
