import OrderSummaryContainer from "./OrderSummaryContainer";
import { Col } from "reactstrap";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import Cart from '../Cart/index';
// import chevron from '../../assets/images/icon-chevron.svg';
import ProductsCard from "../ProductsCard";
import PropTypes from 'prop-types';
import ProductsData from "../../db/ProductData";
import chevron from '../../assets/images/icon-chevron.svg';

const OrderSummary = ({ className }) => {
    const product = ProductsData.find((p) => p.id == 1);
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <OrderSummaryContainer className={`${className} mt-2`}>
            <Col md="6">
                <Accordion open={open} toggle={toggle}>
                    <AccordionItem>
                        <AccordionHeader targetId="1" className="d-flex">
                            < Cart />
                            <span className="text-primary d-flex">
                                See your order details
                                {/* <div className={`${open == '1' ? '' : 'collapsed'} accordion-expander`}></div> */}
                                <span className="ms-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`${open == '1' ? '' : 'collapsed'} accordion-expander`} viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                    </svg>
                                </span>
                            </span>
                            <span>$ 9,99</span>
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
    product: PropTypes.object.isRequired,
    className: PropTypes.string
}

export default OrderSummary;