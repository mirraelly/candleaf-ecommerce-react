import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '@splidejs/react-splide/css/core';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={routes} />
  </React.StrictMode>
)
