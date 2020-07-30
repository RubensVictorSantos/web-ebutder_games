import React, { Component } from 'react';
// ----------------------
import { LinkNav } from './styled';

export class DropdownItem extends Component {
    render() {

        let cor = this.props.cor
        let nome = this.props.consoleVariante.nome;

        return (
        <LinkNav  cor={cor} className="dropdown-item text-white" to='#'>{nome}</LinkNav> 
        )
    }
}

export default DropdownItem