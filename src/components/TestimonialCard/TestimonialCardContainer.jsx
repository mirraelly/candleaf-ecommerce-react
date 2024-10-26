import styled from "styled-components";

const TestimonialCardContainer = styled.div`
  .testimonial-card-style {
    width: 22em;
    padding: 1.5em;
  }

  .testimonial-card-style img {
    width: 5.25em;
    height: 5.25em;
  }

  .card-title {
    font-weight: 500;
    font-size: 1.375em;
  }

  .card-subtitutle {
    font-size: 1.125em;
    font-weight: 400;
  }

  @media screen and (max-width: 800px) {
    .testimonial-card-style {
      width: 18em;
      padding: 1em;
    }

    .card-title {
      font-family: "Poppins", sans-serif;
      font-size: 1.211875em;
      font-weight: 500;
    }
    .card-subtitutle {
      font-size: 0.99125em;
      font-weight: 400;
    }
  }
`;

export default TestimonialCardContainer;
