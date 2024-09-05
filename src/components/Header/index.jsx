import { useState } from 'react';
import {
         Collapse, Navbar, Nav,
         NavItem, NavLink,
         NavbarToggler, CloseButton
         } from 'reactstrap';
import userIcon from '../../assets/images/user-icon.svg';
import cart from '../../assets/images/cart-icon.svg';
import HeaderContainer from "./HeaderContainer";
import Logo from '../Logo';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <HeaderContainer>
            <Navbar color="faded" light className='border-bottom py-3'>
                <NavLink onClick={toggleNavbar} className='col' >
                    {collapsed ? <NavbarToggler className='border-0' /> : <CloseButton className='ms-3' />}
                </NavLink>
                <Logo />
                <Nav className='col justify-content-end'>
                    <NavItem>
                        <NavLink href='' className='px-0'>
                            <img src={userIcon} alt='User icon' />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/cart/'>
                            <img src={cart} alt='Cart icon' />
                        </NavLink>
                    </NavItem>
                </Nav>
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar className='ms-2'>
                        <NavItem>
                            <NavLink href='/discovery/' className='ms-2'>
                                <i className="bi bi-chevron-down me-2" style={{ fontSize: '0.7rem' }}>
                                </i>Discovery
                            </NavLink>
                        </NavItem>
                        <NavItem className='ms-4'>
                            <NavLink href='/about/'>About</NavLink>
                        </NavItem>
                        <NavItem className='ms-4'>
                            <NavLink href='/about/'>Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </HeaderContainer>
    );
};

export default Header;



