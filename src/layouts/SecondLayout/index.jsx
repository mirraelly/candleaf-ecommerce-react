import { ScrollRestoration } from "react-router-dom";
import PropTypes from 'prop-types';
import SecondLayoutContainer from "./SecondLayoutContainer";
import SecondaryHeader from "../../components/SecondaryHeader";

const LayoutSecondary = ({ children, className }) => {
    return (
        <SecondLayoutContainer>
            <ScrollRestoration />
            <SecondaryHeader className="g-0"/>
            <main className={`${className} second-layout-main`}>{children}</main>
        </SecondLayoutContainer>
    );
};

LayoutSecondary.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default LayoutSecondary;
