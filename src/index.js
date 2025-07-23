import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { store, } from "./store/store.js"
import { Persistor } from './reducer.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={Persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);