import PropTypes from 'prop-types';

const Section = ({ children, className }) => {
    return (
            <section className={className}>
                {children}
            </section>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
}

export default Section;
