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

  /* .custom-select {
  appearance: none; Remove o estilo padrão do select
  -webkit-appearance: none; Para navegadores baseados em WebKit
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3E%3Cpath fill="currentColor"d="M4 5h8a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position-x: calc(100% - 0.75rem);
  background-position-y: center;
  background-size: 16px 12px;
  padding-right: 2rem; Espaço para a seta
  border-bottom: 1px solid #ccc; Linha inferior
} */

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
    font-size: 0.8em;
    padding: 0.5rem 0.5rem;
  }

  /* .form-floating>.form-select {
    min-height: calc(2.1rem + calc(var(--bs-border-width) * 2));
    height: 0;
  } */

  input,
  select {
    font-size: 0.875em;
  }

  .span-text-input {
    vertical-align: text-top;
  }

  .form-check .form-check-input {
    float: unset;
  }


`;

export default OrderFormContainer;
