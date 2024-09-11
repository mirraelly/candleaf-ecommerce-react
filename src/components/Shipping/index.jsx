import { Row } from "reactstrap";
import OrderSummary from "../OrderSummary";
import ShippingMethod from "../ShippingMethod";

const Shipping = () => {

    return (
        < >
            <Row>
                < OrderSummary className='d-none d-md-block' />
                < ShippingMethod />
            </Row>
        </>
    );
};

export default Shipping;