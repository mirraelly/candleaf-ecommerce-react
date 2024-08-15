import ProductsCard from "../ProductsCard";
import { useState } from 'react';
import { Button, Row } from 'reactstrap';
import productOne from '../../assets/images/products-spiced-mint.svg';
import sweetStraweberry from "../../assets/images/products-sweet-straweberry.svg"
import coolBlueberries from "../../assets/images/products-cool-blueberries.svg"
import juicyLemon from "../../assets/images/products-juicy-lemon.svg"
import productName from "../../assets/images/products-product-name.svg"
import fragrantCinnamon from "../../assets/images/products-fragrant-cinnamon.svg"
import summerCherries from "../../assets/images/products-summer-cherries.svg"
import cleanLavander from "../../assets/images/products-clean-lavander.svg"
import ProductsContainer from "./ProductsContainer";

const Products = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const products = [
        { name: 'Spiced Mint', image: productOne, price: 9.99 },
        { name: 'Sweet Straweberry', image: sweetStraweberry, price: 9.99 },
        { name: 'Cool Blueberries', image: coolBlueberries, price: 9.99 },
        { name: 'Juicy Lemon', image: juicyLemon, price: 9.99 },
        { name: 'Product Name', image: productName, price: 9.99 },
        { name: 'Fragrant Cinnamon', image: fragrantCinnamon, price: 9.99 },
        { name: 'Summer Cherries', image: summerCherries, price: 9.99 },
        { name: 'Clean Lavander', image: cleanLavander, price: 9.99 }
    ];

    return (
        <ProductsContainer className="mx-4 my-5 text-center">
            <section className="mt-5">
                <h1 className="mt-5 primary-2">Products</h1>
                <p className="text-muted my-2 mx-2 subtitle-products">Order it for you or for your beloved ones</p>
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
