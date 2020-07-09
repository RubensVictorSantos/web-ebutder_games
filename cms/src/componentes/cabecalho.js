import React, {Component} from 'react';
import 'bootstrap';

export class Mainbody extends Component {
    render(){
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{Height:"100%", backgroundColor: "#0f0f0f"}}>
                <h3 className="text-white text-center font-weight-bold" style={{fontSize: "3rem"}}>Seja bem vido ao Sistema de gestão de conteúdos</h3>
            </div>
        )
    }
}

export default Mainbody;