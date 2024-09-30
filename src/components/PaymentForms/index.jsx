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
import PaymentFormsContainer from "./PaymentFormsContainer";

const Payment = () => {
  return (
    <PaymentFormsContainer>
      <Container className="mt-4 pb-5">
        <Col md="12">
          <Card className="mb-4 mb-md-5 border-primary border-opacity-25">
            <CardBody className="mx-0">
              <Row noGutters className="gx-0">
                <Col xs="2" md="2">
                  <h6 className="mb-3 text-secondary text-font-size">
                    Contact
                  </h6>
                </Col>
                <Col xs="8" md="9">
                  <span className="ms-1">joe.spagnuolo@uxbly.com</span>
                </Col>
                <Col xs="2" md="1" className="text-end">
                  <Link
                    to={"/order"}
                    className="text-primary link-edit text-end"
                  >
                    Edit
                  </Link>
                </Col>

                <hr className="border-primary border-opacity-50" />

                <Col xs="2" md="2">
                  <h6 className="mb-3 text-secondary text-font-size">
                    Ship to
                  </h6>
                </Col>
                <Col xs="9" md="9" className="">
                  <span className="text-font-size">
                    Via Firenze 23, 92023, Campobello <br className="hide" /> di
                    Licata AG, Itália
                  </span>
                </Col>
                <Col xs="1" md="1" className="text-end">
                  <Link to={"/order"} className="text-primary text-font-size">
                    Edit
                  </Link>
                </Col>

                <hr className="border-primary border-opacity-50" />

                <Col xs="2" md="2">
                  <h6 className="text-secondary text-font-size">Method</h6>
                </Col>
                <Col xs="9" md="9">
                  <span className="ms-1">
                    Standard Shipping
                    <span className="fw-light"> - FREE</span>
                  </span>
                </Col>
                <Col xs="1" md="1" className="text-end">
                  <Link to={"/order"} className="text-primary text-font-size">
                    Edit
                  </Link>
                </Col>
              </Row>
            </CardBody>
          </Card>

          <h5 className="mb-3 mb-md-4 fw-bolder">Payment method</h5>
          <Card className="mb-0 mb-md-2 border-primary border-opacity-25 mb-0 mb-md-5 pay-card-border">
            <CardHeader className="d-md-flex border-bottom-0 border-top d-none gap-4 credit-card-container">
              <img src={CreditCard} alt="CreditCard" />
              <h5 className="text-primary text-credit-card">Credit Card</h5>
            </CardHeader>
            <CardBody className="mb-0">
              <Form className="d-flex flex-column gap-2 gap-md-3 mb-0">
                <FormGroup>
                  <InputGroup className="mt-md-2 mb-0">
                    <Input
                      type="text"
                      name="cardNumber"
                      id="cardNumber"
                      placeholder="Card Number"
                      className="border-end-0 rounded-0 input-font color-grey"
                    />
                    <InputGroupText className="bg-white rounded-0 color-grey">
                      <BsLockFill className="text-secondary " /> {/* Icon*/}
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>

                <FormGroup>
                  <Input
                    id="holderName"
                    name="name"
                    placeholder="Holder Name"
                    type="text"
                    className="rounded-0 input-font color-grey"
                  />
                </FormGroup>

                <div className="d-flex gap-2 gap-md-3">
                  <FormGroup className="w-50">
                    <Input
                      id="expiration"
                      name="expiration"
                      placeholder="Expiration (MM/YY)"
                      type="text"
                      className="rounded-0 input-font color-grey"
                    />
                  </FormGroup>
                  <FormGroup className="w-50">
                    <InputGroup>
                      <Input
                        id="cvv"
                        name="cvv"
                        placeholder="CVV"
                        type="password"
                        className="border-end-0 rounded-0 input-font color-grey"
                      />
                      <InputGroupText className="bg-white rounded-0 color-grey">
                        <BsInfoSquareFill className="text-secondary" />{" "}
                        {/* Ícon */}
                      </InputGroupText>
                    </InputGroup>
                  </FormGroup>
                </div>
              </Form>
            </CardBody>
          </Card>

          <h5 className="mb-4 fw-bolder">Tax Informations</h5>
          <Form className="d-flex flex-column gap-1 gap-md-2 mb-4">
            <FormGroup>
              <Input
                id="vat"
                name="vat"
                placeholder="VAT number (optional)"
                type="number"
                className="rounded-0 input-font color-grey"
              />
            </FormGroup>
            <FormGroup>
              <Input
                id="pec"
                name="pec"
                placeholder="PEC (optional)"
                type="text"
                className="rounded-0 input-font color-grey"
              />
            </FormGroup>
          </Form>

          <h5 className="mb-4 fw-bolder">Billing address</h5>
          <Card className="mb-2 border-primary border-opacity-25">
            <CardBody className="mx-0">
              <Row noGutters>
                <Col xs="12">
                  <FormGroup check className="mb-1">
                    <Label check className="align-items-start">
                      <Input
                        type="radio"
                        name="shippingMethod"
                        defaultChecked
                      />{" "}
                      <span className="ms-3">Same as the shipping address</span>
                    </Label>
                  </FormGroup>
                </Col>

                <hr className="border-primary border-opacity-50" />

                <Col xs="12">
                  <FormGroup check>
                    <Label check className="align-items-start">
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

          <div className="d-flex justify-content-md-between flex-column flex-md-row gx-0 align-items-center gap-4 pt-4 pt-md-5">
            <Link to={"/confirmed"} className="w-100 btn btn-primary">
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
    </PaymentFormsContainer>
  );
};

export default Payment;
