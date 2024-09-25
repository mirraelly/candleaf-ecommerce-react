import styled from "styled-components";

const OrderSummaryAccordionContainer = styled.section`
  width: 100%;

  .accordion-item,
  .table > :not(caption) > * > * {
    background-color: #f2f2f2;
  }

  .accordion-item:first-of-type {
    border-radius: initial;
  }

  .accordion-header {
    padding: 0.4em 0;
  }

  .accordion-button:focus {
    box-shadow: none;
  }

  table tr {
    border-color: rgba(86, 178, 128, 0.2);
  }

  .accordion-button {
    background-color: #f2f2f2;
    display: flex;
    justify-content: space-between;
  }

  .accordion-button::after {
    display: none;
  }

  .accordion-expander {
    transition: var(--bs-accordion-btn-icon-transition);
  }

  .accordion-expander:not(.collapsed) {
    transform: var(--bs-accordion-btn-icon-transform);
  }

  .form-control {
    border-radius: initial;
  }

  .form-control,
  .btn {
    border-color: #898989;
  }

  .btn-secondary {
    background-color: #a8a8a8;
  }

  .image-box {
    background-color: #f7f8fa;
  }

  @media screen and (max-width: 800px) {
    .accordion {
      --bs-accordion-btn-padding-x: 0;
    }
  }
`;

export default OrderSummaryAccordionContainer;
