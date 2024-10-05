import './header.css';
import { Link } from 'react-router-dom'

function Header(){

    return(
            <header>
                <a href="/" className="nav">Green Barber</a>
                <a href="/produtos" className="nav">Produtos</a>
                <a href="/Contato" className="nav">Contato</a>
            </header>

    )

}

export default Header;

