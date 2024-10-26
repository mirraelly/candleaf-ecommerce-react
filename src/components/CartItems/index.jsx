import ProductsQuantity from "../ProductsQuantity";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import CartItemsContainer from "./CartItemsContainer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { formatPrice } from "../../utilits/formatters.jsx";

const CartItems = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("#discovery");
  };

  //calculate total items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // calculate the total value of an item (quantity * price)
  const totalItemValue = (item) => item.price * item.quantity;

  //calculate the subtotal (sum of the values of all items)
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartItemsContainer className="px-2 pt-5">
      <section className="d-flex flex-column align-items-center justify-content-center gap-3 pb-5">
        <h2>Your cart items</h2>
        <Link
          to="/"
          className="text-primary text-decoration-underline z-2"
          onClick={handleClick}
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
        {cartItems.length === 0 ? (
          <Col xs="12" md="12" className="d-flex gap-md-0 gap-2 g-0">
            <div className="p-5 m-auto fs-4">Your shopping cart is empty.</div>
          </Col>
        ) : (
          cartItems.map((item) => {
            return (
              <Col
                key={item.id}
                xs="12"
                md="12"
                className="d-flex gap-md-0 gap-2 g-0"
              >
                <Col
                  xs="8"
                  md="6"
                  className="d-flex align-items-start pt-5 pb-3 g-0 gap-3"
                >
                  <figure className="image-box border-0">
                    <img
                      src={item.image}
                      alt="Image's product"
                      className="candle-image img-fluid cards-carts-images"
                    />
                  </figure>
                  <div className="d-flex flex-column gap-3">
                    <h4 className="product-title fs-4 fw-medium">
                      {item.name} Candleaf®
                    </h4>
                    {/* <a href="#" className="text-primary text-decoration-underline">
                  Remove
                </a> */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-primary bg-transparent border-0 text-start ps-0 text-decoration-underline fw-medium"
                    >
                      Remove
                    </button>
                  </div>
                </Col>
                <Col
                  xs="4"
                  md="4"
                  className="p d-flex fx-5 fw-medium align-items-end align-items-md-center justify-content-start ps-md-4 pe-md-3 pe-2 py-md-5 pt-5 pb-4 text-md-start flex-column flex-md-row justify-content-md-between gap-md-0 cart-items-quality-divisor-col"
                >
                  {/* <div className="">${product.price}</div> */}
                  <div className="">{formatPrice(item.price)}</div>
                  <div className="products-quantity-cart-page">
                    <p className="d-md-none d-block g-0 pb-1 my-0 text-center">
                      Quantity
                    </p>
                    <ProductsQuantity
                      showTag={false}
                      className="mb-3 ps-5 show-product"
                      onChange={(e) =>
                        // handleQuantityChange(item.id, parseInt(e.target.value))
                        updateQuantity(item.id, e)
                      }
                      value={item.quantity}
                      min="1"
                    />
                    {/* no show tag label */}
                  </div>
                </Col>
                <Col
                  md="2"
                  className="text-end align-items-center justify-content-end fs-5 fw-medium d-md-flex d-none"
                >
                  {/* <p>$ 9.99</p> */}
                  {/* <p className="text-total">{formatPrice(totalItemValue(item))}</p> */}
                  <p className="text-total">
                    {formatPrice(totalItemValue(item))}
                  </p>
                  {/* totalItems  */}
                </Col>
              </Col>
            );
          })
        )}
      </Row>
      <Row className="g-0 border-top px-2 pt-5 pb-5 pb-mb-0 order-2 mt-0 mb-5 mb-md-0 d-flex justify-content-md-end gap-md-5">
        <Col md="6" xs="12">
          <div className="d-flex flex-column justify-content-md-end pb-3">
            <div className="d-flex align-items-center justify-content-evenly justify-content-md-end fw-medium gap-5 fs-5">
              <p className="text-center text-sub-total">Sub-total</p>
              {/* <p className="text-center text-sub-total">$ 9.99</p> */}
              <p className="text-center text-sub-total">
                {formatPrice(subtotal)}
              </p>
            </div>
            <p className="text-secondary text-md-end text-center text-p">
              Tax and shipping cost will be calculated later
            </p>
          </div>
        </Col>
        <Col md="2" xs="12">
          <Link to={"/order"} className="w-100 btn btn-primary">
            Check-out
          </Link>
        </Col>
      </Row>
    </CartItemsContainer>
  );
};

export default CartItems;
