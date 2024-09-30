import OrderFormContainer from "./OrderFormContainer";
import { Link } from "react-router-dom";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

const OrderForm = () => {
  return (
    <OrderFormContainer className="container my-5">
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
        <Form>
          <FormGroup>
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="Email or mobile phone number"
              className="border-primary"
            />
          </FormGroup>
          <FormGroup check>
            <Label check className="me-0">
              <Input
                type="checkbox"
                className="me-0 rounded-0 border-2 border-dark-subtle"
              />{" "}
              <span className="text-p-font-size fw-medium span-text-input">
                Add me to Candleaf newsletter for a 10% discount
              </span>
            </Label>
          </FormGroup>

          <h3 className="mt-5 form-title">Shipping Address</h3>
          <div className="d-md-flex justify-content-between gap-md-2">
            <FormGroup className="w-100">
              <Input type="text" name="name" id="name" placeholder="Name" />
            </FormGroup>
            <FormGroup className="w-100">
              <Input
                type="text"
                name="secondName"
                id="secondName"
                placeholder="Second name"
              />
            </FormGroup>
          </div>

          <FormGroup>
            <Input
              type="text"
              name="address"
              id="address"
              placeholder="Address and number"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="city"
              id="city"
              placeholder="Shipping note (optional)"
            />
          </FormGroup>
          <div className="d-md-flex justify-content-between gap-md-2 flex-nowrap ">
            <FormGroup className="order-2">
              <Input
                type="text"
                name="postalCode"
                id="postalCode"
                placeholder="Postal code"
              />
            </FormGroup>
            <FormGroup className="order-1">
              <Input
                type="text"
                name="province"
                id="province"
                placeholder="City"
              />
            </FormGroup>
            <FormGroup className="form-floating order-3" floating>
              <Input
                id="province"
                name="province"
                type="select"
                bsSize="sm"
                className="custom-select"
              >
                <option value="" className="d-none d-md-block sm">
                  Province
                </option>
                <option value="" className="d-block d-md-none sm">
                  Select your province
                </option>
                <option> 1 </option>
                <option> 2 </option>
              </Input>
              <Label for="floatingProvince">Province</Label>
            </FormGroup>
          </div>
          <FormGroup className="form-floating">
            <Input
              id="country"
              name="country"
              type="select"
               bsSize="sm"
              className="custom-select"
            >
              <option value="">Italy</option>
              <option> 1 </option>
              <option> 2 </option>
            </Input>
            <Label for="floatingCountry">Country/Region</Label>
          </FormGroup>
          <FormGroup check className="py-3">
            <Label check>
              <Input
                type="checkbox"
                className="me-0 rounded-0 border-2 border-dark-subtle"
              />{" "}
              <span className="text-p-font-size fw-medium span-text-input">
                Save this information for a future fast checkout
              </span>
            </Label>
          </FormGroup>
          <div className="d-flex flex-column align-items-center gap-3 pt-4">
            <Link to={"/shipping"} className="w-100 btn btn-primary">
              Go to shipping
            </Link>
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
  );
};

export default OrderForm;
