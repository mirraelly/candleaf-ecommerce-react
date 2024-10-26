import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      className="col d-flex mx-0 justify-content-center justify-content-md-start ps-md-3 navbar-brand"
    >
      <img src={logo} alt="Candleaf logo" />
    </Link>
  );
};

export default Logo;
