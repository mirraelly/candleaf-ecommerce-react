import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";
import OrderPage from "../pages/OrderPage";
import ShippingPage from "../pages/ShippingPage";
import PaymentPage from "../pages/PaymentPage";
import ConfirmedPage from "../pages/ConfirmedPage"


const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/shipping" element={<ShippingPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/confirmed" element={< ConfirmedPage />} />
   
    </>
  )
);

export default routes;
