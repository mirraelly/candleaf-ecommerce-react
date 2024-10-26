import styled from "styled-components";

const TestimonialStarContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgb(var(--bs-primary-rgb)) calc(var(--percent) * 1%),
    rgba(var(--bs-primary-rgb), 15%) calc(var(--percent) * 1.02%),
    rgba(var(--bs-primary-rgb), 10%) calc(var(--percent) * 1.08%),
    rgba(var(--bs-primary-rgb), 5%) calc(var(--percent) * 1.12%),
    white 100%
  );

  background-clip: text;
  width: min-content;
  color: transparent !important;
`;

export default TestimonialStarContainer;
