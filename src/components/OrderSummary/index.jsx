import OrderSummaryContainer from "./OrderSummaryContainer";
import { Button, Col, Form, FormGroup, Input, Row, Table } from "reactstrap";
import PropTypes from "prop-types";
import ProductsData from "../../db/ProductData";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../utilits/formatters";

const OrderSummary = ({ className, confirmed }) => {
  const product = ProductsData.find((p) => p.id == 1);
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  //calculate total items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // calculate the total value of an item (quantity * price)
  const totalItemValue = (item) => item.price * item.quantity;

  //calculate the subtotal (sum of the values of all items)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <OrderSummaryContainer className={`${className}`}>
      <Col md="12" className="rigth-order-summary-section py-5">
        <section className="px-5">
          <Table className="ms-2">
            <thead>
              <tr className="mb-5">
                <th
                  colSpan={2}
                  className={`${confirmed ? "more-padding" : "pb-4"}`}
                >
                  {cartItems.map((item) => {
                    return (
                      <Row key={item.id}>
                        <Col md="5">
                          <figure className="image-box w-100 border-0 d-flex flex-column-reverse position-relative">
                            <img
                              src={item.image}
                              alt="Image's product"
                              className="candle-image img-fluid"
                            />
                            <span className="position-absolute top-0 start-100 translate-middle px-2 bg-primary border border-light rounded-circle text-white">
                              {item.quantity}
                            </span>
                          </figure>
                        </Col>
                        <Col md="7" className="ps-5">
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
              <tr scope="row" className={`${confirmed ? "d-none" : ""}  gx-0 `}>
                <td colSpan="2" className="pt-4 pb-2 px-0">
                  <Form>
                    <FormGroup className="d-flex w-100 gap-2">
                      <Col md="9">
                        <Input
                          type="text"
                          name="coupon"
                          id="couponCode"
                          placeholder="Coupon code"
                        />
                      </Col>
                      <Col md="3" className="gx-0">
                        <Button
                          color="secondary"
                          className="border-0 add-button"
                          onClick={() => {}}
                        >
                          Add code
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
                <td scope="col" className="text-end px-0 pt-3 border-bottom-0 ">
                  <strong
                    className={`${confirmed ? "text-primary" : ""} lg-price`}
                  >
                    {formatPrice(subtotal)}
                  </strong>
                </td>
              </tr>
            </tbody>
          </Table>
        </section>
      </Col>
    </OrderSummaryContainer>
  );
};

OrderSummary.propTypes = {
  className: PropTypes.string,
  confirmed: PropTypes.bool,
};

export default OrderSummary;
