import React, { Component } from 'react';
import 'bootstrap';
import $ from 'jquery';
import PropTypes from 'prop-types';

//ARMAZENA OS ESTADOS INICIAIS
const initialState = {
    usuario: {
        email: '',
        senha: ''
    },
}

export class CmsLogin extends Component {

    //STATE ESTÁ RECEBENDO OS ESTADOS INICIAIS
    state = { ...initialState }

    //PROPRIEDADES DO WITH ROUTER
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    async enviaFormulario(e) {

        const usuario = { ...this.state.usuario }

        const url = `http://localhost:3333/login`;

        const email = this.state.usuario.email;

        const senha = this.state.usuario.senha;

        alert(
            "usuario: " + usuario.email + "\n"
            + "url: " + url + "\n"
            + "email: " + typeof (this.state.usuario.email) + "\n"
            + "senha: " + typeof (this.state.usuario.senha) + "\n"
        );

        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify({ "email": email, "senha": senha }),
            dataType: 'json',
            // contentType: "application/json",
            success: function (resposta) {

                if (resposta.error) {

                    alert("Nome ou senha incorreto");
                } else {

                    // localStorage.setItem(TOKEN_KEY, resposta.token);

                    this.props.history.push("/cms");
                    alert(resposta)
                }


            }.bind(this),
            error: function (data) {

                alert(data);

            }
        });

        e.preventDefault();
    }


    render() {
        return (
            <>
                <div className="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content bg-dark m-auto w-75">
                            <div className="modal-header border-0">
                                <h3 className="text-center text-white modal-title" style={{ fontFamily: "Algerian" }} id="exampleModalLabel">EBUTDER GAMES</h3>
                                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form className="">
                                <div className="modal-body pb-0">
                                    <div className="form-group">
                                        <input className="border-secondary form-control bg-dark text-white text-center" value={this.state.usuario.email} type="text" placeholder="Usuário" required />
                                    </div>

                                    <div className="form-group">
                                        <input className="border-secondary form-control bg-dark text-white text-center" value={this.state.usuario.senha} type="password" placeholder="Senha" required />

                                    </div>

                                    <div className="form-check text-center">
                                        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." /> <label for="blankCheckbox" className="text-secondary">Lembrar senha</label>
                                    </div>
                                </div>
                                <div className="modal-footer border-0">
                                    <button type="submit" onClick={e => this.enviaFormulario(e)} className="btn btn-long btn-secondary btn-block text-dark" value="">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}


export default CmsLogin