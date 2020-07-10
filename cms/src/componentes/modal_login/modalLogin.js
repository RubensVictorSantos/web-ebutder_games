import React, { Component } from 'react';
import 'bootstrap';
import $ from 'jquery';
// import PropTypes from "prop-types";

const initialState = {
    usuario: { id_nivel: '', nome: '', email: '', senha: '' }
}


export class LoginCms extends Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    state = { ...initialState}

    handleChange(event) {

        const usuario = { ...this.state.usuario}

        usuario[event.target.name] = event.target.value;
        
        this.setState({ usuario });
    }

    handleSubmit(event) {
        event.preventDefault();

        const url = 'http://localhost:3333/login';
        const email = this.state.usuario.email
        const senha = this.state.usuario.senha

        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify({ "email": email, "senha": senha }),
            dataType: 'json',
            contentType: 'application/json',
            success: function (res) {

                alert()

                // this.props.history.push("/");

            },
            error: function (data) {

                alert("Error: " + data)
            }
        })

    }

    render() {
        return (
            <>
                <div className="modal fade " id="exampleModal" tabIndex={"-1"} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content bg-dark m-auto w-75">
                            <div className="modal-header border-0">
                                <h3 className="text-center text-white modal-title" style={{ fontFamily: "Algerian" }} id="exampleModalLabel">EBUTDER GAMES</h3>
                                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.handleSubmit} className="">
                                <div className="modal-body pb-0">
                                    <div className="form-group">
                                        <input value={this.state.usuario.email} onChange={this.handleChange} className="border-secondary form-control bg-dark text-white text-center" name="email" id="email" type="text" placeholder="Usuário" required />
                                    </div>

                                    <div className="form-group">
                                        <input value={this.state.usuario.senha} autoComplete={'on'} onChange={this.handleChange} className="border-secondary form-control bg-dark text-white text-center" name="senha" type="password" placeholder="Senha" required />

                                    </div>

                                    <div className="form-check text-center">
                                        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> <label htmlFor="blankCheckbox" className="text-secondary">Lembrar senha</label>
                                    </div>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="submit" className="btn btn-long btn-secondary btn-block text-dark" value="">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default LoginCms;