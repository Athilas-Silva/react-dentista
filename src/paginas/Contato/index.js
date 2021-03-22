import React from "react";
import EstruturaPagina from "../../componentes/EstruturaPagina";
import Mapa from "../../componentes/Mapa";
import "./estilo.css"

const Contato = () => {
    return(
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-dentistas">
                    <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>
                    <p>Agende uma consulta pelo telefone: (11) 11111-2222</p>

                    <ul className="lista-medicos">
                        <li>
                            <img className="img-aparelho" src="assets/medico01.png" alt="Foto do Dr. Hélio" title="|Foto do Dr. Hélio" />
                            <p>Dr. Hélio</p>
                            <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                        </li>

                        <li>
                            <img className="img-aparelho" src="assets/medico02.png" alt="Foto do Dr. Carlos" title="|Foto do Dr. Carlos" />
                            <p>Dr. Carlos</p>
                            <p>Terças e Quintas as 13:00 às 18:00</p>
                        </li>

                        <li>
                            <img className="img-aparelho" src="assets/medico03.png" alt="Foto do Dra. Suzana" title="|Foto do Dra. Suzana" />
                            <p>Dr. Suzana</p>
                            <p>Terças, Quintas e Sabádos das 08:00 as 12:00</p>
                        </li>
                    </ul>
                </div>

                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos <b>localizados</b>?</h2>
                    <p>R. Bento Branco de Andrade Filho, 379 - São Paulo - SP. CEP: 04757-000</p>
                    <Mapa />
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Contato;