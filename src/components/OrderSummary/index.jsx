import OrderSummaryContainer from "./OrderSummaryContainer";
import { Button, Col, Form, FormGroup, Input, Row, Table } from "reactstrap";
import PropTypes from "prop-types";
import ProductsData from "../../db/ProductData";

const OrderSummary = ({ className }) => {
  const product = ProductsData.find((p) => p.id == 1);
  return (
    <OrderSummaryContainer className={`${className}`}>
      <Col md="12" className="rigth-order-summary-section py-5">
        <section className="px-5">
          <Table className="ms-2">
            <thead>
              <tr className="mb-5">
                <th colSpan={2} className="pb-4">
                  <Row>
                    <Col md="5">
                      <figure className="image-box w-100 border-0 d-flex flex-column-reverse position-relative">
                        <img
                          src={product.image}
                          alt="Image's product"
                          className="candle-image img-fluid"
                        />
                        <span className="position-absolute top-0 start-100 translate-middle px-2 bg-primary border border-light rounded-circle text-white">
                          1
                        </span>
                      </figure>
                    </Col>
                    <Col md="7" className="ps-5">
                      <h5 className="product-title text-16">
                        {product.name} Candleaf®
                      </h5>
                      <p className="text-primary price">${product.price}</p>
                    </Col>
                  </Row>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr scope="row" className="gx-0">
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
                  <p>$ 9.99</p>
                  <p>Calculated at the next step</p>
                </td>
              </tr>
              <tr scope="row" className="">
                <td scope="col" className="px-0 third-block pt-3 border-bottom-0">
                  Total
                </td>
                <td scope="col" className="text-end px-0 pt-3 border-bottom-0 ">
                  <strong className="lg-price">$ 9.99</strong>
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
  product: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default OrderSummary;
