import PropTypes from 'prop-types';

function Btn({ children, version, href, id, handleCardBtnClick }) {
    return (
        <a
            href={href}
            className={`btn btn-${version}`}
            onClick={(event) => handleCardBtnClick(event, id)}
        >
            {children}
        </a>
    );
}

Btn.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    href: PropTypes.string,
    id: PropTypes.number,
    handleCardBtnClick: PropTypes.func,
};

export default Btn;
