import MainContainer from "./MainContainer";
import Section from "../Section";
import HeroPage from "../HeroPage";
import Products from "../Products";
import Clean from "../Clean"
import Testimonials from "../Testimonials";
import Popular from "../Popular";

const Main = () => {
    return (
        <MainContainer>
            <Section>
                < HeroPage />
            </Section >
            <Section className='container g-0'>
                < Products />
            </Section>
            <Section>
                < Clean />
            </Section>
            <Section>
                < Testimonials />
            </Section>
            <Section className='container g-0'>
                < Popular />
            </Section>
        </MainContainer>
    );
};

export default Main;

