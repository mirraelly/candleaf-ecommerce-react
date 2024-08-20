import styled from "styled-components";

const ProductDetailsContainer = styled.main`
width: 100%;

.product-details-card {
     width: 18rem;
    /* padding: 1rem; */
    /* border-color: '#ccc' */
}

.image-box  {
    background-color: #F7F8FA;
    line-height: 1.101875em;
    letter-spacing: -0.57px;
}

.candle-image {
 /* box-shadow: 0 0.25em 1.5em rgba(123, 123, 123, 0.15); */
 /* filter: drop-shadow(5px 5px 5px  rgba(123, 123, 123, 0.767)); */
 filter: drop-shadow(10px 10px 8px rgba(0, 0, 0, 0.2))
         drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.1));
}

.products-price {
    font-size: 1.625em;
    font-weight: 600;
}

 `;

export default ProductDetailsContainer;