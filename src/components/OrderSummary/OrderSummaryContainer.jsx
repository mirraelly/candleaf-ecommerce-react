import styled from "styled-components";

const OrderSummaryContainer = styled.section`
width: 100%;

.accordion-button {
    background-color: #F2F2F2;
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
    background-color: #A8A8A8;
}

 `;

export default OrderSummaryContainer;