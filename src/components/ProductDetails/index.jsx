import ProductDetailsContainer from "./ProductDetailsContainer.jsx";
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductsQuantity from '../ProductsQuantity';
import {
    Button, Form, FormGroup, Label, Input,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Card, CardBody, CardText,
    Col
} from 'reactstrap';

const ProductDetails = ({ product }) => {
    const [selectedOption, setSelectedOption] = useState('one-time');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [deliveryInterval, setDeliveryInterval] = useState('4 weeks');
    const toggleDropdown = () => setDropdownOpen(prevState => !prevState);

    return (
        <ProductDetailsContainer>
            <Form>
                <h2>{product.name} Candleaf®</h2>
                <img src={product.image} alt="Image's product" />
                <div>
                    <p className="products-price text-primary">{product.price}$</p>
                    <ProductsQuantity />
                </div>
                <div>
                    <FormGroup check>
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
                    <FormGroup check>
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
                                    <DropdownItem onClick={() => setDeliveryInterval('2 weeks')}>2 weeks</DropdownItem>
                                    <DropdownItem onClick={() => setDeliveryInterval('4 weeks')}>4 weeks</DropdownItem>
                                    <DropdownItem onClick={() => setDeliveryInterval('6 weeks')}>6 weeks</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <small>
                                Subscribe now and get the 10% discount on every recurring order. The discount will be applied at checkout.
                                <a href="#details">See details</a>
                            </small>
                        </Label>
                    </FormGroup>
                </div>
                <Button color="success" className="mt-3">
                    <i className="bi bi-cart"></i> + Add to cart
                </Button>
            </Form>
            <Card className="product-details-card p-1">
                <CardBody>
                    <CardText><strong>Wax:</strong></CardText>
                    <CardText><strong>Fragrance:</strong> </CardText>
                    <CardText><strong>Burning Time:</strong></CardText>
                    <CardText><strong>Dimension:</strong></CardText>
                    <CardText><strong>Weight:</strong> </CardText>
                </CardBody>
            </Card>
            <Col>
                <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</p>
                <p>🚚 FREE SHIPPING</p>
            </Col>

        </ProductDetailsContainer>
    );
};

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductDetails;