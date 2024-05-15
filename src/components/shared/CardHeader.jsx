import PropTypes from 'prop-types';

function CardHeader({ header }) {
    return <h2 className="card-header">{header}</h2>;
}

CardHeader.propTypes = {
    header: PropTypes.string,
};

export default CardHeader;
