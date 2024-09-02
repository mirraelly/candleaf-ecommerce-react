import ProductDetailsContainer from "./ProductDetailsContainer.jsx";
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductsQuantity from '../ProductsQuantity';
import {
    Container, Button, Form, FormGroup, Label, Input,
    Card, CardBody, CardText,
    Row, Col
} from 'reactstrap';

const ProductDetails = ({ product }) => {
    const [selectedOption, setSelectedOption] = useState('one-time');

    return (
        <ProductDetailsContainer>
            <Container className='mt-1 pt-3 pb-0'>
                <Form>
                    <Row className="justify-content-center">
                        <Col xs="12" md="6" className="text-center order-md-1 order-2">
                            <figure className="image-box border-0">
                                <img src={product.image} alt="Image's product" className="candle-image img-fluid" />
                            </figure>
                        </Col>
                        <Col xs="12" md="6" className="text-center mt-4 order-md-3 order-5">
                            <p>
                                All hand-made with natural soy wax, Candleaf is made for your pleasure moments.
                            </p>
                            <strong className="text-center text-primary">🚚 FREE SHIPPING</strong>
                        </Col>
                        <Col xs="12" md="6" className="order-md-2 order-1 title-box d-flex flex-column">
                            <h2 className="product-title">{product.name} Candleaf®</h2>
                        </Col>
                        <Col xs="12" md="6" className="order-md-4 order-4">
                            <div className="d-flex flex-column">
                                <div className="d-flex flex-md-column mb-3">
                                    <p className="d-flex align-items-center products-price text-primary h4">
                                        ${product.price}
                                    </p>
                                    <ProductsQuantity className="mb-3" />
                                </div>
                                <div className="d-flex flex-column py-2 gap-3">
                                    <FormGroup check className={`mb-3 py-1 ${selectedOption === 'one-time' ? 'selected-option' : 'option'}`}>
                                        <Label check className="form-check-label">
                                            <Input
                                                type="radio"
                                                name="purchaseOptions"
                                                checked={selectedOption === 'one-time'}
                                                onChange={() => setSelectedOption('one-time')}
                                            />
                                            One time purchase</Label>
                                    </FormGroup>
                                    <FormGroup check className={`mb-3 py-1 ${selectedOption === 'subscribe' ? 'selected-option' : 'option'}`}>
                                        <Label check className="form-check-label">
                                            <Input
                                                type="radio"
                                                name="purchaseOptions"
                                                checked={selectedOption === 'subscribe'}
                                                onChange={() => setSelectedOption('subscribe')}
                                            />
                                            <div className="d-flex weeks-select-box">
                                                <div>Subscribe and delivery every</div>
                                                <select name="delivery" id="delivery" className="weeks-select">
                                                    <option value="2">2 weeks</option>
                                                    <option value="4">4 weeks</option>
                                                    <option value="6">6 weeks</option>
                                                </select>
                                            </div>
                                            <p className="text-secondary">
                                                Subscribe now and get the 10% discount on every recurring order.
                                                The discount will be applied at checkout.
                                                <a href="#details" className="text-primary"> See details</a>
                                            </p>
                                        </Label>
                                    </FormGroup>
                                    <Button color="success" className="w-100">
                                        <i className="bi bi-cart"></i> + Add to cart
                                    </Button>
                                </div>
                            </div>
                            <Card className="product-details-card p-2 mt-4 w-100">
                                <CardBody>
                                    <CardText><strong>Wax:</strong> {product.wax}</CardText>
                                    <CardText><strong>Fragrance:</strong> {product.fragrance} </CardText>
                                    <CardText><strong>Burning Time:</strong> {product.burningTime} </CardText>
                                    <CardText><strong>Dimension:</strong> {product.dimension}</CardText>
                                    <CardText><strong>Weight:</strong> {product.weight}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </ProductDetailsContainer>
    );
};

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductDetails;