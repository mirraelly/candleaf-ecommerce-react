import ProductDetailsContainer from "./ProductDetailsContainer.jsx";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import ProductsQuantity from "../ProductsQuantity";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";

const ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("one-time");
  const navigate = useNavigate();
  const { addToCart, cartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <ProductDetailsContainer>
      <Container className="mt-1 pt-3 pb-0 g-fluid-0">
        <Form>
          <Row className="justify-content-center">
            <Col
              xs="12"
              md="12"
              className="order-md-3 order-1 title-box d-flex flex-column d-md-none"
            >
              <h2 className="product-title text-start">
                {product.name} Candleaf®
              </h2>
            </Col>
            <Col xs="12" md="6" className="text-center order-1">
              <Col
                xs="12"
                md="12"
                className="text-center mt-2 order-md-1 order-2"
              >
                <figure className="image-box border-0 m-auto m-md-0">
                  <img
                    src={product.image}
                    alt="Image's product"
                    className="candle-image img-fluid"
                  />
                </figure>
              </Col>
              <Col
                xs="12"
                md="12"
                className="text-center mt-4 order-md-2 order-2 d-none d-md-block free-shipping-text"
              >
                <p>
                  All hand-made with natural soy wax, Candleaf is made for your
                  pleasure moments.
                </p>
                <strong className="text-center text-primary">
                  🚚 FREE SHIPPING
                </strong>
              </Col>
            </Col>
            <Col
              xs="12"
              md="6"
              className="text-center mt-4 order-md-2 order-3 d-md-none free-shipping-text"
            >
              <p>
                All hand-made with natural soy wax, Candleaf is made for your
                pleasure moments.
              </p>
              <strong className="text-center text-primary">
                🚚 FREE SHIPPING
              </strong>
            </Col>
            <Col xs="12" md="6" className="text-center order-2">
              <Col
                xs="12"
                md="12"
                className="order-md-1 order-2 title-box d-md-flex flex-column d-none"
              >
                <h2 className="product-title text-start">
                  {product.name} Candleaf®
                </h2>
              </Col>
              <Col xs="12" md="12" className="order-md-2 order-1">
                <Col xs="12" md="12" className="">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="d-flex flex-md-column my-3 w-50 gap-md-4 gap-md-5 div-divider-quantity-value">
                      <p className="d-flex align-items-center products-price text-primary h4 ps-1 ps-md-0">
                        ${product.price}
                      </p>
                      <ProductsQuantity
                        showTag={true}
                        className="pe-5"
                        onChange={(quantity) => setQuantity(quantity)}
                        value={quantity}
                      />
                    </div>
                    <div className="d-flex flex-column align-items-stretch py-2 gap-0">
                      <FormGroup
                        check
                        className={`mb-3 text-start py-1 option-container ${
                          selectedOption === "one-time"
                            ? "selected-option"
                            : "option"
                        }`}
                      >
                        <Input
                          className="text-start border-3"
                          type="radio"
                          name="purchaseOptions"
                          checked={selectedOption === "one-time"}
                          onChange={() => setSelectedOption("one-time")}
                        />
                        <Label
                          check
                          className="form-check-label text-start d-flex justify-content-star gap-2"
                        >
                          <span className="purchase-option">
                            One time purchase
                          </span>
                        </Label>
                      </FormGroup>
                      <div
                        className={
                          selectedOption === "subscribe"
                            ? "selected-option"
                            : "option"
                        }
                      >
                        <FormGroup
                          check
                          className="text-start py-2 py-md-1 option-container"
                        >
                          {" "}
                          <Input
                            className="border-3"
                            type="radio"
                            name="purchaseOptions"
                            checked={selectedOption === "subscribe"}
                            onChange={() => setSelectedOption("subscribe")}
                          />
                          <Label
                            check
                            className="form-check-label flex-column d-flex justify-content-start gap-2 align-self-stretch"
                          >
                            <div className="d-flex flex-column gap-2 weeks-select-box py-0 py-md-2 text-start justify-content-start">
                              <div className="d-flex gap-2 align-self-baseline text-start">
                                <span className="purchase-option">
                                  Subscribe and delivery every
                                </span>
                                <select
                                  name="delivery"
                                  id="delivery"
                                  className="weeks-select ms-2"
                                >
                                  <option value="2" className="ms-2">
                                    2 weeks
                                  </option>
                                  <option value="4">4 weeks</option>
                                  <option value="6">6 weeks</option>
                                </select>
                              </div>
                            </div>
                          </Label>
                        </FormGroup>
                        <div>
                          <p className="text-secondary purchase-option-2 text-start">
                            Subscribe now and get the 10% discount on every
                            recurring order. The discount will be applied at
                            checkout.
                            <a
                              href="#details"
                              className="text-primary fw-light"
                            >
                              {""} See details
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* <Link
                        to="/cart"
                        className="w-100 btn btn-primary mt-md-4 mt-4"
                      >
                        <i className="bi bi-cart pe-2"></i> + Add to cart
                      </Link> */}
                      <button
                        onClick={handleAddToCart}
                        type="button"
                        className="w-100 btn btn-primary mt-md-4 mt-4"
                      >
                        {" "}
                        <i className="bi bi-cart pe-2"></i> + Add to cart
                      </button>
                    </div>
                  </div>
                </Col>
                <Col xs="12" md="12" className="">
                  <Card className="product-details-card p-3 mt-4 w-100 text-start">
                    <CardBody>
                      <CardText>
                        <strong>Wax: </strong>
                        <span className="text-secondary">{product.wax}</span>
                      </CardText>
                      <CardText>
                        <strong>Fragrance: </strong>
                        <span className="text-secondary">
                          {product.fragrance}
                        </span>
                      </CardText>
                      <CardText>
                        <strong>Burning Time: </strong>
                        <span className="text-secondary">
                          {product.burningTime}
                        </span>
                      </CardText>
                      <CardText>
                        <strong>Dimension: </strong>
                        <span className="text-secondary">
                          {product.dimension}
                        </span>
                      </CardText>
                      <CardText>
                        <strong>Weight: </strong>
                        <span className="text-secondary">{product.weight}</span>
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Col>
            </Col>
          </Row>
        </Form>
      </Container>
    </ProductDetailsContainer>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetails;
