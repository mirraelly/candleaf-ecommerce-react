import PropTypes from "prop-types";
import { Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import TestimonialStar from "../TestimonialStar";
import TestimonialCardContainer from "./TestimonialCardContainer";

const TestimonialCard = ({ testimonial }) => {
  return (
    <TestimonialCardContainer>
      <Col className="mx-2">
        <Card
          className="rounded-0 border-0 d-flex align-items-center testimonial-card-style"
        >
          <img
            src={testimonial.image}
            alt="Image's testimonial"
            className="object-fit-cover rounded-circle"
          />
          <TestimonialStar rate={testimonial.rate}></TestimonialStar>
          <CardBody className="text-center d-flex flex-column">
            <CardTitle className="card-title">{testimonial.title}</CardTitle>
            <CardSubtitle className="card-subtitle">{testimonial.subtitle}</CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    </TestimonialCardContainer>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

export default TestimonialCard;
