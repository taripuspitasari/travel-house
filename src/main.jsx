import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {BrowserRouter as Router} from "react-router-dom";
// import house context provider
import HouseContextProvider from "./components/HouseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HouseContextProvider>
    <Router>
      <App />
    </Router>
  </HouseContextProvider>
);
