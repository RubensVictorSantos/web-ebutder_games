import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import 'bootstrap';
import { Link } from 'react-router-dom';

import { Logo } from './style';
import LoginCms from '../modal_login/modalLogin'

export class Menu extends Component {

    constructor(props) {
        super(props)
    
        this.state={
            usuario: { id_nivel: '', nome: '', email: '', senha: '' }
        }
    
    }

    render() {
        return (
            <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="navbar-brand" to="#" style={{ fontFamily: "Algerian" }}>Ebutder</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">visitar site</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Quem somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Sobre</Link>
                        </li>
                        <li className="vav-item">
                            <h1>{this.state.usuario.nome}</h1>
                        </li>
                    </ul>
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#modalLogin">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                            <path fillRule={"evenodd"} d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fillRule={"evenodd"} d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                        </svg>
                    </button>
                </div>
            </nav>

            <LoginCms />
            </>
        )
    }
}

export class MenuCms extends Component {
    render() {
        return(
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