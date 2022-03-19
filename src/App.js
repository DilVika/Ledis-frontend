import './App.css';

import * as constants from "./utils/constants";
import Terminal from './components/Terminal/Terminal';

function App() {

  return (
    <div className="App">
      <h1>{constants.title}</h1>
      <Terminal />
    </div>
  );
}

export default App;
