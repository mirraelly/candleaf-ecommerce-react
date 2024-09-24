import styled from "styled-components";

const ProductsQuantityContainer = styled.div`
  width: 100%;
  margin: auto;

  .quantity-title {
    font-size: 1.125em;
    font-family: "roboto";
    font-weight: 400;
    line-height: 1.8em;
    text-align: center;
  }

  .quantity-box {
    width: 100%;
    z-index: 0;
  }

  .signa-button {
    width: 1em;
  }

  .input-group-sm > .btn,
  .input-group-sm > .form-control,
  .input-group-sm > .form-select,
  .input-group-sm > .input-group-text {
    padding: 0.1rem 0.2rem;
  }

  .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: calc(var(--bs-border-width) * 8);
  }

  .input-group-sm>.btn,
  .input-group-sm>.form-control {
    font-size: 1.2em;
  }

  @media screen and (max-width: 800px) {
    .input-group>:not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
    margin-left: auto;
  }
  }
`;

export default ProductsQuantityContainer;
