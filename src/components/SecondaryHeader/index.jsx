import Logo from "../Logo";
import Nav from "../Nav";
import SecondaryHeaderContainer from './SecondaryHeaderContainer';
import OrderSummary from '../OrderSummary';

const SecondaryHeader = () => {
    return (
        <SecondaryHeaderContainer>
            <Logo />
            <OrderSummary className='d-md-none mb-3'/>
            <Nav />
        </SecondaryHeaderContainer>
    );
}

export default SecondaryHeader;