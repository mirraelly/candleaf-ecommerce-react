import Logo from "../Logo";
import Nav from "../Nav";
import SecondaryHeaderContainer from "./SecondaryHeaderContainer";
import OrderSummaryAccordion from "../OrderSummaryAccordion";

const SecondaryHeader = () => {
  return (
    <SecondaryHeaderContainer>
      <Logo />
      <OrderSummaryAccordion className="d-md-none mb-3" />
      <Nav />
    </SecondaryHeaderContainer>
  );
};

export default SecondaryHeader;
