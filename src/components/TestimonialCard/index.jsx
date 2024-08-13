import PropTypes from 'prop-types';
import { Col, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import TestimonialStar from '../TestimonialStar';

const TestimonialCard = ({ testimonial }) => {
    return (
        <Col>
            <Card className="rounded-0 border-0 d-flex align-items-center">
                <img src={testimonial.image} alt="Image's testimonial"
                    className='object-fit-cover rounded-circle'
                    style={{ width: '5.25em', height: '5.25em' }} />
                <TestimonialStar rate={testimonial.rate}></TestimonialStar>
                <CardBody className='text-center d-flex flex-column'>
                    <CardTitle>{testimonial.title}</CardTitle>
                    <CardSubtitle>{testimonial.subtitle}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    );
}

TestimonialCard.propTypes = {
    testimonial: PropTypes.object.isRequired
}

export default TestimonialCard;


