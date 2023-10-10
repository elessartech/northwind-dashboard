import React from "react";
import ReactDOM from "react-dom/client";
import 'react-notifications/lib/notifications.css';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { reducer, StateProvider } from "./state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
