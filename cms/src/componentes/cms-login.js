import React, {Component} from 'react';
import 'bootstrap';

export class CmsLogin extends Component {
    render(){
        return (
            <div className=" d-flex align-items-center justify-content-center w-50">
                <div className="d-block shadow-lg p-4 position-fixed justify-content-center bg-dark rounded" style={{width:"400px", height:"310px"}}>
                    <form className="w-100">
                        <div className="d-flex justify-content-center" style={{fontFamily: "Algerian"}}>
                            <h1 className="text-center text-white">EBUTDER GAMES</h1>
                        </div>

                        <input class="form-control mb-3 text-center" type="text" placeholder="Usuário" required/>

                        <input class="form-control mb-3 text-center" type="password" placeholder="Senha" required/>

                        <div className="form-check mb-3 text-center">
                            <input class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/> <label for="blankCheckbox" className="text-light">Lembrar senha</label>
                        </div>
                        <button className="btn btn-long btn-secondary btn-block" value="Enviar"></button>
                    </form>
                </div>
            </div>
        )
    }
}