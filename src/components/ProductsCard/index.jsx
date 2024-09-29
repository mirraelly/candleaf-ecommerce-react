import PropTypes from 'prop-types';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import ProductsCardContainer from './ProductsCardContainer';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    return (
        <ProductsCardContainer>
            <Col className=''>
                <Link to={`product/${product.id}`}>
                    <Card className='products-card border-0 rounded-0 my-2 my-md-3 mx-1'>
                        <div className='d-flex justify-content-center'>
                            <img src={product.image} alt="Image's product" />
                        </div>
                        <CardBody className='bg-white d-flex justify-content-between'>
                            <CardTitle className='pb-1 title-products-card'>{product.name}</CardTitle>
                            <CardText className=' d-flex align-items-end products-price text-primary'>{product.price}$</CardText>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
        </ProductsCardContainer>
    );
};

ProductsCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductsCard;