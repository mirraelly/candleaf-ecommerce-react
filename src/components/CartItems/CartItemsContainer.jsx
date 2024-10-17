import styled from "styled-components";

const CartItemsContainer = styled.section`
  .image-box {
    max-width: 10em;
    max-height: 8.125em;
  }

  .show-product {
    text-align: center;
  }

  .cards-carts-images {
    background-color: #f7f8fa;
  }

  .products-quantity-cart-page {
    width: 7.5em;
  }

  .cart-items-quality-divisor-col {
    gap: 4.8rem;
  }

  .ftieWq .input-group-sm > .btn,
  .ftieWq .input-group-sm > .form-control,
  .ftieWq .input-group-sm > .form-select,
  .ftieWq .input-group-sm > .input-group-text {
    padding: 0.15rem;
    margin-left: auto;
    margin-right: auto;
  }

  .ftieWq .input-group-sm > .btn,
  .ftieWq .input-group-sm > .form-control {
    font-size: 1.3em;
  }

  .eCScRG .quantity-box {
    z-index: 2;
  }

  .form-control {
    line-height: 1.5;
  }

  .text-total,
  .text-sub-total {
      letter-spacing: -0.9px;
      font-size: 1.125rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
  }

  @media screen and (max-width: 800px) {
    .image-box {
      min-width: 5.84625em;
      min-height: 4.384375em;
    }

    .products-quantity-cart-page {
        width: unset;
    }

    .text-sub-total {
      font-size: 1.25em;
    }

    .text-p {
      font-size: 1em;
      letter-spacing: -0.9px;
      font-weight: 400; 
    }
  }
`;

export default CartItemsContainer;
