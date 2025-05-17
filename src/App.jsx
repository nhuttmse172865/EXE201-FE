import { BrowserRouter, Routes } from "react-router-dom";
import "./styles/index.css";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
