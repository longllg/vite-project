import { useState } from "react";
import "./App.less";
import Home from "src/pages/home";
import { RoutesCofig } from "./routes/index";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <RoutesCofig></RoutesCofig>
      </header>
    </div>
  );
}

export default App;
