import './contato.css';
import logo from '../../assets/img/logo.png';

function Contato() {
    return (
        <div>
            <main>
                <div className="container">
                    <h1>Insira seus dados para contato!</h1>
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

                            <label className="checkbox">
                                <input type="checkbox" defaultChecked /> Gostaria de receber nossas novidades por email?
                            </label>

                            <input type="submit" value="Enviar formulário" className="enviar" />
                        </form>
                        <table>
                            <thead>
                                <tr>
                                    <th>Dia</th>
                                    <th>Horário</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Domingo</td>
                                    <td>Fechado</td>
                                </tr>
                                <tr>
                                    <td>Segunda</td>
                                    <td>8h - 20h</td>
                                </tr>
                                <tr>
                                    <td>Terça</td>
                                    <td>8h - 20h</td>
                                </tr>
                                <tr>
                                    <td>Quarta</td>
                                    <td>8h - 20h</td>
                                </tr>
                                <tr>
                                    <td>Quinta</td>
                                    <td>8h - 20h</td>
                                </tr>
                                <tr>
                                    <td>Sexta</td>
                                    <td>8h - 20h</td>
                                </tr>
                                <tr>
                                    <td>Sábado</td>
                                    <td>Fechado</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <footer>
                <img src={logo} alt="Logo Barbearia Alura" />
                <p className="copyright">&copy; Copyright Green Barber - 2024</p>
            </footer>
        </div>
    );
}

export default Contato;
