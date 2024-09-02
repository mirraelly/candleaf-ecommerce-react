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
        <ProductsQuantityContainer className='d-flex text-align-center flex-column align-items-center'>
            <label className='quantity-title'>Quantity</label>
            <InputGroup className='border border-primary w-25' size="sm">
                <Button color='white' onClick={increment} className='text-primary'>+</Button>
                <Input
                    type="number"
                    value={quantity}
                    readOnly
                    className='text-center border-0'
                    placeholder="Large Input"
                />
                <Button color="white" onClick={decrement} className='text-primary'>-</Button>
            </InputGroup>
        </ProductsQuantityContainer>
    );
};

export default Quantity;