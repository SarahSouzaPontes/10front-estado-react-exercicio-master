import './style.css';
import Logo from '../../assets/logo.svg';

function Sidebar() {
    return (
        <div className='sidebar'>
            <img src={Logo} alt="logo" />
            <button className='reset-button'>RESET</button>
        </div>
    )
}
export default Sidebar;