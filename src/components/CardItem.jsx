import PropTypes from 'prop-types';
import Card from './shared/Card';
import CardImage from './shared/CardImage';
import CardHeader from './shared/CardHeader';
import CardBody from './shared/CardBody';
import Btn from './shared/Btn';

function CardItem({ cardItem, handleCardBtnClick, isActive }) {
    return (
        <Card className="card" isActive={isActive}>
            <CardImage src={cardItem.image} title={cardItem.header} />
            <CardHeader header={cardItem.header} />
            <CardBody body={cardItem.body} />
            <Btn
                href="#"
                version="primary"
                id={cardItem.id}
                handleCardBtnClick={handleCardBtnClick}
            >
                Button {cardItem.id}
            </Btn>
        </Card>
    );
}

CardItem.propTypes = {
    cardItem: PropTypes.object,
    isActive: PropTypes.bool,
    handleCardBtnClick: PropTypes.func,
};

export default CardItem;
