import React from "react";
import EstruturaPagina from "../../componentes/EstruturaPagina";
import { Link } from "react-router-dom";
import "./estilo.css";
import Data from "./data.js";

const Agenda = () => {
    return(
        <EstruturaPagina>
            <div className="container">
                <div className="mes">
                    <div className="capa">
                        <h1>Março</h1>
                        <p>2021</p>
                    </div>

                </div>
            </div>

            <ul className="dia-semana">
                <li>Seg</li>
                <li>Ter</li>
                <li>Qua</li>
                <li>Qui</li>
                <li>Sex</li>
                <li>Sab</li>
                <li>Dom</li>
            </ul>

            <ul className="dia">  
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li><span className="ativo">22</span></li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
            </ul>

            <Data />

            <h3>Cadastre-se e agende sua consulta</h3>
            <div className="caixa">
                <form className="cadastro">

                    <p>Gênero: 
                        <input type="radio" id="homem" name="genero" value="homem" required/>
                        <label for="homem">Masculino</label>

                        <input type="radio" id="mulher" name="genero" value="mulher"/>
                        <label for="mulher">Feminino</label>
                    </p>

                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome Completo"></input><br/>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Informe seu Email"></input><br/>

                    <label for="data">Data:</label>
                    <input type="date" id="data" name="data"></input><br/>

                    <label for="ende">Endereço:</label>
                    <input type="text" id="ende" name="ende" placeholder="Informe seu Endereço"></input><br/>

                    <label for="cep">CEP:</label>
                    <input type="text" id="cep" name="cep" placeholder="Informe seu CEP"></input><br/>

                    <label for="rg">RG:</label>
                    <input type="text" id="rg" name="rg" placeholder="Digite seu RG"></input><br/>

                    <label for="cpf">CPF:</label>
                    <input type="text" id="cpf" name="cpf" placeholder="Digite seu CPF"></input><br/>
                </form>
            </div>
        </EstruturaPagina>
    );
}

export default Agenda;