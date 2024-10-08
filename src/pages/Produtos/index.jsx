import './produtos.css';
import { Link } from 'react-router-dom'; // Para navegação

// Importação das imagens
import cabelo from '../../assets/img/cabelo.jpg';
import barba from '../../assets/img/barba.jpg';
import cabeloBarba from '../../assets/img/cabelo+barba.jpg';
import logoBranca from '../../assets/img/logoBranca.png';

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
                <img src={logoBranca} alt="Logo Barbearia Alura" className="footer-logo"/>
                <p className="copyright">&copy; Copyright Green Barber - 2024</p>
            </footer>
        </div>
    );
}

export default Produtos;
