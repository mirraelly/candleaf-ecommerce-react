import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import LayoutContainer from "./LayoutContainer";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <ScrollRestoration />
            <Header />
            <main>{children}</main>
            <Footer />
        </LayoutContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;
