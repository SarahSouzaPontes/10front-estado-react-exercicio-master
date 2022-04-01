import './style.css';
import Logo from '../../assets/logo.svg';

function Sidebar({ setStateCards, cards }) {

    function handleReset() {
        cards.forEach((card) => {
            card.turned = false;

        });
        setStateCards(cards);

    }
    return (
        <div className='sidebar'>
            <img src={Logo} alt="logo" />
            <button className='reset-button'
                onClick={() => handleReset()}>RESET</button>
        </div >
    )
}
export default Sidebar;