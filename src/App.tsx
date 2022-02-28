import { useState } from "react";
import "./App.less";
import Home from "src/pages/home";
import { RoutesCofig } from "src/routes";
function App() {
  const [count, setCount] = useState('wf');

  return (
    <div className="App">
      <header className="App-header">
        <RoutesCofig></RoutesCofig>
      </header>
    </div>
  );
}

export default App;
