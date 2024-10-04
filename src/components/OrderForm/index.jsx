import OrderFormContainer from "./OrderFormContainer";
import { Link } from "react-router-dom";
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Button,
} from "reactstrap";
import { useState } from "react";
import Message from "../Message";

const OrderForm = () => {
  const [submited, setSubmited] = useState(false);
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

  const [formValues, setFormValues] = useState({
    contact: "",
    discount: false,
    name: "",
    secondname: "",
    address: "",
    note: "",
    postalCode: "",
    city: "",
    province: "",
    country: "",
    saveData: false,
  });
  const [errors, setErrors] = useState({
    contact: false,
    discount: false,
    name: false,
    secondname: false,
    address: false,
    note: false,
    postalCode: false,
    city: false,
    province: false,
    country: false,
    saveData: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmited(true);
    // Validates the mandatory fields's completion

    const newErrors = {
      contact: formValues.contact === "",
      name: formValues.name === "",
      secondname: formValues.name === "",
      address: formValues.address === "",
      postalCode: formValues.postalCode === "",
      city: formValues.postalCode === "",
      province: formValues.province === "",
      country: formValues.province === "",
    };

    setErrors(newErrors);

    // Checks for errors
    const hasErrors = Object.values(newErrors).some((error) => error === true);

    if (!hasErrors) {
      alert("Formulário enviado com sucesso!");
    } else {
      showMessage({
        title: "Warning!",
        body: "There are erros in the fields. Please, correct and try again.",
        icon: "danger"
      });
    }
  };

  return (
    <>
      <OrderFormContainer className="my-5">
        <Col md="12">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-4 form-title">Contact</h3>
            <div className="d-flex gap-1 fw-medium">
              <p className="text-p-font-size">Do you have an account? </p>
              <a href="#" className="text-primary text-p-font-size">
                Login
              </a>
            </div>
          </div>

          <Form
            onSubmit={handleSubmit}
            onChange={handleInputChange}
            noValidate
            className={submited ? "was-validated" : ""}
          >
            <FormGroup>
              <Input
                type="text"
                name="contact"
                id="contact"
                placeholder="Email or mobile phone number"
                className="green-border"
                value={formValues.contact}
                onChange={handleInputChange}
                invalid={errors.contact}
                required
              />
              <FormFeedback className="border-danger">
                The Contact field is mandatory.
              </FormFeedback>
            </FormGroup>
            <FormGroup check>
              <Label check className="me-0">
                <Input
                  type="checkbox"
                  name="discount"
                  className="me-0 rounded-0 border-2 border-dark-subtle"
                  value={formValues.discount}
                  onChange={handleInputChange}
                />{" "}
                <span className="text-p-font-size fw-medium span-text-input">
                  Add me to Candleaf newsletter for a 10% discount
                </span>
              </Label>
            </FormGroup>

            <h3 className="mt-5 form-title">Shipping Address</h3>
            <div className="d-md-flex justify-content-between gap-md-2">
              <FormGroup className="w-100">
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="color-grey"
                  value={formValues.name}
                  onChange={handleInputChange}
                  invalid={errors.name}
                  required
                />
                <FormFeedback className="border-danger">
                  The Name is mandatory.
                </FormFeedback>
              </FormGroup>
              <FormGroup className="w-100">
                <Input
                  type="text"
                  name="secondName"
                  id="secondName"
                  placeholder="Second name"
                  className="color-grey"
                  value={formValues.secondname}
                  onChange={handleInputChange}
                  invalid={errors.secondname}
                  required
                />
                <FormFeedback className="border-danger">
                  The Second name is mandatory.
                </FormFeedback>
              </FormGroup>
            </div>

            <FormGroup>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Address and number"
                className="color-grey"
                value={formValues.address}
                onChange={handleInputChange}
                invalid={errors.address}
                required
              />
              <FormFeedback className="border-danger">
                Address and number are mandatory.
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="note"
                id="note"
                placeholder="Shipping note (optional)"
                className="color-grey"
                value={formValues.city}
                onChange={handleInputChange}
              />
            </FormGroup>
            <div className="d-md-flex justify-content-between gap-md-2 flex-nowrap ">
              <FormGroup className="order-2">
                <Input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  placeholder="Postal code"
                  className="color-grey"
                  value={formValues.postalCode}
                  onChange={handleInputChange}
                  invalid={errors.postalCode}
                  required
                />
                <FormFeedback className="border-danger">
                  The Postal code is mandatory.
                </FormFeedback>
              </FormGroup>
              <FormGroup className="order-1">
                <Input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="color-grey"
                  value={formValues.city}
                  onChange={handleInputChange}
                  invalid={errors.city}
                  required
                />
                <FormFeedback className="border-danger">
                  The City is mandatory.
                </FormFeedback>
              </FormGroup>
              <FormGroup className="form-floating order-3" floating>
                <Input
                  id="province"
                  name="province"
                  type="select"
                  bsSize="sm"
                  className="custom-select color-grey"
                  value={formValues.province}
                  onChange={handleInputChange}
                  invalid={errors.province}
                  required
                >
                  <option value="" className="d-md-block d-none sm">
                    Province
                  </option>
                  <option value="" className="d-block d-md-none sm">
                    Select your province
                  </option>
                  <option value="1"> 1 </option>
                  <option value="2"> 2 </option>
                </Input>
                <Label for="floatingProvince">Province</Label>
                <FormFeedback className="border-danger">
                  The Province field is mandatory.
                </FormFeedback>
              </FormGroup>
            </div>
            <FormGroup className="form-floating">
              <Input
                id="country"
                name="country"
                type="select"
                bsSize="sm"
                className="custom-select color-grey"
                value={formValues.country}
                onChange={handleInputChange}
                invalid={errors.country}
                required
              >
                <option value="">Select your country</option>
                <option value="Italy">Italy</option>
                <option value="Brazil">Brazil</option>
                <option value="Other">Other</option>
              </Input>
              <Label for="floatingCountry">Country/Region</Label>
              <FormFeedback className="border-danger">
                The Country field is mandatory.
              </FormFeedback>
            </FormGroup>
            <FormGroup check className="py-3">
              <Label check>
                <Input
                  type="checkbox"
                  name="saveData"
                  id="saveData"
                  className="me-0 rounded-0 border-2 border-dark-subtle"
                  value={formValues.saveData}
                  onChange={handleInputChange}
                />{" "}
                <span className="text-p-font-size fw-medium span-text-input">
                  Save this information for a future fast checkout
                </span>
              </Label>
            </FormGroup>
            <div className="d-flex flex-column align-items-center gap-3 pt-4">
              <Button type="submit" className="w-100 btn btn-primary">
                Go to shipping
              </Button>
              <Link
                to={"/cart"}
                className="w-100 text-primary text-decoration-underline d-flex justify-content-center"
              >
                Back to cart
              </Link>
            </div>
          </Form>
        </Col>
      </OrderFormContainer>
      <Message {...message}></Message>
    </>
  );
};

export default OrderForm;
