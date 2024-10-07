import styled from "styled-components";

const PaymentFormsContainer = styled.section`
  font-size: 0.875rem;
  letter-spacing: -0.6px;
  font-weight: 500;
  font-family: "Noto Sans", sans-serif;

  .text-font-size,
  .link-edit {
    font-size: 0.875rem;
    letter-spacing: -0.6px;
  }

  .row {
    margin-right: revert;
    margin-left: revert;
  }

  .color-grey {
    border: 0.25px solid var(--bd-border-form-grey);
  }

  .input-font {
    font-size: 0.875rem;
    font-family: "Noto Sans", sans-serif;
    font-weight: 400;
  }

  input[type=text], 
  input[type=password],
  input[type=number] {
    min-height: 2.5rem;
    height: 2.5rem;
  }

  br.hide {
    display: none;
  }

  .credit-card-container {
    background: linear-gradient(
      to right,
      rgba(86, 178, 128, 20%),
      rgba(86, 178, 128, 40%)
    );
    min-height: 4em;
  }

  .text-credit-card {
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: -0.9px;
    align-items: center;
    margin: auto 0;
  }

  .gap-form {
    gap: 0.9em;
  }

  @include media-breakpoint-up(md) {
    border-radius: 0;
  }

  @media (max-width: 800px) {
    br.hide {
      display: block;
    }

    .pay-card-border {
      border: none;
    }
  }
`;

export default PaymentFormsContainer;
