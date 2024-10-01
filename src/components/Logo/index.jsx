import { NavbarBrand } from 'reactstrap';
import logo from '../../assets/images/logo.svg';

const Logo = () => {
    return (
            <NavbarBrand href="/" className="col d-flex mx-0 justify-content-center justify-content-md-start ps-md-3">
                <img src={logo} alt="Candleaf logo" />
            </NavbarBrand>
    );
}

export default Logo;