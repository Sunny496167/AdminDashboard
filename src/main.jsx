import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  // <React.StrictMode>
  //   <ContextProvider>
  //     <App />
  //   </ContextProvider>,
  // </React.StrictMode>,
  <ContextProvider>
      <App />
    </ContextProvider>,
  document.getElementById("root")
);
