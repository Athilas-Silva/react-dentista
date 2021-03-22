import React from "react";
import EstruturaPagina from "../../componentes/EstruturaPagina";
import { Link } from "react-router-dom";
import "./estilo.css";

const Missao = () => {
    return(
        <EstruturaPagina>
            <div className="container">
                <h3 className="titulo-missao">Nossa Missão</h3>
            </div>

            <div className="container-texto">
                <p className="texto">
                        Realizar Tratamento Odontológico com qualidade e excelência ao alcance de todos. 
                        Com objetivo de proporcionar satisfação e felicidade aos nossos clientes, garantindo a saúde, 
                        bem estar e obedecendo aos rigorosos critérios de segurança. Comprometido e focado na transparência 
                        e honestidade nas relações, sempre entusiasmado para empreender na carreira odontológica, buscando 
                        constantemente o auto desenvolvimento.
                </p>

                <img className="equipe" src="assets/equipe.png" alt="Equipe de dentistas" title="Equipe de dentistas" />
                <p className="equipe-texto">Nossa equipe está preparada para forcer todo atendimento à você.</p>

                <div>
                    <Link to="/contato" className="btn-contato">Entrar em Contato</Link>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Missao;