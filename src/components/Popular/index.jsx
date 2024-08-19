import { Button, Row } from 'reactstrap';
import { useState } from 'react';
import ProductsCard from "../ProductsCard";
import ProductsData from '../../db/ProductData';

const Popular = () => {
    const [showMore, setShowMore] = useState(false);
    const products = ProductsData;
    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section className="mx-4 my-5 text-center">
            <section className="mt-5">
                <h1 className="mt-5">Popular</h1>
                <p className='text-secondary'>Our top selling product that you may like</p>
            </section>
            <section className="">
                <Row xs="1" md="4" className="g-4 py-3">
                    {products.slice(0, 4).map((product, index) => (
                        <ProductsCard key={index} product={product} />
                    ))}
                </Row>
                
                <Row xs="1" md="4" className="g-4 d-md-none py-3">
                    {
                        products.slice(4, showMore ? products.length : 0).map((product, index) => (
                            <ProductsCard key={index} product={product} />
                        ))}
                </Row>

                {/* mobile version */}
                <div className="text-center mt-3 pb-3 d-md-none">
                    <Button color="primary" onClick={toggleShowMore} className="w-100">
                        {showMore ? 'See less' : 'See more'}
                    </Button>
                </div>
            </section>
        </section>
    );
};

export default Popular;