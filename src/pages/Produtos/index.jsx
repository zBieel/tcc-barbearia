import './produtos.css';
import { Link } from 'react-router-dom'; // Para navegação

// Importação das imagens
import logo from '../../assets/img/logo.png';
import cabelo from '../../assets/img/cabelo.jpg';
import barba from '../../assets/img/barba.jpg';
import cabeloBarba from '../../assets/img/cabelo+barba.jpg';
import logoBranco from '../../assets/img/logo-branco.png';

function Produtos() {
    return (
        <div>
            <main>
                <ul className="produtos">
                    <li>
                        <h2>Cabelo</h2>
                        <img src={cabelo} alt="Corte de cabelo" />
                        <p className="produto-descricao">Na tesoura ou máquina, como o cliente preferir.</p>
                        <p className="produto-preco">R$ 40,00</p>
                    </li>
                    <li>
                        <h2>Barba</h2>
                        <img src={barba} alt="Corte de barba" />
                        <p className="produto-descricao">Corte e desenho profissional de barba.</p>
                        <p className="produto-preco">R$ 30,00</p>
                    </li>
                    <li>
                        <h2>Cabelo + Barba</h2>
                        <img src={cabeloBarba} alt="Cabelo e Barba" />
                        <p className="produto-descricao">Pacote completo de cabelo e barba.</p>
                        <p className="produto-preco">R$ 65,00</p>
                    </li>
                </ul>
            </main>

            <footer>
                <img src={logoBranco} alt="Logo Barbearia Alura" />
                <p className="copyright">&copy; Copyright Barbearia Alura - 2023</p>
            </footer>
        </div>
    );
}

export default Produtos;
