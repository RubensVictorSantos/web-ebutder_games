import React, { Component } from 'react';
// ----------------------
import { LinkNav } from './styled';
import DropdownMenu from './dropdownMenu';

export class ItemNav extends Component {
    render() {

        let id = this.props.console.id_console;
        let nome = this.props.console.nome;
        var cor = '';

        switch (id) {
            case 1:
                cor = "#39ac46"

                break;
            case 2:
                cor = "#0052cc"

                break;
            case 3:
                cor = "#ff3333"

                break;

            default:
                cor = "black"

                break;
        }

        return ( 
            <li className="nav-item dropdown" >
                <LinkNav cor={cor} className="nav-link text-white dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {nome}
                </LinkNav>
                <DropdownMenu key={id} id_console={id} cor={cor} />
            </li>

        )
    }
}

export default ItemNav