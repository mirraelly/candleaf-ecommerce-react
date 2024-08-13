import PropTypes from 'prop-types';
import { Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const ProductsCard = ({ product }) => {
    return (
        <div>
            <Col>
                <Card className='products-card border-0'>
                    <img src={product.image} alt="Image's product" />
                    <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardText>{product.price}</CardText>
                    </CardBody>
                </Card>
            </Col>
        </div>
    );
};

ProductsCard.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductsCard;