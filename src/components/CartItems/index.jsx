import PropTypes from "prop-types";
import ProductsQuantity from "../ProductsQuantity";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CartItemsContainer from "./CartItemsContainer";
import { useNavigate } from 'react-router-dom';


const CartItems = ({ product }) => {

  const navigate = useNavigate();

    const handleClick = () => {
        navigate('#discovery');
      };

  return (
    <CartItemsContainer className="px-2 pt-5">
      <section className="d-flex flex-column align-items-center justify-content-center gap-3 pb-5">
        <h2>Your cart items</h2>
        <Link
          to="/"
          className="stretched-link text-primary text-decoration-underline z-2" onClick={ handleClick }
        >
          Back to shopping
        </Link>
      </section>
      <Row className="justify-content-center g-0 order-1">
        <Col
          xs="12"
          md="12"
          className="d-flex justify-content-between border-bottom"
        >
          <Col xs="6" md="4" className="text-start">
            <p className="d-none">Photo</p>
            <p className="">Product</p>
          </Col>
          <Col xs="6" md="2">
            <p className="text-end">Price</p>
          </Col>
          <Col md="2">
            <p className="d-none d-md-block text-end">Quantity</p>
          </Col>
          <Col md="2">
            <p className="d-none d-md-block text-end">Total</p>
          </Col>
        </Col>
        <Col xs="12" md="12" className="d-flex gap-md-0 gap-2 g-0">
          <Col
            xs="8"
            md="6"
            className="d-flex align-items-start pt-5 pb-3 g-0 gap-3"
          >
            <figure className="image-box border-0">
              <img
                src={product.image}
                alt="Image's product"
                className="candle-image img-fluid cards-carts-images"
              />
            </figure>
            <div className="d-flex flex-column gap-3">
              <h4 className="product-title fs-4 fw-medium">
                {product.name} Candleaf®
              </h4>
              <a
                href="#"
                className="stretched-link text-primary text-decoration-underline"
              >
                Remove
              </a>
            </div>
          </Col>
          <Col
            xs="4"
            md="4"
            className="p d-flex fx-5 fw-medium align-items-end align-items-md-center justify-content-start ps-md-4 pe-md-3 pe-2 py-md-5 pt-5 pb-4 text-md-start flex-column flex-md-row justify-content-md-between gap-md-0 cart-items-quality-divisor-col"
          >
            <div className="">${product.price}</div>
            <div className="products-quantity-cart-page">
              <p className="d-md-none d-block g-0 pb-1 my-0 text-center">Quality</p>
              <ProductsQuantity
                showTag={false}
                className="mb-3 ps-5 show-product"
              />
              {/* no show tag label */}
            </div>
          </Col>
          <Col
            md="2"
            className="text-end align-items-center justify-content-end fs-5 fw-medium d-md-flex d-none"
          >
            <p>$ 9.99</p>
          </Col>
        </Col>
      </Row>
      <Row className="g-0 border-top px-2 pt-5 pb-5 pb-mb-0 order-2 mt-0 mb-5 mb-md-0 d-flex justify-content-md-end gap-md-5">
        <Col md="5" xs="12">
          <div className="d-flex flex-column justify-content-md-end pb-3">
            <div className="d-flex align-items-center justify-content-evenly justify-content-md-end fw-medium gap-5 fs-5">
              <p className="text-center">Sub-total</p>
              <p className="text-center">$ 9.99</p>
            </div>
            <p className="text-secondary text-md-end text-center">
              Tax and shipping cost will be calculated later
            </p>
          </div>
        </Col>
        <Col md="2" xs="12">
          <Link to={"/order"} className="w-100 btn btn-primary w-md-25">
            Checkout
          </Link>
        </Col>
      </Row>
    </CartItemsContainer>
  );
};

CartItems.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CartItems;
