import { useState } from "react";
import { Button, InputGroup, Input } from "reactstrap";
import ProductsQuantityContainer from "./ProductsQuantityContainer";
import PropTypes from "prop-types";

const Quantity = ({ showTag, onChange, value }) => {
  const [quantity, setQuantity] = useState(value);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  const decrement = () => {
    const newQuantity = quantity > 1 ? quantity - 1 : 1;
    setQuantity(newQuantity);
    onChange(newQuantity);
  };

  return (
    <ProductsQuantityContainer className="d-flex text-align-center justify-content-center flex-column align-items-md-start p-0 w-75 m-0">
      {showTag && <label className="quantity-title pb-1">Quantity</label>}
      <InputGroup className="border border-primary quantity-input" size="sm">
        <Button color="white" onClick={increment} className="text-primary">
          +
        </Button>
        <Input
          type="text"
          value={quantity}
          readOnly
          className="text-center border-0 fs-6 px-0"
        />
        <Button color="white" onClick={decrement} className="text-primary">
          -
        </Button>
      </InputGroup>
    </ProductsQuantityContainer>
  );
};

Quantity.propTypes = {
  showTag: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default Quantity;
