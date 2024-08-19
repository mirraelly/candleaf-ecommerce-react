import TestimonialCard from "../TestimonialCard";
import luisa from '../../assets/images/testimonial_luisa.svg';
import edoardo from '../../assets/images/testimonial_edoardo.svg';
import mart from '../../assets/images/testimonial_mart.svg';
import { Row, Col } from 'reactstrap';
import TestimonialsCarousel from '../TestimonialCarousel';
import TestimonialsContainer from "./TestimonialsContainer";

const Testimonials = () => {

    const testimonials = [
        { image: luisa, rate: 4.1, title: '“I love it! No more air fresheners”', subtitle: 'Luisa' },
        { image: edoardo, rate: 5.0, title: '“Raccomended for everyone”', subtitle: 'Edoardo' },
        { image: mart, rate: 4.0, title: '“Looks very natural, the smell is awesome”', subtitle: 'Mart' }
    ]

    return (
        <TestimonialsContainer className="mb-5 py-4 text-center">
            <section className="mt-5">
                <h1 className="mt-5">Testimonials</h1>
                <p>Some quotes from our happy customers</p>
            </section>
            <section className="py-5 d-flex justify-content-center">
                <Row xs="1" md="4" className="g-4 d-none d-md-flex ">
                    {
                        testimonials.map((testimonial, index) => (
                            <Col key={index} md="4">
                                <TestimonialCard testimonial={testimonial} />
                            </Col>
                        ))}
                </Row>
                <div className="testimonials-carousel-mobile w-100 text-center mt-3 d-md-none">
                    <TestimonialsCarousel testimonials={testimonials} />
                </div>
            </section>
        </TestimonialsContainer>
    );
}

export default Testimonials;

