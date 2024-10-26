import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Form, Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import CreditCard from "../../assets/images/CreditCardFill.svg";
import { schema } from "./PaymentFormsValidation";
import { BsInfoSquareFill, BsLockFill } from "react-icons/bs";
import PaymentFormsContainer from "./PaymentFormsContainer";
import { useState } from "react";
import Message from "../Message";

const Payment = () => {
  //Toast
  const navigate = useNavigate();
  // const [submited, setSubmited] = useState(false);
  const [message, setMessage] = useState({
    toggle: () => setMessage({ ...message, isOpen: false }),
    isOpen: false,
  });

  const showMessage = (props) => {
    setMessage({
      ...message,
      ...props,
      isOpen: true,
    });
  };

  //validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    showMessage({
      title: "Success!",
      body: "The information were sent successfully!",
      icon: "success",
      toggle: () => navigate({ pathname: "/confirmed" }),
    });
  };

  const onError = (data) => {
    showMessage({
      title: "Warning!",
      body: "There are erros in the fields. Please, correct and try again.",
      icon: "danger",
    });
  };

  function field(name) {
    const { ref, ...fn } = register(name);
    return { innerRef: ref, ...fn };
  }

  return (
    <>
      <PaymentFormsContainer>
        <Form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
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
                        Via Firenze 23, 92023, Campobello{" "}
                        <br className="hide" /> di Licata AG, Itália
                      </span>
                    </Col>
                    <Col xs="1" md="1" className="text-end">
                      <Link
                        to={"/order"}
                        className="text-primary text-font-size"
                      >
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
                      <Link
                        to={"/order"}
                        className="text-primary text-font-size"
                      >
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
                <CardBody className="mb-0 px-0 px-md-3">
                  <div className="d-flex flex-column gap-form mb-0">
                    <FormGroup noMargin>
                      <InputGroup className="mt-md-2 mb-0">
                        <Input
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          placeholder="Card Number"
                          className={`border-end-0 rounded-0 input-font color-grey ${
                            errors.cardNumber ? "is-invalid" : ""
                          }`}
                          {...field("cardNumber")}
                        />
                        <InputGroupText className="bg-white rounded-0 color-grey">
                          <BsLockFill className="text-secondary " /> {/* Icon*/}
                        </InputGroupText>
                      </InputGroup>
                      {errors.cardNumber && (
                        <p className="text-danger">
                          {errors.cardNumber.message}
                        </p>
                      )}
                    </FormGroup>

                    <FormGroup noMargin>
                      <Input
                        id="holderName"
                        name="name"
                        placeholder="Holder Name"
                        type="text"
                        className={`rounded-0 input-font color-grey ${
                          errors.holderName ? "is-invalid" : ""
                        }`}
                        {...field("holderName")}
                        required
                      />
                      {errors.holderName && (
                        <p className="text-danger">
                          {errors.holderName.message}
                        </p>
                      )}
                    </FormGroup>

                    <div className="d-flex gap-2 gap-md-3">
                      <FormGroup className="w-50">
                        <Input
                          id="expiration"
                          name="expiration"
                          placeholder="Expiration (MM/YY)"
                          type="text"
                          className={`rounded-0 input-font color-grey ${
                            errors.expiration ? "is-invalid" : ""
                          }`}
                          {...field("expiration")}
                          required
                        />
                        {errors.expiration && (
                          <p className="text-danger">
                            {errors.expiration.message}
                          </p>
                        )}
                      </FormGroup>

                      <FormGroup className="w-50">
                        <InputGroup>
                          <Input
                            id="cvv"
                            name="cvv"
                            placeholder="CVV"
                            type="password"
                            className={`border-end-0 rounded-0 input-font color-grey ${
                              errors.cvv ? "is-invalid" : ""
                            }`}
                            {...field("cvv")}
                            required
                          />
                          <InputGroupText className="bg-white rounded-0 color-grey">
                            <BsInfoSquareFill className="text-secondary" />{" "}
                            {/* Ícon */}
                          </InputGroupText>
                        </InputGroup>
                        {errors.cvv && (
                          <p className="text-danger">{errors.cvv.message}</p>
                        )}
                      </FormGroup>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <h5 className="mb-4 fw-bolder">Tax Informations</h5>
              <div className="d-flex flex-column gap-form mb-4">
                <FormGroup noMargin>
                  <Input
                    id="vat"
                    name="vat"
                    placeholder="VAT number (optional)"
                    type="number"
                    className="rounded-0 input-font color-grey"
                  />
                </FormGroup>
                <FormGroup noMargin>
                  <Input
                    id="pec"
                    name="pec"
                    placeholder="PEC (optional)"
                    type="text"
                    className="rounded-0 input-font color-grey"
                  />
                </FormGroup>
              </div>

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
                          <span className="ms-3">
                            Same as the shipping address
                          </span>
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
                {/* <Link to={"/confirmed"} className="w-100 btn btn-primary">
              Pay now
            </Link> */}
                <Button type="submit" className="btn btn-primary w-100">
                  Pay now
                </Button>
                <Link
                  to={"/shipping"}
                  className="w-100 text-primary text-decoration-underline d-flex justify-content-center"
                >
                  Back to shipping
                </Link>
              </div>
            </Col>
          </Container>
        </Form>
      </PaymentFormsContainer>
      <Message {...message}></Message>
    </>
  );
};

export default Payment;
