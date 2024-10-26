import clean from "../../assets/images/clean.svg";
import CleanContainer from "../Clean/CleanContainer";
import { Button, Container, Row, Col } from "reactstrap";

const Clean = () => {
  return (
    <CleanContainer>
      <Container className="mt-5 py-4">
        <Row>
          <div className="d-md-none text-center">
            <h1>
              Clean and <br /> fragrant soy wax
            </h1>
            <p className="text-primary ">
              Made for your home and for your wellness
            </p>
          </div>
          <Col md="6" xs="12" className="order-md-1 order-2 px-0 px-md">
            <div className="d-none d-md-block text-md-start">
              <h1>
                Clean and <br /> fragrant soy wax
              </h1>
              <p className="text-primary ">
                Made for your home and for your wellness
              </p>
            </div>
            <div className="pt-4 pb-0 pb-md-4">
              <ul>
                <li className="text-decoration-none pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#434343"
                  >
                    <path d="m429-336 238-237-51-51-187 186-85-84-51 51 136 135Zm51 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                  </svg>
                  <b> Eco-sustainable:</b> All recyclable materials, 0% CO2
                  emissions
                </li>
                <li className="pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#434343"
                  >
                    <path d="m429-336 238-237-51-51-187 186-85-84-51 51 136 135Zm51 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                  </svg>
                  <b> Hyphoallergenic:</b> 100% natural, human friendly
                  ingredients
                </li>
                <li className="pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#434343"
                  >
                    <path d="m429-336 238-237-51-51-187 186-85-84-51 51 136 135Zm51 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                  </svg>
                  <b> Handmade:</b> All candles are craftly made with love.
                </li>
                <li className="pb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#434343"
                  >
                    <path d="m429-336 238-237-51-51-187 186-85-84-51 51 136 135Zm51 240q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480q0-80 30-149.5t82.5-122Q261-804 331-834t149-30q80 0 149.5 30t122 82.5Q804-699 834-629.5T864-480q0 79-30 149t-82.5 122.5Q699-156 629.5-126T480-96Zm0-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
                  </svg>
                  <b> Long burning:</b> No more waste. Created for last long.
                </li>
              </ul>
            </div>
            <div className="pt-0 pt-md-3 d-flex d-md-block justify-content-start justify-content-md-center">
              <Button color="primary" className="w-50 container-fluid">
                Learn more
              </Button>
            </div>
          </Col>
          <Col
            md="6"
            xs="12"
            className="order-md-2 order-1 image-col-candles-fragrances bg-white mt-5"
          >
            <img
              src={clean}
              alt="Aromatic candle images"
              className="image-candles-fragrances"
            />
          </Col>
        </Row>
      </Container>
    </CleanContainer>
  );
};

export default Clean;
