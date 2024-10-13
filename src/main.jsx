import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@splidejs/react-splide/css/core";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </CartProvider>
  </React.StrictMode>
);
