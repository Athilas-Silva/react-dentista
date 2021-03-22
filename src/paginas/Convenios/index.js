import React from "react"
import EstruturaPagina from "../../componentes/EstruturaPagina";
import { Link } from "react-router-dom";
import "./estilo.css";

const Convenios = () => {
    return(
        <EstruturaPagina>
            <div className="parceiros-container">
                <div className="parceiros">
                    <h2 className="titulo-sessao">Veja os convenios <b>associados</b> com a gente</h2>

                    <ul className="lista-parceiros">
                        <li>
                            <img className="img-parceiro" src="assets/amil.png" alt="Amil Logo" title="Amil Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/bradesco.png" alt="Bradesco Logo" title="Bradesco Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/golden.png" alt="Golden Logo" title="Golden Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/notredame.png" alt="NotreDame Logo" title="NotreDame Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/odontoprev.jpg" alt="OdontoPrev Logo" title="OdontoPrev Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/porto-seguro.png" alt="Porto Seguro Logo" title="Porto Seguro Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/santander.png" alt="Santander Logo" title="Santander Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/sao-cristovao.png" alt="São Cristovão Logo" title="São Cristovão Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/sul-america.png" alt="Sul-América Logo" title="Sul-América Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/unimed.png" alt="Unimed Logo" title="Unimed Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/crown.jpg" alt="Crown Logo" title="Unimed Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/inpao.jpg" alt="Inpão Logo" title="Inpão Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/lis-dental.jpg" alt="LisDental Logo" title="LisDental Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/medial.png" alt="Medial Logo" title="Medial Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/metlife.png" alt="Metlife Logo" title="Metlife Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/odonto-empresas.jpg" alt="Odonto Empresas Logo" title="Odonto Empresas Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/oralclin.png" alt="Oral Clin Logo" title="Oral Clin Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/prodent.png" alt="Prodent Logo" title="Prodent Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/uni-saude.png" alt="UniSaúde Logo" title="UniSaúde Logo" />
                        </li>

                        <li>
                            <img className="img-parceiro" src="assets/uniodonto.png" alt="Uniodonto Logo" title="Uniodonto Logo" />
                        </li>
                    </ul>
                </div>

                <div>
                    <p><b>Dentre diversas outras parcerias!!</b></p>
                </div>

                <div>
                    <p><b>Entre em contato e marque sua consulta.</b></p>
                    <Link to="/contato" className="btn-contato">Entrar em Contato</Link>
                </div>
            </div>
        </EstruturaPagina>
    );
}

export default Convenios;