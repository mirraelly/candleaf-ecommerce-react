import { useLocation, NavLink } from "react-router-dom";
import cart from "../../assets/images/cart-icon.svg";
import cartGreen from "../../assets/images/cart-icon-02.svg";
import { NavItem } from "reactstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const { pathname } = useLocation();
  const confirmed = pathname.endsWith("/confirmed");

  const quantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <NavItem>
        <NavLink className="nav-link" to="/cart/">
          {confirmed ? (
            <img src={cartGreen} alt="Cart Icon" className="cart-confirmed" />
          ) : (
            <img src={cart} alt="Cart Icon" className="cart" />
          )}
          <span
            className="position-absolute top-2 start-75 translate-middle px-2 bg-primary border border-light rounded-circle text-white"
            style={{ fontSize: "10px" }}
          >
            {quantity}
          </span>
        </NavLink>
      </NavItem>
    </>
  );
};

export default Cart;
