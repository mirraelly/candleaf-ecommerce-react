import ProductsCard from "../ProductsCard";
import { useState } from 'react';
import { Button, Row } from 'reactstrap';
import ProductsData from "../../db/ProductData";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const products = ProductsData;

    return (
        <ProductsContainer className="mx-4 my-5 text-center py-1">
            <section className="mt-5">
                <h1 className="mt-5 primary-2">Products</h1>
                <p className="text-muted my-2 subtitle-products text-secondary">Order it for you or for your beloved ones</p>
            </section>
            <section className="my-5">
                <Row xs="1" md="4" className="g-4">
                    {products.slice(0, showMore ? products.length : 4).map((product, index) => (
                        <ProductsCard key={index} product={product} />
                    ))}
                </Row>
                <Row xs="1" md="4" className="g-4 d-none d-md-flex">
                    {
                        products.slice(-4).map((product, index) => (
                            <ProductsCard key={index} product={product} />
                        ))}
                </Row>

                {/* mobile version */}
                <div className="text-center mt-3 d-md-none">
                    <Button color="primary" onClick={toggleShowMore} className="w-100">
                        {showMore ? 'See less' : 'See more'}
                    </Button>
                </div>
            </section>
       </ProductsContainer>
    );
};

export default Products;
