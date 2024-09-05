import Logo from "../components/Logo";
import { ScrollRestoration } from "react-router-dom";
import PropTypes from 'prop-types';
import Layout2Container from "./Layout2container";

const LayoutSecondary = ({ children, className }) => {
    return (
        <Layout2Container >
            <ScrollRestoration />
            <Logo />
            <main className={className}>{children}</main>
        </Layout2Container>
    );
};

LayoutSecondary.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default LayoutSecondary;
