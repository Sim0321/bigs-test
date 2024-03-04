import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";

import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "@/Global/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </Router>
  </React.StrictMode>
);
