import React, { Component, Fragment } from 'react'
import $ from 'jquery';
import PropTypes from 'prop-types';

import CmsLogin from './login-cms/cms-login'

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    usuario: {
        id_login: '',
        nome: '',
        senha: '',
    },
}



class indexCMS extends Component {

    //STATE ESTÁ RECEBENDO OS ESTADOS INICIAIS
    state = { ...initialState }

    //PROPRIEDADES DO WITH ROUTER
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    async enviaFormulario() {

        const usuario = { ...this.state.usuario }

        const url = `localhost:3333/login`;

        const nome = this.state.usuario.nome;

        const senha = this.state.usuario.senha;

        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify({ "nome": nome, "password": senha }),
            dataType: 'json',
            contentType: "application/json",
            success: function (resposta) {

                if (resposta.error) {

                    console.log("Nome ou senha incorreto");
                    alert("Nome ou senha incorreto");
                } else {

                    // localStorage.setItem(TOKEN_KEY, resposta.token);

                    this.props.history.push("/cms");

                }


            }.bind(this),
            error: function (data) {

                console.log("Erro login");
                alert("Erro login");

            }
        });
    }


    render() {
        return (
            <Fragment>
                <nav className="navbar  navbar-expand-lg navbar-dark fixed-top bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="#" style={{ fontFamily: "Algerian" }}>Ebutder</a>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        {/* <!-- Button trigger modal --> */}
                        <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                                <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                            </svg>
                        </button>
                    </div>
                </nav>
                {/* <!-- Modal --> */}
                <CmsLogin/>
            </Fragment>
        )
    }
}

export default indexCMS