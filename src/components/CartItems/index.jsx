import PropTypes from "prop-types";
import ProductsQuantity from "../ProductsQuantity";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CartItemsContainer from "./CartItemsContainer";

const CartItems = ({ product }) => {
  return (
    <CartItemsContainer className="px-2">
      <section className="d-flex flex-column align-items-center justify-content-center py-5">
        <h2>Your cart items</h2>
        <a
          href="#"
          className="stretched-link text-primary text-decoration-underline"
        >
          Back to shopping
        </a>
      </section>
      <Row className="justify-content-center g-0 order-1">
        <Col
          xs="12"
          md=""
          className="d-flex justify-content-between px-4 border-bottom border-top p-2"
        >
          <p>Product</p>
          <p>Price</p>
          <p className="d-none d-md-block">Quantity</p>
          <p className="d-none d-md-block">Total</p>
        </Col>
        <Col xs="4" md="" className="d-flex align-items-center">
          <figure className="image-box border-0">
            <img
              src={product.image}
              alt="Image's product"
              className="candle-image img-fluid cards-carts-images"
            />
          </figure>
        </Col>
        <Col xs="4" md="" className="d-flex align-items-center ">
          <h4 className="product-title">{product.name} Candleaf®</h4>
        </Col>
        <Col
          xs="4"
          md=""
          className="p d-flex align-items-center justify-content-end justify-content-md-center"
        >
          ${product.price}
        </Col>
        <Col xs="8" md="" className="d-flex justify-content-between">
          <a
            href="#"
            className="stretched-link text-primary text-decoration-underline "
          >
            Remove
          </a>
          <Col>
            <ProductsQuantity className="mb-3" />
          </Col>
        </Col>
      </Row>
      <Row className="g-0 border-top p-2 order-2">
        <div className="d-flex align-items-center justify-content-between">
          <p>Sub-total</p>
          <p>$ 9.99</p>
        </div>
        <p className="text-secondary">Tax and shipping cost will be calculated later</p>
      </Row>
      <Link to={"#"} className="w-100 btn btn-primary">
        Checkout
      </Link>
    </CartItemsContainer>
  );
};

CartItems.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItems;
