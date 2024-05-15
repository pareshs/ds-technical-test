import PropTypes from 'prop-types';

function CardImage({ src, title }) {
    return (
        <div className="card-image">
            <img src={src} alt={title} className="img-fluid"></img>
        </div>
    );
}

CardImage.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
};

export default CardImage;
