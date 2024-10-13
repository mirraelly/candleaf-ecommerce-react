import { useLocation, NavLink } from "react-router-dom";
import cart from "../../assets/images/cart-icon.svg";
import cartGreen from "../../assets/images/cart-icon-02.svg";
import { NavItem } from "reactstrap";

const Cart = () => {
  const { pathname } = useLocation();
  const confirmed = pathname.endsWith("/confirmed");

  return (
    <>
      <NavItem>
        <NavLink className='nav-link' to="/cart/">
          {confirmed ? (
            <img src={cartGreen} alt="Cart Icon" className="cart-confirmed" />
          ) : (
            <img src={cart} alt="Cart Icon" className="cart" />
          )}
        </NavLink>
      </NavItem>
    </>
  );
};

export default Cart;
