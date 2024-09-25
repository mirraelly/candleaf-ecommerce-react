import { Row } from "reactstrap";
import PaymentForms from "../PaymentForms";
import OrderSummaryAccordion from "../OrderSummaryAccordion";

const PaymentDetails = () => {

    return (
        <>
            <Row>
                < OrderSummaryAccordion className='d-none d-md-block' />
                < PaymentForms />
            </Row>
        </>
    );
};

export default PaymentDetails;