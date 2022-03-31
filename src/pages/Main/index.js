import './style.css';
import Logo from '../../assets/logo.svg';
import Sidebar from '../../componentes/Sidebar';
import Card from '../../componentes/Cards';
import cards from '../../cards'

function Main() {
  const [stateCards, setStateCards] = useState([cards]);
  return (
    <div className="container">
      <Sidebar />
      <div className='container-main'>
        {stateCards.map((card) => (
          <div className='container-cards'>
            <Card key={card.id} card={card}
              stateCards={stateCards}
              setStateCards={setStateCards} />
        ))}
          </div>
    </div>
    </div>

  );
}

export default Main;
