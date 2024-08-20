import { useState } from 'react';
import { Button, InputGroup, Input } from 'reactstrap';
import ProductsQuantityContainer from './ProductsQuantityContainer';

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    return (
        <ProductsQuantityContainer>
            <label>Quantity</label>
            <InputGroup>
                <Button color="success" onClick={increment}>+</Button>
                <Input
                    type="number"
                    value={quantity}
                    readOnly
                    className='text-center'
                />
                <Button color="secondary" onClick={decrement}>-</Button>
            </InputGroup>
        </ProductsQuantityContainer>
    );
};

export default Quantity;