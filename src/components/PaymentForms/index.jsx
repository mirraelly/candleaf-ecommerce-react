import { Form, Link } from "react-router-dom";
import { CardHeader, Col, FormGroup, Input, InputGroupText, Label, Row } from "reactstrap";
import CreditCard from "../../assets/images/CreditCardFill.svg";
import { Container, Card, CardBody } from 'reactstrap';
// import { faLock, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Payment = () => {

    return (
        <Container className="mt-5 pb-5">
            <Col md="6">
                <Card className="mb-5 border-primary border-opacity-25">
                    <CardBody className="mx-2">
                        <Row>
                            <Col xs="2">
                                <h6 className="mb-3">Contact</h6>
                            </Col>
                            <Col xs="8">
                                <span>joe.spagnuolo@uxbly.com</span>
                            </Col>
                            <Col xs="2" className="text-end">
                                <Link to={'/order'} className="text-primary">
                                    Edit
                                </Link>
                            </Col>

                            <hr className="border-primary border-opacity-50" />

                            <Col xs="2">
                                <h6 className="mb-3">Ship to</h6>
                            </Col>
                            <Col xs="8">
                                <span>Via Firenze 23, 92023, Campobello
                                    di Licata AG, Itália
                                </span></Col>
                            <Col xs="2" className="text-end">
                                <Link to={'/order'} className="text-primary">
                                    Edit
                                </Link>
                            </Col>

                            <hr className="border-primary border-opacity-50" />

                            <Col xs="2">
                                <h6 className="">Method</h6>
                            </Col>
                            <Col xs="8">
                                <span>Standard Shipping -
                                    <span>FREE</span>
                                </span></Col>
                            <Col xs="2" className="text-end">
                                <Link to={'/order'} className="text-primary">
                                    Edit
                                </Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <h5 className="mb-4">Payment method</h5>
                <Card className="mb-2 border-primary border-opacity-25">
                    <CardHeader className="d-flex gap-4">
                        <img src={CreditCard} alt="CreditCard" />
                        <h5 className="text-primary">Credit Card</h5>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Input id="cardNumber" name="cardNumber"
                                    placeholder="Card Number" type="nnumber" />
                                <InputGroupText>
                                    <faLock/>
                                </InputGroupText>
                            </FormGroup>
                            <FormGroup>
                                <Input id="holderNumber" name="name"
                                    placeholder="Holder Number" type="text"
                                    className="" />
                            </FormGroup>
                            <div className="d-flex gap-3">
                                <FormGroup className="w-50">
                                    <Input id="expiration" name="expiration"
                                        placeholder="Expiration (MM/YY)" type="date" />
                                </FormGroup>
                                <FormGroup className="w-50">
                                    <Input id="cvv" name="cvv"
                                        placeholder="CVV" type="password"
                                        className="" />
                                </FormGroup>
                            </div>
                        </Form>
                    </CardBody>
                </Card>

                <h5 className="mb-4">Billing address</h5>
                <Card className="mb-2 border-primary border-opacity-25">
                    <CardBody className="mx-2">
                        <Row>
                            <Col xs="8">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="shippingMethod" defaultChecked />{' '}
                                        <span className="ms-3">Same as the shipping address</span>
                                    </Label>
                                </FormGroup>
                            </Col>

                            <hr className="border-primary border-opacity-50" />

                            <Col xs="8">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="shippingMethod" />{' '}
                                        <span className="ms-3">Use a different address for billing</span>
                                    </Label>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <div className="d-flex flex-column align-items-center gap-4 pt-5">
                    <Link to={'/order'} className="w-100 btn btn-primary">
                        Go to payment
                    </Link>
                    <Link to={'/order'} className="w-100 text-primary text-decoration-underline d-flex justify-content-center">
                        Back to details
                    </Link>
                </div>
            </Col>
        </Container >
    );
};

export default Payment;