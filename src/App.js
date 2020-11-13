import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';
import { useState } from 'react';

function App() {
  let value = useState(1000);
  return (
    <ValueContext.Provider value={value}>
      <div className="App">
        This is App Component
        <br/>
        <Parent></Parent>
      </div>
    </ValueContext.Provider>

  );
}

export default App;
