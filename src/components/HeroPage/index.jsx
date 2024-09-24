import HeroPageContainer from "./HeroPageContainer";
import { Card, CardImg, CardImgOverlay } from "reactstrap";
import banner from "../../assets/images/section-1-bk.svg";
import HeroPageCard from "../HeroPageCard";

const HeroPage = () => {
  return (
    <HeroPageContainer>
      <Card inverse className="rounded-0 border-0">
        <CardImg
          alt="backdrop containing aromatic candles and plants"
          src={banner}
          width="100%"
          className="rounded-0 initial-page-image"
        />
        <CardImgOverlay>
          <HeroPageCard />
        </CardImgOverlay>
      </Card>
    </HeroPageContainer>
  );
};

export default HeroPage;
