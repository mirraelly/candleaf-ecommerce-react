import OrderSummaryContainer from "./OrderSummaryContainer";
import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from "reactstrap";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, } from 'reactstrap';
import Cart from '../Cart/index';
// import chevron from '../../assets/images/icon-chevron.svg';
import ProductsCard from "../ProductsCard";
import PropTypes from 'prop-types';
import ProductsData from "../../db/ProductData";
import chevron from '../../assets/images/icon-chevron.svg';
import { Link } from "react-router-dom";

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
            <Col md="6" sm="12">
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
                            <Table>
                                <thead>
                                    <tr>
                                        <th scope="row" colSpan="2">
                                            <ProductsCard product={product} />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr scope="row">
                                        <td colSpan="2">
                                            <Form>
                                                <FormGroup className="d-flex w-100 gap-2">
                                                    <Input type="text" name="coupon" id="couponCode" placeholder="Enter coupon code" className="w-75" />
                                                    <Button color="secondary" className="border-0">Add code</Button>
                                                </FormGroup>
                                            </Form>
                                        </td>
                                    </tr>
                                    <tr scope="row">
                                        <td>Subtotal
                                            <br />
                                            Shipping
                                        </td>
                                        <td className="text-right">
                                            $9.99
                                            <br />
                                            Calculated at the next step
                                        </td>
                                    </tr>
                                    <tr scope="row" className="">
                                        <td scope="col">
                                            Total
                                        </td>
                                        <td scope="col" className="text-right">
                                            <strong>$9.99</strong>
                                        </td>
                                    </tr>
                                </tbody>

                            </Table>

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
