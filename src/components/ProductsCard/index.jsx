import PropTypes from 'prop-types';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import ProductsCardContainer from './ProductsCardContainer';

const ProductsCard = ({ product }) => {
    return (
        <ProductsCardContainer>
            <Col className=''>
                <Card className='products-card border-0 my-3 mx-1'>
                        <img src={product.image} alt="Image's product" />
                    <CardBody className='bg-white d-flex justify-content-between'>
                        <CardTitle className='pb-1 title-products-card'>{product.name}</CardTitle>
                        <CardText className=' d-flex align-items-end products-price'>{product.price}$</CardText>
                    </CardBody>
                </Card>
            </Col>
        </ProductsCardContainer>
    );
};

ProductsCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductsCard;