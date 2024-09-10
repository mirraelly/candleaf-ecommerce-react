import OrderDetailsContainer from "./OrderDetailsContainer";
import OrderForm from "../OrderForm"
import { Row } from "reactstrap";
import OrderSummary from "../OrderSummary";

const OrderDetails = () => {

    return (
        <OrderDetailsContainer >
            <Row>
                < OrderSummary className='d-none d-md-block' />
                < OrderForm />
            </Row>
        </OrderDetailsContainer>
    );
};

export default OrderDetails;