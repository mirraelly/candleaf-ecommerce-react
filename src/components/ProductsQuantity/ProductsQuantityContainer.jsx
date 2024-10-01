import styled from "styled-components";

const ProductsQuantityContainer = styled.div`
  max-width: 4.5em;

  .quantity-title {
    font-size: 1.125em;
    font-family: "roboto";
    font-weight: 400;
    line-height: 1.3em;
    text-align: center;
  }

  .quantity-box {
    width: 100%;
    z-index: 0;
  }

  /* .signal-button {
    width: 1em;
  } */

  .input-group-sm > .btn,
  .input-group-sm > .form-control,
  .input-group-sm > .form-select,
  .input-group-sm > .input-group-text {
    padding: 0 0.5rem;
    min-height: 0;
  }

  .input-group-sm > .btn,
  .input-group-sm > .form-control {
    font-size: 1.3em;
  }

  @media screen and (max-width: 800px) {
     .ejMYRA .input-group-sm>.form-control {
      font-size: 1em;
    }

    .hfGDLx .input-group-sm > .btn,
    .hfGDLx .input-group-sm > .form-control,
    .hfGDLx .input-group-sm > .form-select,
    .hfGDLx .input-group-sm > .input-group-text {
      padding-left: 0 0.25rem;
    }
  }
`;

export default ProductsQuantityContainer;
