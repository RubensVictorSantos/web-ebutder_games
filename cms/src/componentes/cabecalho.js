import React, {Component} from 'react';
import 'bootstrap';

export class Cabecalho extends Component {
    render(){
        return (
            <div className="d-flex flex-column w-75 bg-info " style={{height:"50px"}}>            
                <div className="d-flex justify-content-around w-100 text-white align-items-center bg-dark" style={{fontFamily: "Algerian", height: "100%"}}>
                    <h3>Sistema de gestão de conteúdos</h3>
                    
                </div>
            </div>
        )
    }
}