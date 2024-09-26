import OrderSummaryContainer from "./OrderSummaryContainer";
import { Button, Col, Form, FormGroup, Input, Table } from "reactstrap";
import PropTypes from "prop-types";
import ProductsData from "../../db/ProductData";

const OrderSummary = ({ className }) => {
  const product = ProductsData.find((p) => p.id == 1);
  return (
    <OrderSummaryContainer className={`${className} mt-2`}>
      <Col
        md="12"
        className="rigth-order-summary-section py-5 pe-5"
      >
        <section className="pe-5 me-5">
          <Table className="mx-5">
            <thead>
              <tr className="mb-5">
                <th scope="col-2">
                  <figure className="image-box w-75 border-0 d-flex flex-column-reverse position-relative">
                    <img
                      src={product.image}
                      alt="Image's product"
                      className="candle-image img-fluid"
                    />
                    <span className="position-absolute top-0 start-100 translate-middle px-2 bg-primary border border-light rounded-circle text-white">
                      1
                    </span>
                  </figure>
                </th>
                <th
                  scope="col-10"
                  className="d-flex flex-column border-0 gap-3 px-0 mx-0 text-start"
                >
                  <h5 className="product-title">{product.name} Candleaf®</h5>
                  <p className="  text-primary">${product.price}</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr scope="row">
                <td colSpan="2">
                  <Form>
                    <FormGroup className="d-flex w-100 gap-2">
                      <Input
                        type="text"
                        name="coupon"
                        id="couponCode"
                        placeholder="Enter coupon code"
                        className="w-75"
                      />
                      <Button color="secondary" className="border-0">
                        Add code
                      </Button>
                    </FormGroup>
                  </Form>
                </td>
              </tr>
              <tr scope="row">
                <td scope="row" className="">
                  <p>Subtotal</p>
                  <p>Shipping</p>
                </td>
                <td scope="col" className="text-end">
                  <p>$9.99</p>
                  <p>Calculated at the next step</p>
                </td>
              </tr>
              <tr scope="row" className="">
                <td scope="col">Total</td>
                <td scope="col" className="text-end">
                  <strong>$9.99</strong>
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
