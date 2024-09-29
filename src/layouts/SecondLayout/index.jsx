import { ScrollRestoration } from "react-router-dom";
import PropTypes from "prop-types";
import SecondLayoutContainer from "./SecondLayoutContainer";
import SecondaryHeader from "../../components/SecondaryHeader";
import OrderSummary from "../../components/OrderSummary";
import { Col, Row } from "reactstrap";

const LayoutSecondary = ({ children, className }) => {
  return (
    <SecondLayoutContainer>
      <ScrollRestoration />
      <Row className="d-flex gx-0">
        <Col className="left-secondlayout">
          <SecondaryHeader className="g-0" />
          <div className="row gx-0 second-layout-main">
            <section className={`${className} col-6 col-md-12`}>
              {children}
            </section>
          </div>
        </Col>
        <OrderSummary className="d-md-block d-none col-md-6 color rigth-secondlayout" />
      </Row>
    </SecondLayoutContainer>
  );
};

LayoutSecondary.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default LayoutSecondary;
