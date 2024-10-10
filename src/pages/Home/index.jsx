// src/pages/home/index.js

import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

// Importação das imagens
import banner from '../../assets/img/banner.jpg';
import utensilios from '../../assets/img/utensilios.jpg';
import beneficiosImg from '../../assets/img/beneficios.jpg';
import logoBranca from '../../assets/img/WhiteLogo.png';

function Home() {
    return (
        <div>
            <img id="banner" src={banner} alt="Banner da Green Barber" />

            <main>
                <section className="principal">
                    <h2 className="titulo-principal">Sobre a Green Barber</h2>

                    <img
                        className="utensilios"
                        src={utensilios}
                        alt="Utensílios de um barbeiro"
                    />

                    <p>
                        Localizada no coração da cidade a <strong>Green Barber</strong> traz para o 
                        mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Green Barber já é destaque na 
                        cidade e conquista novos clientes a cada dia.
                    </p> 

                    <p id="missao">
                        <em> Nossa missão é: <strong> "Proporcionar auto-estima e  
                        qualidade de vida aos clientes" </strong>. </em>
                    </p>

                    <p>
                        Oferecemos profissionais experientes e antenados às mudanças no mundo da moda.
                        O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.
                    </p> 
                </section>

                <section className="mapa">
                    <h3 className="titulo-principal">Nosso estabelecimento</h3>
                    <p>Nosso estabelecimento está localizado no coração da cidade.</p>

                    <div className="mapa-conteudo">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5623.754193392113!2d-46.86789395139295!3d-23.486315911733747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03ae023407f1%3A0x6b23cdec4ea861d4!2sGreen%20Valley%20Office%20Park!5e1!3m2!1spt-BR!2sbr!4v1678385781122!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Localização da Green Barber"
                        ></iframe>
                    </div>
                </section>

                <section className="beneficios">
                    <h3 className="titulo-principal">Benefícios</h3>

                    <div className="conteudo-beneficios">
                        <ul className="lista-beneficios">
                            <li className="itens">Atendimento aos Clientes</li>
                            <li className="itens">Espaço diferenciado</li>
                            <li className="itens">Localização</li>
                            <li className="itens">Profissionais Qualificados</li>
                            <li className="itens">Pontualidade</li>
                            <li className="itens">Limpeza</li>
                        </ul>
                        <img
                            src={beneficiosImg}
                            className="imagem-beneficios"
                            alt="Benefícios da Green Barber"
                        />
                    </div>

                    <div className="video">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/wcVVXUV0YUY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            </main>

            <footer>
                <img src={logoBranca} alt="Logo Barbearia Alura" />
                <p className="copyright">&copy; Copyright Green Barber - 2024</p>
            </footer>
        </div>
    );
}

export default Home;
