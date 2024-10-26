import OrderSummaryAccordionContainer from "./OrderSummaryAccordionContainer";
import { Button, Col, Form, FormGroup, Input, Row, Table } from "reactstrap";
import { useContext, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Cart from "../Cart/index";
import PropTypes from "prop-types";
import ProductsData from "../../db/ProductData";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utilits/formatters";

const OrderSummaryAccordion = ({ className }) => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const { pathname } = useLocation();
  const confirmed = pathname.endsWith("/confirmed");
  const product = ProductsData.find((p) => p.id == 1);
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  //calculate the subtotal (sum of the values of all items)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <OrderSummaryAccordionContainer className={`${className} mt-2`}>
      <Col md="6" sm="12">
        <Accordion open={open} toggle={toggle}>
          <AccordionItem className="pe-2 ps-3">
            <AccordionHeader targetId="1" className="d-flex">
              <Cart />
              <span className="text-primary d-flex fw-normal fs-4 ps-1 accordion-title">
                {confirmed ? "ORDER PAID" : "See your order details"}
                {/* <div className={`${open == '1' ? '' : 'collapsed'} accordion-expander`}></div> */}
                <span
                  className={`${
                    confirmed ? "d-none" : "d-block"
                  } ms-3 fw-normal `}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className={`${
                      open == "1" ? "" : "collapsed"
                    } accordion-expander`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </span>
              </span>
              <span className="fw-medium fs-5">{formatPrice(subtotal)}</span>
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <Table>
                <thead>
                  <tr className="mb-5">
                    <th
                      colSpan={2}
                      className={`${confirmed ? "more-padding" : "pb-4"}`}
                    >
                      {cartItems.map((item) => {
                        return (
                          <Row key={item.id}>
                            <Col xs="5" className="px-0">
                              <figure className="image-box w-100 border-0 d-flex flex-column-reverse position-relative">
                                <img
                                  src={product.image}
                                  alt="Image's product"
                                  className="candle-image img-fluid"
                                />
                                <span className="position-absolute top-0 start-100 translate-middle px-2 bg-primary border border-light rounded-circle text-white">
                                  {item.quantity}
                                </span>
                              </figure>
                            </Col>
                            <Col xs="7" className="px-0 ps-4">
                              <h5 className="product-title text-16">
                                {item.name} Candleaf®
                              </h5>
                              <p className="text-primary price">
                                ${item.price * item.quantity}
                              </p>
                            </Col>
                          </Row>
                        );
                      })}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    scope="row"
                    className={`${confirmed ? "d-none" : ""}  gx-0 `}
                  >
                    <td colSpan="2" className="pt-4 pb-2 px-0">
                      <Form>
                        <FormGroup className="d-flex w-100 gap-2">
                          <Col xs="9" className="px-0">
                            <Input
                              type="text"
                              name="coupon"
                              id="couponCode"
                              placeholder="Coupon code"
                            />
                          </Col>
                          <Col xs="3" className="gx-0 px-0">
                            <Button
                              color="secondary"
                              className="border-0 add-button w-100"
                              onClick={() => {}}
                            >
                              Add
                            </Button>
                          </Col>
                        </FormGroup>
                      </Form>
                    </td>
                  </tr>
                  <tr scope="row" className="third-block">
                    <td scope="row" className="px-0 pt-4 pb-3">
                      <p>Subtotal</p>
                      <p>Shipping</p>
                    </td>
                    <td scope="col" className="text-end px-0 pt-4 pb-3">
                      <p>{formatPrice(subtotal)}</p>
                      <p>Calculated at the next step</p>
                    </td>
                  </tr>
                  <tr scope="row">
                    <td
                      scope="col"
                      className={`${
                        confirmed ? "text-primary" : ""
                      } px-0 third-block pt-3 border-bottom-0`}
                    >
                      {confirmed ? "Paid" : "Total"}
                    </td>
                    <td
                      scope="col"
                      className="text-end px-0 pt-3 border-bottom-0 "
                    >
                      <strong
                        className={`${
                          confirmed ? "text-primary" : ""
                        } lg-price`}
                      >
                        {formatPrice(subtotal)}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </Col>
    </OrderSummaryAccordionContainer>
  );
};

OrderSummaryAccordion.propTypes = {
  className: PropTypes.string,
};

export default OrderSummaryAccordion;
