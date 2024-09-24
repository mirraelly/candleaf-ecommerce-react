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
        <ProductsQuantityContainer className='d-flex text-align-center flex-column align-items-md-start p-0 w-75 m-0'>
            <label className='quantity-title'>Quantity</label>
            <InputGroup className='border border-primary quantity-box d-flex flex-row' size="sm">
                <Button color='white' onClick={increment} className='text-primary signal-button'>+</Button>
                <Input
                    type="number"
                    value={quantity}
                    readOnly
                    className='text-end border-0'
                    placeholder="Large Input"
                />
                <Button color="white" onClick={decrement} className='text-primary signal-button'>-</Button>
            </InputGroup>
        </ProductsQuantityContainer>
    );
};

export default Quantity;