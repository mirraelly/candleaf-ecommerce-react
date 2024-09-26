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
            <NavLink
              href="/#discovery"
              className=""
              onClick={() => setCollapsed(true)}
            >
              Discovery
              <i
                className="bi bi-chevron-down ms-2"
                style={{ fontSize: "0.9rem", color: "black" }}
              ></i>
            </NavLink>
          </NavItem>
          <NavItem className="ms-4">
            <NavLink href="/#about" onClick={() => setCollapsed(true)}>
              About
            </NavLink>
          </NavItem>
          <NavItem className="ms-4">
            <NavLink href="" onClick={() => setCollapsed(true)}>
              Contact Us
            </NavLink>
          </NavItem>
        </Nav>
        <Nav className="col justify-content-end justify-content-md-center">
          <NavItem>
            <NavLink href="" className="px-0">
              <img src={userIcon} alt="User icon" />
            </NavLink>
          </NavItem>
          <Cart />
        </Nav>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ms-2">
            <NavItem>
              <NavLink
                href="/#discovery"
                className="ms-2"
                onClick={() => setCollapsed(true)}
              >
                <i
                  className="bi bi-chevron-down me-2"
                  style={{ fontSize: "0.7rem" }}
                ></i>
                Discovery
              </NavLink>
            </NavItem>
            <NavItem className="ms-4">
              <NavLink href="/#about" onClick={() => setCollapsed(true)}>
                About
              </NavLink>
            </NavItem>
            <NavItem className="ms-4">
              <NavLink href="" onClick={() => setCollapsed(true)}>
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
