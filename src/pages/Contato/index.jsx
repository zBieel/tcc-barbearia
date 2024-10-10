import './contato.css';
import logo from '../../assets/img/logo.png';
import logoBranca from '../../assets/img/logoBranca.png';

function Contato() {
    return (
        <div className="contato-page">
            <main>
            <h1>INSIRA SEUS DADOS PARA CONTATO</h1>
                <div className="container">
                    
                    <div className="form-horarios">
                        <form>
                            <label htmlFor="nomesobrenome">Nome e sobrenome</label>
                            <input type="text" id="nomesobrenome" className="input-padrao" required placeholder="Seu nome completo" />

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" className="input-padrao" required placeholder="Seuemail@dominio.com" />

                            <label htmlFor="telefone">Telefone</label>
                            <input type="tel" id="telefone" className="input-padrao" required placeholder="(XX) XXXXX-XXXX" />

                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea cols="56" rows="10" id="mensagem" className="input-padrao" required placeholder="..."></textarea>

                    

                            <input type="submit" value="Enviar formulário" className="enviar" />
                        </form>
                       
                    </div>
                </div>
            </main>

            <footer>
                <img src={logoBranca} alt="Logo Barbearia Alura" className="footer-logo"/>
                <p className="copyright">&copy; Copyright Green Barber - 2024</p>
            </footer>
        </div>
    );
}

export default Contato;
