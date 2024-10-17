import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './contato.css';
import logoBranca from '../../assets/img/logoBranca.png';
import api from "../../services/api";

const Contato = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("users/cliente", {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        mensagem: data.mensagem,
        tipoUsuario: "Cliente", 
      });
      console.log(response.data);
      toast.success("Formulário enviado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao enviar o formulário. Tente novamente.");
    }
  };

  return (
    <div className="contato-page">
      <ToastContainer />
      <main>
        <h1>INSIRA SEUS DADOS PARA CONTATO</h1>
        <div className="container">
          <div className="form-horarios">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="nome">Nome e sobrenome</label>
              <input
                type="text"
                id="nome"
                className="input-padrao"
                {...register("nome", { required: "Nome é obrigatório." })}
                placeholder="Seu nome completo"
              />
              {errors.nome && <span className="error">{errors.nome.message}</span>}

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="input-padrao"
                {...register("email", {
                  required: "Email é obrigatório.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email inválido."
                  }
                })}
                placeholder="Seuemail@dominio.com"
              />
              {errors.email && <span className="error">{errors.email.message}</span>}

              <label htmlFor="telefone">Telefone</label>
              <input
                type="text"
                id="telefone"
                className="input-padrao"
                {...register("telefone", { required: "Telefone é obrigatório." })}
                placeholder="(XX) XXXXX-XXXX"
              />
              {errors.telefone && <span className="error">{errors.telefone.message}</span>}

              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                cols="56"
                rows="10"
                id="mensagem"
                className="input-padrao"
                {...register("mensagem", { required: "Mensagem é obrigatória." })}
                placeholder="..."
              />
              {errors.mensagem && <span className="error">{errors.mensagem.message}</span>}

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
};

export default Contato;
