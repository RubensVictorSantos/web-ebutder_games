import React, { Component } from 'react';
// ----------------------
import { LinkNav } from './styled';

export class DropdownItem extends Component {
    render() {

        switch (this.props.cor.id) {
            case 1:
                this.props.cor.cor = "#2d8637";

                break;
            case 2:
                this.props.cor.cor = "#003d99";

                break;
            case 3:
                this.props.cor.cor = "#cc0000";

                break;

            default:
                this.props.cor.cor = "black";

                break;
        }

        const cor = this.props.cor
        const nome = this.props.consoleVariante.nome;

        return (
        <LinkNav  cor={cor.cor} className="dropdown-item text-white" to="#">{nome}</LinkNav> 
        )
    }
}

export default DropdownItem