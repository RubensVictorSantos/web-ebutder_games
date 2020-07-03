import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'bootstrap';
import { Link } from 'react-router-dom';

import {Logo}  from './style';

export class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg w-100 top-0 position-fixed" style={{ minHeight: "8vh", backgroundColor: "#000" }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Logo className="navbar-brand" to="/cms" style={{ fontFamily: "Algerian", fontSize: "1.5rem" }}>
                    <scan className="text-logo">Ebutder</scan>
                    {/* <img src={{}} ></img> */}
                </Logo>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="adm-conteudo">Adm. Conteúdo <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="adm-cliente">Adm. Cadastro cliente <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="adm-produtos">Adm. Produtos <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="adm-usuarios">Adm. Usuários <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 justify-content-center">
                        <input className="form-control mr-sm-2 mr-left-0 border-top-0 border-left-0 border-right-0 rounded-0 text-light" style={{ backgroundColor: "#000" }} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn rounded-0 my-2 my-sm-0" style={{ backgroundColor: "#000" }} type="submit"><FaSearch></FaSearch></button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Menu