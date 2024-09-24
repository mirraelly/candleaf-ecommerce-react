import logoFooter from "../../assets/images/logo-footer.svg";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";
import FooterContainer from "./FooterContainer";

const Footer = () => {
  return (
    <FooterContainer className="footer-container">
      <div className="bg-dark text-white pt-2 footer-box pb-5">
        <div className="row border-top border-white mt-4 pt-4 pb-5">
          <div className="col-12 col-md-6">
            <div className="bg-dark text-white">
              <img
                alt="Sample"
                src={logoFooter}
                className="mb-3"
                style={{ width: "9.375em" }}
              />
              <p className="lh-base">
                Your natural candle made for <br className="d-md-block d-none"/> your home and for your wellness.
              </p>
            </div>
          </div>
          <Navbar className="col-12 col-lg-6" color="dark" dark>
            <Nav vertical className="col-6 col-lg-4" navbar>
              <NavItem>
                <NavLink disabled href="#">
                  Discovery
                </NavLink>
              </NavItem>
              <NavItem color="light">
                <NavLink href="#">New season</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Most searched</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Most selled</NavLink>
              </NavItem>
            </Nav>
            <Nav vertical className="col-6 col-lg-4" navbar>
              <NavItem>
                <NavLink disabled href="#">
                  Info
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Help</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Shipping</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Affiliate</NavLink>
              </NavItem>
            </Nav>
            <Nav vertical className="col-6 col-lg-4" navbar>
              <NavItem>
                <NavLink disabled href="#">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Privacy Policies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Terms & Conditions</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      </div>
      <div className="rights-reserved py-3 py-md-5 footer-box text-center text-md-start">
        © Mirraely All Rights Reserved.
      </div>
    </FooterContainer>
  );
};

export default Footer;
