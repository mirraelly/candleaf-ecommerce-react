import styled from "styled-components";

const OrderSummaryContainer = styled.section`
  /* max-height: 51.25em; */

  .rigth-order-summary-section,
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

  .text-16 {
    font-size: 1em;
    font-weight: 500;
    letter-spacing: -0.9px;
  }

  .price {
    font-size: 1.3125em;
    font-weight: 600;
    letter-spacing: -0.9px;
    line-height: 2.5em;
  }

  .lg-price {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500; 
    font-size: 1.5em;
    letter-spacing: -0.9px;
    color: black;
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
    background-color: #a8a8a8e1;
  }

  .image-box {
    background-color: #f7f8fa;
  }

.add-button {
    font-size: 1em;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: 0px;
    padding: 0.47em 1.3em;
}

.third-block {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500; 
    font-size: 0.875em;
    letter-spacing: -0.9px;
    color: #616161;
}


`;

export default OrderSummaryContainer;
