
import ProductDetailsContainer from "./ProductDetailsContainer.jsx";

const ProductDetails = () => {
    return (
        <ProductDetailsContainer>
            <section>
                <h1>Spiced Mint Candleaf®</h1>
                <div className='d-flex justify-content-center'>
                    <img src={product.image} alt="Image's product" />
                </div>


            </section>

        </ProductDetailsContainer>
    );
};

export default ProductDetails;