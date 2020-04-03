import React from "react";

import { BrowserRouter } from "react-router-dom";

import {ToastContainer} from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
      
      <ToastContainer
        toastClassName="toast-container"
        bodyClassName="toast-container"
        newestOnTop
        position="top-center"
        autoClose={3000}
      />
    </BrowserRouter>
  );
}

export default App;
