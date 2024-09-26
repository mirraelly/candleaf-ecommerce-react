import { Form, Link } from "react-router-dom";
import {
  CardHeader,
  Col,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import CreditCard from "../../assets/images/CreditCardFill.svg";
import { Container, Card, CardBody } from "reactstrap";
// import { faLock, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { BsLockFill, BsInfoSquareFill } from "react-icons/bs";

const Payment = () => {
  return (
    <Container className="mt-5 pb-5">
      <Col md="12">
        <Card className="mb-5 border-primary border-opacity-25">
          <CardBody className="">
            <Row>
              <Col xs="2" md="2">
                <h6 className="mb-3 text-secondary">Contact</h6>
              </Col>
              <Col xs="8" md="8">
                <span>joe.spagnuolo@uxbly.com</span>
              </Col>
              <Col xs="2" md="2" className="text-end">
                <Link to={"/order"} className="text-primary">
                  Edit
                </Link>
              </Col>

              <hr className="border-primary border-opacity-50" />

              <Col xs="2" md="2">
                <h6 className="mb-3 text-secondary">Ship to</h6>
              </Col>
              <Col xs="8" md="8" className="fs-6">
                <span>
                  Via Firenze 23, 92023, Campobello di Licata AG, Itália
                </span>
              </Col>
              <Col xs="2" md="2" className="text-end">
                <Link to={"/order"} className="text-primary">
                  Edit
                </Link>
              </Col>

              <hr className="border-primary border-opacity-50" />

              <Col xs="2" md="2">
                <h6 className="text-secondary">Method</h6>
              </Col>
              <Col xs="8" md="6">
                <span>
                  Standard Shipping
                  <span className="fw-light"> - FREE</span>
                </span>
              </Col>
              <Col xs="2" md="3" className="text-end">
                <Link to={"/order"} className="text-primary">
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
                <InputGroup>
                  <Input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="Card Number"
                    className="border-end-0"
                  />
                  <InputGroupText className="bg-white">
                    <BsLockFill className="text-secondary" /> {/* Icon*/}
                  </InputGroupText>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Input
                  id="holderName"
                  name="name"
                  placeholder="Holder Name"
                  type="text"
                  className=""
                />
              </FormGroup>

              <div className="d-flex gap-3">
                <FormGroup className="w-50">
                  <Input
                    id="expiration"
                    name="expiration"
                    placeholder="Expiration (MM/YY)"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="w-50">
                  <InputGroup>
                    <Input
                      id="cvv"
                      name="cvv"
                      placeholder="CVV"
                      type="password"
                      className="border-end-0"
                    />
                    <InputGroupText className="bg-white">
                      <BsInfoSquareFill className="text-secondary" />{" "}
                      {/* Ícon */}
                    </InputGroupText>
                  </InputGroup>
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
                    <Input type="radio" name="shippingMethod" defaultChecked />{" "}
                    <span className="ms-3">Same as the shipping address</span>
                  </Label>
                </FormGroup>
              </Col>

              <hr className="border-primary border-opacity-50" />

              <Col xs="8">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="shippingMethod" />{" "}
                    <span className="ms-3">
                      Use a different address for billing
                    </span>
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <div className="d-flex flex-column align-items-center gap-4 pt-5">
          <Link to={"/payment"} className="w-100 btn btn-primary">
            Pay now
          </Link>
          <Link
            to={"/shipping"}
            className="w-100 text-primary text-decoration-underline d-flex justify-content-center"
          >
            Back to shipping
          </Link>
        </div>
      </Col>
    </Container>
  );
};

export default Payment;
