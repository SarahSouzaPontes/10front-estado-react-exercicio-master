import './style.css';

function Card({ card, stateCards, setStateCards }) {
    return <img src={card.image} alt="card" />


}
export default Card;