import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
// import './index.css';
import "./scss/styles.scss";
import { initDataWithFetch } from './store/index.ts';
import ReactGA from 'react-ga';

ReactGA.initialize('G-SX6Z98R67S');
await initDataWithFetch();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
