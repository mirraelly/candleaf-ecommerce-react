import { ScrollRestoration } from "react-router-dom";
import PropTypes from "prop-types";
import SecondLayoutContainer from "./SecondLayoutContainer";
import SecondaryHeader from "../../components/SecondaryHeader";
import OrderSummary from "../../components/OrderSummary";

const LayoutSecondary = ({ children, className }) => {
  return (
    <SecondLayoutContainer>
      <ScrollRestoration />
      <SecondaryHeader className="g-0" />
      <div className="row gx-0 second-layout-main">
        <section className={`${className} col-12 col-md-6`}>
          {children}
        </section>
        <OrderSummary className="d-md-block d-none col-md-6" />
      </div>
    </SecondLayoutContainer>
  );
};

LayoutSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default LayoutSecondary;
