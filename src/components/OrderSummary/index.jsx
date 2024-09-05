import OrderSummaryContainer from "./OrderSummaryContainer";
import { Col } from "reactstrap";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import Cart from '../Cart/index';
// import chevron from '../../assets/images/icon-chevron.svg';
import ProductsCard from "../ProductsCard";
import PropTypes from 'prop-types';


const OrderSummary = ({ product }) => {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id ) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <OrderSummaryContainer className="mt-2">
            <Col md="6">
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem>
                        <AccordionHeader targetId="1" className="d-flex">
                            < Cart />
                            See your order details
                            {/* <img src={chevron} alt='User icon' /> */}
                            <p>$ 9,99</p>
                        </AccordionHeader>
                        <AccordionBody accordionId="1">
                            <section>
                                <ProductsCard product={product} />
                            </section>
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Col>
        </OrderSummaryContainer>
    )
};

OrderSummary.propTypes = {
    product: PropTypes.object.isRequired
}

export default OrderSummary;