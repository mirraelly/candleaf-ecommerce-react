import PropTypes from "prop-types";

const Section = ({ children, className, id }) => {
  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
