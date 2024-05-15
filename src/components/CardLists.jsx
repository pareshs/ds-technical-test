import PropTypes from 'prop-types';
import { useState } from 'react';
import CardItem from './CardItem';

function CardLists({ cardData, handleCardActiveIndex }) {
    handleCardActiveIndex = (event, id) => {
        event.preventDefault();
        setCardActiveIndex(id);
    };

    const [cardActiveIndex, setCardActiveIndex] = useState(2);

    return (
        <div className="container">
            <div className="card-list">
                {cardData.map((item) => (
                    <CardItem
                        key={item.id}
                        cardItem={item}
                        isActive={cardActiveIndex === item.id}
                        handleCardBtnClick={handleCardActiveIndex}
                    />
                ))}
            </div>
        </div>
    );
}

CardLists.propTypes = {
    cardData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        })
    ),
    handleCardActiveIndex: PropTypes.func,
};

export default CardLists;
