import styled from "styled-components";

const ProductDetailsContainer = styled.main`
  width: 100%;

  .product-details-card {
    width: 20rem;
    font-size: 0.9375em;
  }

  .image-box {
    background-color: #f7f8fa;
    line-height: 1.101875em;
    letter-spacing: -0.57px;
    max-width: 33.75em;
    min-height: 27.06em;
  }

  .candle-image {
    filter: drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.2))
      drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.1));
    transform: scale(1.9);
    overflow: visible;
    object-position: 0px 57px;
  }

  .title-box {
    /* height: 150px; */
    min-height: 3.125em;
  }

  .products-price {
    font-size: 1.625em;
    font-weight: 600;
  }

  .selected-option {
    border: 2px solid #e6e6e6;
    border-radius: 0.4375em;
  }

  .option {
    border: 2px solid transparent;
    border-radius: 0.4375em;
  }

  .form-check-label {
    padding-left: 12px;
  }

  .weeks-select-box {
    gap: 0.3em;
  }

  .weeks-select {
    border-color: #e7e7e7;
    max-width: 5.5rem;
    max-height: 1.4rem;
    font-size: 0.875rem;
  }

  .card {
    --bs-card-spacer-y: 0;
    --bs-card-spacer-x: 0;
  }

  .free-shipping-text p {
    font-size: 1.37em;
    font-weight: 500;
  }

  @media screen and (max-width: 800px) {
    .image-box {
      max-width: 21.625em;
      min-height: 17.31em;
    }

    .candle-image {
      transform: scale(1.2);
      overflow: visible;
      object-position: 0px 40px;
    }

    .div-divider-quantity-value {
      gap: 7em;
    }
  }
`;

export default ProductDetailsContainer;
