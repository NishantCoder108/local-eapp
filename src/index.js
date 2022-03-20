import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import  DataFile  from "./components/DataFile";

ReactDOM.render(
  <React.StrictMode>
    <DataFile>
      <App />
    </DataFile>
  </React.StrictMode>,
  document.getElementById("root")
);
