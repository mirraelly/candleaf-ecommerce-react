import { Nav, NavLink, Breadcrumb } from 'reactstrap';

const OrderNav = () => {
    return (
        <Nav>
            <Breadcrumb>
                <NavLink href="/cart">Cart</NavLink>
                <NavLink href="/details">Details</NavLink>
                <NavLink href="/shipping">Shipping</NavLink>
                <NavLink href="/payment" active>Payment</NavLink>
            </Breadcrumb>
        </Nav>
    );
};

export default OrderNav;