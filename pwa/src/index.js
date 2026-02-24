import React from "react";
import { createRoot } from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./app.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

serviceWorkerRegistration.unregister();
