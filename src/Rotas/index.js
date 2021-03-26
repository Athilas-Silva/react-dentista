import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "../paginas/Home";
import Contato from "../paginas/Contato";
import Convenios from "../paginas/Convenios";
import Agenda from "../paginas/Agenda";
import Missao from "../paginas/Missao";

const Rotas = () => (
    <HashRouter>
            <Route exact path="/" component={ Home } />
            <Route exact path="/contato" component={ Contato } />
            <Route exact path="/convenios" component={ Convenios } />
            <Route exact path="/agenda" component={ Agenda } />
            <Route exact path="/missao" component={ Missao } />
    </HashRouter>
);

export default Rotas;