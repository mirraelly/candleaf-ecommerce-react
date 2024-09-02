import PropTypes from 'prop-types';
import ProductsQuantity from '../ProductsQuantity';
import {
    Button, Row, Col
} from 'reactstrap';

const CartItems = ({ product }) => {
    return (
        <>
            <section className='d-flex flex-column align-items-center py-5'>
                <h2>Your cart items</h2>
                <a href="#" className="stretched-link text-primary text-decoration-underline">Back to shopping</a>
            </section>
            <Row className="justify-content-center">
                <Col xs="12" md="" className='d-flex justify-content-between px-4 border-bottom'>
                    <p>Product</p>
                    <p>Price</p>
                </Col>
                <Col xs="4" md="" className='d-flex align-items-center'>
                    <figure className="image-box border-0">
                        <img src={product.image} alt="Image's product" className="candle-image img-fluid" />
                    </figure>
                </Col>
                <Col xs="4" md="" className='d-flex align-items-center '>
                    <h4 className="product-title">{product.name} Candleaf®</h4>
                </Col>
                <Col xs="4" md="" className='p d-flex align-items-center'>
                    ${product.price}
                </Col>
                <Col xs="8" md="" className='d-flex justify-content-between'>
                    <a href="#" className="stretched-link text-primary text-decoration-underline ">Remove</a>
                    <Col>
                        <ProductsQuantity className="mb-3" />
                    </Col>
                </Col>
            </Row>
            <Row>
                <div className='d-flex align-items-center justify-content-between'>
                    <p>Sub-total</p>
                    <p>$ 9.99</p>
                </div>
                <p>Tax and shipping cost will be calculated later</p>
            </Row>
            <Button color="success" className="w-100">Checkout</Button>
        </>
    )
}

CartItems.propTypes = {
    product: PropTypes.object.isRequired
}

export default CartItems;