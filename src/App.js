import { useEffect } from 'react';
import './App.css';

import Terminal from './components/Terminal/Terminal';

function App() {

  useEffect(() => {
    document.title =
      "Ledis";
  }, []);

  return (
    <div className="App">
      <Terminal />
    </div>
  );
}

export default App;
