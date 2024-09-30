import styled from "styled-components";

const ShippingMethodContainer = styled.section`
  font-size: 0.875rem;
  letter-spacing: -0.6px;
  font-weight: 500;
  font-family: "Noto Sans", sans-serif;

  .text-font-size {
    font-size: 0.875rem;
    letter-spacing: -0.6px;
  }

  .row {
    margin-right: revert;
    margin-left: revert;
  }

  br.hide {
    display: none;
  }

  .color-grey {
    border-color: var(--bd-border-form-grey);
  }

  @media (max-width: 800px) {
    br.hide {
    display: block;
  }
  }
`;

export default ShippingMethodContainer;
