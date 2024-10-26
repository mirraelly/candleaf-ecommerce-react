import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import TestimonialCard from "../TestimonialCard";

const TestimonialsCarousel = ({ testimonials }) => {
  return (
    <Splide
      options={{
        type: "loop",
        padding: { left: 0, right: "3rem" },
        arrows: false,
        pagination: false,
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SplideSlide key={index}>
          <TestimonialCard testimonial={testimonial} />
        </SplideSlide>
      ))}
    </Splide>
  );
};

TestimonialsCarousel.propTypes = {
  testimonials: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default TestimonialsCarousel;
