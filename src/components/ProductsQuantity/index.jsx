import { useState } from "react";
import { Button, InputGroup, Input } from "reactstrap";
import ProductsQuantityContainer from "./ProductsQuantityContainer";
import PropTypes from "prop-types";

const Quantity = ({ showTag }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <ProductsQuantityContainer className="d-flex text-align-center justify-content-center flex-column align-items-md-start p-0 w-75 m-0">
      {showTag && <label className="quantity-title">Quantity</label>}
      <InputGroup
        className="border border-primary quantity-box d-flex justify-content-center align-items-center text-center"
        size="sm"
        style={{ width: '70px' }}
      >
        <Button
          color="white"
          onClick={increment}
          className="text-primary signal-button"
          style={{ width: '5px', textAlign: 'end' }}
        >
          +
        </Button>
        <Input
          type="number"
          value={quantity}
          readOnly
          className="text-center border-0"
          placeholder="Large Input"
          style={{ width: '32px'}}
        />
        <Button
          color="white"
          onClick={decrement}
          className="text-primary signal-button"
          style={{ width: '5px', textAlign: 'start' }}
        >
          -
        </Button>
      </InputGroup>
    </ProductsQuantityContainer>
  );
};

Quantity.propTypes = {
  showTag: PropTypes.bool.isRequired,
};

export default Quantity;
