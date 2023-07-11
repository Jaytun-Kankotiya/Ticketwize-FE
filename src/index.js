// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
// import Modal from "react-modal";
import * as Sentry from "@sentry/react";
import * as configData from "./config/constants"

// Modal.setAppElement("#root");
{/* <script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script> */ }

Sentry.init({
    dsn: "https://c034620f1e3b44089d9abdc4a70b0a50@o4505347510108160.ingest.sentry.io/4505494832545792",
    integrations: [
        new Sentry.BrowserTracing({
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: ["localhost", configData.API_URL],
        }),
        new Sentry.Replay(),
    ],
    enabled: process.env.NODE_ENV == 'production',
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);