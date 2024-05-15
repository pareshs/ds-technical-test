import PropTypes from 'prop-types';

function CardBody({ body }) {
    return (
        <div className="card-body">
            <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>
    );
}

CardBody.propTypes = {
    body: PropTypes.string,
};

export default CardBody;
