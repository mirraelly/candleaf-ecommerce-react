import styled from "styled-components";

const ProductDetailsContainer = styled.main`
width: 100%;

.product-details-card {
     width: 18rem;
}

.image-box  {
    background-color: #F7F8FA;
    line-height: 1.101875em;
    letter-spacing: -0.57px;
    width: 100%;
    height: 300px;
    max-height: 300px;
}

.candle-image {
 filter: drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.2))
         drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.1));
}

.title-box {
    /* height: 150px; */
     height: 3.125em;
}

.products-price {
    font-size: 1.625em;
    font-weight: 600;
}

.selected-option  {
    border: 2px solid #E6E6E6;
    padding: 0.6em;
    border-radius: 0.4375em;
}

.form-check-label {
    padding-left: 12px;
}

.weeks-select-box {
    gap: 0.7em;
}

.weeks-select {
    border-color: #E7E7E7;
}
 `;

export default ProductDetailsContainer;