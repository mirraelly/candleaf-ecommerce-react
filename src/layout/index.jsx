import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import LayoutContainer from "./LayoutContainer";
import PropTypes from 'prop-types';

const Layout = ({ children, className }) => {
    return (
        <LayoutContainer className={className}>
            <ScrollRestoration />
            <Header />
            <main>{children}</main>
            <Footer />
        </LayoutContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Layout;
