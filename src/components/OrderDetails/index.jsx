import OrderDetailsContainer from "./OrderDetailsContainer";
import OrderForm from "../OrderForm"
import { Row } from "reactstrap";

const OrderDetails = () => {

    return (
        <OrderDetailsContainer >
            <Row noGutters>
                < OrderForm />
            </Row>
        </OrderDetailsContainer>
    );
};

export default OrderDetails;