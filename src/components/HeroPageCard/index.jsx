// import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { CardTitle, CardText, Button } from 'reactstrap';
import HeroPageCardContainer from './HeroPageCardContainer';

const HeroPageCard = () => {
    return (
        <HeroPageCardContainer className='text-dark text-center' >
                <span style={{ fontSize: '2em' }} className='emoji'>
                    🌱
                </span>
                <CardTitle tag="h1">
                    The nature candle
                </CardTitle>
                <CardText>
                    All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments
                </CardText>
                <Button color='primary' className='w-100'>
                    Discovery our collection
                </Button>
        </HeroPageCardContainer>
    );
};

export default HeroPageCard;