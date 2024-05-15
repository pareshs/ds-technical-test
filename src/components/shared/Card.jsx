import PropTypes from 'prop-types';

function Card({ children, isActive }) {
    return (
        <div className={isActive ? 'card active' : 'card'}>
            <div className="card-border">
                <div className="card-inner">{children}</div>
            </div>
        </div>
    );
}

Card.propTypes = {
    isActive: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Card;
