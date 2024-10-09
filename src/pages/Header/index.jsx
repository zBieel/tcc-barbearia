import './header.css';
import { Link } from 'react-router-dom'

function Header(){

    return(
           <header>
            <Link to="/" className="nav">
                <img src="/images/logoo.png" alt="Logo Green Barber" />
            </Link>
            <Link to="/produtos" className="nav">Produtos</Link>
            <Link to="/Contato" className="nav">Contato</Link>
        </header>

    )

}

export default Header;

