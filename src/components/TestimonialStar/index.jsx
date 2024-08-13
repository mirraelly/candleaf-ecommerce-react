import TestimonialStarContainer from "./TestimonialStarContainer";
import PropTypes from 'prop-types';

const TestimonialStar = ({ rate }) => {
    const percentual = parseInt(rate / 5 * 100);

    return (
        <TestimonialStarContainer className="text-primary d-flex" style={{ '--percent': percentual }}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
        </TestimonialStarContainer>
    );
}

TestimonialStar.propTypes = {
    rate: PropTypes.number.isRequired,
}

export default TestimonialStar;