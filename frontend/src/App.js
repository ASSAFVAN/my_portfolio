import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";

import "./App.css";

function App() {
  return (
    <>
      <Home/>
      <About/>
    </>
  );
}

export default App;
