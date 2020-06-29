import React, {Component} from 'react';
import {BsSearch} from 'react-icons/bs';
import 'bootstrap';
import { Link } from 'react-router-dom';

export class Menu extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark w-100" style={{height: "50px", position: "sticky", top: 0}}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/cms" style={{fontFamily: "Algerian", fontSize:"1.5rem"}}>Ebutder</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Adm. Conteúdo <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Adm. Fale Conosco <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Adm. Produtos <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Adm. Usuários <span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0 justify-content-center">
                    <input className="form-control mr-sm-2 mr-left-0 bg-dark border-top-0 border-left-0 border-right-0 rounded-0 text-light" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-dark rounded-0 my-2 my-sm-0" type="submit"><BsSearch/></button>
                </form>
                </div>
            </nav>
        )
    }
}