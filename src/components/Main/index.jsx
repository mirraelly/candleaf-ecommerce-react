import MainContainer from "./MainContainer";
import Section from "../Section";
import HeroPage from "../HeroPage";
import Products from "../Products";
import Clean from "../Clean";
import Testimonials from "../Testimonials";
import Popular from "../Popular";

const Main = () => {
  return (
    <MainContainer>
      <Section id="heading">
        <HeroPage />
      </Section>
      <Section className="container g-0 pt-1" id="discovery">
        <Products />
      </Section>
      <Section id="about">
        <Clean />
      </Section>
      <Section id="testimonials">
        <Testimonials />
      </Section>
      <Section className="container g-0" id="popular">
        <Popular />
      </Section>
    </MainContainer>
  );
};

export default Main;
