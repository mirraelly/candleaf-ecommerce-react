import OrderDetailsContainer from "./OrderDetailsContainer";
import OrderForm from "../OrderForm"
import { Row } from "reactstrap";
import OrderSummary from "../OrderSummary";

const OrderDetails = () => {

    return (
        <OrderDetailsContainer >
            <Row>
                < OrderForm />
                < OrderSummary />
            </Row>
        </OrderDetailsContainer>
    );
};

export default OrderDetails;