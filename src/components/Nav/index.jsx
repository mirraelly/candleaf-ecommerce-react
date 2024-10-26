import { Link } from "react-router-dom";
import { Breadcrumb } from "reactstrap";

const OrderNav = () => {
  return (
    <Breadcrumb className="mx-3">
      <Link to="/cart" tag="a" className="text-primary breadcrumb-item">
        Cart
      </Link>
      <Link to="/order" tag="a" className="text-black breadcrumb-item">
        Details
      </Link>
      <Link
        to="/shipping"
        tag="a"
        className="text-light-emphasis breadcrumb-item"
      >
        Shipping
      </Link>
      <Link
        to="/payment"
        active
        className="text-light-emphasis breadcrumb-item"
      >
        Payment
      </Link>
    </Breadcrumb>
  );
};

export default OrderNav;
