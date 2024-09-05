import Logo from "../../../components/Logo";
import { ScrollRestoration } from "react-router-dom";
import PropTypes from 'prop-types';
import Nav from "../../components/Nav";
import SecondLayoutContainer from "./SecondLayoutContainer";

const LayoutSecondary = ({ children, className }) => {
    return (
        <SecondLayoutContainer >
            <ScrollRestoration />
            <Logo />
            < Nav />
            <main className={className}>{children}</main>
        </SecondLayoutContainer>
    );
};

LayoutSecondary.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default LayoutSecondary;
