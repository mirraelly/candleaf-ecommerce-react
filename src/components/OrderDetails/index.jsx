import OrderDetailsContainer from "./OrderDetailsContainer";
import OrderForm from "../OrderForm"
import { Row } from "reactstrap";
import OrderSummaryAccordion from "../OrderSummaryAccordion";

const OrderDetails = () => {

    return (
        <OrderDetailsContainer >
            <Row>
                < OrderSummaryAccordion className='d-none d-md-block' />
                < OrderForm />
            </Row>
        </OrderDetailsContainer>
    );
};

export default OrderDetails;