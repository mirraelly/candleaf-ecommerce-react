import styled from "styled-components";

const ProductsCardContainer = styled.div`

.products-card {
    --bs-card-bg: #F7F8FA;
    box-shadow: 0 0.25em 1.5em rgba(123, 123, 123, 0.15);
    line-height: 1.101875em;
    letter-spacing: -0.57px;
}

.title-products-card {
    font-size: 1em;
    color:   rgb(29 41 63);
    font-weight: 600;
}

.products-price {
    font-size: 1.0625em;
    font-weight: 500;
    font-family: 'roboto';
}

@media (max-width: 600px) {
img {
    object-position: center -2.8125em;
    object-fit: cover;
    transform: scale(1);
    height: 6em;
    width: 18em;
}
}

 `;

export default ProductsCardContainer;