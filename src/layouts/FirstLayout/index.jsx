import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ScrollRestoration } from "react-router-dom";
import PropTypes from 'prop-types';
import FirstLayoutContainer from '../FirstLayout/FirstLayoutContainer.jsx';

const Layout = ({ children, className }) => {
    return (
        <FirstLayoutContainer >
            <ScrollRestoration />
            <Header />
            <main className={className}>{children}</main>
            <Footer />
        </FirstLayoutContainer>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Layout;
