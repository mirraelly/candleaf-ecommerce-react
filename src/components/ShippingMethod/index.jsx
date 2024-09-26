import { Link } from "react-router-dom";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

import { Container, Card, CardBody } from 'reactstrap';

const ShippingMethod = () => {

    return (
        <Container className="mt-5 pb-5">
            <Col md="12">
                <Card className="mb-5 border-primary border-opacity-25">
                    <CardBody className="mx-2">
                        <Row noGutters>
                            <Col xs="3">
                                <h6 className="mb-3 text-secondary">Contact</h6>
                            </Col>
                            <Col xs="7">
                                <span>joe.spagnuolo@uxbly.com</span>
                            </Col>
                            <Col xs="2" className="text-end">
                                <Link to={'/order'} className="text-primary">
                                    Edit
                                </Link>
                            </Col>

                            <hr className="border-primary border-opacity-50"/>

                            <Col xs="3">
                                <h6 className="mb-3 text-secondary">Ship to</h6>
                            </Col>
                            <Col xs="7">
                                <span>Via Firenze 23, 92023, Campobello <br />
                                    di Licata AG, Itália
                                </span></Col>
                            <Col xs="2" className="text-end">
                                <Link to={'/order'} className="text-primary">
                                    Edit
                                </Link>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <h5 className="mb-4">Shipping method</h5>
                <Card className="mb-5 border-primary border-opacity-25">
                    <CardBody >
                        <Row>
                            <Col xs="8">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="shippingMethod" defaultChecked/>{' '}
                                        <span className="ms-3">Standard Shipping</span>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col xs="4" className="text-end">
                                <span className="float-right fw-bold">Free</span>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>

                <div className="d-flex flex-column align-items-center gap-4 pt-5">
                    <Link to={'/payment'} className="w-100 btn btn-primary">
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

export default ShippingMethod;