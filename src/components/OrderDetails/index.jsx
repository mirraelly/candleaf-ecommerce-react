import OrderDetailsContainer from "./OrderDetailsContainer";
import OrderForm from "../OrderForm"
import { Row } from "reactstrap";
import OrderSummary from "../OrderSummary";
// import { useParams } from "react-router-dom";
import ProductsData from "../../db/ProductData";


const OrderDetails = () => {
    const product = ProductsData.find((p) => {
        return p.id == 1;
    })

    return (
        <OrderDetailsContainer >
            <Row>
                < OrderSummary product={product} />
                < OrderForm />
            </Row>
        </OrderDetailsContainer>
    );
};

export default OrderDetails;