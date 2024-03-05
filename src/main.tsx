import ReactDOM from "react-dom/client";
import App from "@/App";

import { BrowserRouter as Router } from "react-router-dom";

import { StoreProvider } from "./modules/Context";
import { RootStore } from "./modules/RootStore";

const rootStore = new RootStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider value={rootStore}>
    <Router>
      <App />
    </Router>
  </StoreProvider>
);
