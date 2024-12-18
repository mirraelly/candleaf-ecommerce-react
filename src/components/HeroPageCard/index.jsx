// import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { CardTitle, CardText, Button } from "reactstrap";
import HeroPageCardContainer from "./HeroPageCardContainer";
import { useNavigate } from "react-router-dom";

const HeroPageCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("#discovery");
  };

  return (
    <HeroPageCardContainer className="text-dark text-center">
      <span className="emoji plant-emoji">🌱</span>
      <CardTitle tag="h1" className="title-heropage primary-1">
        The nature <br className="d-block d-md-none" /> candle
      </CardTitle>
      <CardText className="subtitle-heropage mb-4">
        All handmade with natural soy wax, Candleaf is a companion for all your
        pleasure moments
      </CardText>
      <Button color="primary" className="w-100 mt-md-3" onClick={handleClick}>
        Discovery our collection
      </Button>
    </HeroPageCardContainer>
  );
};

export default HeroPageCard;
