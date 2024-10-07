import styled from "styled-components";

const OrderFormContainer = styled.section`
  /* width: 100%; */

  .form-control,
  .form-select {
    border-radius: initial;
    /* border-color: #898989; */
  }

  .green-border {
    border-color: rgb(var(--bs-primary-rgb));
  }

  .color-grey {
    border: 0.25px solid var(--bd-border-form-grey);
  }

  .form-title {
    font-family: "Roboto", sans-serif;
    letter-spacing: -0.9px;
    font-weight: 500;
    font-size: 1.25em;
  }

  .text-p-font-size {
    font-size: 0.875em;
    font-family: "Roboto", sans-serif;
  }

  .form-floating > label {
    font-size: 0.625rem;
    padding: 0.9rem 0.5rem;
  }

  .form-floating>.form-select~label::after {
    background-color: transparent;
  }

  .form-floating>.form-select {
    min-height: 2.5rem;
    height: 2.5rem;
    padding-top: 0.375rem;
    padding-bottom: 0;
  }

  input,
  select {
    font-size: 0.875em;
  }

  input[type=text] {
    min-height: 2.5rem;
    height: 2.5rem;
  }


  .span-text-input {
    vertical-align: text-top;
  }

  .form-check .form-check-input {
    float: unset;
  }


`;

export default OrderFormContainer;
