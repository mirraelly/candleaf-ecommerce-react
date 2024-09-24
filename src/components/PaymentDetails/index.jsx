import { Row } from "reactstrap";
import OrderSummary from "../OrderSummary";
import PaymentForms from "../PaymentForms";

const PaymentDetails = () => {

    return (
        <>
            <Row>
                < OrderSummary className='d-none d-md-block' />
                < PaymentForms />
            </Row>
        </>
    );
};

export default PaymentDetails;