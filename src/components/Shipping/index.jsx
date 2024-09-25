import { Row } from "reactstrap";
import ShippingMethod from "../ShippingMethod";
import OrderSummaryAccordion from "../OrderSummaryAccordion";

const Shipping = () => {

    return (
        < >
            <Row>
                < OrderSummaryAccordion className='d-none d-md-block' />
                < ShippingMethod />
            </Row>
        </>
    );
};

export default Shipping;