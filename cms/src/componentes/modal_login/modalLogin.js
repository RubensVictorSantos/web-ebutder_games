import React, { Component } from 'react';
import 'bootstrap';
import $ from 'jquery';

const initialState = {
    usuario: { id_nivel: '', nome: '', email: '', senha: '' }
}

export class LoginCms extends Component {

    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);
        this.enviarFormulario = this.enviarFormulario.bind(this);

    }

    state = { ...initialState }

    handleChange(event) {

        const usuario = { ...this.state.usuario }

        usuario[event.target.name] = event.target.value;

        this.setState({ usuario });

    }

    async enviarFormulario(event) {
        event.preventDefault();

        const url = 'http://localhost:3333/login';
        const {senha, email} = this.state.usuario

        // verify(){

        // }

        $.ajax({
            url: url,
            type: 'post',
            data: JSON.stringify({ "email": email, "senha": senha }),
            header: 'x-access-token',
            dataType: 'json',
            contentType: 'application/json',
            success: (result) => { 

                const { usuario, token, auth} = result

                localStorage.setItem('usuario', JSON.stringify(usuario));
                localStorage.setItem('token', JSON.stringify(token));
                localStorage.setItem('auth', JSON.stringify(auth));

                $('#modalLogin').modal('hide')

            },
            error: ( status) =>{

                alert(status)

            }
        })

    }

    render() {
        const {senha, email} = this.state.usuario
        return (
            <>
                <div className="modal fade " id="modalLogin" tabIndex={"-1"} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content bg-dark m-auto w-75">
                            <div className="modal-header border-0">
                                <h3 className="text-center text-white modal-title" style={{ fontFamily: "Algerian" }} id="exampleModalLabel">EBUTDER GAMES</h3>
                                <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form onSubmit={this.enviarFormulario}>
                                <div className="modal-body pb-0">
                                    <div className="form-group">
                                        <input value={email} onChange={this.handleChange} className="border-secondary form-control bg-dark text-white text-center" name="email" id="email" type="email" placeholder="Usuário" required />
                                    </div>

                                    <div className="form-group">
                                        <input value={senha} onChange={this.handleChange} autoComplete={'on'} className="border-secondary form-control bg-dark text-white text-center" name="senha" type="password" placeholder="Senha" required />

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