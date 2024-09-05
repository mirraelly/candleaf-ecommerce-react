import cart from '../../assets/images/cart-icon.svg';
import {
    NavItem, NavLink
} from 'reactstrap';

const Cart = () => {

    return (
        <>
            <NavItem>
                <NavLink href='/cart/'>
                    <img src={cart} alt='Cart icon' />
                </NavLink>
            </NavItem >
        </>
    )
}

export default Cart;