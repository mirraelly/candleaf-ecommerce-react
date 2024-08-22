import ProductDetailsContainer from "./ProductDetailsContainer.jsx";
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductsQuantity from '../ProductsQuantity';
import {
    Container, Button, Form, FormGroup, Label, Input,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Card, CardBody, CardText,
    Row, Col
} from 'reactstrap';

const ProductDetails = ({ product }) => {
    const [selectedOption, setSelectedOption] = useState('one-time');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [deliveryInterval, setDeliveryInterval] = useState('4 weeks');
    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    return (
        <ProductDetailsContainer>
            <Container className='mt-3 py-4'>
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
                        <Col xs="12" md="6" className="order-md-2 order-1">
                            <h2 className="product-title">{product.name} Candleaf®</h2>
                        </Col>
                        <Col xs="12" md="6" className="order-md-4 order-4">
                            <p className="products-price text-primary h4">{product.price}$</p>
                            <ProductsQuantity className="mb-3" />
                            <FormGroup check className="mb-3">
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="purchaseOptions"
                                        checked={selectedOption === 'one-time'}
                                        onChange={() => setSelectedOption('one-time')}
                                    />
                                    One time purchase
                                </Label>
                            </FormGroup>
                            <FormGroup check className="mb-3">
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="purchaseOptions"
                                        checked={selectedOption === 'subscribe'}
                                        onChange={() => setSelectedOption('subscribe')}
                                    />
                                    <div>Subscribe and delivery every</div>
                                    <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                                        <DropdownToggle caret>
                                            {deliveryInterval}
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem onClick={() => setDeliveryInterval('2 weeks')}>
                                                2 weeks
                                            </DropdownItem>
                                            <DropdownItem onClick={() => setDeliveryInterval('4 weeks')}>
                                                4 weeks
                                            </DropdownItem>
                                            <DropdownItem onClick={() => setDeliveryInterval('6 weeks')}>
                                                6 weeks
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <small>
                                        Subscribe now and get the 10% discount on every recurring order.
                                        The discount will be applied at checkout. <a href="#details">See details</a>
                                    </small>
                                </Label>
                            </FormGroup>
                            <Button color="success" className="w-100">
                                <i className="bi bi-cart"></i> + Add to cart
                            </Button>
                            <Card className="product-details-card p-2 mt-4">
                                <CardBody className="w-100">
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