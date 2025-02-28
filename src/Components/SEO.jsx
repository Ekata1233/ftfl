import PropTypes from "prop-types";  // Import PropTypes
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

// Define prop types
SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SEO;
