import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./assets/index.less";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
// sentry
Sentry.init({
  dsn: "http://29ba379f8e7947edac56cc1763892726@47.111.19.13:9000/3",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
