import React from 'react';
import './App.css';
import { RestApi } from './RestAPiCalls';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <RestApi />
        </div>
      </header>
    </div>
  );
}

export default App;
