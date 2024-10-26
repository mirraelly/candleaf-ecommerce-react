import { useState } from "react";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  CloseButton,
} from "reactstrap";
import userIcon from "../../assets/images/user-icon.svg";
import Cart from "../Cart";
import HeaderContainer from "./HeaderContainer";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <HeaderContainer>
      <Navbar color="faded" light className="border-bottom py-3">
        <NavLink onClick={toggleNavbar} className="col d-md-none d-block">
          {collapsed ? (
            <NavbarToggler className="border-0" />
          ) : (
            <CloseButton className="ms-3" />
          )}
        </NavLink>
        <Logo />
        <Nav className="d-md-flex d-none">
          <NavItem>
            <Link
              to="/#discovery"
              className="nav-link"
              onClick={() => setCollapsed(true)}
            >
              Discovery
              <i
                className="bi bi-chevron-down ms-2"
                style={{ fontSize: "0.9rem", color: "black" }}
              ></i>
            </Link>
          </NavItem>
          <NavItem className="ms-4">
            <Link to="/#about" onClick={() => setCollapsed(true)} className="nav-link">
              About
            </Link>
          </NavItem>
          <NavItem className="ms-4">
            <Link to="/#" onClick={() => setCollapsed(true)} className="nav-link">
              Contact Us
            </Link>
          </NavItem>
        </Nav>
        <Nav className="col justify-content-end justify-content-md-center">
          <NavItem>
            <Link to="/#" className="px-0 nav-link">
              <img src={userIcon} alt="User icon" />
            </Link>
          </NavItem>
          <Cart />
        </Nav>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ms-2">
            <NavItem>
              <Link
                to="/#discovery"
                className="ms-2 nav-link"
                onClick={() => setCollapsed(true)}
              >
                <i
                  className="bi bi-chevron-down me-2"
                  style={{ fontSize: "0.7rem" }}
                ></i>
                Discovery
              </Link>
            </NavItem>
            <NavItem className="ms-4">
              <Link to="/#about" onClick={() => setCollapsed(true)} className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem className="ms-4">
              <Link to="/#" onClick={() => setCollapsed(true)} className="nav-link">
                Contact Us
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
