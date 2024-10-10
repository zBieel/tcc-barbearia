import './header.css';
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png';


function Header(){

    return(
           <header>
            <img src={logo} alt="Logo Green Barber" className='logo' />
            <Link to="/" className="nav">Home</Link>
            <Link to="/produtos" className="nav">Produtos</Link>
            <Link to="/Contato" className="nav">Contato</Link>
        </header>

    )

}

export default Header;

